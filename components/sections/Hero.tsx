import React from 'react';
import { useAppContext } from '../../context/AppContext';

export const Hero: React.FC = () => {
  const { setActiveTab } = useAppContext();

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-6 text-center">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-xs uppercase tracking-widest font-bold mb-6">
          ✦ Welcome to the quantum realm
        </div>

        <h1 className="font-orbitron text-5xl md:text-8xl font-black uppercase bg-gradient-to-r from-cyan-300 via-white to-pink-400 bg-clip-text text-transparent">
          Ikatan Kimia
        </h1>

        <h2 className="font-orbitron text-2xl md:text-4xl text-white mt-4 uppercase">
          Petualangan Molekul
        </h2>

        <p className="text-slate-300 text-base md:text-xl leading-8 mt-6 max-w-2xl mx-auto">
          Platform pembelajaran imersif untuk mahasiswa. Kuasai konsep ikatan atom
          melalui laboratorium virtual, tantangan interaktif, dan bantuan asisten AI.
        </p>

        <button
          onClick={() => setActiveTab('modules')}
          className="mt-10 inline-flex items-center gap-4 px-8 py-4 rounded-full bg-cyan-400 text-slate-900 font-orbitron font-extrabold uppercase shadow-[0_0_25px_rgba(34,211,238,0.45)] hover:scale-105 transition"
        >
          Mulai Petualangan
          <span className="w-8 h-8 rounded-full bg-slate-900 text-cyan-300 flex items-center justify-center">
            ▶
          </span>
        </button>
      </div>
    </section>
  );
};
