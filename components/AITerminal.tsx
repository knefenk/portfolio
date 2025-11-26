import React, { useState, useRef, useEffect } from 'react';
import { generateAIResponse } from '../services/geminiService';
import { Sparkles, Send, X } from 'lucide-react';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

const AITerminal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ai', text: "Greetings. I can provide details on my projects, engineering background, or technical skillset." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    const response = await generateAIResponse(userMsg);
    
    setMessages(prev => [...prev, { sender: 'ai', text: response }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end font-sans">
      {/* Interface Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] max-w-sm bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[450px] animate-fade-in-up origin-bottom-right">
          
          {/* Header */}
          <div className="px-5 py-4 flex justify-between items-center border-b border-white/5 bg-white/5">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-white" />
              <span className="text-xs font-medium text-white tracking-wide">AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
              <X size={14} />
            </button>
          </div>

          {/* Chat Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-white text-black font-medium' 
                      : 'bg-white/10 text-zinc-200 border border-white/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white/5 px-4 py-3 rounded-2xl flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce delay-75"></span>
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce delay-150"></span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-zinc-950/30">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask me anything..."
                className="w-full bg-zinc-800/50 text-white placeholder-zinc-500 rounded-xl pl-4 pr-10 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 transition-all border border-white/5"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-zinc-400 hover:text-white transition-colors disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/10 ${
          isOpen ? 'bg-zinc-800 rotate-90' : 'bg-white/10 hover:bg-white/20'
        }`}
      >
        {isOpen ? (
          <X size={20} className="text-white" />
        ) : (
          <Sparkles size={20} className="text-white" />
        )}
      </button>
    </div>
  );
};

export default AITerminal;