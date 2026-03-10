import React from 'react';
import { useAppContext } from '../context/AppContext';

export const IonPage: React.FC = () => {
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
            Ikatan Ion
          </h1>

          <div className="space-y-6 leading-8 text-slate-200">
            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Pengertian</h2>
              <p>
                Ikatan ion adalah ikatan kimia yang terjadi karena perpindahan elektron
                dari atom logam ke atom nonlogam. Atom logam cenderung melepaskan
                elektron, sedangkan atom nonlogam cenderung menerima elektron.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Proses Pembentukan</h2>
              <p>
                Ketika atom logam melepaskan elektron, atom tersebut berubah menjadi
                kation. Saat atom nonlogam menerima elektron, atom itu menjadi anion.
                Gaya tarik elektrostatik antara kation dan anion membentuk ikatan ion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Contoh</h2>
              <p>
                Natrium klorida (NaCl) terbentuk saat atom Na melepaskan 1 elektron
                dan atom Cl menerima 1 elektron.
              </p>
              <div className="mt-3 bg-slate-900/50 rounded-xl p-4">
                <p>Na → Na⁺ + e⁻</p>
                <p>Cl + e⁻ → Cl⁻</p>
                <p className="mt-2">Na⁺ + Cl⁻ → NaCl</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Ciri-ciri</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Terjadi antara logam dan nonlogam.</li>
                <li>Melibatkan perpindahan elektron.</li>
                <li>Membentuk ion positif dan ion negatif.</li>
                <li>Memiliki titik leleh dan titik didih tinggi.</li>
                <li>Dapat menghantarkan listrik dalam larutan.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
