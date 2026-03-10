import React from 'react';
import { useAppContext } from '../context/AppContext';

export const BentukMolekulPage: React.FC = () => {
  const { setActiveTab } = useAppContext();

  return (
    <section className="relative z-10 min-h-screen px-6 md:px-12 lg:px-20 py-24 text-white">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => setActiveTab('modules')}
          className="mb-8 px-5 py-3 rounded-xl bg-cyan-400 text-slate-900 font-extrabold uppercase text-sm"
        >
          ← Kembali ke Modul
        </button>

        <div className="rounded-[32px] border border-cyan-400/15 bg-[rgba(5,10,45,0.78)] p-8 md:p-10">
          <h1 className="font-orbitron text-3xl md:text-5xl font-bold uppercase mb-6">
            Bentuk Molekul
          </h1>

          <div className="space-y-6 leading-8 text-slate-200">
            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Pengertian</h2>
              <p>
                Bentuk molekul adalah susunan ruang atom-atom dalam suatu molekul
                yang ditentukan oleh pasangan elektron di sekitar atom pusat.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Teori VSEPR</h2>
              <p>
                Teori VSEPR menjelaskan bahwa pasangan elektron di sekitar atom pusat
                akan saling tolak-menolak dan mengatur posisi sejauh mungkin agar
                tolakannya minimum.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Contoh Bentuk</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Linear: CO₂</li>
                <li>Trigonal planar: BF₃</li>
                <li>Tetrahedral: CH₄</li>
                <li>Piramida trigonal: NH₃</li>
                <li>Bengkok: H₂O</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Pentingnya Bentuk Molekul</h2>
              <p>
                Bentuk molekul memengaruhi sifat fisika, sifat kimia, dan kepolaran
                molekul.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
