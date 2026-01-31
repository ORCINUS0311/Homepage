import React, { useState, useEffect } from 'react';

// Orcinus Logo Component
const OrcinusLogo = ({ dark = false, size = "default" }) => {
  const scale = size === "small" ? 0.6 : size === "large" ? 1.2 : 1;
  const width = 200 * scale;
  const height = 60 * scale;
  
  return (
    <svg width={width} height={height} viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`finGrad-${dark}-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={dark ? "#4FC3F7" : "#1A2B4C"}/>
          <stop offset="100%" stopColor={dark ? "#81D4FA" : "#2E4A6F"}/>
        </linearGradient>
      </defs>
      <path d="M20 95 Q25 40 50 15 Q55 12 58 15 Q70 45 75 95 Z" fill={`url(#finGrad-${dark}-${size})`}/>
      <path d="M22 85 Q40 75 55 85 Q65 90 73 85" stroke={dark ? "#FFFFFF" : "#4FC3F7"} strokeWidth="3" fill="none" strokeLinecap="round"/>
      <text x="95" y="72" fontFamily="'Georgia', serif" fontSize="48" fontWeight="700" fill={dark ? "#FFFFFF" : "#1A2B4C"} letterSpacing="2">ORCINUS</text>
    </svg>
  );
};

// Floating Particles
const FloatingParticles = () => {
  const colors = ['#22D3EE', '#38BDF8', '#818CF8', '#A78BFA', '#C084FC'];
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 3,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 12 + 10,
    opacity: Math.random() * 0.25 + 0.1,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            opacity: p.opacity,
            backgroundColor: p.color,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`
          }}
        />
      ))}
    </div>
  );
};

// Icon Component
const Icon = ({ name, className = "" }) => {
  const icons = {
    check: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>,
    zap: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    layers: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
    dollar: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    arrow: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
    menu: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
    x: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    target: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    building: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>,
    briefcase: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
    pieChart: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>,
    activity: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
  };
  return icons[name] || null;
};

// Orca Fin Illustration
const OrcaFinIllustration = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="finGradientHero" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E3A5F"/>
        <stop offset="50%" stopColor="#0F172A"/>
        <stop offset="100%" stopColor="#1E3A5F"/>
      </linearGradient>
      <linearGradient id="glowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4FC3F7" stopOpacity="0.6"/>
        <stop offset="100%" stopColor="#4FC3F7" stopOpacity="0"/>
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
        <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <ellipse cx="200" cy="450" rx="150" ry="30" fill="url(#glowGradient)" opacity="0.5">
      <animate attributeName="rx" values="150;160;150" dur="3s" repeatCount="indefinite"/>
    </ellipse>
    <path d="M120 450 Q140 250 200 80 Q210 60 220 80 Q280 250 300 450 Z" fill="url(#finGradientHero)"/>
    <path d="M160 400 Q170 280 200 150 Q205 140 208 150 Q220 220 230 350" stroke="#4FC3F7" strokeWidth="2" fill="none" opacity="0.6" filter="url(#glow)"/>
    <path d="M80 430 Q140 410 200 430 Q260 450 320 430" stroke="#4FC3F7" strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#glow)">
      <animate attributeName="d" dur="4s" repeatCount="indefinite" values="
        M80 430 Q140 410 200 430 Q260 450 320 430;
        M80 435 Q140 455 200 435 Q260 415 320 435;
        M80 430 Q140 410 200 430 Q260 450 320 430
      "/>
    </path>
    <circle cx="150" cy="380" r="4" fill="#4FC3F7" opacity="0.4">
      <animate attributeName="cy" values="380;320;260" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.4;0.2;0" dur="4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="250" cy="400" r="3" fill="#4FC3F7" opacity="0.3">
      <animate attributeName="cy" values="400;340;280" dur="5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0.15;0" dur="5s" repeatCount="indefinite"/>
    </circle>
  </svg>
);

export default function OrcinusLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: "layers", title: "올인원 플랫폼", desc: "OMS · EMS · PMS · 리스크 관리를 하나로" },
    { icon: "dollar", title: "50%+ 비용 절감", desc: "규모와 관계없이 최고의 인프라를" },
    { icon: "zap", title: "실시간 자동화", desc: "주문부터 리포팅까지 전 과정 자동화" },
    { icon: "target", title: "맞춤형 확장", desc: "각 비즈니스에 최적화된 설정" },
  ];

  const clients = [
    { icon: "building", title: "자산운용사" },
    { icon: "briefcase", title: "일임업자" },
    { icon: "pieChart", title: "SMA" },
    { icon: "activity", title: "증권사" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(100vh) scale(0); opacity: 0; }
          10% { opacity: 1; transform: translateY(90vh) scale(1); }
          90% { opacity: 0.5; }
          100% { transform: translateY(-10vh) scale(0.5); opacity: 0; }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #0EA5E9 0%, #6366F1 50%, #0EA5E9 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s ease infinite;
        }
        
        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-6px);
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-white/95 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <OrcinusLogo size="small" />
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-700 hover:text-slate-900 text-sm font-medium">특징</a>
            <a href="#services" className="text-slate-700 hover:text-slate-900 text-sm font-medium">서비스</a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900 text-sm font-medium">문의</a>
            <button className="bg-cyan-400 text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-cyan-300 transition-all">
              데모 신청
            </button>
          </div>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "x" : "menu"} className="w-6 h-6 text-slate-700" />
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-white px-6 py-4 space-y-4 border-t border-slate-100">
            <a href="#features" className="block text-slate-700">특징</a>
            <a href="#services" className="block text-slate-700">서비스</a>
            <a href="#contact" className="block text-slate-700">문의</a>
            <button className="w-full bg-cyan-400 text-black px-5 py-2.5 rounded-full text-sm font-medium">
              데모 신청
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-cyan-50/40 to-blue-50/30"/>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-200/40 rounded-full blur-3xl"/>
          <div className="absolute top-40 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"/>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl"/>
        </div>
        
        <FloatingParticles />

        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm border border-slate-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-slate-700">금융 투자 인프라의 새로운 기준</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] leading-[1.15] mb-6" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              투자의 모든 것,<br/>
              <span className="gradient-text">하나의 플랫폼에서.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed max-w-md">
              <span className="font-semibold text-slate-800">OMS · EMS · PMS · 리스크 관리</span><br/>
              자산운용사부터 증권사까지, 모든 금융 투자 인프라.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="group bg-cyan-400 text-black px-7 py-3.5 rounded-xl text-base font-bold hover:bg-cyan-300 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                데모 신청하기
                <Icon name="arrow" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/80 backdrop-blur px-7 py-3.5 rounded-xl text-base font-semibold text-slate-700 hover:bg-white transition-all shadow-md border border-slate-200">
                서비스 소개서
              </button>
            </div>
          </div>
          
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-cyan-300/20 to-blue-400/20 rounded-full blur-3xl"/>
            <OrcaFinIllustration className="w-full max-w-sm relative z-10" />
          </div>
        </div>
      </section>

      {/* Client + Stats Section */}
      <section className="relative py-12 px-6 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {clients.map((client, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl px-5 py-3 flex items-center gap-3 shadow-sm hover:shadow-md transition-all border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Icon name={client.icon} className="w-5 h-5 text-white" />
                </div>
                <span className="text-slate-800 font-semibold">{client.title}</span>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: "50%+", label: "비용 절감" },
              { value: "1", label: "통합 플랫폼" },
              { value: "24/7", label: "실시간 모니터링" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-[#0F172A] mb-1" style={{fontFamily: "'Space Grotesk', sans-serif"}}>
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4">WHY ORCINUS</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              왜 <span className="gradient-text">Orcinus</span>인가?
            </h2>
            <p className="text-slate-600 text-base max-w-lg mx-auto">
              범고래처럼 효율적이고 지능적인 시스템으로<br/>금융 투자 인프라를 재정의합니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <div key={i} className="hover-lift bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-cyan-200 hover:shadow-lg group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                  <Icon name={feature.icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-700 text-sm font-semibold mb-4">SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A]" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              통합 서비스
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "투자 관리 시스템", tag: "Core", items: ["OMS (주문관리)", "EMS (실행관리)", "PMS (포트폴리오)", "리스크 관리"], color: "from-cyan-500 to-blue-600" },
              { title: "운영 자동화", tag: "Auto", items: ["실시간 대시보드", "자동 리밸런싱", "규제 보고 자동화", "맞춤형 리포트"], color: "from-blue-500 to-indigo-600" },
              { title: "확장 서비스", tag: "Plus", items: ["API 연동", "데이터 피드", "컴플라이언스", "사무수탁 연계 (예정)"], color: "from-indigo-500 to-violet-600" },
            ].map((service, i) => (
              <div key={i} className="hover-lift bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg relative overflow-hidden text-center">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}/>
                
                <span className={`inline-block px-2.5 py-1 rounded-full bg-gradient-to-r ${service.color} text-white text-xs font-bold mb-4`}>
                  {service.tag}
                </span>
                
                <h3 className="text-lg font-bold text-[#0F172A] mb-4">{service.title}</h3>
                <ul className="space-y-2.5">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center justify-center gap-3 text-slate-600 text-sm">
                      <Icon name="check" className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-3xl p-10 shadow-lg text-center relative overflow-hidden border border-slate-200">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"/>
            
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              정점에서 시작하세요.
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
              자산운용사, 일임업자, 증권사 모두를 위한<br/>새로운 투자 인프라를 경험해보세요.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-cyan-400 text-black px-8 py-4 rounded-xl text-lg font-bold hover:bg-cyan-300 transition-all shadow-lg">
                데모 신청하기
              </button>
              <button className="bg-white px-8 py-4 rounded-xl text-lg font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-md border border-slate-200">
                서비스 소개서
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <OrcinusLogo size="small" />
              <p className="text-slate-500 mt-3 text-sm">
                금융 투자를 위한 올인원 인프라 플랫폼
              </p>
            </div>
            <div className="grid grid-cols-3 gap-10 text-sm">
              <div>
                <h4 className="text-slate-900 font-bold mb-3">서비스</h4>
                <ul className="space-y-2 text-slate-500">
                  <li><a href="#" className="hover:text-cyan-600 transition-colors">OMS/EMS/PMS</a></li>
                  <li><a href="#" className="hover:text-cyan-600 transition-colors">리스크 관리</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-3">회사</h4>
                <ul className="space-y-2 text-slate-500">
                  <li><a href="#" className="hover:text-cyan-600 transition-colors">소개</a></li>
                  <li><a href="#" className="hover:text-cyan-600 transition-colors">채용</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-3">문의</h4>
                <ul className="space-y-2 text-slate-500">
                  <li>contact@orcinus.io</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-200 pt-6 text-center text-slate-400 text-sm">
            © 2026 Orcinus. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
