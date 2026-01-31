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
    shield: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
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
    activity: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    cloud: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
    server: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
    database: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
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
    {/* 아래쪽 물결 */}
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
  const [activeTab, setActiveTab] = useState('domestic');
  const [lang, setLang] = useState('ko');
  const [showIntro, setShowIntro] = useState(true);
  const [introFading, setIntroFading] = useState(false);

  // 다국어 텍스트
  const t = {
    ko: {
      nav: { features: '특징', services: '서비스', contact: '문의', demo: '데모 신청' },
      hero: {
        badge: 'Orca - 실시간 통합 자산운용 플랫폼',
        title1: '자산운용의 모든 것,',
        title2: '하나의 플랫폼에서.',
        subtitle: 'PMS · OMS · EMS · 대차관리 · ETF',
        desc: '실시간 기준가부터 공매도 체크까지, 올인원 솔루션.',
        cta1: '데모 신청하기',
        cta2: '서비스 소개서',
        scroll: '스크롤하여 Orca를 만나보세요'
      },
      stats: {
        realtime: '실시간', realtimeLabel: '기준가 산출',
        multi: '멀티', multiLabel: '매니저 운용',
        check: '100%', checkLabel: '공매도 체크'
      },
      features: {
        badge: 'WHY ORCA',
        title: '왜',
        titleEnd: '인가?',
        subtitle: '자산운용사를 위한 실시간 통합 트레이딩 관리 시스템'
      },
      modules: {
        badge: 'ORCA MODULES',
        title: '시스템 구성',
        subtitle: '자산운용의 전 과정을 하나의 플랫폼에서'
      },
      flow: {
        badge: 'ARCHITECTURE',
        title: '주문 흐름',
        subtitle: '국내/해외 시장을 하나의 플랫폼에서 통합 관리',
        domestic: '🇰🇷 국내 주문',
        overseas: '🌏 해외 주문'
      },
      deploy: {
        badge: 'DEPLOYMENT',
        title: '서비스 운영 방식',
        subtitle: '고객사 환경에 맞는 유연한 배포 옵션'
      },
      about: {
        badge: 'ABOUT ORCINUS',
        title: '에 대하여',
        subtitle: '자산운용의 미래를 함께 만들어갑니다'
      },
      cta: {
        title: 'Orca와 함께 시작하세요',
        subtitle: '데모를 신청하시면 담당자가 연락드립니다.',
        btn1: '데모 신청하기',
        btn2: '서비스 소개서'
      },
      footer: {
        company: '(주) 오르시너스',
        address: '서울특별시 영등포구',
        copy: '© 2025 Orcinus. All rights reserved.'
      },
      clients: {
        badge: 'ORCINUS SERVICE',
        title: 'Orca by Orcinus',
        subtitle: '자산운용사를 위한 통합 플랫폼',
        asset: '자산운용사',
        invest: '투자자문사'
      }
    },
    en: {
      nav: { features: 'Features', services: 'Services', contact: 'Contact', demo: 'Request Demo' },
      hero: {
        badge: 'Orca - Real-time Integrated Asset Management Platform',
        title1: 'Everything in Asset Management,',
        title2: 'In One Platform.',
        subtitle: 'PMS · OMS · EMS · Securities Lending · ETF',
        desc: 'All-in-one solution from real-time NAV to short selling check.',
        cta1: 'Request Demo',
        cta2: 'Brochure',
        scroll: 'Scroll to meet Orca'
      },
      stats: {
        realtime: 'Real-time', realtimeLabel: 'NAV Calculation',
        multi: 'Multi', multiLabel: 'Manager Support',
        check: '100%', checkLabel: 'Short Sell Check'
      },
      features: {
        badge: 'WHY ORCA',
        title: 'Why',
        titleEnd: '?',
        subtitle: 'Real-time integrated trading management system for asset managers'
      },
      modules: {
        badge: 'ORCA MODULES',
        title: 'System Architecture',
        subtitle: 'Entire asset management process in one platform'
      },
      flow: {
        badge: 'ARCHITECTURE',
        title: 'Order Flow',
        subtitle: 'Integrated management of domestic and overseas markets',
        domestic: '🇰🇷 Domestic',
        overseas: '🌏 Overseas'
      },
      deploy: {
        badge: 'DEPLOYMENT',
        title: 'Deployment Options',
        subtitle: 'Flexible deployment options for your environment'
      },
      about: {
        badge: 'ABOUT ORCINUS',
        title: '',
        subtitle: 'Building the future of asset management together'
      },
      cta: {
        title: 'Get Started with Orca',
        subtitle: 'Request a demo and our team will contact you.',
        btn1: 'Request Demo',
        btn2: 'Brochure'
      },
      footer: {
        company: 'Orcinus Inc.',
        address: 'Seoul, South Korea',
        copy: '© 2025 Orcinus. All rights reserved.'
      },
      clients: {
        badge: 'ORCINUS SERVICE',
        title: 'Orca by Orcinus',
        subtitle: 'The Integrated Platform for Asset Managers',
        asset: 'Asset Managers',
        invest: 'Investment Advisors'
      }
    }
  };
  
  const txt = t[lang];
  
  const [countUp, setCountUp] = useState({ realtime: false, multi: false, check: false });

  // 인트로 타이머 (3~4초 후 자동 전환)
  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIntroFading(true);
    }, 3500);
    
    const hideTimer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);
    
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // 카운트업 애니메이션을 위한 ref
  const statsRef = React.useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Stats 섹션 카운트업 트리거
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setCountUp({ realtime: true, multi: true, check: true });
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: "activity", title: "실시간 손익 & 기준가", desc: "운용역별/펀드별 실시간 기준가 업데이트" },
    { icon: "zap", title: "국내/해외 실시간 체결", desc: "해외 자산도 당일 실시간 반영, 장중 진입/청산 가능" },
    { icon: "shield", title: "실시간 리스크 관리", desc: "실시간 반영으로 즉각적인 리스크 체크 가능" },
    { icon: "target", title: "Active ETF 운용", desc: "실시간 PDF 전송, 설정환매, 대여리콜 관리" },
    { icon: "layers", title: "멀티매니저 운용", desc: "매니저별 손익/잔고 관리, 반대방향 주문 자동상계 후 동시진행" },
  ];

  const clients = [
    { icon: "building", title: "자산운용사" },
    { icon: "briefcase", title: "일임업자" },
    { icon: "pieChart", title: "SMA" },
    { icon: "activity", title: "증권사" },
  ];

  return (
    <div className={`min-h-screen bg-slate-50 overflow-x-hidden`}>
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
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-lift:hover {
          transform: translateY(-12px) scale(1.03);
          box-shadow: 0 30px 60px rgba(0,0,0,0.15);
        }
        
        .btn-shine {
          position: relative;
          overflow: hidden;
        }
        .btn-shine::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255,255,255,0.3) 50%,
            transparent 100%
          );
          transform: rotate(30deg) translateX(-100%);
          transition: transform 0.6s;
        }
        .btn-shine:hover::after {
          transform: rotate(30deg) translateX(100%);
        }
        
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .rolling-banner {
          animation: scroll-left 25s linear infinite;
        }
        
        .rolling-banner:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-white/95 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <OrcinusLogo size="small" />
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-slate-700 hover:text-cyan-500 text-sm font-medium transition-all duration-200 hover:scale-105">{txt.nav.features}</a>
            <a href="#services" className="text-slate-700 hover:text-cyan-500 text-sm font-medium transition-all duration-200 hover:scale-105">{txt.nav.services}</a>
            <a href="#contact" className="text-slate-700 hover:text-cyan-500 text-sm font-medium transition-all duration-200 hover:scale-105">{txt.nav.contact}</a>
            
            {/* 언어 선택 */}
            <div className="flex items-center gap-1 text-sm border border-slate-200 rounded-full px-1 py-0.5">
              <button 
                onClick={() => setLang('ko')}
                className={`px-3 py-1 rounded-full transition-all duration-200 ${lang === 'ko' ? 'bg-cyan-500 text-white font-medium' : 'text-slate-500 hover:text-slate-700'}`}
              >
                한국어
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full transition-all duration-200 ${lang === 'en' ? 'bg-cyan-500 text-white font-medium' : 'text-slate-500 hover:text-slate-700'}`}
              >
                EN
              </button>
            </div>
            
            <button className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:from-cyan-300 hover:to-cyan-400 hover:scale-105 hover:shadow-md hover:shadow-cyan-400/30 hover:-translate-y-0.5 transition-all duration-200">
              {txt.nav.demo}
            </button>
          </div>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "x" : "menu"} className="w-6 h-6 text-slate-700" />
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-white px-6 py-4 space-y-4 border-t border-slate-100">
            <a href="#features" className="block text-slate-700">{txt.nav.features}</a>
            <a href="#services" className="block text-slate-700">{txt.nav.services}</a>
            <a href="#contact" className="block text-slate-700">{txt.nav.contact}</a>
            
            {/* 모바일 언어 선택 */}
            <div className="flex items-center gap-2 py-2">
              <button 
                onClick={() => setLang('ko')}
                className={`px-4 py-2 rounded-full text-sm transition-all ${lang === 'ko' ? 'bg-cyan-500 text-white font-medium' : 'bg-slate-100 text-slate-600'}`}
              >
                한국어
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`px-4 py-2 rounded-full text-sm transition-all ${lang === 'en' ? 'bg-cyan-500 text-white font-medium' : 'bg-slate-100 text-slate-600'}`}
              >
                English
              </button>
            </div>
            
            <button className="w-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-black px-5 py-2.5 rounded-full text-sm font-medium hover:from-cyan-300 hover:to-cyan-400 hover:scale-105 hover:shadow-md transition-all duration-200">
              {txt.nav.demo}
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section - 풀스크린 */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* 인트로 동영상 */}
        {showIntro && (
          <div 
            className={`absolute inset-0 z-20 bg-black flex items-center justify-center -mt-40 sm:mt-0 transition-opacity duration-500 ${introFading ? 'opacity-0' : 'opacity-100'}`}
          >
            <video 
              autoPlay 
              muted 
              playsInline
              className="w-[85%] sm:w-[70%] lg:w-[45%] h-auto object-contain"
            >
              <source src="/OrcaSwim.mp4" type="video/mp4" />
            </video>
            
            {/* 스킵 버튼 */}
            <button 
              onClick={() => {
                setIntroFading(true);
                setTimeout(() => setShowIntro(false), 300);
              }}
              className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 text-white/70 hover:text-white text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 border border-white/30 rounded-full hover:bg-white/10 transition-all z-30"
            >
              Skip
            </button>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-cyan-50/40 to-blue-50/30"/>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-200/40 rounded-full blur-3xl animate-pulse"/>
          <div className="absolute top-40 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}/>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}/>
        </div>
        
        <FloatingParticles />

        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm border border-slate-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-slate-700">{txt.hero.badge}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] leading-[1.15] mb-6" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              {txt.hero.title1}<br/>
              <span className="gradient-text">{txt.hero.title2}</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed max-w-md">
              <span className="font-semibold text-slate-800">{txt.hero.subtitle}</span><br/>
              {txt.hero.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="group relative bg-gradient-to-r from-cyan-400 to-cyan-500 text-black px-7 py-3.5 rounded-xl text-base font-bold hover:from-cyan-300 hover:to-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/40 hover:-translate-y-1 active:scale-100 transition-all duration-200 shadow-md flex items-center justify-center gap-2">
                <span className="relative">{txt.hero.cta1}</span>
                <Icon name="arrow" className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="group relative bg-white/80 backdrop-blur px-7 py-3.5 rounded-xl text-base font-semibold text-slate-700 hover:bg-white hover:scale-105 hover:shadow-lg hover:-translate-y-1 hover:text-cyan-600 active:scale-100 transition-all duration-200 shadow-md border border-slate-200 hover:border-cyan-400">
                <span className="relative">{txt.hero.cta2}</span>
              </button>
            </div>
          </div>
          
          {/* 히어로 이미지 - 스크롤 시 지느러미 → 범고래 전환 */}
          <div className="relative flex items-center justify-center min-h-[300px] lg:min-h-[400px] mt-8 lg:mt-0">
            <div className="absolute w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-gradient-to-br from-cyan-300/20 to-blue-400/20 rounded-full blur-3xl"/>
            
            {/* 모바일: 고래만 보이기 */}
            <div className="lg:hidden flex justify-center items-center">
              <img 
                src="/orca-hero.png" 
                alt="Orca" 
                className="drop-shadow-2xl w-64 sm:w-72"
              />
            </div>
            
            {/* 데스크탑: 지느러미 SVG만 보이기 (스크롤 전환 비활성화) */}
            <div className="absolute inset-0 hidden lg:flex justify-center items-center">
              <OrcaFinIllustration className="w-full max-w-sm relative z-10" />
            </div>
            
            {/* === 스크롤 전환 효과 (주석 처리됨) ===
            
            {/* 데스크탑: 지느러미 SVG (스크롤 전) */}
            {/*
            <div 
              className="absolute inset-0 hidden lg:flex justify-center items-center transition-all duration-700 ease-out"
              style={{ 
                opacity: scrollY < 150 ? 1 : 0,
                transform: scrollY < 150 ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-20deg)',
              }}
            >
              <OrcaFinIllustration className="w-full max-w-sm relative z-10" />
            </div>
            */}
            
            {/* 데스크탑: 범고래 이미지 (스크롤 후) */}
            {/*
            <div 
              className="absolute inset-0 hidden lg:flex justify-center items-center transition-all duration-700 ease-out"
              style={{ 
                opacity: scrollY >= 150 ? 1 : 0,
                transform: scrollY >= 150 ? 'scale(1) rotate(0deg) translateY(45px)' : 'scale(0.5) rotate(20deg)',
              }}
            >
              <div className="relative">
                <img 
                  src="/orca-hero.png" 
                  alt="Orca - 자산운용의 모든 것" 
                  className="drop-shadow-2xl w-[500px]"
                />
                {/* 바다 효과 */}
                {/*
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 sm:w-80 lg:w-96">
                  <svg viewBox="0 0 400 80" className="w-full">
                    <defs>
                      <linearGradient id="seaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1"/>
                      </linearGradient>
                      <filter id="seaGlow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                      </filter>
                    </defs>
                    <ellipse cx="200" cy="50" rx="180" ry="25" fill="url(#seaGradient)" filter="url(#seaGlow)">
                      <animate attributeName="rx" values="180;190;180" dur="3s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.6;0.8;0.6" dur="2s" repeatCount="indefinite"/>
                    </ellipse>
                    <path 
                      d="M20 40 Q60 25 100 40 Q140 55 180 40 Q220 25 260 40 Q300 55 340 40 Q380 25 400 40" 
                      stroke="#22d3ee" 
                      strokeWidth="2.5" 
                      fill="none" 
                      opacity="0.7"
                      filter="url(#seaGlow)"
                    >
                      <animate 
                        attributeName="d" 
                        values="M20 40 Q60 25 100 40 Q140 55 180 40 Q220 25 260 40 Q300 55 340 40 Q380 25 400 40;M20 40 Q60 55 100 40 Q140 25 180 40 Q220 55 260 40 Q300 25 340 40 Q380 55 400 40;M20 40 Q60 25 100 40 Q140 55 180 40 Q220 25 260 40 Q300 55 340 40 Q380 25 400 40" 
                        dur="3s" 
                        repeatCount="indefinite"
                      />
                    </path>
                    <path 
                      d="M0 50 Q50 35 100 50 Q150 65 200 50 Q250 35 300 50 Q350 65 400 50" 
                      stroke="#4FC3F7" 
                      strokeWidth="2" 
                      fill="none" 
                      opacity="0.5"
                    >
                      <animate 
                        attributeName="d" 
                        values="M0 50 Q50 35 100 50 Q150 65 200 50 Q250 35 300 50 Q350 65 400 50;M0 50 Q50 65 100 50 Q150 35 200 50 Q250 65 300 50 Q350 35 400 50;M0 50 Q50 35 100 50 Q150 65 200 50 Q250 35 300 50 Q350 65 400 50" 
                        dur="2.5s" 
                        repeatCount="indefinite"
                      />
                    </path>
                  </svg>
                </div>
              </div>
            </div>
            */}
            {/* === 스크롤 전환 효과 끝 === */}
          </div>
        </div>
        
        {/* 스크롤 힌트 */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500"
          style={{ opacity: scrollY < 50 ? 1 : 0 }}
        >
          <span className="text-slate-400 text-xs font-medium">{txt.hero.scroll}</span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* 파도 구분선 */}
      <section className="relative h-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#0e7490" stopOpacity="0.05"/>
            </linearGradient>
          </defs>
          {/* 뒤쪽 파도 */}
          <path fill="url(#waveGrad2)">
            <animate 
              attributeName="d" 
              dur="8s" 
              repeatCount="indefinite"
              values="M0,60 C360,100 720,20 1080,60 C1260,80 1380,40 1440,50 L1440,100 L0,100 Z;
                      M0,50 C360,20 720,80 1080,40 C1260,20 1380,60 1440,50 L1440,100 L0,100 Z;
                      M0,60 C360,100 720,20 1080,60 C1260,80 1380,40 1440,50 L1440,100 L0,100 Z"
            />
          </path>
          {/* 앞쪽 파도 */}
          <path fill="url(#waveGrad1)">
            <animate 
              attributeName="d" 
              dur="6s" 
              repeatCount="indefinite"
              values="M0,70 C240,40 480,90 720,60 C960,30 1200,80 1440,60 L1440,100 L0,100 Z;
                      M0,60 C240,90 480,40 720,70 C960,100 1200,50 1440,70 L1440,100 L0,100 Z;
                      M0,70 C240,40 480,90 720,60 C960,30 1200,80 1440,60 L1440,100 L0,100 Z"
            />
          </path>
        </svg>
      </section>

      {/* Client + Stats Section */}
      <section ref={statsRef} className="relative py-16 px-6 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          {/* 고객 대상 타이틀 */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-700 text-sm font-semibold mb-4">{txt.clients.badge}</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#0F172A] mb-3" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              {txt.clients.title}
            </h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              {txt.clients.subtitle}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {clients.map((client, i) => (
              <div key={i} className="group bg-slate-50 rounded-2xl px-5 py-3 flex items-center gap-3 shadow-sm hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-slate-100 hover:border-cyan-400 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300">
                  <Icon name={client.icon} className="w-5 h-5 text-white" />
                </div>
                <span className="text-slate-800 font-semibold group-hover:text-cyan-700 transition-colors">{client.title}</span>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: "실시간", label: "기준가 산출", icon: "⚡" },
              { value: "멀티", label: "매니저 운용", icon: "👥" },
              { value: "100%", label: "공매도 체크", icon: "✓" },
            ].map((stat, i) => (
              <div key={i} className={`text-center p-4 sm:p-6 rounded-2xl transition-all duration-700 ${countUp.realtime ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: `${i * 150}ms`}}>
                <div className="text-3xl sm:text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mb-2" style={{fontFamily: "'Space Grotesk', sans-serif"}}>
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4">WHY ORCA</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              왜 <span className="gradient-text">Orca</span>인가?
            </h2>
            <p className="text-slate-600 text-base max-w-lg mx-auto">
              자산운용사를 위한 실시간 통합 트레이딩 관리 시스템
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <div key={i} className="hover-lift bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-cyan-400 hover:shadow-2xl hover:bg-gradient-to-br hover:from-white hover:to-cyan-50 group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/10 transition-all duration-500"></div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-md group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-200">
                  <Icon name={feature.icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - 5개 모듈 */}
      <section id="services" className="relative py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-700 text-sm font-semibold mb-4">ORCA MODULES</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              시스템 구성
            </h2>
            <p className="text-slate-600 text-base max-w-lg mx-auto">
              자산운용의 전 과정을 하나의 플랫폼에서
            </p>
          </div>
          
          {/* 5개 모듈 카드 */}
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { 
                tag: "PMS", 
                title: "포트폴리오", 
                color: "from-cyan-500 to-cyan-600",
                items: ["실시간 기준가 관리", "멀티 매니저 지원", "펀드 마감/성과 분석"]
              },
              { 
                tag: "OMS", 
                title: "주문관리", 
                color: "from-blue-500 to-blue-600",
                items: ["주문 상계 처리", "리스크 관리", "주문 제약 위반 방지"]
              },
              { 
                tag: "EMS", 
                title: "주문집행", 
                color: "from-indigo-500 to-indigo-600",
                items: ["TWAP/VWAP 알고리즘", "Smart Order Routing", "거래 비용 최적화"]
              },
              { 
                tag: "SLBS", 
                title: "대차관리", 
                color: "from-violet-500 to-violet-600",
                items: ["차입/대여/대용 관리", "대차 허브 연동", "대차 프로세스 자동화"]
              },
              { 
                tag: "ETFS", 
                title: "ETF관리", 
                color: "from-purple-500 to-purple-600",
                items: ["Active ETF 운용", "실시간 PDF 전송", "설정환매/리콜 관리"]
              },
            ].map((module, i) => (
              <div key={i} className="hover-lift bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-2xl hover:border-cyan-400 relative overflow-hidden text-center cursor-pointer group hover:bg-gradient-to-br hover:from-white hover:to-cyan-50 transition-all duration-300">
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${module.color}`}/>
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-200`}>
                  <span className="text-white font-bold text-xs">{module.tag}</span>
                </div>
                
                <h3 className="text-base font-bold text-[#0F172A] mb-3">{module.title}</h3>
                <ul className="space-y-1.5">
                  {module.items.map((item, j) => (
                    <li key={j} className="text-slate-600 text-xs">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* 하단 추가 시스템 */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-cyan-200 transition-all duration-200 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xs">IPMS</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A]">내부 잔고 관리 시스템</h4>
                  <p className="text-slate-600 text-sm">차입/대여/대용 반영 실시간 잔고관리 · 공매도 체크 · 모든 거래 내역 기록</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-cyan-200 transition-all duration-200 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xs">MDS</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A]">실시간 시장 데이터</h4>
                  <p className="text-slate-600 text-sm">국내/해외 실시간 시세 · 기준가 실시간 반영 · 해외 자산 당일 반영</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 주문 흐름 아키텍처 섹션 */}
      <section className="relative py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-700 text-sm font-semibold mb-4">ARCHITECTURE</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              주문 흐름
            </h2>
            <p className="text-slate-600 text-base max-w-lg mx-auto">
              국내/해외 시장을 하나의 플랫폼에서 통합 관리
            </p>
          </div>
          
          {/* 탭 버튼 */}
          <div className="flex justify-center gap-4 mb-10">
            <button 
              onClick={() => setActiveTab('domestic')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${activeTab === 'domestic' ? 'bg-cyan-400 text-black shadow-lg scale-105' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              🇰🇷 국내 주문
            </button>
            <button 
              onClick={() => setActiveTab('overseas')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${activeTab === 'overseas' ? 'bg-indigo-500 text-white shadow-lg scale-105' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              🌏 해외 주문
            </button>
          </div>

          {/* 국내 주문 다이어그램 */}
          {activeTab === 'domestic' && (
            <div className="bg-gradient-to-br from-slate-50 via-white to-cyan-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
              {/* Row 1: 자산운용사 → Orca */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8">
                <div className="bg-white rounded-2xl px-6 sm:px-8 py-4 sm:py-5 shadow-lg border border-slate-200 text-center">
                  <div className="text-2xl sm:text-3xl mb-2">🏢</div>
                  <div className="font-bold text-slate-800 text-sm sm:text-base whitespace-nowrap">자산운용사</div>
                </div>
                
                <div className="flex flex-col items-center">
                  <span className="text-xs text-slate-400 mb-1">주문</span>
                  <div className="w-12 sm:w-20 h-1 bg-gradient-to-r from-slate-300 via-cyan-400 to-cyan-500 rounded-full"></div>
                  <div className="text-cyan-500 mt-1 rotate-90 sm:rotate-0">→</div>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl px-8 sm:px-10 py-5 sm:py-6 shadow-xl text-center">
                  <div className="text-white font-black text-xl sm:text-2xl">Orca</div>
                  <div className="text-cyan-100 text-xs sm:text-sm whitespace-nowrap">Trading System</div>
                </div>
              </div>

              {/* Row 2: 분기점 */}
              <div className="flex justify-center mb-8">
                <div className="w-1 h-8 sm:h-12 bg-gradient-to-b from-cyan-400 to-cyan-500 rounded-full"></div>
              </div>

              {/* Row 3: STP Hub */}
              <div className="flex justify-center items-center gap-8 mb-8">
                <div className="bg-cyan-100 rounded-2xl px-5 sm:px-6 py-3 sm:py-4 border-2 border-cyan-300 text-center shadow-md">
                  <div className="font-bold text-cyan-700 text-sm sm:text-base whitespace-nowrap">STP Hub</div>
                </div>
              </div>

              {/* Row 4: 세 갈래 라인 */}
              <div className="hidden sm:flex justify-center gap-4 mb-6">
                <div className="w-1/3 h-0.5 bg-gradient-to-r from-transparent via-cyan-300 to-cyan-400 rounded-full"></div>
                <div className="w-1/3 h-0.5 bg-gradient-to-l from-transparent via-cyan-300 to-cyan-400 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-200 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-white text-lg sm:text-xl">🏛️</span>
                  </div>
                  <div className="font-bold text-slate-800 text-sm sm:text-base whitespace-nowrap">증권사</div>
                  <div className="text-slate-400 text-xs mt-1 whitespace-nowrap">주문 처리</div>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-200 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-white text-lg sm:text-xl">📊</span>
                  </div>
                  <div className="font-bold text-slate-800 text-sm sm:text-base whitespace-nowrap">거래소</div>
                  <div className="text-slate-400 text-xs mt-1">체결</div>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-200 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-white text-lg sm:text-xl">📋</span>
                  </div>
                  <div className="font-bold text-slate-800 text-sm sm:text-base whitespace-nowrap">사무수탁사</div>
                  <div className="text-slate-400 text-xs mt-1 whitespace-nowrap">체결/잔고</div>
                </div>
              </div>
            </div>
          )}

          {/* 해외 주문 다이어그램 */}
          {activeTab === 'overseas' && (
            <div className="bg-gradient-to-br from-slate-50 via-white to-indigo-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
              {/* Row 1: 자산운용사 → Orca */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8">
                <div className="bg-white rounded-2xl px-6 sm:px-8 py-4 sm:py-5 shadow-lg border border-slate-200 text-center">
                  <div className="text-2xl sm:text-3xl mb-2">🏢</div>
                  <div className="font-bold text-slate-800 text-sm sm:text-base whitespace-nowrap">자산운용사</div>
                </div>
                
                <div className="flex flex-col items-center">
                  <span className="text-xs text-slate-400 mb-1">주문</span>
                  <div className="w-12 sm:w-20 h-1 bg-gradient-to-r from-slate-300 via-indigo-400 to-indigo-500 rounded-full"></div>
                  <div className="text-indigo-500 mt-1 rotate-90 sm:rotate-0">→</div>
                </div>
                
                <div className="bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl px-8 sm:px-10 py-5 sm:py-6 shadow-xl text-center">
                  <div className="text-white font-black text-xl sm:text-2xl">Orca</div>
                  <div className="text-indigo-100 text-xs sm:text-sm">Trading System</div>
                </div>
              </div>

              {/* Row 2: 두 갈래 분기 */}
              <div className="flex justify-center gap-16 sm:gap-32 mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-1 h-8 sm:h-10 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded-full"></div>
                  <span className="text-xs text-indigo-500 bg-indigo-50 px-2 py-1 rounded mt-1 font-medium">FIX</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-1 h-8 sm:h-10 bg-gradient-to-b from-violet-400 to-violet-500 rounded-full"></div>
                  <span className="text-xs text-violet-500 bg-violet-50 px-2 py-1 rounded mt-1 font-medium">EMSX</span>
                </div>
              </div>

              {/* Row 3: FixNet / EMSX */}
              <div className="flex justify-center gap-8 sm:gap-20 mb-8">
                <div className="bg-indigo-100 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 border-2 border-indigo-300 text-center shadow-md">
                  <div className="font-bold text-indigo-700 text-sm sm:text-base">FixNet</div>
                </div>
                <div className="bg-violet-100 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 border-2 border-violet-300 text-center shadow-md">
                  <div className="font-bold text-violet-700 text-sm sm:text-base">EMSX</div>
                  <div className="text-violet-400 text-xs">Bloomberg</div>
                </div>
              </div>

              {/* Row 4: 합류 */}
              <div className="hidden sm:flex justify-center gap-4 mb-6">
                <div className="w-1/3 h-0.5 bg-gradient-to-r from-transparent via-indigo-300 to-indigo-400 rounded-full"></div>
                <div className="w-1/3 h-0.5 bg-gradient-to-l from-transparent via-violet-300 to-violet-400 rounded-full"></div>
              </div>

              {/* Row 5: 증권사 → 거래소 */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-200 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-white text-lg sm:text-xl">🏛️</span>
                  </div>
                  <div className="font-bold text-slate-800 text-sm sm:text-base whitespace-nowrap">증권사</div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-full"></div>
                  <div className="text-indigo-500 mt-1 rotate-90 sm:rotate-0">→</div>
                </div>

                <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-4 sm:p-6 shadow-xl text-center">
                  <div className="text-2xl sm:text-3xl mb-2">🌍</div>
                  <div className="font-bold text-white text-sm sm:text-base whitespace-nowrap">해외 거래소</div>
                  <div className="text-slate-300 text-xs mt-1">NYSE · NASDAQ · LSE</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 서비스 운영 방식 섹션 */}
      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4">DEPLOYMENT</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              서비스 운영 방식
            </h2>
            <p className="text-slate-600 text-base max-w-lg mx-auto">
              고객사의 보안 정책과 인프라 환경에 맞춰 유연하게 선택
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: "cloud",
                title: "SaaS", 
                desc: "클라우드 기반 서비스",
                color: "from-cyan-500 to-blue-600",
                features: ["별도 인프라 구축 불필요", "빠른 도입 가능", "자동 업데이트 지원"]
              },
              { 
                icon: "server",
                title: "고객사 클라우드", 
                desc: "AWS · Azure · GCP",
                color: "from-blue-500 to-indigo-600",
                features: ["고객사 클라우드 환경 설치", "유연한 리소스 확장", "클라우드 보안 정책 적용"]
              },
              { 
                icon: "database",
                title: "온프레미스", 
                desc: "자체 데이터센터 설치",
                color: "from-indigo-500 to-violet-600",
                features: ["완전한 데이터 통제", "내부망 운영 가능", "자체 보안 정책 적용"]
              },
            ].map((option, i) => (
              <div key={i} className="hover-lift bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-cyan-400 hover:shadow-2xl text-center cursor-pointer group hover:bg-gradient-to-br hover:from-white hover:to-cyan-50 relative overflow-hidden transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/10 transition-all duration-500"></div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-200`}>
                  <Icon name={option.icon} className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-[#0F172A] mb-1">{option.title}</h3>
                <p className="text-cyan-600 font-medium text-sm mb-4">{option.desc}</p>
                
                <ul className="space-y-2">
                  {option.features.map((feature, j) => (
                    <li key={j} className="flex items-center justify-center gap-2 text-slate-600 text-sm">
                      <Icon name="check" className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-slate-500 text-sm">
              필요한 모듈만 선택적으로 도입하여 서비스 도입 부담을 줄이고, 기존 시스템을 순차적으로 대체할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* About Section - 회사 소개 */}
      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4">ABOUT ORCINUS</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              자산운용의 정점
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto">
              Orcinus는 국내 최고 수준의 자산운용 인프라를 제공합니다.<br/>
              복잡한 운용 환경에서도 안정적이고 효율적인 시스템을 경험하세요.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { value: "실시간", label: "기준가 업데이트", desc: "운용역/펀드별 즉시 반영" },
              { value: "멀티", label: "매니저 운용", desc: "매니저별 상계로 거래비용 감소" },
              { value: "100%", label: "공매도 체크", desc: "차입/대여/대용 반영 실시간 잔고관리" },
              { value: "Web", label: "어디서든 접속", desc: "모바일/PC 설치 불필요" },
            ].map((stat, i) => (
              <div key={i} className="group bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 hover:border-cyan-400 hover:shadow-2xl hover:scale-105 hover:-translate-y-3 transition-all duration-300 cursor-pointer hover:bg-gradient-to-br hover:from-white hover:to-cyan-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/10 transition-all duration-500"></div>
                <div className="text-3xl font-black text-[#0F172A] mb-1" style={{fontFamily: "'Space Grotesk', sans-serif"}}>
                  {stat.value}
                </div>
                <div className="text-cyan-600 font-semibold mb-2">{stat.label}</div>
                <div className="text-slate-500 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-slate-50 to-cyan-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-[#0F172A] mb-4 text-center">핵심 가치</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-3 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-200">
                  <Icon name="shield" className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-800 mb-1">위험 관리</h4>
                <p className="text-slate-600 text-sm">실시간 기준가 기반 시장 위험 관리<br/>공매도 법적 처벌 방지</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-3 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-200">
                  <Icon name="dollar" className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-800 mb-1">비용 절감</h4>
                <p className="text-slate-600 text-sm">Buy-side 주문 집행으로 거래 비용 최적화<br/>대차 비용 자동 최소화</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mx-auto mb-3 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-indigo-500/30 transition-all duration-200">
                  <Icon name="zap" className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-800 mb-1">업무 자동화</h4>
                <p className="text-slate-600 text-sm">주문/대차/백오피스 자동화<br/>운용 지원 인력 생산성 극대화</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-20 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-white to-cyan-50 rounded-3xl p-10 shadow-lg text-center relative overflow-hidden border border-slate-200">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"/>
            
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              {txt.cta.title}
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
              {txt.cta.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="group relative bg-gradient-to-r from-cyan-400 to-cyan-500 text-black px-8 py-4 rounded-xl text-lg font-bold hover:from-cyan-300 hover:to-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/40 hover:-translate-y-1 active:scale-100 transition-all duration-200 shadow-md">
                <span className="relative">{txt.hero.cta1}</span>
              </button>
              <button className="group relative bg-white px-8 py-4 rounded-xl text-lg font-semibold text-slate-700 hover:scale-105 hover:shadow-lg hover:-translate-y-1 hover:text-cyan-600 active:scale-100 transition-all duration-200 shadow-md border border-slate-200 hover:border-cyan-400">
                <span className="relative">{txt.hero.cta2}</span>
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
                Orca - 실시간 통합 자산운용 플랫폼
              </p>
            </div>
            <div className="grid grid-cols-3 gap-10 text-sm">
              <div>
                <h4 className="text-slate-900 font-bold mb-3">시스템</h4>
                <ul className="space-y-2 text-slate-500">
                  <li><a href="#" className="hover:text-cyan-600 transition-colors">PMS/OMS/EMS</a></li>
                  <li><a href="#" className="hover:text-cyan-600 transition-colors">대차/ETF관리</a></li>
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
                  <li>contact@orcaorcinus.com</li>
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
