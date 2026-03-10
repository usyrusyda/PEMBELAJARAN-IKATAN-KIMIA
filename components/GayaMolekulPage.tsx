import React from 'react';
import { useAppContext } from '../context/AppContext';

export const GayaMolekulPage: React.FC = () => {
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
            Gaya Molekul
          </h1>

          <div className="space-y-6 leading-8 text-slate-200">
            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Pengertian</h2>
              <p>
                Gaya antarmolekul adalah gaya tarik-menarik yang terjadi antar
                molekul. Gaya ini memengaruhi titik didih, titik leleh, dan kelarutan.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Jenis-jenis Gaya Antarmolekul</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gaya dispersi London</li>
                <li>Gaya dipol-dipol</li>
                <li>Ikatan hidrogen</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Gaya London</h2>
              <p>
                Gaya ini terdapat pada semua molekul, terutama molekul nonpolar,
                akibat dipol sesaat yang timbul karena gerakan elektron.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Dipol-dipol</h2>
              <p>
                Terjadi pada molekul polar karena ada kutub positif dan negatif yang
                saling tarik-menarik.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Ikatan Hidrogen</h2>
              <p>
                Ikatan hidrogen adalah gaya antarmolekul yang kuat, terjadi ketika H
                berikatan dengan F, O, atau N.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
