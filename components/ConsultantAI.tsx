
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Loader2, Send, Wand2 } from 'lucide-react';

const ConsultantAI: React.FC = () => {
  const [brandValues, setBrandValues] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateStrategy = async () => {
    if (!brandValues.trim()) return;

    setLoading(true);
    setResponse(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Act as a world-class luxury brand strategist from Mavac Communication. 
      Given the following brand values: "${brandValues}", provide a sophisticated, editorial-style 
      CSR (Corporate Social Responsibility) narrative and 3 strategic initiatives. 
      The tone should be confident, editorial, and super rich. 
      Structure your response with clear headers for Narrative and Initiatives.`;

      const res = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          temperature: 0.7,
          topK: 40,
        },
      });

      setResponse(res.text || 'An error occurred during generation.');
    } catch (err) {
      console.error(err);
      setResponse('Expert consultation unavailable at this moment. Please verify your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 md:py-40 bg-white relative overflow-hidden" id="ai-consultant">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#E6E6FA]/20 skew-x-12 transform translate-x-32 -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 rounded-full border border-[#D4AF37] mb-8 md:mb-10 bg-white shadow-[0_5px_20px_rgba(212,175,55,0.1)]">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#D4AF37]" />
            <span className="text-[9px] md:text-[10px] tracking-[0.25em] md:tracking-[0.3em] font-bold uppercase text-[#D4AF37]">Mavac Insight Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-[#1A1A1A] mb-6 md:mb-8">
            Refine Your <span className="text-[#D4AF37] italic font-bold">Purpose.</span>
          </h2>
          <p className="text-slate-500 font-light max-w-2xl mx-auto text-base md:text-lg leading-relaxed px-4">
            Harness our proprietary intelligence to craft narratives that transcend commercial boundaries.
          </p>
        </div>

        <div className="relative group">
          {/* Animated Glow Behind Card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-sm blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative bg-white p-10 md:p-16 border border-[#E6E6FA] rounded-sm shadow-2xl">
            <div className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <label className="text-xs font-bold tracking-[0.3em] uppercase text-slate-400">
                  Brand DNA & Aspirations
                </label>
                <Wand2 size={16} className="text-[#D4AF37]" />
              </div>
              <textarea
                value={brandValues}
                onChange={(e) => setBrandValues(e.target.value)}
                placeholder="Describe your heritage, core values, and the impact you wish to manifest..."
                className="w-full h-40 p-6 bg-[#F9F9F9] border border-transparent focus:border-[#D4AF37]/30 focus:bg-white outline-none text-lg font-light resize-none transition-all duration-500 rounded-sm"
              />
            </div>

            <button
              onClick={generateStrategy}
              disabled={loading || !brandValues}
              className="group relative w-full py-6 bg-[#1A1A1A] text-white text-[11px] tracking-[0.4em] font-bold uppercase overflow-hidden transition-all duration-500 rounded-sm disabled:opacity-50"
            >
              <div className="absolute inset-0 bg-[#D4AF37] transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="relative z-10 flex items-center justify-center gap-4 group-hover:text-white transition-colors">
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Analyzing Market Sentiment...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Synthesize Strategy
                  </>
                )}
              </div>
            </button>

            {response && (
              <div className="mt-20 border border-[#D4AF37]/30 bg-[#F9F9F9] rounded-sm relative overflow-hidden animate-in fade-in slide-in-from-bottom duration-1000">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] via-white to-[#D4AF37] shimmer-gold"></div>

                <div className="p-10 md:p-16">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-white text-xs font-bold">M</div>
                    <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#D4AF37]">Mavac Strategist Output</span>
                  </div>

                  <div className="prose prose-lg max-w-none text-slate-800 font-light leading-relaxed whitespace-pre-wrap selection:bg-[#D4AF37]/30">
                    {response}
                  </div>
                </div>

                <div className="bg-[#D4AF37]/5 p-6 border-t border-[#D4AF37]/10 text-center">
                  <p className="text-[10px] tracking-[0.2em] font-bold uppercase text-[#D4AF37]">CONFIDENTIAL • PROPRIETARY INSIGHT</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultantAI;
