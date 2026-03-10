import React from 'react';
import { useAppContext } from '../context/AppContext';

export const IkatanLogamPage: React.FC = () => {
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
            Ikatan Logam
          </h1>

          <div className="space-y-6 leading-8 text-slate-200">
            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Pengertian</h2>
              <p>
                Ikatan logam adalah gaya tarik antara ion-ion logam positif dengan
                elektron valensi yang bergerak bebas membentuk lautan elektron.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Model Lautan Elektron</h2>
              <p>
                Dalam logam, elektron valensi tidak terikat kuat pada satu atom saja,
                melainkan bergerak bebas di antara banyak inti atom logam.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Sifat Logam</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Menghantarkan listrik dengan baik.</li>
                <li>Menghantarkan panas dengan baik.</li>
                <li>Dapat ditempa dan ditarik menjadi kawat.</li>
                <li>Memiliki kilau logam.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Contoh</h2>
              <p>
                Besi, tembaga, aluminium, dan perak merupakan contoh unsur dengan
                ikatan logam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
