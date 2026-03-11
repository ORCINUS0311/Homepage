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
  const [activeModule, setActiveModule] = useState(null);
  const [lang, setLang] = useState('ko');
  const [showIntro, setShowIntro] = useState(true);
  const [showLogo, setShowLogo] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  // 데모 신청 모달
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [demoForm, setDemoForm] = useState({ name: '', company: '', phone: '', email: '', message: '' });
  const [demoStatus, setDemoStatus] = useState('idle');
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwgquVhLfBEaIjWW6RxU2D6jZe3uOtwBcSusnB7hERUV_MGmB7f1wMDyvCyk7zL1sh3qw/exec';

  // 관리자 Google 로그인
  const GOOGLE_CLIENT_ID = '638764108484-njiob019mkiru7162897ha2abtaa5ddm.apps.googleusercontent.com';
  const ADMIN_EMAILS = ['seoeun7727@gmail.com'];
  const [adminUser, setAdminUser] = useState(null); // { name, email, picture }
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  // Google Identity Services 스크립트 로드
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: (response) => {
          const payload = JSON.parse(atob(response.credential.split('.')[1]));
          if (ADMIN_EMAILS.includes(payload.email)) {
            setAdminUser({ name: payload.name, email: payload.email, picture: payload.picture });
            setShowAdminLogin(false);
          } else {
            alert('관리자 계정이 아닙니다.');
          }
        },
      });
    };
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);
  
  // 스크롤 애니메이션 훅
  const useScrollAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );
      
      if (ref.current) {
        observer.observe(ref.current);
      }
      
      return () => observer.disconnect();
    }, []);
    
    return [ref, isVisible];
  };
  const [introFading, setIntroFading] = useState(false);

  // 다국어 텍스트
  const t = {
    ko: {
      nav: { features: '특징', services: '서비스', contact: '문의', demo: '데모 신청', disclosure: '공시' },
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
      nav: { features: 'Features', services: 'Services', contact: 'Contact', demo: 'Request Demo', disclosure: 'Disclosure' },
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

  // 페이지 전환 시 스크롤 초기화 + 애니메이션 재실행
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    // 홈으로 돌아올 때 스크롤 애니메이션 요소 초기화 후 재관찰
    setTimeout(() => {
      document.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale').forEach(el => {
        el.classList.remove('visible');
      });
      const observer = new IntersectionObserver(
        (entries) => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }),
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
      );
      document.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale').forEach(el => observer.observe(el));
    }, 50);
  }, [currentPage]);

  // 스크롤 애니메이션 옵저버
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    
    document.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale').forEach((el) => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
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

  // ─── 공시 게시판 ───────────────────────────────────────────────
  const [disclosureTab, setDisclosureTab] = useState('notice');
  const [selectedPost, setSelectedPost] = useState(null);
  const [disclosureData, setDisclosureData] = useState({ notice: [], general: [] });
  const [disclosureLoading, setDisclosureLoading] = useState(false);
  const [disclosureError, setDisclosureError] = useState(null);

  // Google Sheets 연동 설정
  // 1. Google Sheets 컬럼: A=type(notice/general), B=date, C=title, D=content, E=important(true/false)
  // 2. 시트를 '링크가 있는 모든 사용자에게 공개'로 설정
  // 3. 아래 SHEET_ID에 Google Sheet ID 입력 (URL의 /d/XXXXXX/edit 부분)
  const SHEET_ID = '13l5J2B2a91Zdq4UMsH8qUpTO-wL7Ri4s5hc5MS9_Kro';
  const SHEET_GID = '0';

  useEffect(() => {
    if (currentPage !== 'disclosure' || SHEET_ID === 'YOUR_GOOGLE_SHEET_ID') return;
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=${SHEET_GID}`;
    setDisclosureLoading(true);
    setDisclosureError(null);
    fetch(url)
      .then(res => res.text())
      .then(text => {
        const json = JSON.parse(text.replace(/^[^(]+\(/, '').replace(/\);?$/, ''));
        const rows = json.table.rows;
        const parsed = rows
          .filter(r => r.c && r.c[0] && r.c[0].v)
          .map((r, i) => ({
            id: i + 1,
            type: r.c[0]?.v || '',
            date: r.c[1]?.v || '',
            title: r.c[2]?.v || '',
            content: r.c[3]?.v || '',
            important: r.c[4]?.v === true || r.c[4]?.v === 'true',
          }));
        setDisclosureData({
          notice: parsed.filter(p => p.type === 'notice').reverse(),
          general: parsed.filter(p => p.type === 'general').reverse(),
        });
        setDisclosureLoading(false);
      })
      .catch(() => {
        setDisclosureError('데이터를 불러오는 중 오류가 발생했습니다.\ndev@orcaorcinus.com으로 문의해주세요.');
        setDisclosureLoading(false);
      });
  }, [currentPage]);

  // 데모신청 목록 (관리자용 - Apps Script로 읽기)
  const [demoList, setDemoList] = useState([]);
  const [demoListLoading, setDemoListLoading] = useState(false);
  const DEMO_SHEET_GID = ''; // 데모신청 시트 GID (자동으로 생성된 탭)

  useEffect(() => {
    if (disclosureTab !== 'demo' || !adminUser) return;
    setDemoListLoading(true);
    // gviz로 데모신청 시트 읽기 (시트명으로 조회)
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=데모신청`;
    fetch(url)
      .then(res => res.text())
      .then(text => {
        const json = JSON.parse(text.replace(/^[^(]+\(/, '').replace(/\);?$/, ''));
        const rows = json.table.rows;
        const parsed = rows
          .filter(r => r.c && r.c[0] && r.c[0].v)
          .map((r, i) => ({
            id: i + 1,
            date: r.c[0]?.v || '',
            name: r.c[1]?.v || '',
            company: r.c[2]?.v || '',
            phone: r.c[3]?.v || '',
            email: r.c[4]?.v || '',
            message: r.c[5]?.v || '',
          }));
        setDemoList(parsed.reverse());
        setDemoListLoading(false);
      })
      .catch(() => setDemoListLoading(false));
  }, [disclosureTab, adminUser]);

  const disclosurePosts = disclosureData[disclosureTab] || [];

  const handleDemoSubmit = async () => {
    if (!demoForm.name || !demoForm.company || !demoForm.email) return;
    setDemoStatus('loading');
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(demoForm),
      });
      setDemoStatus('success');
      setDemoForm({ name: '', company: '', phone: '', email: '', message: '' });
    } catch {
      setDemoStatus('error');
    }
  };

  // 관리자 로그인 모달
  const AdminLoginModal = () => {
    useEffect(() => {
      if (window.google) {
        window.google.accounts.id.renderButton(
          document.getElementById('google-signin-btn'),
          { theme: 'outline', size: 'large', text: 'signin_with', shape: 'pill', width: 280 }
        );
      }
    }, []);
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center px-4"
        onClick={(e) => { if (e.target === e.currentTarget) setShowAdminLogin(false); }}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowAdminLogin(false)} />
        <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm p-8 z-10 text-center">
          <button onClick={() => setShowAdminLogin(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 text-sm transition-colors">
            ✕
          </button>
          <div className="text-3xl mb-3">🔒</div>
          <h3 className="text-lg font-black text-slate-900 mb-1">관리자 로그인</h3>
          <p className="text-slate-400 text-xs mb-6">허용된 구글 계정으로만 접근 가능합니다</p>
          <div className="flex justify-center">
            <div id="google-signin-btn" />
          </div>
        </div>
      </div>
    );
  };

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showDemoModal) {
        setShowDemoModal(false);
        setDemoStatus('idle');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showDemoModal]);

  return (
    <div className={`min-h-screen bg-slate-50 overflow-x-hidden`}>
      {/* 데모 신청 모달 - 인라인 */}
      {showAdminLogin && <AdminLoginModal />}
      {showDemoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          onClick={(e) => { if (e.target === e.currentTarget) { setShowDemoModal(false); setDemoStatus('idle'); } }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => { setShowDemoModal(false); setDemoStatus('idle'); }} />
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 z-10">
            <button onClick={() => { setShowDemoModal(false); setDemoStatus('idle'); }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors text-slate-500 text-sm">
              ✕
            </button>
            {demoStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🐋</div>
                <h3 className="text-xl font-black text-slate-900 mb-2">신청이 완료되었습니다!</h3>
                <p className="text-slate-500 text-sm mb-6">담당자가 빠른 시일 내에 연락드리겠습니다.</p>
                <button onClick={() => { setShowDemoModal(false); setDemoStatus('idle'); }}
                  className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-black px-8 py-3 rounded-full text-sm font-semibold hover:from-cyan-300 hover:to-cyan-400 transition-all">
                  확인
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="text-cyan-500 text-xs font-bold tracking-widest uppercase">REQUEST DEMO</span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">데모 신청</h3>
                  <p className="text-slate-400 text-sm mt-1">담당자가 확인 후 연락드리겠습니다.</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-600 mb-1 block">이름 <span className="text-cyan-500">*</span></label>
                    <input type="text" placeholder="홍길동" value={demoForm.name}
                      onChange={e => setDemoForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-600 mb-1 block">회사명 <span className="text-cyan-500">*</span></label>
                    <input type="text" placeholder="(주) 오르시너스" value={demoForm.company}
                      onChange={e => setDemoForm(f => ({ ...f, company: e.target.value }))}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-600 mb-1 block">연락처</label>
                    <input type="text" placeholder="010-0000-0000" value={demoForm.phone}
                      onChange={e => setDemoForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-600 mb-1 block">이메일 <span className="text-cyan-500">*</span></label>
                    <input type="text" placeholder="example@company.com" value={demoForm.email}
                      onChange={e => setDemoForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-600 mb-1 block">문의 내용</label>
                    <textarea placeholder="도입 환경, 운용 규모, 궁금한 점 등을 자유롭게 작성해주세요."
                      value={demoForm.message}
                      onChange={e => setDemoForm(f => ({ ...f, message: e.target.value }))}
                      rows={3}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none" />
                  </div>
                </div>
                {demoStatus === 'error' && (
                  <p className="text-red-500 text-xs mt-2">전송 중 오류가 발생했습니다. 다시 시도해주세요.</p>
                )}
                <button onClick={handleDemoSubmit}
                  disabled={demoStatus === 'loading' || !demoForm.name || !demoForm.company || !demoForm.email}
                  className="w-full mt-5 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black py-3 rounded-full text-sm font-semibold hover:from-cyan-300 hover:to-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  {demoStatus === 'loading'
                    ? <><div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /> 전송 중...</>
                    : '데모 신청하기'}
                </button>
                <p className="text-center text-xs text-slate-300 mt-3">* 표시 항목은 필수입력입니다.</p>
              </>
            )}
          </div>
        </div>
      )}
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
        
        /* 스크롤 애니메이션 */
        .scroll-fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .scroll-fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .scroll-slide-left {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .scroll-slide-left.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .scroll-slide-right {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .scroll-slide-right.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .scroll-scale {
          opacity: 0;
          transform: scale(0.95);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .scroll-scale.visible {
          opacity: 1;
          transform: scale(1);
        }
        /* 순차 딜레이 */
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
        .delay-4 { transition-delay: 0.4s; }
        .delay-5 { transition-delay: 0.5s; }
        
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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-white/95 shadow-lg backdrop-blur-md' : currentPage === 'disclosure' ? 'bg-white/95 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* 로고/돌고래 토글 */}
          <div className="flex items-center gap-3">
            <button onClick={() => setCurrentPage('home')} className="hover:opacity-80 transition-opacity">
            {showLogo ? (
              <OrcinusLogo size="small" />
            ) : (
              <div className="flex items-center gap-2">
                <img src="/orca-hero.png" alt="Orca" className="w-8 h-8 object-contain" />
                <span className="font-bold text-slate-800">Orca</span>
              </div>
            )}
            </button>
            {/* 토글 버튼 */}
            <button 
              onClick={() => setShowLogo(!showLogo)}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
              title={showLogo ? "돌고래로 전환" : "로고로 전환"}
            >
              <span className="text-xs">{showLogo ? "🐋" : "✦"}</span>
            </button>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" onClick={() => setCurrentPage('home')} className="text-slate-700 hover:text-cyan-500 text-sm font-medium transition-all duration-200 hover:scale-105">{txt.nav.features}</a>
            <a href="#services" onClick={() => setCurrentPage('home')} className="text-slate-700 hover:text-cyan-500 text-sm font-medium transition-all duration-200 hover:scale-105">{txt.nav.services}</a>
            <a href="#about" onClick={() => setCurrentPage('home')} className="text-slate-700 hover:text-cyan-500 text-sm font-medium transition-all duration-200 hover:scale-105">회사소개</a>
            <a href="#contact" onClick={() => setCurrentPage('home')} className="text-slate-700 hover:text-cyan-500 text-sm font-medium transition-all duration-200 hover:scale-105">{txt.nav.contact}</a>
            <button onClick={() => setCurrentPage('disclosure')} className="text-slate-700 hover:text-cyan-500 text-sm font-medium transition-all duration-200 hover:scale-105">{txt.nav.disclosure}</button>
            
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
            
            <button onClick={() => setShowDemoModal(true)} className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:from-cyan-300 hover:to-cyan-400 hover:scale-105 hover:shadow-md hover:shadow-cyan-400/30 hover:-translate-y-0.5 transition-all duration-200">
              {txt.nav.demo}
            </button>
          </div>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "x" : "menu"} className="w-6 h-6 text-slate-700" />
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-white px-6 py-4 space-y-4 border-t border-slate-100">
            <a href="#features" onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block text-slate-700">{txt.nav.features}</a>
            <a href="#services" onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block text-slate-700">{txt.nav.services}</a>
            <a href="#about" onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block text-slate-700">회사소개</a>
            <a href="#contact" onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block text-slate-700">{txt.nav.contact}</a>
            <button onClick={() => { setCurrentPage('disclosure'); setMobileMenuOpen(false); }} className="block text-slate-700 text-left">{txt.nav.disclosure}</button>
            
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
            
            <button onClick={() => { setShowDemoModal(true); setMobileMenuOpen(false); }} className="w-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-black px-5 py-2.5 rounded-full text-sm font-medium hover:from-cyan-300 hover:to-cyan-400 hover:scale-105 hover:shadow-md transition-all duration-200">
              {txt.nav.demo}
            </button>
          </div>
        )}
      </nav>

      {/* 공시 페이지 */}
      {currentPage === 'disclosure' ? (
      <div className="min-h-screen bg-slate-50 pt-20" style={{fontFamily:"'Noto Sans KR', sans-serif"}}>
        {/* 헤더 배너 */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="absolute rounded-full bg-cyan-400"
                style={{ width: 180+i*70, height: 180+i*70, left:`${5+i*18}%`, top:'-50%', opacity:0.3 }} />
            ))}
          </div>
          <div className="relative z-10">
            <span className="inline-block text-cyan-400 text-xs font-bold tracking-widest uppercase border border-cyan-400/40 rounded-full px-4 py-1.5 mb-4">DISCLOSURE</span>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-2">공시 게시판</h1>
            <p className="text-slate-400 text-sm">Orcinus의 공지사항과 공시 정보를 확인하세요</p>
          </div>
          {/* 관리자 로그인/로그아웃 버튼 */}
          <div className="absolute top-4 right-6 z-20">
            {adminUser ? (
              <div className="flex items-center gap-2">
                <img src={adminUser.picture} alt="" className="w-7 h-7 rounded-full border-2 border-cyan-400" />
                <span className="text-white text-xs font-medium hidden sm:block">{adminUser.name}</span>
                <button onClick={() => setAdminUser(null)}
                  className="text-xs text-slate-400 hover:text-white border border-slate-600 rounded-full px-3 py-1 transition-colors">
                  로그아웃
                </button>
              </div>
            ) : (
              <button onClick={() => setShowAdminLogin(true)}
                className="text-xs text-slate-400 hover:text-cyan-400 border border-slate-600 hover:border-cyan-400/50 rounded-full px-4 py-1.5 transition-all">
                관리자 로그인
              </button>
            )}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-10">
          {/* 탭 */}
          <div className="flex gap-0 mb-8 border-b border-slate-200 justify-between items-end">
            <div className="flex">
              {[
                { key: 'notice', label: '공지사항', icon: '📢' },
                { key: 'general', label: '일반공시', icon: '📄' },
                ...(adminUser ? [{ key: 'demo', label: '데모신청', icon: '🔒' }] : []),
              ].map(tab => (
                <button key={tab.key}
                  onClick={() => { setDisclosureTab(tab.key); setSelectedPost(null); }}
                  className={`px-7 py-3 text-sm font-semibold transition-all duration-200 border-b-2 -mb-[2px] ${
                    disclosureTab === tab.key
                      ? 'border-cyan-500 text-cyan-600 bg-cyan-50/50'
                      : 'border-transparent text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 데모신청 탭 (관리자 전용) */}
          {disclosureTab === 'demo' ? (
            demoListLoading ? (
              <div className="text-center py-24 text-slate-400">
                <div className="inline-block w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-sm">불러오는 중...</p>
              </div>
            ) : demoList.length === 0 ? (
              <div className="text-center py-24 text-slate-400">
                <p className="text-4xl mb-4">📭</p>
                <p className="text-sm">아직 데모 신청이 없습니다.</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="bg-slate-800 px-6 py-3 flex items-center gap-2">
                  <span className="text-cyan-400 text-xs font-bold">🔒 관리자 전용</span>
                  <span className="text-slate-400 text-xs ml-auto">총 {demoList.length}건</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100">
                        <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 w-10">No.</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400">이름</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400">회사명</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400">연락처</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400">이메일</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 w-32">신청일시</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {demoList.map((item, i) => (
                        <tr key={item.id} className="hover:bg-cyan-50/40 transition-colors">
                          <td className="px-4 py-3 text-slate-400">{demoList.length - i}</td>
                          <td className="px-4 py-3 font-medium text-slate-800">{item.name}</td>
                          <td className="px-4 py-3 text-slate-600">{item.company}</td>
                          <td className="px-4 py-3 text-slate-600">{item.phone}</td>
                          <td className="px-4 py-3 text-slate-600">{item.email}</td>
                          <td className="px-4 py-3 text-slate-400 text-xs">{item.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          ) : selectedPost ? (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              <button onClick={() => setSelectedPost(null)}
                className="flex items-center gap-1 text-slate-500 hover:text-cyan-600 text-sm mb-6 transition-colors">
                ← 목록으로
              </button>
              {selectedPost.important && (
                <span className="inline-block bg-red-50 text-red-500 text-xs font-bold px-2 py-0.5 rounded mb-3">중요</span>
              )}
              <h2 className="text-xl font-bold text-slate-900 mb-2">{selectedPost.title}</h2>
              <p className="text-xs text-slate-400 mb-6 pb-6 border-b border-slate-100">{selectedPost.date}</p>
              <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap">{selectedPost.content}</div>
            </div>
          ) : disclosureLoading ? (
            <div className="text-center py-24 text-slate-400">
              <div className="inline-block w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-sm">불러오는 중...</p>
            </div>
          ) : disclosureError ? (
            <div className="text-center py-24 text-slate-400">
              <p className="text-4xl mb-4">⚠️</p>
              <p className="text-sm whitespace-pre-wrap">{disclosureError}</p>
            </div>
          ) : disclosurePosts.length === 0 ? (
            <div className="text-center py-24 text-slate-400">
              <p className="text-4xl mb-4">🐋</p>
              <p className="text-sm">등록된 게시글이 없습니다.</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 w-14">No.</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400">제목</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 w-28">날짜</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {disclosurePosts.map((post, i) => (
                    <tr key={post.id} onClick={() => setSelectedPost(post)}
                      className="hover:bg-cyan-50/60 cursor-pointer transition-colors">
                      <td className="px-6 py-4 text-sm text-slate-400">{disclosurePosts.length - i}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {post.important && <span className="bg-red-50 text-red-500 text-xs font-bold px-1.5 py-0.5 rounded">중요</span>}
                          <span className="text-sm font-medium text-slate-800 hover:text-cyan-600 transition-colors">{post.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-400">{post.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      ) : (
      <>

      {/* Hero Section - 풀스크린 */}
      <section className="relative min-h-0 lg:min-h-screen flex items-center overflow-hidden pb-8 lg:pb-0">
        {/* 인트로 동영상 */}
        {showIntro && (
          <div 
            className={`absolute inset-0 z-20 bg-black flex items-center justify-center transition-opacity duration-500 ${introFading ? 'opacity-0' : 'opacity-100'}`}
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

        <div className="relative max-w-6xl mx-auto px-6 pt-16 lg:pt-28 pb-4 lg:pb-16 lg:grid lg:grid-cols-2 gap-4 lg:gap-12 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm font-medium mb-4 lg:mb-6 shadow-sm border border-slate-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-slate-700">{txt.hero.badge}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] leading-[1.15] mb-4 lg:mb-6" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              {txt.hero.title1}<br/>
              <span className="gradient-text">{txt.hero.title2}</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-4 lg:mb-6 leading-relaxed max-w-md">
              <span className="font-semibold text-slate-800">{txt.hero.subtitle}</span><br/>
              {txt.hero.desc}
            </p>
            
            {/* 모바일: 돌고래 이미지 (설명과 버튼 사이) */}
            <div className="lg:hidden flex justify-center items-center my-4">
              <img 
                src="/orca-hero.png" 
                alt="Orca" 
                className="drop-shadow-2xl w-48 sm:w-56"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={() => setShowDemoModal(true)} className="group relative bg-gradient-to-r from-cyan-400 to-cyan-500 text-black px-7 py-3.5 rounded-xl text-base font-bold hover:from-cyan-300 hover:to-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/40 hover:-translate-y-1 active:scale-100 transition-all duration-200 shadow-md flex items-center justify-center gap-2">
                <span className="relative">{txt.hero.cta1}</span>
                <Icon name="arrow" className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="group relative bg-white/80 backdrop-blur px-7 py-3.5 rounded-xl text-base font-semibold text-slate-700 hover:bg-white hover:scale-105 hover:shadow-lg hover:-translate-y-1 hover:text-cyan-600 active:scale-100 transition-all duration-200 shadow-md border border-slate-200 hover:border-cyan-400">
                <span className="relative">{txt.hero.cta2}</span>
              </button>
            </div>
          </div>
          
          {/* 히어로 이미지 - 데스크탑만 */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[400px]">
            <div className="absolute w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-gradient-to-br from-cyan-300/20 to-blue-400/20 rounded-full blur-3xl"/>
            
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
        
        {/* 스크롤 힌트 - 데스크탑만 */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 transition-opacity duration-500"
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "실시간", label: "기준가 산출", icon: "⚡", color: "from-cyan-400 to-cyan-600" },
              { value: "멀티", label: "매니저 운용", icon: "👥", color: "from-blue-400 to-blue-600" },
              { value: "100%", label: "공매도 체크", icon: "✓", color: "from-indigo-400 to-indigo-600" },
              { value: "통합", label: "올인원 플랫폼", icon: "🔗", color: "from-violet-400 to-violet-600" },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center"
              >
                {/* 원형 카드 - 튀어오르는 애니메이션 */}
                <div 
                  className={`stat-circle relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br ${stat.color} flex flex-col items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300 ${countUp.realtime ? 'animate-bounce-in' : 'opacity-0 scale-50'}`}
                  style={{animationDelay: `${i * 150}ms`}}
                >
                  {/* 아이콘 */}
                  <span className="text-3xl sm:text-4xl mb-1">{stat.icon}</span>
                  {/* 값 */}
                  <span className="text-white text-xl sm:text-2xl font-black" style={{fontFamily: "'Space Grotesk', sans-serif"}}>
                    {stat.value}
                  </span>
                  
                  {/* 링 효과 */}
                  <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-ping-slow"></div>
                </div>
                
                {/* 라벨 */}
                <p 
                  className={`mt-4 text-slate-700 font-semibold text-sm sm:text-base ${countUp.realtime ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{animationDelay: `${i * 150 + 300}ms`}}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          
          <style>{`
            @keyframes bounceIn {
              0% {
                opacity: 0;
                transform: scale(0.3) translateY(50px);
              }
              50% {
                opacity: 1;
                transform: scale(1.1) translateY(-10px);
              }
              70% {
                transform: scale(0.9) translateY(5px);
              }
              100% {
                opacity: 1;
                transform: scale(1) translateY(0);
              }
            }
            @keyframes fadeUp {
              0% {
                opacity: 0;
                transform: translateY(10px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes pingSlow {
              0% {
                transform: scale(1);
                opacity: 0.3;
              }
              50% {
                transform: scale(1.1);
                opacity: 0.1;
              }
              100% {
                transform: scale(1);
                opacity: 0.3;
              }
            }
            .animate-bounce-in {
              animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            }
            .animate-fade-up {
              animation: fadeUp 0.4s ease-out forwards;
            }
            .animate-ping-slow {
              animation: pingSlow 2s ease-in-out infinite;
            }
          `}</style>
        </div>
      </section>

      {/* 슬로건 섹션 - 선 위주 파도 애니메이션 */}
      <section className="relative py-16 px-6 bg-white overflow-hidden">
        {/* 배경 파도 라인 애니메이션 */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute top-1/2 -translate-y-1/2 w-full h-48" viewBox="0 0 1440 200" preserveAspectRatio="none">
            {/* 파도 라인 1 */}
            <path 
              fill="none" 
              stroke="#22d3ee" 
              strokeWidth="2" 
              strokeOpacity="0.4"
            >
              <animate 
                attributeName="d" 
                dur="6s" 
                repeatCount="indefinite"
                values="M-100,100 C200,150 400,50 700,100 C1000,150 1200,50 1540,100;
                        M-100,100 C200,50 400,150 700,100 C1000,50 1200,150 1540,100;
                        M-100,100 C200,150 400,50 700,100 C1000,150 1200,50 1540,100"
              />
            </path>
            {/* 파도 라인 2 */}
            <path 
              fill="none" 
              stroke="#06b6d4" 
              strokeWidth="1.5" 
              strokeOpacity="0.3"
            >
              <animate 
                attributeName="d" 
                dur="8s" 
                repeatCount="indefinite"
                values="M-100,110 C300,60 500,140 800,90 C1100,40 1300,130 1540,80;
                        M-100,90 C300,140 500,60 800,110 C1100,160 1300,70 1540,120;
                        M-100,110 C300,60 500,140 800,90 C1100,40 1300,130 1540,80"
              />
            </path>
            {/* 파도 라인 3 */}
            <path 
              fill="none" 
              stroke="#0891b2" 
              strokeWidth="1" 
              strokeOpacity="0.2"
            >
              <animate 
                attributeName="d" 
                dur="10s" 
                repeatCount="indefinite"
                values="M-100,120 C250,170 450,70 750,120 C1050,170 1250,70 1540,110;
                        M-100,80 C250,30 450,130 750,80 C1050,30 1250,130 1540,90;
                        M-100,120 C250,170 450,70 750,120 C1050,170 1250,70 1540,110"
              />
            </path>
          </svg>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          {/* 메인 슬로건 */}
          <div className="space-y-2 mb-6">
            <p className="text-slate-400 text-sm tracking-widest slogan-line-1">CRAFTED BY</p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 slogan-line-2" style={{fontFamily: "'Space Grotesk', sans-serif"}}>
              <span className="text-cyan-500">Orcinus</span>
            </h2>
            <div className="flex items-center justify-center gap-4 slogan-line-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <span className="text-slate-400 text-lg">×</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black slogan-line-4" style={{fontFamily: "'Space Grotesk', sans-serif"}}>
              <span className="gradient-text">Orca</span>
            </h2>
          </div>
          
          {/* 서브 텍스트 */}
          <p className="text-slate-500 text-sm md:text-base slogan-sub">
            자산운용의 흐름을 읽는 힘
          </p>
        </div>
        
        <style>{`
          .slogan-line-1 {
            opacity: 0;
            animation: sloganSlideIn 0.6s ease-out 0.2s forwards;
          }
          .slogan-line-2 {
            opacity: 0;
            animation: sloganSlideIn 0.6s ease-out 0.4s forwards;
          }
          .slogan-line-3 {
            opacity: 0;
            animation: sloganSlideIn 0.6s ease-out 0.6s forwards;
          }
          .slogan-line-4 {
            opacity: 0;
            animation: sloganSlideIn 0.6s ease-out 0.8s forwards;
          }
          .slogan-sub {
            opacity: 0;
            animation: sloganSlideIn 0.6s ease-out 1s forwards;
          }
          @keyframes sloganSlideIn {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 scroll-fade-in">
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
              <div key={i} className={`scroll-fade-in delay-${(i % 4) + 1} hover-lift bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-cyan-400 hover:shadow-2xl hover:bg-gradient-to-br hover:from-white hover:to-cyan-50 group cursor-pointer relative overflow-hidden`}>
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


      {/* Services Section - 시스템 구성 */}
      <section id="services" className="relative py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 scroll-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-700 text-sm font-semibold mb-4">ORCA MODULES</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              시스템 구성
            </h2>
            <p className="text-slate-600 text-base max-w-lg mx-auto">
              자산운용의 전 과정을 하나의 플랫폼에서
            </p>
          </div>
          
          {/* 7개 모듈 카드 - 간결한 디자인 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { 
                id: "pms",
                tag: "PMS", 
                title: "포트폴리오 관리", 
                desc: "실시간 기준가 산출 및 펀드 성과 분석",
                color: "from-cyan-500 to-cyan-600",
                details: ["실시간 기준가 관리", "멀티 매니저 지원", "펀드 마감/성과 분석", "포트폴리오 리밸런싱", "벤치마크 비교 분석"]
              },
              { 
                id: "oms",
                tag: "OMS", 
                title: "주문 관리", 
                desc: "주문 생성부터 체결까지 통합 관리",
                color: "from-blue-500 to-blue-600",
                details: ["주문 상계 처리", "리스크 관리", "주문 제약 위반 방지", "배분 규칙 자동화", "컴플라이언스 체크"]
              },
              { 
                id: "ems",
                tag: "EMS", 
                title: "주문 집행", 
                desc: "알고리즘 트레이딩 및 최적 체결",
                color: "from-indigo-500 to-indigo-600",
                details: ["TWAP/VWAP 알고리즘", "Smart Order Routing", "거래 비용 최적화", "실시간 체결 모니터링", "TCA 분석"]
              },
              { 
                id: "slbs",
                tag: "SLBS", 
                title: "대차 관리", 
                desc: "차입/대여 통합 관리 시스템",
                color: "from-violet-500 to-violet-600",
                details: ["차입/대여/대용 관리", "대차 허브 연동", "대차 프로세스 자동화", "담보 관리", "리콜 처리"]
              },
              { 
                id: "etfs",
                tag: "ETFS", 
                title: "ETF 관리", 
                desc: "Active ETF 운용 특화 시스템",
                color: "from-purple-500 to-purple-600",
                details: ["Active ETF 운용", "실시간 PDF 전송", "설정환매/리콜 관리", "AP 연동", "NAV 실시간 계산"]
              },
              { 
                id: "ipms",
                tag: "IPMS", 
                title: "내부 잔고 관리", 
                desc: "실시간 잔고 및 공매도 체크",
                color: "from-slate-600 to-slate-700",
                details: ["실시간 잔고관리", "공매도 체크", "거래 내역 기록", "T+2 결제 관리", "잔고 불일치 알림"]
              },
              { 
                id: "mds",
                tag: "MDS", 
                title: "시장 데이터", 
                desc: "국내/해외 실시간 시세 제공",
                color: "from-emerald-500 to-emerald-600",
                details: ["국내/해외 실시간 시세", "기준가 실시간 반영", "해외 자산 당일 반영", "환율 정보", "지수 데이터"]
              },
            ].map((module, i) => (
              <div 
                key={i} 
                onClick={() => setActiveModule(module)}
                className={`scroll-scale delay-${(i % 4) + 1} group bg-white rounded-2xl p-5 shadow-sm border border-slate-200 hover:shadow-xl hover:border-transparent hover:-translate-y-2 cursor-pointer relative overflow-hidden transition-all duration-300`}
              >
                {/* 상단 컬러 바 */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${module.color} group-hover:h-1.5 transition-all duration-300`}/>
                
                {/* 태그 */}
                <span className={`inline-block text-xs font-black bg-gradient-to-r ${module.color} bg-clip-text text-transparent mb-2`}>
                  {module.tag}
                </span>
                
                {/* 타이틀 */}
                <h3 className="text-base font-bold text-[#0F172A] mb-2 group-hover:text-cyan-600 transition-colors">
                  {module.title}
                </h3>
                
                {/* 한 줄 설명 */}
                <p className="text-slate-500 text-sm line-clamp-2">{module.desc}</p>
                
                {/* 더보기 아이콘 */}
                <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                  <span className="text-slate-400 group-hover:text-cyan-600 text-sm">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 모듈 상세 모달 */}
      {activeModule && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setActiveModule(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 상단 컬러 바 */}
            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${activeModule.color}`}/>
            
            {/* 닫기 버튼 */}
            <button 
              onClick={() => setActiveModule(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            >
              <span className="text-slate-500">✕</span>
            </button>
            
            {/* 헤더 */}
            <div className="mb-6">
              <span className={`inline-block text-sm font-black bg-gradient-to-r ${activeModule.color} bg-clip-text text-transparent mb-2`}>
                {activeModule.tag}
              </span>
              <h3 className="text-2xl font-bold text-[#0F172A]">{activeModule.title}</h3>
              <p className="text-slate-500 mt-2">{activeModule.desc}</p>
            </div>
            
            {/* 기능 리스트 */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">주요 기능</h4>
              <ul className="space-y-2">
                {activeModule.details.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-slate-700">
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeModule.color}`}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 문의 버튼 */}
            <button className={`mt-8 w-full py-3 rounded-xl bg-gradient-to-r ${activeModule.color} text-white font-semibold hover:opacity-90 transition-opacity`}>
              상세 문의하기
            </button>
          </div>
        </div>
      )}


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

      {/* 회사 소개 섹션 - 토스/카카오 스타일 */}
      <section id="about" className="relative py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
        {/* 배경 장식 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* 헤더 */}
          <div className="text-center mb-20 scroll-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-semibold mb-6">ABOUT ORCINUS</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              자산운용의 미래를<br/>함께 만들어갑니다
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Orcinus는 자산운용사가 더 나은 투자 결정을 내릴 수 있도록<br className="hidden md:block"/>
              기술로 혁신합니다
            </p>
          </div>
          
          {/* 미션 & 비전 */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="scroll-slide-left bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-colors">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                자산운용사의 복잡한 업무를 단순화하고, 실시간 데이터 기반의 
                의사결정을 지원하여 투자 성과를 극대화합니다.
              </p>
            </div>
            <div className="scroll-slide-right bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-colors">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔭</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                대한민국을 넘어 글로벌 자산운용 기술의 표준이 되어, 
                금융 시장의 효율성과 투명성을 높입니다.
              </p>
            </div>
          </div>
          
          {/* 핵심 가치 - 가로 스크롤 */}
          <div className="mb-20 scroll-fade-in">
            <h3 className="text-xl font-bold text-white mb-8 text-center">Core Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "⚡", title: "Speed", desc: "빠른 실행과 대응" },
                { icon: "🔒", title: "Trust", desc: "신뢰할 수 있는 시스템" },
                { icon: "🔬", title: "Innovation", desc: "끊임없는 기술 혁신" },
                { icon: "🤝", title: "Partnership", desc: "고객과 함께 성장" },
              ].map((value, i) => (
                <div key={i} className={`scroll-scale delay-${i + 1} bg-white/5 rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 transition-colors`}>
                  <span className="text-3xl mb-3 block">{value.icon}</span>
                  <h4 className="text-white font-bold mb-1">{value.title}</h4>
                  <p className="text-slate-400 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* 연혁 타임라인 */}
          <div className="mb-20 scroll-fade-in">
            <h3 className="text-xl font-bold text-white mb-8 text-center">History</h3>
            <div className="relative">
              {/* 중앙 라인 */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500 hidden md:block"></div>
              
              <div className="space-y-8">
                {[
                  { year: "2024", title: "Orca 정식 런칭", desc: "자산운용사 대상 통합 트레이딩 시스템 출시" },
                  { year: "2023", title: "Orcinus 설립", desc: "금융 IT 전문가들이 모여 회사 설립" },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="text-cyan-400 font-bold text-lg">{item.year}</span>
                      <h4 className="text-white font-bold text-xl mt-1">{item.title}</h4>
                      <p className="text-slate-400 mt-2">{item.desc}</p>
                    </div>
                    <div className="hidden md:flex w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900 z-10"></div>
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* 팀 소개 */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">우리 팀</h3>
            <p className="text-slate-400 mb-8">
              금융과 기술의 전문가들이 함께합니다
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              {[
                { role: "CEO", expertise: "자산운용 20년" },
                { role: "CTO", expertise: "금융IT 15년" },
                { role: "CPO", expertise: "트레이딩 시스템 전문" },
              ].map((member, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10 min-w-[150px]">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <h4 className="text-white font-bold">{member.role}</h4>
                  <p className="text-slate-400 text-sm mt-1">{member.expertise}</p>
                </div>
              ))}
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
              <button onClick={() => setShowDemoModal(true)} className="group relative bg-gradient-to-r from-cyan-400 to-cyan-500 text-black px-8 py-4 rounded-xl text-lg font-bold hover:from-cyan-300 hover:to-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/40 hover:-translate-y-1 active:scale-100 transition-all duration-200 shadow-md">
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
                  <li>dev@orcaorcinus.com</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-200 pt-6 text-center text-slate-400 text-sm">
            © 2026 Orcinus. All rights reserved.
          </div>
        </div>
      </footer>
      </>
      )}
    </div>
  );
}
