import React from 'react';
import { useAppContext } from '../../context/AppContext';

export const Modules: React.FC = () => {
  const { setActiveTab } = useAppContext();

  const cards = [
    {
      title: 'Ikatan Ion',
      icon: '⚡',
      color: 'text-yellow-300',
      description:
        'Memahami perpindahan elektron antara atom logam dan nonlogam serta pembentukan kation dan anion.',
      action: () => setActiveTab('ikatan-ion'),
    },
    {
      title: 'Ikatan Kovalen',
      icon: '🔗',
      color: 'text-violet-300',
      description:
        'Mempelajari pemakaian bersama pasangan elektron antar atom untuk membentuk senyawa kovalen.',
      action: () => setActiveTab('ikatan-kovalen'),
    },
    {
      title: 'Kepolaran',
      icon: '△',
      color: 'text-pink-300',
      description:
        'Menentukan molekul polar dan nonpolar berdasarkan perbedaan keelektronegatifan dan distribusi muatan.',
      action: () => setActiveTab('kepolaran'),
    },
    {
      title: 'Ikatan Logam',
      icon: '⛓',
      color: 'text-orange-300',
      description:
        'Menganalisis model lautan elektron pada logam dan kaitannya dengan sifat konduktivitas serta kelenturan.',
      action: () => setActiveTab('ikatan-logam'),
    },
    {
      title: 'Bentuk Molekul',
      icon: '🔺',
      color: 'text-green-300',
      description:
        'Mempelajari bentuk geometri molekul menggunakan teori VSEPR seperti linear, trigonal, tetrahedral, dan lainnya.',
      action: () => setActiveTab('bentuk-molekul'),
    },
    {
      title: 'Gaya Molekul',
      icon: '✦',
      color: 'text-cyan-300',
      description:
        'Mengidentifikasi gaya antarmolekul seperti gaya London, dipol-dipol, dan ikatan hidrogen serta pengaruhnya pada sifat zat.',
      action: () => setActiveTab('gaya-molekul'),
    },
  ];

  return (
    <section className="relative z-10 min-h-screen px-6 md:px-12 lg:px-20 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start gap-4 mb-10">
          <div className="w-1 h-14 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.7)]"></div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(34,211,238,0.15)]">
              📘
            </div>

            <div>
              <h2 className="font-orbitron text-white text-3xl md:text-5xl font-bold uppercase tracking-wide">
                Modul Materi
              </h2>
              <p className="text-slate-300 mt-2 text-sm md:text-lg">
                Eksplorasi konsep ikatan kimia secara mendalam.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[28px] border border-cyan-400/15 bg-[rgba(5,10,45,0.78)] backdrop-blur-md p-6 min-h-[270px] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25"
            >
              <div className={`text-3xl mb-6 ${card.color}`}>{card.icon}</div>

              <h3 className="text-white text-2xl font-bold mb-4">{card.title}</h3>

              <p className="text-slate-300 leading-8 text-base mb-8">
                {card.description}
              </p>

              <button
                onClick={card.action}
                className="px-5 py-3 rounded-xl bg-cyan-400 text-slate-900 font-extrabold uppercase text-sm shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 transition"
              >
                Pelajari
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
