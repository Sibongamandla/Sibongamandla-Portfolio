import { useEffect, useRef } from "react";

interface HolographicSphereProps {
  isGenerating?: boolean;
}

export function HolographicSphere({ isGenerating = false }: HolographicSphereProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = canvas.parentElement?.clientWidth || window.innerWidth;
    let height = canvas.parentElement?.clientHeight || window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const numPoints = 800; // Fixed number of points
    const points: any[] = [];
    let baseRadius = 130; // Fixed radius to prevent stretching
    
    // Generate uniform points on a sphere
    for (let i = 0; i < numPoints; i++) {
        const theta = Math.acos(1 - (2 * i) / numPoints);
        const phi = Math.PI * (1 + Math.sqrt(5)) * i;
        points.push({
            baseX: Math.sin(theta) * Math.cos(phi),
            baseY: Math.sin(theta) * Math.sin(phi),
            baseZ: Math.cos(theta),
        });
    }

    let rotX = -0.1;
    let rotY = 0;
    let velX = 0;
    let velY = 0;
    let isMouseDown = false;
    let animationTime = 0;
    let animFrameId: number;
    let lastX = 0;
    let lastY = 0;

    const onMouseDown = (e: Event) => {
        const mouseEvent = e as MouseEvent;
        // Don't drag if clicking on a button or input or text
        const target = mouseEvent.target as HTMLElement;
        if (target.tagName === 'INPUT' || target.tagName === 'BUTTON' || target.closest('.bg-white\\/80')) return;
        
        isMouseDown = true;
        lastX = mouseEvent.clientX;
        lastY = mouseEvent.clientY;
        velX = 0;
        velY = 0;
    };

    const onMouseMove = (e: Event) => {
        const mouseEvent = e as MouseEvent;
        if (isMouseDown) {
            const dx = mouseEvent.clientX - lastX;
            const dy = mouseEvent.clientY - lastY;
            velY = dx * 0.005;
            velX = dy * 0.005;
            rotY -= velY * 0.5;
            rotX -= velX * 0.5;
            lastX = mouseEvent.clientX;
            lastY = mouseEvent.clientY;
        }
    };

    const onTouchStart = (e: Event) => {
        const touchEvent = e as TouchEvent;
        const target = touchEvent.target as HTMLElement;
        if (target.tagName === 'INPUT' || target.tagName === 'BUTTON' || target.closest('.bg-white\\/80')) return;

        isMouseDown = true;
        lastX = touchEvent.touches[0].clientX;
        lastY = touchEvent.touches[0].clientY;
        velX = 0;
        velY = 0;
    };

    const onTouchMove = (e: Event) => {
        const touchEvent = e as TouchEvent;
        if (isMouseDown) {
            const x = touchEvent.touches[0].clientX;
            const y = touchEvent.touches[0].clientY;
            const dx = x - lastX;
            const dy = y - lastY;
            velY = dx * 0.005;
            velX = dy * 0.005;
            rotY -= velY * 0.5;
            rotX -= velX * 0.5;
            lastX = x;
            lastY = y;
            // Only prevent default if we're dragging the sphere to avoid breaking chat scroll when not dragging sphere
            // e.preventDefault(); 
        }
    };

    const handleResize = () => {
        width = canvas.parentElement?.clientWidth || window.innerWidth;
        height = canvas.parentElement?.clientHeight || window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    };

    const chatbot = canvas.closest('.chatbot-container') as HTMLElement;
    const interactElement = chatbot || window;

    window.addEventListener('resize', handleResize);
    interactElement.addEventListener('mousemove', onMouseMove);
    interactElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', () => isMouseDown = false);
    interactElement.addEventListener('mouseleave', () => isMouseDown = false);
    interactElement.addEventListener('touchstart', onTouchStart, { passive: false });
    interactElement.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', () => isMouseDown = false);

    let generatingPulse = 0;

    const render = () => {
        animationTime += 0.01;
        
        if (isGenerating) {
            generatingPulse += (1 - generatingPulse) * 0.05;
        } else {
            generatingPulse += (0 - generatingPulse) * 0.05;
        }

        // Apply physics
        if (!isMouseDown) {
            // Spring back slightly to center X, let Y free spin
            const springForceX = (-0.1 - rotX) * 0.05;
            velX += springForceX;
            
            // Add base rotation momentum to Y
            velY += (0.005 - velY) * 0.02;
            
            velX *= 0.9;
            velY *= 0.95;
            
            rotX += velX;
            rotY += velY;
        }

        ctx.clearRect(0, 0, width, height);

        const renderPoints = [];
        
        for (let i = 0; i < points.length; i++) {
            const p = points[i];
            let x = p.baseX;
            let y = p.baseY;
            let z = p.baseZ;

            let rOffset = 1;

            // Generate wavy effect if generating
            if (generatingPulse > 0.01) {
                const wave1 = Math.sin(y * 8 + animationTime * 15) * 0.1 * generatingPulse;
                const wave2 = Math.cos(x * 6 + animationTime * 10) * 0.05 * generatingPulse;
                rOffset += wave1 + wave2;
            }

            // Magnetic collapse inwards if user holds down mouse
            if (isMouseDown) {
                // Shrink radius and add chaotic jitter
                rOffset *= Math.max(0.4, 0.8 - Math.random() * 0.1);
            }

            x *= rOffset;
            y *= rOffset;
            z *= rOffset;

            // Rotate X
            let cosX = Math.cos(rotX);
            let sinX = Math.sin(rotX);
            let ty = y * cosX - z * sinX;
            let tz = y * sinX + z * cosX;

            // Rotate Y
            let cosY = Math.cos(rotY);
            let sinY = Math.sin(rotY);
            let finalX = x * cosY + tz * sinY;
            let finalZ = -x * sinY + tz * cosY;

            renderPoints.push({ x: finalX, y: ty, z: finalZ, baseY: p.baseY });
        }

        renderPoints.sort((a, b) => a.z - b.z);

        ctx.save();
        ctx.translate(width / 2, height / 2 - 60);

        for (let i = 0; i < renderPoints.length; i++) {
            const p = renderPoints[i];
            
            // Perspective projection
            const fov = 300;
            const scale = fov / (fov - p.z * baseRadius * 0.5);
            const sx = p.x * baseRadius * scale;
            const sy = p.y * baseRadius * scale;

            const depth = (p.z + 1) / 2; // 0 to 1

            // Color calculation
            let hue = 190 + ((p.baseY + 1) / 2) * 60; // cyan to blueish
            if (generatingPulse > 0) {
                hue += generatingPulse * 40 + Math.sin(animationTime * 5 + p.y * 10) * 20; // more vibrant variations
            }

            const alpha = Math.max(0.1, depth * (0.5 + generatingPulse * 0.5));
            let lightness = 50 + depth * 20;
            if (isGenerating) lightness += 15 * generatingPulse;

            ctx.fillStyle = `hsla(${hue}, 100%, ${lightness}%, ${alpha})`;
            
            let size = Math.max(0.5, depth * 2.5 * scale);
            if (isMouseDown) size *= 1.5;

            ctx.beginPath();
            ctx.arc(sx, sy, size, 0, Math.PI * 2);
            ctx.fill();

            // Additional glow point if generating
            if (generatingPulse > 0 && depth > 0.8 && Math.random() > 0.9) {
                ctx.fillStyle = `hsla(${hue}, 100%, 90%, ${generatingPulse})`;
                ctx.beginPath();
                ctx.arc(sx, sy, size * 1.8, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        ctx.restore();
        animFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
        cancelAnimationFrame(animFrameId);
        window.removeEventListener('resize', handleResize);
        interactElement.removeEventListener('mousemove', onMouseMove);
        interactElement.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mouseup', () => isMouseDown = false);
        interactElement.removeEventListener('mouseleave', () => isMouseDown = false);
        interactElement.removeEventListener('touchstart', onTouchStart);
        interactElement.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('touchend', () => isMouseDown = false);
    };
  }, [isGenerating]);

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full mix-blend-multiply opacity-80"
      />
    </div>
  );
}
