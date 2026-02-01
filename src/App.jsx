import React, { useState, useEffect, useRef } from 'react';

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
    database: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    globe: <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  };
  return icons[name] || null;
};

// Orca Fin Illustration
const OrcaFinIllustration = ({ className = "", light = false }) => {
  const finColor = light ? "#06B6D4" : "#1E3A5F";
  const waveColor = light ? "#0891B2" : "#4FC3F7";
  
  return (
    <svg className={className} viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
      {/* 바닥 그림자 */}
      <ellipse cx="200" cy="450" rx="150" ry="30" fill="#4FC3F7" opacity="0.3">
        <animate attributeName="rx" values="150;160;150" dur="3s" repeatCount="indefinite"/>
      </ellipse>
      {/* 지느러미 본체 */}
      <path 
        d="M120 450 Q140 250 200 80 Q210 60 220 80 Q280 250 300 450 Z" 
        fill={finColor}
      />
      {/* 지느러미 하이라이트 */}
      <path 
        d="M180 450 Q190 280 200 120 Q205 100 210 120 Q220 280 230 450 Z" 
        fill={light ? "#22D3EE" : "#2D4A6F"}
        opacity="0.5"
      />
      {/* 아래쪽 물결 */}
      <path 
        d="M80 430 Q140 410 200 430 Q260 450 320 430" 
        stroke={waveColor} 
        strokeWidth="3" 
        fill="none" 
        strokeLinecap="round"
      >
        <animate attributeName="d" dur="4s" repeatCount="indefinite" values="
          M80 430 Q140 410 200 430 Q260 450 320 430;
          M80 435 Q140 455 200 435 Q260 415 320 435;
          M80 430 Q140 410 200 430 Q260 450 320 430
        "/>
      </path>
      {/* 물방울 1 */}
      <circle cx="150" cy="380" r="4" fill="#4FC3F7" opacity="0.4">
        <animate attributeName="cy" values="380;320;260" dur="4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.4;0.2;0" dur="4s" repeatCount="indefinite"/>
      </circle>
      {/* 물방울 2 */}
      <circle cx="250" cy="400" r="3" fill="#4FC3F7" opacity="0.3">
        <animate attributeName="cy" values="400;340;280" dur="5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.3;0.15;0" dur="5s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );
};

export default function OrcinusLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('domestic');
  const [activeModule, setActiveModule] = useState(null);
  const [lang, setLang] = useState('ko');
  const [showIntro, setShowIntro] = useState(true);
  const [showLogo, setShowLogo] = useState(true); // true: 로고, false: 돌고래
  
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
      nav: { features: '특징', services: '서비스', contact: '문의', demo: '데모 신청', about: '회사소개' },
      hero: {
        badge: 'Orca - 실시간 통합 자산운용 플랫폼',
        title1: '자산운용의 모든 것,',
        title2: '하나의 플랫폼에서.',
        subtitle: 'PMS · OMS · EMS · SLBS · IPMS',
        desc: '실시간 기준가부터 공매도 체크까지, 올인원 솔루션.',
        cta1: '데모 신청하기',
        cta2: '서비스 소개서',
        scroll: '스크롤하여 Orca를 만나보세요',
        orcinusBadge: 'Orcinus - 금융 IT 전문 기업',
        orcinusTitle1: '자산운용의 미래를',
        orcinusTitle2: '함께 만듭니다',
        orcinusDesc: '금융 IT 전문가들이 만든 자산운용 솔루션 기업입니다.'
      },
      stats: {
        realtime: '실시간', realtimeLabel: '기준가 산출',
        multi: '멀티', multiLabel: '매니저 운용',
        check: '실시간', checkLabel: '공매도 체크'
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
        subtitle: '자산운용의 전 과정을 하나의 플랫폼에서',
        selective: '필요한 모듈만',
        selectiveHighlight: '선택적 적용',
        selectiveDesc: '모든 모듈을 한꺼번에 도입할 필요 없습니다. 비즈니스 필요에 따라 원하는 모듈만 선택하여 시작하고, 단계적으로 확장하세요.',
        example1: 'PMS만 도입',
        example1Desc: '기준가 산출부터 시작',
        example2: 'PMS + OMS + EMS',
        example2Desc: '투자결정부터 체결까지 완전 자동화',
        example3: 'OMS + EMS 조합',
        example3Desc: '주문부터 체결까지 일원화',
        example4: 'PMS + SLBS',
        example4Desc: '포트폴리오 + 대차관리',
        example5: '맞춤형 구성',
        example5Desc: '고객사 니즈에 맞춘 커스터마이징',
        basic: '기본',
        popular: '인기',
        custom: '사용자화',
        synergy: '전체 통합 시 시너지 극대화',
        stepExpand: '단계별 확장 가능'
      },
      structure: {
        badge: 'SYSTEM ARCHITECTURE',
        title: '통합 시스템 구조',
        subtitle: '투자 결정부터 체결까지, 하나의 흐름으로 연결됩니다',
        pms: '포트폴리오 관리 · 기준가 산출',
        oms: '주문 생성 · 리스크 체크 · 배분',
        ems: '알고리즘 트레이딩 · 최적 체결',
        slbs: '대차 관리',
        slbsDesc: '차입/대여/대용 통합 관리',
        ipms: '내부 잔고 관리',
        ipmsDesc: '실시간 잔고 · 공매도 체크',
        connected: '모든 모듈은 실시간 데이터 연동으로 일관된 정보를 제공합니다'
      },
      etf: {
        badge: 'ETF SYSTEM',
        title: 'Active & Passive ETF 운용 시스템',
        subtitle: '복잡한 ETF 운용 업무를 자동화하고, 실시간으로 관리하세요',
        passive: 'Passive ETF',
        passiveType: '인덱스 추종',
        passiveF1: '벤치마크 추적 오차 최소화',
        passiveF2: '리밸런싱 자동화',
        passiveF3: 'PDF 자동 생성 및 전송',
        active: 'Active ETF',
        activeType: '초과 수익 추구',
        activeF1: '실시간 PDF 전송 (AP 연동)',
        activeF2: '설정/환매 실시간 처리',
        activeF3: '대여 리콜 자동 관리',
        pdf: 'PDF 자동화',
        pdfDesc: 'Portfolio Deposit File 자동 생성 및 전송',
        inav: 'iNAV 실시간',
        inavDesc: '장중 순자산가치 실시간 계산',
        cr: '설정/환매',
        crDesc: 'Creation & Redemption 자동 처리',
        ap: 'AP 연동',
        apDesc: '지정참가회사 실시간 데이터 교환',
        sme: '이제 중소형 운용사도 ETF 운용이 가능합니다',
        smeDesc: '복잡한 PDF 관리, 실시간 NAV 계산, AP 연동까지 ETF 운용의 높은 진입장벽을 Orca가 낮춰드립니다.',
        smeTag1: '전담 인력 최소화',
        smeTag2: '시스템 구축비 절감',
        smeTag3: '빠른 시장 진입',
        bottom: 'ETF 운용의 모든 것, Orca 하나로',
        bottomDesc: 'PDF 관리부터 NAV 계산까지 자동화'
      },
      efficiency: {
        badge: 'EFFICIENCY',
        title: '운영 효율성',
        titleHighlight: '극대화',
        subtitle: '펀드/일임, 수탁고가 늘어나도 관리비용은 최소화',
        yAxis: '관리 비용',
        xAxis: '펀드/일임 · 수탁고',
        many: '많음',
        few: '적음',
        existing: '기존 방식',
        existingDesc: '비용 비례 증가',
        orca: 'Orca 도입',
        orcaDesc: '효율적 관리',
        saving: '비용 절감',
        result: '관리 비용 절감',
        point1: '자동화로 반복 업무 제거',
        point2: '실시간 모니터링으로 효율 UP',
        point3: '규모 확장에도 안정적 운영'
      },
      momentum: {
        badge: 'FLYWHEEL EFFECT',
        title: '한번 돌기 시작하면',
        titleHighlight: '멈추지 않습니다',
        subtitle: '',
        item1: '15년+ 노하우',
        item2: '금융 네트워크',
        item3: '빠른 도메인 이해',
        item4: '맞춤 커스터마이징',
        item5: '신뢰 구축',
        center: 'FLYWHEEL',
        centerSub: '선순환',
        bottomMsg: '한번 구축하면 오래 쓰는 시스템, 그래서 처음이 중요합니다'
      },
      deploy: {
        badge: 'DEPLOYMENT',
        title: '서비스 운영 방식',
        subtitle: '고객사 환경에 맞는 유연한 배포 옵션',
        saas: 'SaaS',
        saasTitle: 'Orcinus Cloud',
        saasDesc: '클라우드 기반 서비스',
        saasF1: '별도 인프라 구축 불필요',
        saasF2: '빠른 도입 가능',
        saasF3: '자동 업데이트 지원',
        private: 'Private',
        privateTitle: '고객사 클라우드',
        privateDesc: 'AWS/Azure/GCP 설치',
        privateF1: '고객사 클라우드 환경 설치',
        privateF2: '유연한 리소스 확장',
        privateF3: '클라우드 보안 정책 적용',
        onprem: 'On-Premise',
        onpremTitle: '자체 서버',
        onpremDesc: '고객사 데이터센터 설치',
        onpremF1: '고객사 서버에 직접 설치',
        onpremF2: '완전한 데이터 통제',
        onpremF3: '내부망 운영 가능'
      },
      aboutSection: {
        badge: 'ABOUT ORCINUS',
        title: '자산운용의 새로운 기준',
        desc1: 'Orcinus는 국내 최고 수준의 자산운용 인프라를 제공합니다.',
        desc2: '복잡한 운용 환경에서도 안정적이고 효율적인 시스템을 경험하세요.',
        missionTitle: 'Mission',
        missionDesc: '자산운용사의 업무를 더 단순하고 효율적으로 만들어, 더 나은 투자 결정에 집중할 수 있도록 지원합니다.',
        visionTitle: 'Vision',
        visionDesc: '글로벌 자산운용 기술의 표준이 되어, 시장의 효율성과 투명성 향상에 기여합니다.',
        speed: 'Speed',
        speedDesc: '빠른 실행과 대응',
        trust: 'Trust',
        trustDesc: '신뢰할 수 있는 시스템',
        innovation: 'Innovation',
        innovationDesc: '끊임없는 기술 혁신',
        partnership: 'Partnership',
        partnershipDesc: '고객과 함께 성장',
        historyTitle: 'History',
        history1Year: '2026.4',
        history1Title: 'Orcinus 설립 & Orca 런칭',
        history1Desc: '금융 IT 전문가들이 모여 회사 설립, 통합 트레이딩 시스템 출시',
        storyTitle: '자산운용의 미래를 함께 만들어갑니다',
        storyDesc: 'Orcinus는 자산운용사가 더 나은 투자 결정을 내릴 수 있도록 최고의 기술과 서비스를 제공합니다.',
        teamTitle: '우리 팀',
        teamDesc: '금융과 기술의 전문가들이 함께합니다'
      },
      clients: {
        badge: 'WHO WE SERVE',
        title: '금융의 모든 곳이',
        titleHighlight: '우리의 고객입니다',
        subtitle: '자산운용사부터 증권사까지, 금융과 관련된 곳이라면 어디든',
        network: '금융 네트워크',
        networkDesc: '증권사, 운용사, 수탁사 등 폭넓은 금융권 협력 관계',
        experience: '다양한 업무 경험',
        experienceDesc: 'PMS, OMS, EMS, 대차, ETF 등 금융 전 영역 구축 경험',
        speed: '빠른 도메인 이해',
        speedDesc: '복잡한 금융 업무도 빠르게 파악하고 설계',
        solution: '불가능을 가능으로',
        solutionDesc: '안 된다고 생각한 것도 방법을 찾아 해결',
        bottomMsg: '금융 IT의 모든 것'
      },
      slogan: '자산운용의 흐름을 읽는 힘',
      clientTypes: {
        asset: '자산운용사',
        invest: '일임업자',
        sma: 'SMA',
        securities: '증권사',
        more: '그 외 금융기관'
      },
      cta: {
        title: 'Orca와 함께 시작하세요',
        subtitle: '데모를 신청하시면 담당자가 연락드립니다.',
        btn1: '데모 신청하기',
        btn2: '서비스 소개서'
      },
      footer: {
        company: '(주) Orcinus',
        address: '서울특별시 영등포구',
        copy: '© 2026 Orcinus. All rights reserved.',
        product: '제품',
        modules: '모듈 소개',
        pricing: '요금제',
        companyMenu: '회사',
        aboutUs: '회사소개',
        careers: '채용',
        contactMenu: '문의'
      }
    },
    en: {
      nav: { features: 'Features', services: 'Services', contact: 'Contact', demo: 'Request Demo', about: 'About' },
      hero: {
        badge: 'Orca - Real-time Integrated Asset Management Platform',
        title1: 'Everything in Asset Management,',
        title2: 'In One Platform.',
        subtitle: 'PMS · OMS · EMS · SLBS · IPMS',
        desc: 'All-in-one solution from real-time NAV to short selling check.',
        cta1: 'Request Demo',
        cta2: 'Brochure',
        scroll: 'Scroll to meet Orca',
        orcinusBadge: 'Orcinus - Financial IT Expert',
        orcinusTitle1: 'Building the Future',
        orcinusTitle2: 'of Asset Management',
        orcinusDesc: 'Asset management solution company built by financial IT experts.'
      },
      stats: {
        realtime: 'Real-time', realtimeLabel: 'NAV Calculation',
        multi: 'Multi', multiLabel: 'Manager Support',
        check: 'Real-time', checkLabel: 'Short Sell Check'
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
        subtitle: 'Entire asset management process in one platform',
        selective: 'Select Only',
        selectiveHighlight: 'What You Need',
        selectiveDesc: 'No need to adopt all modules at once. Choose only the modules you need based on your business requirements, and expand step by step.',
        example1: 'PMS Only',
        example1Desc: 'Start with NAV calculation',
        example2: 'PMS + OMS + EMS',
        example2Desc: 'Full automation from decision to execution',
        example3: 'OMS + EMS Combo',
        example3Desc: 'Unified order to execution',
        example4: 'PMS + SLBS',
        example4Desc: 'Portfolio + Securities Lending',
        example5: 'Custom Build',
        example5Desc: 'Tailored to your specific needs',
        basic: 'Basic',
        popular: 'Popular',
        custom: 'Custom',
        synergy: 'Maximum synergy with full integration',
        stepExpand: 'Gradual expansion available'
      },
      structure: {
        badge: 'SYSTEM ARCHITECTURE',
        title: 'Integrated System Structure',
        subtitle: 'From investment decision to execution, connected in one flow',
        pms: 'Portfolio Management · NAV Calculation',
        oms: 'Order Creation · Risk Check · Allocation',
        ems: 'Algorithmic Trading · Best Execution',
        slbs: 'Securities Lending',
        slbsDesc: 'Integrated Lending/Borrowing Management',
        ipms: 'Internal Position Mgmt',
        ipmsDesc: 'Real-time Position · Short Sell Check',
        connected: 'All modules provide consistent information through real-time data integration'
      },
      etf: {
        badge: 'ETF SYSTEM',
        title: 'Active & Passive ETF Management System',
        subtitle: 'Automate complex ETF operations and manage in real-time',
        passive: 'Passive ETF',
        passiveType: 'Index Tracking',
        passiveF1: 'Minimize benchmark tracking error',
        passiveF2: 'Automated rebalancing',
        passiveF3: 'Auto PDF generation & delivery',
        active: 'Active ETF',
        activeType: 'Alpha Generation',
        activeF1: 'Real-time PDF delivery (AP integration)',
        activeF2: 'Real-time creation/redemption',
        activeF3: 'Automated lending recall',
        pdf: 'PDF Automation',
        pdfDesc: 'Auto generation & delivery of Portfolio Deposit File',
        inav: 'Real-time iNAV',
        inavDesc: 'Intraday NAV calculation',
        cr: 'Creation/Redemption',
        crDesc: 'Automated C&R processing',
        ap: 'AP Integration',
        apDesc: 'Real-time data exchange with Authorized Participants',
        sme: 'Now small & mid-sized managers can operate ETFs',
        smeDesc: 'Complex PDF management, real-time NAV calculation, AP integration - Orca lowers the high barriers to ETF operations.',
        smeTag1: 'Minimize dedicated staff',
        smeTag2: 'Reduce system costs',
        smeTag3: 'Fast market entry',
        bottom: 'Everything for ETF Operations, All in Orca',
        bottomDesc: 'Automated from PDF management to NAV calculation'
      },
      efficiency: {
        badge: 'EFFICIENCY',
        title: 'Operational Efficiency',
        titleHighlight: 'Maximized',
        subtitle: 'Keep management costs minimal even as funds and AUM grow',
        yAxis: 'Management Cost',
        xAxis: 'Funds · AUM',
        many: 'High',
        few: 'Low',
        existing: 'Traditional',
        existingDesc: 'Linear cost increase',
        orca: 'With Orca',
        orcaDesc: 'Efficient management',
        saving: 'Cost Savings',
        result: 'Management cost reduction',
        point1: 'Automation eliminates repetitive tasks',
        point2: 'Real-time monitoring boosts efficiency',
        point3: 'Stable operation even at scale'
      },
      momentum: {
        badge: 'FLYWHEEL EFFECT',
        title: 'Once it starts spinning,',
        titleHighlight: 'it never stops',
        subtitle: '',
        item1: '15+ Years Know-how',
        item2: 'Financial Network',
        item3: 'Rapid Domain Grasp',
        item4: 'Custom Solutions',
        item5: 'Trust Building',
        center: 'FLYWHEEL',
        centerSub: 'Virtuous Cycle',
        bottomMsg: 'Systems built once, used for years - that\'s why the beginning matters'
      },
      deploy: {
        badge: 'DEPLOYMENT',
        title: 'Deployment Options',
        subtitle: 'Flexible deployment options for your environment',
        saas: 'SaaS',
        saasTitle: 'Orcinus Cloud',
        saasDesc: 'Cloud-based service',
        saasF1: 'No infrastructure needed',
        saasF2: 'Quick deployment',
        saasF3: 'Auto updates',
        private: 'Private',
        privateTitle: 'Client Cloud',
        privateDesc: 'AWS/Azure/GCP installation',
        privateF1: 'Install on client cloud',
        privateF2: 'Flexible resource scaling',
        privateF3: 'Cloud security policies',
        onprem: 'On-Premise',
        onpremTitle: 'Self-hosted',
        onpremDesc: 'Client datacenter installation',
        onpremF1: 'Direct server installation',
        onpremF2: 'Complete data control',
        onpremF3: 'Internal network operation'
      },
      aboutSection: {
        badge: 'ABOUT ORCINUS',
        title: 'The New Standard in Asset Management',
        desc1: 'Orcinus provides best-in-class asset management infrastructure.',
        desc2: 'Experience stable and efficient systems even in complex environments.',
        missionTitle: 'Mission',
        missionDesc: 'We simplify asset management operations, enabling better investment decisions.',
        visionTitle: 'Vision',
        visionDesc: 'Become the global standard for asset management technology, improving market efficiency and transparency.',
        speed: 'Speed',
        speedDesc: 'Fast execution & response',
        trust: 'Trust',
        trustDesc: 'Reliable systems',
        innovation: 'Innovation',
        innovationDesc: 'Continuous tech advancement',
        partnership: 'Partnership',
        partnershipDesc: 'Growing with clients',
        historyTitle: 'History',
        history1Year: '2026.4',
        history1Title: 'Orcinus Founded & Orca Launched',
        history1Desc: 'Financial IT experts founded the company and launched integrated trading system',
        storyTitle: 'Building the Future of Asset Management Together',
        storyDesc: 'Orcinus provides the best technology and services to help asset managers make better investment decisions.',
        teamTitle: 'Our Team',
        teamDesc: 'Finance and technology experts working together'
      },
      clients: {
        badge: 'WHO WE SERVE',
        title: 'All of Finance',
        titleHighlight: 'Is Our Client',
        subtitle: 'From asset managers to securities firms - anywhere in finance',
        network: 'Financial Network',
        networkDesc: 'Extensive partnerships across securities, asset managers, and custodians',
        experience: 'Diverse Experience',
        experienceDesc: 'Built PMS, OMS, EMS, lending, ETF systems across all domains',
        speed: 'Rapid Understanding',
        speedDesc: 'Quickly grasp and design for complex financial workflows',
        solution: 'Making Impossible Possible',
        solutionDesc: 'Finding solutions where others see obstacles',
        bottomMsg: 'Everything in Financial IT'
      },
      slogan: 'The Power to Read the Flow of Asset Management',
      clientTypes: {
        asset: 'Asset Managers',
        invest: 'Discretionary Managers',
        sma: 'SMA',
        securities: 'Securities Firms',
        more: 'Other Financial Institutions'
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
        copy: '© 2026 Orcinus. All rights reserved.',
        product: 'Product',
        modules: 'Modules',
        pricing: 'Pricing',
        companyMenu: 'Company',
        aboutUs: 'About Us',
        careers: 'Careers',
        contactMenu: 'Contact'
      }
    }
  };
  
  const txt = t[lang];
  
  const [countUp, setCountUp] = useState({ realtime: false, multi: false, check: false });
  const [graphAnimated, setGraphAnimated] = useState(false);
  const graphRef = useRef(null);

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
      
      // 그래프 애니메이션 트리거
      if (graphRef.current && !graphAnimated) {
        const rect = graphRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setGraphAnimated(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [graphAnimated]);

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
    { icon: "activity", title: "국내/해외 체결과 실시간 손익", desc: "해외 자산도 당일 실시간 반영, 운용역별/펀드별 기준가 실시간 업데이트" },
    { icon: "layers", title: "멀티매니저 운용", desc: "매니저별 손익/잔고 관리, 반대방향 주문 자동상계 후 동시진행" },
    { icon: "database", title: "자산운용사 통합시스템", desc: "PMS, OMS, EMS를 하나로 통합하여 운용 전 과정을 원스톱으로 관리" },
  ];

  const clients = [
    { icon: "building", title: txt.clientTypes.asset },
    { icon: "briefcase", title: txt.clientTypes.invest },
    { icon: "pieChart", title: txt.clientTypes.sma },
    { icon: "activity", title: txt.clientTypes.securities },
    { icon: "globe", title: txt.clientTypes.more },
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
        
        /* 스크롤 애니메이션 */
        .scroll-fade-in {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .scroll-fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .scroll-slide-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .scroll-slide-left.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .scroll-slide-right {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .scroll-slide-right.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .scroll-scale {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .scroll-scale.visible {
          opacity: 1;
          transform: scale(1);
        }
        /* 순차 딜레이 */
        .delay-1 { transition-delay: 0.15s; }
        .delay-2 { transition-delay: 0.3s; }
        .delay-3 { transition-delay: 0.45s; }
        .delay-4 { transition-delay: 0.6s; }
        .delay-5 { transition-delay: 0.75s; }
        .delay-6 { transition-delay: 0.9s; }
        .delay-7 { transition-delay: 1.05s; }
        .delay-8 { transition-delay: 1.2s; }
        .delay-6 { transition-delay: 0.6s; }
        .delay-7 { transition-delay: 0.7s; }
        .delay-8 { transition-delay: 0.8s; }
        
        /* 순차 팝업 애니메이션 */
        .scroll-pop {
          opacity: 0;
          transform: translateY(40px) scale(0.9);
          transition: opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .scroll-pop.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
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
          {/* 로고 + 토글 */}
          <div className="flex items-center gap-4">
            {/* 로고/이름 */}
            <div 
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => window.location.reload()}
            >
              {showLogo ? (
                <>
                  <img src="/favicon-light-32.png" alt="Orcinus" className="w-8 h-8" />
                  <span className="font-bold text-slate-800 text-lg" style={{fontFamily: "'Space Grotesk', sans-serif"}}>Orcinus</span>
                </>
              ) : (
                <>
                  <img src="/orca-hero.png" alt="Orca" className="w-8 h-8" />
                  <span className="font-bold text-slate-800 text-lg" style={{fontFamily: "'Space Grotesk', sans-serif"}}>Orca</span>
                </>
              )}
            </div>
            
            {/* 토글 버튼 */}
            <div className="flex items-center gap-1 bg-slate-100 rounded-full p-0.5">
              <button 
                onClick={() => setShowLogo(true)}
                className={`w-7 h-7 rounded-full text-xs font-medium transition-all duration-200 flex items-center justify-center ${showLogo ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                title="회사 소개"
              >
                ✦
              </button>
              <button 
                onClick={() => setShowLogo(false)}
                className={`w-7 h-7 rounded-full text-xs font-medium transition-all duration-200 flex items-center justify-center ${!showLogo ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                title="제품 소개"
              >
                🐋
              </button>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-slate-700 hover:text-cyan-500 text-sm font-medium transition-all duration-200 hover:scale-105">{txt.nav.features}</a>
            <a href="#services" className="text-slate-700 hover:text-cyan-500 text-sm font-medium transition-all duration-200 hover:scale-105">{txt.nav.services}</a>
            <a href="#about" className="text-slate-700 hover:text-cyan-500 text-sm font-medium transition-all duration-200 hover:scale-105">{txt.nav.about}</a>
            <a href="#contact" className="text-slate-700 hover:text-cyan-500 text-sm font-medium transition-all duration-200 hover:scale-105">{txt.nav.contact}</a>
            
            {/* 언어 선택 */}
            <div className="flex items-center gap-1 text-sm border border-slate-200 rounded-full px-1 py-0.5">
              <button 
                onClick={() => setLang('ko')}
                className={`px-3 py-1 rounded-full transition-all duration-200 ${lang === 'ko' ? 'bg-cyan-500 text-white font-medium' : 'text-slate-500 hover:text-slate-700'}`}
              >
                KR
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
            <a href="#about" className="block text-slate-700">{txt.nav.about}</a>
            <a href="#contact" className="block text-slate-700">{txt.nav.contact}</a>
            
            {/* 모바일 언어 선택 */}
            <div className="flex items-center gap-2 py-2">
              <button 
                onClick={() => setLang('ko')}
                className={`px-4 py-2 rounded-full text-sm transition-all ${lang === 'ko' ? 'bg-cyan-500 text-white font-medium' : 'bg-slate-100 text-slate-600'}`}
              >
                KR
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
              <span className="text-slate-700">
                {showLogo ? txt.hero.orcinusBadge : txt.hero.badge}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] leading-[1.15] mb-4 lg:mb-6" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              {showLogo ? (
                <>
                  {txt.hero.orcinusTitle1}<br/>
                  <span className="gradient-text">{txt.hero.orcinusTitle2}</span>
                </>
              ) : (
                <>
                  {txt.hero.title1}<br/>
                  <span className="gradient-text">{txt.hero.title2}</span>
                </>
              )}
            </h1>
            
            <p className="text-lg text-slate-600 mb-4 lg:mb-6 leading-relaxed max-w-md">
              {showLogo ? (
                <>
                  <span className="font-semibold text-slate-800">Orcinus</span><br/>
                  {txt.hero.orcinusDesc}
                </>
              ) : (
                <>
                  <span className="font-semibold text-slate-800">{txt.hero.subtitle}</span><br/>
                  {txt.hero.desc}
                </>
              )}
            </p>
            
            {/* 모바일: 토글에 따라 로고/돌고래 전환 */}
            <div className="lg:hidden flex justify-center items-center my-4">
              {showLogo ? (
                <OrcaFinIllustration className="w-48 sm:w-56 drop-shadow-2xl" />
              ) : (
                <img 
                  src="/orca-hero.png" 
                  alt="Orca" 
                  className="drop-shadow-2xl w-48 sm:w-56"
                />
              )}
            </div>
            
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
          
          {/* 히어로 이미지 - 데스크탑만 */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[400px]">
            <div className="absolute w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-gradient-to-br from-cyan-300/20 to-blue-400/20 rounded-full blur-3xl"/>
            
            {/* 데스크탑: 토글에 따라 로고/돌고래 전환 */}
            <div className="absolute inset-0 hidden lg:flex justify-center items-center">
              {showLogo ? (
                <OrcaFinIllustration className="w-full max-w-lg relative z-10" />
              ) : (
                <img 
                  src="/orca-hero.png" 
                  alt="Orca" 
                  className="drop-shadow-2xl w-96 relative z-10 transition-transform duration-300 hover:scale-105 -translate-x-8 translate-y-6"
                />
              )}
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
      <section className="relative h-36 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <svg className="absolute bottom-0 w-full h-36" viewBox="0 0 1440 150" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.15"/>
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25"/>
              <stop offset="100%" stopColor="#0e7490" stopOpacity="0.08"/>
            </linearGradient>
            <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.05"/>
            </linearGradient>
          </defs>
          {/* 가장 뒤쪽 파도 */}
          <path fill="url(#waveGrad3)">
            <animate 
              attributeName="d" 
              dur="12s" 
              repeatCount="indefinite"
              values="M0,80 C180,120 360,40 540,80 C720,120 900,50 1080,90 C1260,130 1380,60 1440,80 L1440,150 L0,150 Z;
                      M0,90 C180,50 360,110 540,70 C720,30 900,100 1080,60 C1260,20 1380,90 1440,70 L1440,150 L0,150 Z;
                      M0,80 C180,120 360,40 540,80 C720,120 900,50 1080,90 C1260,130 1380,60 1440,80 L1440,150 L0,150 Z"
            />
          </path>
          {/* 중간 파도 */}
          <path fill="url(#waveGrad2)">
            <animate 
              attributeName="d" 
              dur="8s" 
              repeatCount="indefinite"
              values="M0,90 C360,140 720,40 1080,90 C1260,120 1380,60 1440,75 L1440,150 L0,150 Z;
                      M0,75 C360,30 720,120 1080,60 C1260,30 1380,100 1440,85 L1440,150 L0,150 Z;
                      M0,90 C360,140 720,40 1080,90 C1260,120 1380,60 1440,75 L1440,150 L0,150 Z"
            />
          </path>
          {/* 앞쪽 파도 */}
          <path fill="url(#waveGrad1)">
            <animate 
              attributeName="d" 
              dur="5s" 
              repeatCount="indefinite"
              values="M0,100 C240,60 480,130 720,90 C960,50 1200,120 1440,90 L1440,150 L0,150 Z;
                      M0,85 C240,130 480,60 720,105 C960,150 1200,70 1440,100 L1440,150 L0,150 Z;
                      M0,100 C240,60 480,130 720,90 C960,50 1200,120 1440,90 L1440,150 L0,150 Z"
            />
          </path>
        </svg>
      </section>


      {/* Features Section - 왜 Orca인가? */}
      <section id="features" className="relative py-24 px-6 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        {/* 배경 장식 */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 text-sm font-semibold mb-4 border border-cyan-200">{txt.features.badge}</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] mb-4" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              {txt.features.title} <span className="gradient-text">Orca</span>{txt.features.titleEnd}
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              {txt.features.subtitle}
            </p>
          </div>
          
          
          {/* 순환 플라이휠 다이어그램 */}
          <div className="mt-8">
            <div className="relative max-w-2xl mx-auto">
              {/* 원형 SVG */}
              <svg viewBox="0 0 400 400" className="w-full max-w-lg mx-auto">
                {/* 외곽 원형 그라데이션 링 */}
                <defs>
                  <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee"/>
                    <stop offset="25%" stopColor="#06b6d4"/>
                    <stop offset="50%" stopColor="#3b82f6"/>
                    <stop offset="75%" stopColor="#6366f1"/>
                    <stop offset="100%" stopColor="#22d3ee"/>
                  </linearGradient>
                </defs>
                
                {/* 외곽 원 */}
                <circle cx="200" cy="200" r="180" fill="none" stroke="url(#circleGradient)" strokeWidth="12" opacity="0.3"/>
                <circle cx="200" cy="200" r="180" fill="none" stroke="url(#circleGradient)" strokeWidth="12" strokeDasharray="280 1000" strokeLinecap="round">
                  <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="20s" repeatCount="indefinite"/>
                </circle>
                
                {/* 내부 원 */}
                <circle cx="200" cy="200" r="140" fill="white" stroke="#e2e8f0" strokeWidth="1"/>
                
                {/* 중앙 텍스트 */}
                <text x="200" y="175" textAnchor="middle" className="text-2xl font-black fill-slate-800">Orca</text>
                <text x="200" y="205" textAnchor="middle" className="text-xs fill-cyan-600 font-semibold">{lang === 'ko' ? 'Real-time Data' : 'Real-time Data'}</text>
                <text x="200" y="225" textAnchor="middle" className="text-xs fill-slate-500">{lang === 'ko' ? '실시간 데이터 기반' : 'Based System'}</text>
              </svg>
              
              {/* 4개 포인트 - 원 라인 위에 배치 */}
              {/* 상단 - PMS */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-2">
                  <span className="text-white text-xs font-black">PMS</span>
                </div>
                <span className="text-xs font-semibold text-slate-700">{lang === 'ko' ? '포트폴리오' : 'Portfolio'}</span>
              </div>
              
              {/* 우측 - OMS */}
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-2">
                  <span className="text-white text-xs font-black">OMS</span>
                </div>
                <span className="text-xs font-semibold text-slate-700">{lang === 'ko' ? '주문관리' : 'Order'}</span>
              </div>
              
              {/* 하단 - EMS */}
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-2">
                  <span className="text-white text-xs font-black">EMS</span>
                </div>
                <span className="text-xs font-semibold text-slate-700">{lang === 'ko' ? '체결관리' : 'Execution'}</span>
              </div>
              
              {/* 좌측 - SLBS */}
              <div className="absolute top-1/2 -left-3 -translate-y-1/2 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-400 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-2">
                  <span className="text-white text-xs font-black">SLBS</span>
                </div>
                <span className="text-xs font-semibold text-slate-700">{lang === 'ko' ? '대차/대여/대용' : 'Securities Lending'}</span>
              </div>
            </div>
          </div>
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
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black slogan-line-4" style={{fontFamily: "'Space Grotesk', sans-serif"}}>
              <span className="gradient-text">Orca</span>
            </h2>
          </div>
          
          {/* 서브 텍스트 */}
          <p className="text-slate-500 text-sm md:text-base slogan-sub">
            {txt.slogan}
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

      {/* Services Section - 시스템 구성 */}
      <section id="services" className="relative py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-700 text-sm font-semibold mb-4">{txt.modules.badge}</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              {txt.modules.title}
            </h2>
            <p className="text-slate-600 text-base max-w-lg mx-auto">
              {txt.modules.subtitle}
            </p>
          </div>

          {/* 통합 시스템 구조 - 클릭하면 상세 정보 */}
          <div className="max-w-4xl mx-auto">
            {/* 메인 플로우 - PMS → OMS → EMS */}
            <div className="relative">
              {/* 연결선 - 세로 (스크롤 시 나타남) */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 transform -translate-x-1/2 hidden md:block"></div>
              
              {/* PMS */}
              <div className="relative flex items-center justify-center mb-10">
                <div 
                  onClick={() => setSelectedModule({
                    tag: "PMS",
                    title: lang === 'ko' ? "포트폴리오 관리" : "Portfolio Management",
                    desc: lang === 'ko' ? "실시간 기준가 산출 및 펀드 성과 분석" : "Real-time NAV calculation and fund performance analysis",
                    color: "from-cyan-500 to-cyan-600",
                    details: lang === 'ko' 
                      ? ["실시간 기준가 관리", "멀티 매니저 지원", "펀드 마감/성과 분석", "포트폴리오 리밸런싱", "벤치마크 비교 분석"]
                      : ["Real-time NAV Management", "Multi-Manager Support", "Fund Closing/Performance", "Portfolio Rebalancing", "Benchmark Analysis"]
                  })}
                  className="w-full max-w-md bg-white rounded-2xl shadow-xl border-2 border-cyan-400 p-6 relative z-10 cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-black">PMS</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800">Portfolio Management</h3>
                      <p className="text-slate-500 text-sm">{txt.structure.pms}</p>
                    </div>
                    <span className="text-cyan-500 text-xl">→</span>
                  </div>
                </div>
              </div>
              
              {/* OMS */}
              <div className="relative flex items-center justify-center mb-10">
                <div 
                  onClick={() => setSelectedModule({
                    tag: "OMS",
                    title: lang === 'ko' ? "주문 관리" : "Order Management",
                    desc: lang === 'ko' ? "주문 생성부터 체결까지 통합 관리" : "Integrated management from order creation to execution",
                    color: "from-blue-500 to-blue-600",
                    details: lang === 'ko'
                      ? ["주문 상계 처리", "리스크 관리", "주문 제약 위반 방지", "배분 규칙 자동화", "컴플라이언스 체크"]
                      : ["Order Netting", "Risk Management", "Order Constraint Prevention", "Allocation Rule Automation", "Compliance Check"]
                  })}
                  className="w-full max-w-md bg-white rounded-2xl shadow-xl border-2 border-blue-400 p-6 relative z-10 cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-black">OMS</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800">Order Management</h3>
                      <p className="text-slate-500 text-sm">{txt.structure.oms}</p>
                    </div>
                    <span className="text-blue-500 text-xl">→</span>
                  </div>
                </div>
              </div>
              
              {/* EMS */}
              <div className="relative flex items-center justify-center mb-12">
                <div 
                  onClick={() => setSelectedModule({
                    tag: "EMS",
                    title: lang === 'ko' ? "주문 집행" : "Execution Management",
                    desc: lang === 'ko' ? "알고리즘 트레이딩 및 최적 체결" : "Algorithmic trading and optimal execution",
                    color: "from-indigo-500 to-indigo-600",
                    details: lang === 'ko'
                      ? ["TWAP/VWAP 알고리즘", "Smart Order Routing", "거래 비용 최적화", "실시간 체결 모니터링", "TCA 분석"]
                      : ["TWAP/VWAP Algorithm", "Smart Order Routing", "Transaction Cost Optimization", "Real-time Execution Monitoring", "TCA Analysis"]
                  })}
                  className="w-full max-w-md bg-white rounded-2xl shadow-xl border-2 border-indigo-400 p-6 relative z-10 cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-black">EMS</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800">Execution Management</h3>
                      <p className="text-slate-500 text-sm">{txt.structure.ems}</p>
                    </div>
                    <span className="text-indigo-500 text-xl">→</span>
                  </div>
                </div>
              </div>
              
              {/* SLBS */}
              <div className="relative flex items-center justify-center mb-10">
                <div 
                  onClick={() => setSelectedModule({
                    tag: "SLBS",
                    title: lang === 'ko' ? "대차 관리" : "Securities Lending",
                    desc: lang === 'ko' ? "대차/대여/대용 통합 관리" : "Lending/Borrowing/Collateral Management",
                    color: "from-violet-500 to-violet-600",
                    details: lang === 'ko'
                      ? ["차입/대여/대용 관리", "대차 허브 연동", "대차 프로세스 자동화", "담보 관리", "리콜 처리"]
                      : ["Lending/Borrowing Management", "Lending Hub Integration", "Process Automation", "Collateral Management", "Recall Processing"]
                  })}
                  className="w-full max-w-md bg-white rounded-2xl shadow-xl border-2 border-violet-400 p-6 relative z-10 cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-black">SLBS</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800">Securities Lending</h3>
                      <p className="text-slate-500 text-sm">{lang === 'ko' ? '대차/대여/대용 관리' : 'Lending & Borrowing'}</p>
                    </div>
                    <span className="text-violet-500 text-xl">→</span>
                  </div>
                </div>
              </div>
              
              {/* IPMS */}
              <div className="relative flex items-center justify-center mb-12">
                <div 
                  onClick={() => setSelectedModule({
                    tag: "IPMS",
                    title: lang === 'ko' ? "내부 포지션 관리" : "Internal Position Management",
                    desc: lang === 'ko' ? "사내 계좌/잔고 통합 관리" : "Internal account/position management",
                    color: "from-slate-500 to-slate-600",
                    details: lang === 'ko'
                      ? ["내부 계좌 관리", "잔고 관리", "포지션 추적", "결제 예정 관리", "내부 거래 조정"]
                      : ["Internal Account Management", "Position Tracking", "Settlement Management", "Internal Trade Reconciliation", "Balance Management"]
                  })}
                  className="w-full max-w-md bg-white rounded-2xl shadow-xl border-2 border-slate-400 p-6 relative z-10 cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-black">IPMS</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800">Internal Position</h3>
                      <p className="text-slate-500 text-sm">{lang === 'ko' ? '내부 포지션 관리' : 'Position Management'}</p>
                    </div>
                    <span className="text-slate-500 text-xl">→</span>
                  </div>
                </div>
              </div>
              
              {/* 연결 설명 */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 via-blue-50 to-indigo-50 px-6 py-3 rounded-full border border-slate-200">
                  <span className="text-cyan-600">●</span>
                  <span className="text-sm text-slate-600">{txt.structure.connected}</span>
                  <span className="text-indigo-600">●</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* 선택적 모듈 강조 */}
          <div className="mt-12">
            <div className="relative bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-3xl p-8 border border-cyan-200/50 overflow-hidden">
              {/* 배경 장식 */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-400/20 rounded-full blur-2xl"></div>
              
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                {/* 아이콘 애니메이션 */}
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-24">
                    {/* 퍼즐 조각 애니메이션 */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <linearGradient id="puzzleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#22d3ee"/>
                          <stop offset="100%" stopColor="#6366f1"/>
                        </linearGradient>
                      </defs>
                      {/* 퍼즐 조각 1 - 좌상 */}
                      <rect x="10" y="10" width="35" height="35" rx="4" fill="url(#puzzleGrad)" opacity="0.9">
                        <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3s" repeatCount="indefinite"/>
                      </rect>
                      {/* 퍼즐 조각 2 - 우상 */}
                      <rect x="55" y="10" width="35" height="35" rx="4" fill="url(#puzzleGrad)" opacity="0.7">
                        <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" begin="0.5s"/>
                      </rect>
                      {/* 퍼즐 조각 3 - 좌하 */}
                      <rect x="10" y="55" width="35" height="35" rx="4" fill="url(#puzzleGrad)" opacity="0.6">
                        <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" begin="1s"/>
                      </rect>
                      {/* 퍼즐 조각 4 - 우하 (점선) */}
                      <rect x="55" y="55" width="35" height="35" rx="4" fill="none" stroke="url(#puzzleGrad)" strokeWidth="2" strokeDasharray="5,5">
                        <animate attributeName="stroke-dashoffset" values="0;10" dur="1s" repeatCount="indefinite"/>
                      </rect>
                      {/* 체크 마크 */}
                      <path d="M62 70 L70 78 L85 63" stroke="#22d3ee" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <animate attributeName="stroke-dasharray" values="0,50;50,0" dur="0.5s" fill="freeze" begin="0.5s"/>
                      </path>
                    </svg>
                  </div>
                </div>
                
                {/* 텍스트 */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
                    {txt.modules.selective} <span className="text-cyan-600">{txt.modules.selectiveHighlight}</span>
                  </h3>
                  <p className="text-slate-600 mb-5">
                    {txt.modules.selectiveDesc}
                  </p>
                  
                  {/* 도입 예시 카드들 */}
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center gap-3 bg-white/80 rounded-xl p-3 border border-slate-200">
                      <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600 font-bold text-xs">1</div>
                      <div className="flex-1 text-center">
                        <span className="font-semibold text-slate-800">{txt.modules.example1}</span>
                        <p className="text-xs text-slate-500">{txt.modules.example1Desc}</p>
                      </div>
                      <span className="px-2 py-0.5 bg-cyan-50 text-cyan-600 rounded text-xs min-w-[52px] text-center">{txt.modules.basic}</span>
                    </div>
                    <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3 border-2 border-blue-300">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">2</div>
                      <div className="flex-1 text-center">
                        <span className="font-semibold text-slate-800">{txt.modules.example2}</span>
                        <p className="text-xs text-slate-500">{txt.modules.example2Desc}</p>
                      </div>
                      <span className="px-2 py-0.5 bg-blue-500 text-white rounded text-xs font-medium min-w-[52px] text-center">{txt.modules.popular}</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/80 rounded-xl p-3 border border-slate-200">
                      <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 font-bold text-xs">3</div>
                      <div className="flex-1 text-center">
                        <span className="font-semibold text-slate-800">{txt.modules.example3}</span>
                        <p className="text-xs text-slate-500">{txt.modules.example3Desc}</p>
                      </div>
                      <span className="min-w-[52px]"></span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/80 rounded-xl p-3 border border-slate-200">
                      <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600 font-bold text-xs">4</div>
                      <div className="flex-1 text-center">
                        <span className="font-semibold text-slate-800">{txt.modules.example4}</span>
                        <p className="text-xs text-slate-500">{txt.modules.example4Desc}</p>
                      </div>
                      <span className="min-w-[52px]"></span>
                    </div>
                    <div className="flex items-center gap-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-3 border border-dashed border-slate-300">
                      <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center text-slate-600 font-bold text-xs">5</div>
                      <div className="flex-1 text-center">
                        <span className="font-semibold text-slate-800">{txt.modules.example5}</span>
                        <p className="text-xs text-slate-500">{txt.modules.example5Desc}</p>
                      </div>
                      <span className="px-2 py-0.5 bg-slate-200 text-slate-600 rounded text-xs min-w-[52px] text-center">{txt.modules.custom}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-medium shadow-sm">{txt.modules.synergy}</span>
                    <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">{txt.modules.stepExpand}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client + Stats Section */}
      <section ref={statsRef} className="relative py-20 px-6 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          {/* 고객 대상 타이틀 */}
          <div className="text-center mb-12 scroll-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-700 text-sm font-semibold mb-4">{txt.clients.badge}</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              {txt.clients.title} <span className="text-cyan-600">{txt.clients.titleHighlight}</span>
            </h2>
            <p className="text-slate-600 text-base max-w-lg mx-auto">
              {txt.clients.subtitle}
            </p>
          </div>
          
          {/* 고객 타입 버튼 */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 scroll-fade-in">
            {clients.map((client, i) => (
              <div key={i} className="group bg-white rounded-2xl px-6 py-4 flex items-center gap-4 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 border-2 border-slate-100 hover:border-cyan-400 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300">
                  <Icon name={client.icon} className="w-6 h-6 text-white" />
                </div>
                <span className="text-slate-800 font-bold text-lg group-hover:text-cyan-700 transition-colors">{client.title}</span>
              </div>
            ))}
          </div>
          
          
          {/* 하단 메시지 */}
          <div className="text-center scroll-fade-in">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full shadow-lg">
              <span className="text-xl">💡</span>
              <span className="font-semibold">{txt.clients.bottomMsg}</span>
            </div>
          </div>
        </div>
      </section>
      {/* 운영 효율성 그래프 섹션 */}
      <section ref={graphRef} className="relative py-20 px-6 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 scroll-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-semibold mb-4">{txt.efficiency.badge}</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              {txt.efficiency.title} <span className="text-green-600">{txt.efficiency.titleHighlight}</span>
            </h2>
            <p className="text-slate-600 text-base max-w-lg mx-auto">
              {txt.efficiency.subtitle}
            </p>
          </div>
          
          {/* 그래프 영역 */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 scroll-fade-in">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* 그래프 */}
              <div className="flex-1 w-full">
                <div className="relative aspect-[4/3] w-full">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    {/* 배경 그리드 */}
                    <defs>
                      <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
                      </pattern>
                      {/* 그라데이션 */}
                      <linearGradient id="lineGradRed" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f87171"/>
                        <stop offset="100%" stopColor="#ef4444"/>
                      </linearGradient>
                      <linearGradient id="lineGradGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22d3ee"/>
                        <stop offset="100%" stopColor="#06b6d4"/>
                      </linearGradient>
                      <linearGradient id="areaGradRed" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#fecaca" stopOpacity="0.5"/>
                        <stop offset="100%" stopColor="#fecaca" stopOpacity="0"/>
                      </linearGradient>
                      <linearGradient id="areaGradGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#a5f3fc" stopOpacity="0.5"/>
                        <stop offset="100%" stopColor="#a5f3fc" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    
                    <rect width="400" height="300" fill="url(#grid)"/>
                    
                    {/* Y축 */}
                    <line x1="50" y1="30" x2="50" y2="250" stroke="#94a3b8" strokeWidth="2"/>
                    {/* X축 */}
                    <line x1="50" y1="250" x2="380" y2="250" stroke="#94a3b8" strokeWidth="2"/>
                    
                    {/* Y축 레이블 */}
                    <text x="25" y="45" fill="#64748b" fontSize="11" textAnchor="middle">{txt.efficiency.many}</text>
                    <text x="25" y="250" fill="#64748b" fontSize="11" textAnchor="middle">{txt.efficiency.few}</text>
                    <text x="10" y="150" fill="#64748b" fontSize="10" textAnchor="middle" transform="rotate(-90, 10, 150)">{txt.efficiency.yAxis}</text>
                    
                    {/* X축 레이블 */}
                    <text x="50" y="270" fill="#64748b" fontSize="11" textAnchor="middle">10</text>
                    <text x="160" y="270" fill="#64748b" fontSize="11" textAnchor="middle">30</text>
                    <text x="270" y="270" fill="#64748b" fontSize="11" textAnchor="middle">50</text>
                    <text x="370" y="270" fill="#64748b" fontSize="11" textAnchor="middle">100</text>
                    <text x="215" y="290" fill="#64748b" fontSize="11" textAnchor="middle">{txt.efficiency.xAxis}</text>
                    
                    {/* 기존 방식 - 빨간색 선 (가파른 상승) */}
                    <path 
                      d="M50,230 Q120,200 160,160 T270,80 T370,40" 
                      fill="none" 
                      stroke="url(#lineGradRed)" 
                      strokeWidth="3"
                      strokeLinecap="round"
                      className={graphAnimated ? 'graph-line-red animate' : 'graph-line-red'}
                    />
                    {/* 기존 방식 영역 */}
                    <path 
                      d="M50,230 Q120,200 160,160 T270,80 T370,40 L370,250 L50,250 Z" 
                      fill="url(#areaGradRed)"
                      className={graphAnimated ? 'graph-area-red animate' : 'graph-area-red'}
                    />
                    
                    {/* Orca 사용 - 시안색 선 (완만한 상승) */}
                    <path 
                      d="M50,230 Q120,220 160,200 T270,170 T370,150" 
                      fill="none" 
                      stroke="url(#lineGradGreen)" 
                      strokeWidth="3"
                      strokeLinecap="round"
                      className={graphAnimated ? 'graph-line-green animate' : 'graph-line-green'}
                    />
                    {/* Orca 영역 */}
                    <path 
                      d="M50,230 Q120,220 160,200 T270,170 T370,150 L370,250 L50,250 Z" 
                      fill="url(#areaGradGreen)"
                      className={graphAnimated ? 'graph-area-green animate' : 'graph-area-green'}
                    />
                    
                    {/* 끝점 표시 */}
                    <circle cx="370" cy="40" r="6" fill="#ef4444" className={graphAnimated ? 'graph-dot-red animate' : 'graph-dot-red'}/>
                    <circle cx="370" cy="150" r="6" fill="#06b6d4" className={graphAnimated ? 'graph-dot-green animate' : 'graph-dot-green'}/>
                    
                    {/* 차이 표시 화살표 */}
                    <line x1="385" y1="50" x2="385" y2="140" stroke="#10b981" strokeWidth="2" strokeDasharray="4,4" className={graphAnimated ? 'graph-diff animate' : 'graph-diff'}/>
                    <text x="395" y="95" fill="#10b981" fontSize="12" fontWeight="bold">↕ {txt.efficiency.saving}</text>
                  </svg>
                </div>
              </div>
              
              {/* 범례 및 설명 */}
              <div className="md:w-64 space-y-6">
                {/* 범례 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-gradient-to-r from-red-400 to-red-500 rounded"></div>
                    <div>
                      <p className="font-semibold text-slate-800">{txt.efficiency.existing}</p>
                      <p className="text-xs text-slate-500">{txt.efficiency.existingDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded"></div>
                    <div>
                      <p className="font-semibold text-slate-800">{txt.efficiency.orca}</p>
                      <p className="text-xs text-slate-500">{txt.efficiency.orcaDesc}</p>
                    </div>
                  </div>
                </div>
                
                {/* 핵심 효과 */}
                <div className="bg-gradient-to-br from-green-50 to-cyan-50 rounded-2xl p-5 border border-green-100">
                  <p className="text-lg font-black text-green-600 mb-1">{txt.efficiency.result}</p>
                  <p className="text-sm text-slate-600">{txt.efficiency.saving}</p>
                </div>
                
                {/* 포인트 */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm text-slate-600">{txt.efficiency.point1}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm text-slate-600">{txt.efficiency.point2}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm text-slate-600">{txt.efficiency.point3}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <style>{`
            .graph-line-red, .graph-line-green {
              stroke-dasharray: 500;
              stroke-dashoffset: 500;
            }
            .graph-line-red.animate {
              animation: drawLine 2s ease-out forwards;
            }
            .graph-line-green.animate {
              animation: drawLine 2s ease-out 0.3s forwards;
            }
            .graph-area-red, .graph-area-green {
              opacity: 0;
            }
            .graph-area-red.animate {
              animation: fadeInArea 1s ease-out 1.5s forwards;
            }
            .graph-area-green.animate {
              animation: fadeInArea 1s ease-out 1.8s forwards;
            }
            .graph-dot-red, .graph-dot-green {
              opacity: 0;
              transform-origin: center;
            }
            .graph-dot-red.animate {
              animation: popDot 0.3s ease-out 2s forwards;
            }
            .graph-dot-green.animate {
              animation: popDot 0.3s ease-out 2.3s forwards;
            }
            .graph-diff {
              opacity: 0;
            }
            .graph-diff.animate {
              animation: fadeInArea 0.5s ease-out 2.5s forwards;
            }
            @keyframes drawLine {
              to {
                stroke-dashoffset: 0;
              }
            }
            @keyframes fadeInArea {
              to {
                opacity: 1;
              }
            }
            @keyframes popDot {
              0% {
                opacity: 0;
                transform: scale(0);
              }
              70% {
                transform: scale(1.3);
              }
              100% {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}</style>
        </div>
      </section>



      {/* ETF 운용 시스템 섹션 */}
      <section className="relative py-20 px-6 bg-white overflow-hidden">
        {/* 배경 장식 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-100 to-transparent rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-cyan-100 to-transparent rounded-full blur-3xl opacity-50"></div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-14 scroll-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold mb-4">{txt.etf.badge}</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              {txt.etf.title}
            </h2>
            <p className="text-slate-600 text-base max-w-lg mx-auto">
              {txt.etf.subtitle}
            </p>
          </div>
          
          {/* ETF 타입 */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Passive ETF */}
            <div className="scroll-slide-left bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-blue-200">
                  <svg className="w-7 h-7 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 3v18h18M7 16l4-4 4 4 5-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Passive ETF</h3>
                  <p className="text-blue-600 text-sm font-medium">인덱스 추종</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-slate-600">벤치마크 추적 오차 최소화</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-slate-600">리밸런싱 자동화</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-slate-600">PDF 자동 생성 및 전송</span>
                </li>
              </ul>
            </div>
            
            {/* Active ETF */}
            <div className="scroll-slide-right bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-purple-200">
                  <svg className="w-7 h-7 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Active ETF</h3>
                  <p className="text-purple-600 text-sm font-medium">초과 수익 추구</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span className="text-slate-600">실시간 PDF 전송 (AP 연동)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span className="text-slate-600">설정/환매 실시간 처리</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span className="text-slate-600">대여 리콜 자동 관리</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* 핵심 기능 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 scroll-fade-in">
            <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-3 border border-slate-200">
                <svg className="w-6 h-6 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="font-bold text-slate-800 mb-1">PDF 자동화</h4>
              <p className="text-slate-500 text-xs">Portfolio Deposit File<br/>자동 생성 및 전송</p>
            </div>
            
            <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-3 border border-slate-200">
                <svg className="w-6 h-6 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="font-bold text-slate-800 mb-1">iNAV 실시간</h4>
              <p className="text-slate-500 text-xs">장중 순자산가치<br/>실시간 계산</p>
            </div>
            
            <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-3 border border-slate-200">
                <svg className="w-6 h-6 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="font-bold text-slate-800 mb-1">설정/환매</h4>
              <p className="text-slate-500 text-xs">Creation & Redemption<br/>자동 처리</p>
            </div>
            
            <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-3 border border-slate-200">
                <svg className="w-6 h-6 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="font-bold text-slate-800 mb-1">AP 연동</h4>
              <p className="text-slate-500 text-xs">지정참가회사<br/>실시간 데이터 교환</p>
            </div>
          </div>
          
          {/* 중소형 운용사 메시지 */}
          <div className="mt-12 scroll-fade-in">
            <div className="bg-gradient-to-r from-purple-50 via-violet-50 to-purple-50 rounded-3xl p-8 border border-purple-200 relative overflow-hidden">
              {/* 배경 장식 */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl"></div>
              
              <div className="relative flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-purple-200">
                    <svg className="w-10 h-10 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {txt.etf.sme}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {txt.etf.smeDesc}
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">{txt.etf.smeTag1}</span>
                    <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">{txt.etf.smeTag2}</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">{txt.etf.smeTag3}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 하단 강조 */}
          <div className="mt-8 text-center scroll-fade-in">
            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl shadow-lg">
              <p className="text-lg font-bold">ETF 운용의 모든 것, Orca 하나로</p>
              <p className="text-purple-100 text-sm mt-1">PDF 관리부터 NAV 계산까지 자동화</p>
            </div>
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

      {/* 플라이휠 섹션 */}
      <section className="relative py-16 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* 배경 원형 장식 */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-[400px] h-[400px] border border-slate-600 rounded-full"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* 상단 타이틀 */}
          <div className="text-center mb-8 scroll-fade-in">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">{txt.momentum.badge}</span>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              {txt.momentum.title} <span className="text-cyan-400">{txt.momentum.titleHighlight}</span>
            </h2>
            <p className="text-slate-400 text-sm">{txt.momentum.subtitle}</p>
          </div>
          
          {/* 플라이휠 원 */}
          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              {/* 회전하는 외부 링 */}
              <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full animate-flywheel">
                <defs>
                  <linearGradient id="fwGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee"/>
                    <stop offset="50%" stopColor="#3b82f6"/>
                    <stop offset="100%" stopColor="#8b5cf6"/>
                  </linearGradient>
                </defs>
                {/* 외부 원 */}
                <circle cx="200" cy="200" r="180" fill="none" stroke="url(#fwGrad)" strokeWidth="3" opacity="0.5"/>
                {/* 화살표들 */}
                <g>
                  <path d="M200,30 L210,50 L190,50 Z" fill="#22d3ee"/>
                  <path d="M370,200 L350,210 L350,190 Z" fill="#3b82f6"/>
                  <path d="M200,370 L190,350 L210,350 Z" fill="#8b5cf6"/>
                  <path d="M30,200 L50,190 L50,210 Z" fill="#a855f7"/>
                </g>
              </svg>
              
              {/* 중앙 원 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 md:w-32 md:h-32 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-lg md:text-xl font-black text-white">{txt.momentum.center}</span>
                    <p className="text-cyan-400 text-xs">{txt.momentum.centerSub}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 5개 요소 - 가로 배치 */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="bg-slate-800/90 backdrop-blur px-4 py-2 rounded-xl border border-cyan-500/30 shadow-lg">
              <span className="text-cyan-400 font-bold text-sm whitespace-nowrap">{txt.momentum.item1}</span>
            </div>
            <div className="bg-slate-800/90 backdrop-blur px-4 py-2 rounded-xl border border-blue-500/30 shadow-lg">
              <span className="text-blue-400 font-bold text-sm whitespace-nowrap">{txt.momentum.item2}</span>
            </div>
            <div className="bg-slate-800/90 backdrop-blur px-4 py-2 rounded-xl border border-indigo-500/30 shadow-lg">
              <span className="text-indigo-400 font-bold text-sm whitespace-nowrap">{txt.momentum.item3}</span>
            </div>
            <div className="bg-slate-800/90 backdrop-blur px-4 py-2 rounded-xl border border-purple-500/30 shadow-lg">
              <span className="text-purple-400 font-bold text-sm whitespace-nowrap">{txt.momentum.item4}</span>
            </div>
            <div className="bg-slate-800/90 backdrop-blur px-4 py-2 rounded-xl border border-violet-500/30 shadow-lg">
              <span className="text-violet-400 font-bold text-sm whitespace-nowrap">{txt.momentum.item5}</span>
            </div>
          </div>
          
          {/* 하단 메시지 */}
          <div className="text-center scroll-fade-in">
            <p className="text-cyan-400 text-base md:text-lg font-medium italic">"{txt.momentum.bottomMsg}"</p>
          </div>
        </div>
        
        <style>{`
          @keyframes flywheel-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-flywheel {
            animation: flywheel-spin 20s linear infinite;
          }
        `}</style>
      </section>

      {/* 서비스 운영 방식 섹션 */}
      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4">{txt.deploy.badge}</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              {txt.deploy.title}
            </h2>
            <p className="text-slate-600 text-base max-w-lg mx-auto">
              {txt.deploy.subtitle}
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
              {txt.deploy.desc}
            </p>
          </div>
        </div>
      </section>

      {/* About Section - 회사 소개 */}
      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4">{txt.aboutSection.badge}</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
              {txt.aboutSection.title}
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto">
              {txt.aboutSection.desc1}<br/>
              {txt.aboutSection.desc2}
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
                  { year: "2026.4", title: "Orcinus 설립 & Orca 런칭", desc: "금융 IT 전문가들이 모여 회사 설립, 통합 트레이딩 시스템 출시" },
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
            <h3 className="text-xl font-bold text-white mb-4">{txt.aboutSection.teamTitle}</h3>
            <p className="text-slate-400 mb-8">
              {txt.aboutSection.teamDesc}
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              {[
                { role: "CEO", name: "김태훈", expertise: lang === 'ko' ? "자산운용 20년" : "20 years in Asset Mgmt" },
                { role: "CTO", name: "", expertise: lang === 'ko' ? "금융IT 15년" : "15 years in Financial IT" },
                { role: "CPO", name: "", expertise: lang === 'ko' ? "트레이딩 시스템 전문" : "Trading Systems Expert" },
              ].map((member, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10 min-w-[150px]">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <h4 className="text-white font-bold">{member.role}</h4>
                  {member.name && <p className="text-cyan-400 text-sm">{member.name}</p>}
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

      {/* 맨 위로 가기 버튼 */}
      {scrollY > 300 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
          aria-label="맨 위로 가기"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      )}

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
