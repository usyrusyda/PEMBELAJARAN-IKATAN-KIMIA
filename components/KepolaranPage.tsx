import React from 'react';
import { useAppContext } from '../context/AppContext';

export const KepolaranPage: React.FC = () => {
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
            Kepolaran
          </h1>

          <div className="space-y-6 leading-8 text-slate-200">
            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Pengertian</h2>
              <p>
                Kepolaran molekul adalah kondisi distribusi muatan yang tidak merata
                dalam suatu molekul sehingga terbentuk kutub positif dan negatif.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Penyebab</h2>
              <p>
                Kepolaran dipengaruhi oleh perbedaan keelektronegatifan antar atom
                dan bentuk molekul. Jika resultan momen dipol tidak saling meniadakan,
                molekul menjadi polar.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Molekul Polar</h2>
              <p>
                Molekul polar memiliki distribusi muatan tidak simetris, misalnya H₂O
                dan NH₃.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Molekul Nonpolar</h2>
              <p>
                Molekul nonpolar memiliki distribusi muatan simetris atau tidak ada
                perbedaan keelektronegatifan yang berarti, misalnya O₂, N₂, dan CO₂.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
