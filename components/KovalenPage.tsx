import React from 'react';
import { useAppContext } from '../context/AppContext';

export const KovalenPage: React.FC = () => {
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
            Ikatan Kovalen
          </h1>

          <div className="space-y-6 leading-8 text-slate-200">
            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Pengertian</h2>
              <p>
                Ikatan kovalen adalah ikatan kimia yang terjadi karena dua atom
                menggunakan pasangan elektron secara bersama-sama untuk mencapai
                kestabilan.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Cara Terbentuk</h2>
              <p>
                Ikatan ini umumnya terjadi antar atom nonlogam. Karena keduanya
                sama-sama sulit melepaskan elektron, maka mereka berbagi elektron
                valensi agar mencapai konfigurasi stabil.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Contoh</h2>
              <p>
                Molekul H₂ terbentuk ketika dua atom H berbagi satu pasangan elektron.
                Molekul H₂O terbentuk ketika atom O berbagi elektron dengan dua atom H.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Jenis Ikatan Kovalen</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ikatan kovalen tunggal</li>
                <li>Ikatan kovalen rangkap dua</li>
                <li>Ikatan kovalen rangkap tiga</li>
                <li>Ikatan kovalen koordinasi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
