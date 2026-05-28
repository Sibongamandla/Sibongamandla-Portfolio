import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Loader2, Maximize2, Minimize2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { HolographicSphere } from "./HolographicSphere";

type Message = { role: "user" | "model"; content: string };

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const MAX_QUESTIONS = 10;
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", content: "Hey! Sibz's assistant here. What do you want to know?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const submitMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    if (questionCount >= MAX_QUESTIONS) {
      setMessages([...messages, { role: "user" as const, content: textToSend }, { role: "model" as const, content: "I'm feeling a bit exhausted and need to power down for a rest! 💤 It was lovely chatting with you, please reach out to Sibz directly if you have more questions." }]);
      setInput("");
      return;
    }

    const currentCount = questionCount + 1;
    setQuestionCount(currentCount);

    const newMessages = [...messages, { role: "user" as const, content: textToSend }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await response.json();
      
      let aiText = data.text;
      
      if (currentCount === MAX_QUESTIONS - 3) {
        aiText += "\n\n*(Just a heads up, my energy is running low! I only have enough power to answer 3 more questions before I need to rest.)*";
      } else if (currentCount === MAX_QUESTIONS - 2) {
        aiText += "\n\n*(I can answer 2 more questions!)*";
      } else if (currentCount === MAX_QUESTIONS - 1) {
        aiText += "\n\n*(This is my last answer before I need to rest—one more question to go!)*";
      }

      if (data.text) {
        setMessages([...newMessages, { role: "model" as const, content: aiText }]);
      } else if (data.error) {
        setMessages([...newMessages, { role: "model" as const, content: `Error: ${data.error}` }]);
      } else {
        setMessages([...newMessages, { role: "model" as const, content: "Sorry, I encountered an error." }]);
      }
    } catch (e) {
      setMessages([...newMessages, { role: "model" as const, content: "Sorry, I failed to connect to the server." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => submitMessage(input);

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 lg:bottom-12 lg:right-12 z-[200] p-4 lg:p-5 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.1)] text-black hover:scale-105 transition-all ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`chatbot-container fixed z-[200] flex flex-col overflow-hidden bg-white/60 backdrop-blur-3xl border border-black/10 shadow-[0_24px_60px_rgba(0,0,0,0.1)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isExpanded 
                ? 'inset-x-4 inset-y-4 md:inset-x-12 md:inset-y-12 rounded-[2rem]' 
                : 'bottom-6 right-6 lg:bottom-12 lg:right-12 w-[calc(100vw-3rem)] sm:w-80 md:w-96 rounded-3xl h-[60vh] max-h-[600px] min-h-[400px]'
            }`}
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-black/5 flex items-center justify-between text-black bg-white/40 z-10 relative backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="relative flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 z-10" />
                  <div className="absolute w-6 h-6 rounded-full border border-cyan-500/40 animate-[spin_3s_linear_infinite]" />
                  <div className="absolute w-8 h-8 rounded-full border border-dashed border-cyan-400/30 animate-[spin_4s_linear_infinite_reverse]" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest font-semibold drop-shadow-sm text-black">Aya Alive</span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setIsExpanded(!isExpanded)} className="hover:text-black/60 transition-colors p-1 text-black/40">
                  {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button onClick={() => setIsOpen(false)} className="hover:text-black/60 transition-colors p-1 text-black/40">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Background Orbit */}
            <div className={`absolute inset-0 z-0 overflow-hidden transition-all duration-1000 ${isExpanded ? 'scale-125' : 'scale-100'}`}>
              <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-blue-50/50 to-transparent"></div>
              <HolographicSphere isGenerating={isLoading} />
            </div>

            {/* Messages */}
            <div 
              className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 no-scrollbar z-10 relative"
              style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 35%, black 55%, black 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 35%, black 55%, black 100%)' }}
            >
              <div className="pt-[180px] flex flex-col justify-end gap-4 min-h-full pb-2">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-2xl px-5 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user' 
                        ? 'bg-black text-white rounded-tr-sm shadow-xl' 
                        : 'bg-white/80 backdrop-blur-xl text-black border border-[#e2e8f0] shadow-md rounded-tl-sm font-medium'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/80 backdrop-blur-xl text-black border border-[#e2e8f0] shadow-md px-4 py-3 rounded-2xl rounded-tl-sm">
                        <div className="flex gap-1 items-center h-4">
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce"></div>
                        </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-white/40 border-t border-black/5 z-10 relative backdrop-blur-xl flex flex-col gap-3">
              {/* Suggested Questions */}
              {messages.length === 1 && (
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-2 px-2">
                  {[
                    "Is Sibz the right candidate for this job?",
                    "Should I hire Sibz?",
                    "What is Sibz up to right now?",
                    "What is he good at?"
                  ].map((q, i) => (
                    <button
                      key={i}
                      onClick={() => submitMessage(q)}
                      className="whitespace-nowrap px-3 py-1.5 text-xs font-medium text-black/70 bg-white/60 hover:bg-white hover:text-black border border-black/10 rounded-full transition-colors drop-shadow-sm"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-2 bg-white/80 border border-black/5 rounded-full px-4 py-2 shadow-inner">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask Aya..."
                  className="flex-1 bg-transparent outline-none text-sm font-medium placeholder:text-black/40 text-black"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="p-2 bg-black text-white rounded-full hover:bg-black/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                >
                  <Send className="w-3 h-3 -translate-x-[1px] translate-y-[1px]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
