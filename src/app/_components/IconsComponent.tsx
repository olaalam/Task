import React from 'react';

const CompanyLogosSection = () => {
  const topCompanies = [
    { name: 'STATSIG', logo: '📊' },
    { name: 'Deno', logo: '🦕' },
    { name: 'Modal', logo: '⚡' },
    { name: 'hyper', logo: '⚡' }
  ];

  const bottomCompanies = [
    { name: 'evidence', logo: '📈' },
    { name: 'dagster', logo: '🔄' },
    { name: 'case status', logo: '📋' },
    { name: 'D&G SOUTH', logo: '🏢' }
  ];

  return (
    <section className="bg-black min-h-screen flex flex-col items-center justify-center px-8 py-16">
      {/* Top row of company logos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-16 opacity-40">
        {topCompanies.map((company, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center text-white/60 hover:text-white/80 transition-colors duration-300"
          >
            <div className="text-center">
              <div className="text-3xl mb-2">{company.logo}</div>
              <div className="text-lg font-medium tracking-wider uppercase">
                {company.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main heading */}
      <div className="text-center mb-16 max-w-4xl">
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
          Used by teams at Statsig, Deno,
          <br />
          Dagster, Evidence and more.
        </h2>
      </div>

      {/* Bottom row of company logos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 opacity-40">
        {bottomCompanies.map((company, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center text-white/60 hover:text-white/80 transition-colors duration-300"
          >
            <div className="text-center">
              <div className="text-3xl mb-2">{company.logo}</div>
              <div className="text-lg font-medium tracking-wider uppercase">
                {company.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyLogosSection;