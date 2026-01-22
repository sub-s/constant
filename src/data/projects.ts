
import { Project } from '@/types/project';

// 이미지 import 예시 (상단에 추가)
import project1 from '@/assets/images/project1.png';
import project2 from '@/assets/images/project2.png';

export const projects: Project[] = [
  // Selected Works (Top 6)
   {
    title: '하나은행 FIRST 1Q',
    period: '2025.01 - 2026.03',
    client: '하나은행',
    stack: ['Figma', 'React', 'HTML', 'JavaScript', 'SCSS', 'Git'],
    category: 'UI/UX & Dev',
    description: '하나은행 FIRST 1Q UI/UX 설계 및 프론트엔드 개발.',
    overview: '하나은행의 FIRST 1Q UI/UX 설계 및 프론트엔드 개발.',
    color: '#e02f4e',
    image: project2, // 이런 식으로 이미지를 연결하시면 됩니다.
    // image: undefined // 현재는 이미지가 없으므로 undefined (또는 삭제)
  },
   {
    title: 'KIA 자동차 챗봇',
    period: '2024.08 - 2024.12',
    client: '기아자동차',
    stack: ['Figma', 'React', 'HTML', 'JavaScript', 'SCSS', 'Git'],
    category: 'UI/UX & Dev',
    description: '기아자동차 챗봇 UI/UX 설계 및 프론트엔드 개발.',
    overview: '기아자동차의 챗봇 UI/UX 설계 및 프론트엔드 개발.',
    color: '#e02f4e',
    image: project1, // 이런 식으로 이미지를 연결하시면 됩니다.
    // image: undefined // 현재는 이미지가 없으므로 undefined (또는 삭제)
  },
  {
    title: '1금융 API포털 UI/UX개발',
    period: '2024.04 - 2024.06',
    client: '이데아텍',
    stack: ['Figma', 'React', 'HTML', 'JavaScript', 'CSS', 'Git'],
    category: 'UI/UX & Dev',
    description: '1금융권 API 포털의 UI/UX 설계 및 프론트엔드 개발.',
    overview: '제1금융권의 대외 API 서비스 제공을 위한 개발자 포털(Developer Portal) 구축 프로젝트입니다. 복잡한 API 문서를 직관적으로 탐색할 수 있는 UI/UX를 설계하고, 보안성과 접근성을 고려한 프론트엔드 개발을 주도했습니다. 사용자 중심의 인터페이스를 통해 외부 개발자들의 편의성을 극대화하고, 효율적인 API 연동 프로세스를 지원하는 플랫폼을 완성했습니다.',
    color: '#e02f4e',
    // image: project1, // 이런 식으로 이미지를 연결하시면 됩니다.
    image: undefined // 현재는 이미지가 없으므로 undefined (또는 삭제)
  },
  {
    
    title: '나린카 중고차 재고관리 서비스',
    period: '2024.01 - 2024.03',
    client: '나린씨엔에스',
    stack: ['Figma', 'HTML', 'JavaScript', 'CSS', 'Git'],
    category: 'Web Service',
    description: '중고차 재고 관리 및 딜러 전산 시스템 퍼블리싱.',
    overview: '중고차 매매 상사를 위한 통합 재고 관리 및 딜러 전산 시스템입니다. 실시간 차량 입출고 현황 파악, 시세 조회, 고객 관리 등 복잡한 비즈니스 로직을 직관적인 대시보드 형태로 시각화했습니다. 딜러들의 업무 효율성을 높이기 위해 모바일 최적화된 반응형 웹으로 구현하여 현장에서의 사용성을 강화했습니다.',
    color: '#e17e35'
  },
  {
    
    title: '삼성 디스플레이 QMS2.0 품질관리',
    period: '2023.06 - 2023.10',
    client: '삼성디스플레이',
    stack: ['Figma', 'Vue', 'HTML', 'JavaScript', 'CSS', 'Git'],
    category: 'Enterprise',
    description: '삼성 디스플레이 품질 관리 시스템(QMS 2.0) UI 개발.',
    overview: '삼성디스플레이의 차세대 품질 관리 시스템(QMS 2.0) 구축 프로젝트입니다. 방대한 공정 데이터를 실시간으로 모니터링하고 분석할 수 있는 대시보드 UI를 개발했습니다. 복잡한 데이터 시각화 요구사항을 수행하며, 사용자가 직관적으로 품질 지표를 파악하고 신속한 의사결정을 내릴 수 있도록 UX를 최적화했습니다.',
    color: '#f3c540'
  },
  {
    
    title: '삼성전자DS WIS시스템',
    period: '2023.05 - 2023.05',
    client: '삼성전자',
    stack: ['Figma', 'Bootstrap', 'JavaScript', 'CSS', 'Git'],
    category: 'Enterprise',
    description: '삼성전자 DS부문 WIS 시스템 프론트엔드 구축.',
    overview: '삼성전자 DS부문의 글로벌 반도체 생산/관리를 위한 WIS(Waste Information System) 시스템 프론트엔드 구축에 참여했습니다. 엔터프라이즈 환경에 최적화된 컴포넌트 기반 아키텍처를 적용하여 유지보수성을 확보하고, 사내 임직원들이 효율적으로 업무를 처리할 수 있는 직관적이고 모던한 UI를 구현했습니다.',
    color: '#2d3436'
  },
  {
    
    title: '한국 항공 우주연구원',
    period: '2023.02 - 2023.04',
    client: '한국 항공 우주연구원',
    stack: ['XD', 'HTML', 'JavaScript', 'CSS', 'Git'],
    category: 'Public Sector',
    description: '한국항공우주연구원 웹사이트 리뉴얼 및 퍼블리싱.',
    overview: '한국항공우주연구원(KARI)의 공식 웹사이트 리뉴얼 프로젝트입니다. 항공우주 연구 성과를 효과적으로 전달하기 위해 인터랙티브한 UI 요소와 시각적 스토리텔링을 적용했습니다. 웹 접근성 표준을 준수하여 대국민 정보 접근성을 높이고, 연구원의 혁신적인 이미지를 디지털 공간에 구현했습니다.',
    color: '#2d3436'
  },
  {
    
    title: '다올저축은행',
    period: '2022.07 - 2022.12',
    client: '다올저축은행',
    stack: ['Zeplin', 'HTML', 'JavaScript', 'CSS', 'Git'],
    category: 'Finance',
    description: '다올저축은행 웹/모바일 뱅킹 UI 리뉴얼.',
    overview: '다올저축은행의 웹 및 모바일 뱅킹 서비스 리뉴얼 프로젝트입니다. 기존 금융 서비스의 딱딱한 이미지를 탈피하고, 사용자 친화적인 금융 경험을 제공하는 데 주력했습니다. 직관적인 네비게이션과 간결한 정보 구조를 설계하여 금융 상품 가입 및 조회 프로세스를 간소화하고, 고객 만족도를 향상시켰습니다.',
    color: '#2d3436'
  },

  // Archived Projects (Carousel)
  {
    
    title: 'IBK기업은행 I-NET',
    period: '2022.05 - 2022.07',
    client: 'IBK기업은행',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'Git'],
    category: 'Finance',
    description: 'IBK기업은행 I-NET 시스템 UI 개발.',
    color: '#1a1a1a'
  },
  {
    
    title: '교보생명보험',
    period: '2021.08 - 2022.04',
    client: '교보생명보험',
    stack: ['Zeplin', 'HTML', 'JavaScript', 'CSS', 'Git'],
    category: 'Finance',
    description: '교보생명보험 통합 리뉴얼 프로젝트 퍼블리싱.',
    color: '#1a1a1a'
  },
  {
    
    title: '관광공사 근로자 휴가지원사업',
    period: '2021.05 - 2021.07',
    client: 'SK',
    stack: ['Zeplin', 'Vue', 'HTML', 'JavaScript', 'CSS', 'Git'],
    category: 'Public Sector',
    description: '근로자 휴가지원사업 플랫폼 프론트엔드 개발.',
    color: '#1a1a1a'
  },
  {
    
    title: 'AboutPet',
    period: '2021.01 - 2021.04',
    client: 'GS Retail',
    stack: ['Zeplin', 'HTML', 'JavaScript', 'CSS', 'Git'],
    category: 'Commerce',
    description: 'GS리테일 어바웃펫 쇼핑몰 UI 퍼블리싱.',
    color: '#1a1a1a'
  },
  {
    
    title: 'KAMP 인공지능 중소벤처 제조플랫폼',
    period: '2020.11 - 2021.01',
    client: 'KAMP',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'Git'],
    category: 'Platform',
    description: 'AI 제조 플랫폼 KAMP 웹사이트 구축.',
    color: '#1a1a1a'
  },
  {
    
    title: '아이마켓코리아',
    period: '2020.09 - 2020.11',
    client: '삼성SDS',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'Git'],
    category: 'Commerce',
    description: '아이마켓코리아 B2B 쇼핑몰 UI 리뉴얼.',
    color: '#1a1a1a'
  },
  {
    
    title: '미식의시대',
    period: '2020.06 - 2020.09',
    client: '미식의시대',
    stack: ['Zeplin', 'React', 'HTML', 'JavaScript', 'CSS', 'Git'],
    category: 'Commerce',
    description: '푸드 커머스 플랫폼 미식의시대 프론트엔드 개발.',
    color: '#1a1a1a'
  },
  {
    
    title: 'Michaatalk WEB APP',
    period: '2020.01 - 2020.04',
    client: 'Michaa',
    stack: ['Photoshop', 'Vue', 'HTML', 'JavaScript', 'CSS', 'Git'],
    category: 'Web App',
    description: '미샤 업무용 웹앱(Michaatalk) 개발.',
    color: '#1a1a1a'
  },
  {
    
    title: '하나은행 비대면',
    period: '2019.09 - 2019.12',
    client: '하나은행',
    stack: ['Zeplin', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Finance',
    description: '하나은행 비대면 계좌개설 서비스 UI 퍼블리싱.',
    color: '#1a1a1a'
  },
  {
    
    title: '여성가족부 모바일 아이돌보미',
    period: '2019.07 - 2019.09',
    client: '여성가족부',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Public Sector',
    description: '아이돌봄 서비스 모바일 웹 구축.',
    color: '#1a1a1a'
  },
  {
    
    title: '우리은행 원터치 개인뱅킹',
    period: '2019.04 - 2019.06',
    client: '우리은행',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Finance',
    description: '우리은행 개인뱅킹 앱 웹뷰 UI 개발.',
    color: '#1a1a1a'
  },
  {
    
    title: '롯데호텔 TMS 식음예약',
    period: '2018.09 - 2019.03',
    client: '롯데호텔',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Hospitality',
    description: '롯데호텔 식음료 예약 시스템 UI 구축.',
    color: '#1a1a1a'
  },
  {
    
    title: 'KB LiivMate',
    period: '2018.04 - 2018.09',
    client: 'KB',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Finance',
    description: 'KB 리브메이트 포인트/결제 플랫폼 UI 개발.',
    color: '#1a1a1a'
  },
  {
    
    title: '삼성닷컴',
    period: '2018.03 - 2018.04',
    client: '삼성SDS',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Commerce',
    description: '삼성전자 공식 홈페이지 운영 및 UI 개선.',
    color: '#1a1a1a'
  },
  {
    
    title: '한국경제TV',
    period: '2017.09 - 2018.01',
    client: '한국경제TV',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Media',
    description: '한국경제TV 웹사이트 리뉴얼.',
    color: '#1a1a1a'
  },
  {
    
    title: '롯데정보통신 ECM',
    period: '2016.11 - 2017.08',
    client: '롯데정보통신',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Enterprise',
    description: '롯데그룹 ECM(문서중앙화) 시스템 UI 개발.',
    color: '#1a1a1a'
  },
  {
    
    title: 'KB손해보험',
    period: '2016.06 - 2016.10',
    client: 'KB손해보험',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Finance',
    description: 'KB손해보험 대표 웹사이트 리뉴얼.',
    color: '#1a1a1a'
  },
  {
    
    title: 'ING 생명, 농협생명 보험 컨텐츠',
    period: '2016.04 - 2016.05',
    client: 'ING, 농협생명',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Finance',
    description: '보험 상품 소개 및 마케팅 컨텐츠 페이지 제작.',
    color: '#1a1a1a'
  },
  {
    
    title: '초록마을 내부 관리자',
    period: '2016.03 - 2016.03',
    client: '초록마을',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Commerce',
    description: '초록마을 관리자(Admin) 시스템 UI.',
    color: '#1a1a1a'
  },
  {
    
    title: '재팬료칸넷',
    period: '2015.09 - 2015.11',
    client: '하나투어 JP',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Travel',
    description: '일본 료칸 예약 전문 사이트 구축.',
    color: '#1a1a1a'
  },
  {
    
    title: '쿠루쿠루버스',
    period: '2015.09 - 2015.11',
    client: '하나투어 JP',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Travel',
    description: '일본 현지 버스 투어 예약 사이트 구축.',
    color: '#1a1a1a'
  },
  {
    
    title: '하나투어 JP 3차통합관리 시스템',
    period: '2015.01 - 2015.11',
    client: '하나투어 JP',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Travel',
    description: '하나투어 일본법인 통합 관리 시스템 고도화.',
    color: '#1a1a1a'
  },
  {
    
    title: '신한은행 스마트펀드센터',
    period: '2015.02 - 2015.03',
    client: '신한은행',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Finance',
    description: '펀드 상품 전용 마이크로사이트 UI.',
    color: '#1a1a1a'
  },
  {
    
    title: '클래비',
    period: '2015.02 - 2015.03',
    client: '클래비',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Branding',
    description: '캐릭터 브랜드 클래비 웹사이트 구축.',
    color: '#1a1a1a'
  },
  {
    
    title: '농사로(농촌진흥청) 웹사이트',
    period: '2014.08 - 2015.01',
    client: '농촌진흥청',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Public Sector',
    description: '국가 농업기술 포털 농사로 UI 구축.',
    color: '#1a1a1a'
  },
  {
    
    title: '농림축산식품부 공공데이터포털',
    period: '2014.08 - 2014.12',
    client: '농림축산식품부',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Public Sector',
    description: '농식품 공공데이터 개방 포털 UI 개발.',
    color: '#1a1a1a'
  },
  {
    
    title: '퍼스트피부과',
    period: '2014.08 - 2014.10',
    client: '퍼스트피부과',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Medical',
    description: '병원 홈페이지 리뉴얼.',
    color: '#1a1a1a'
  },
  {
    
    title: '라이브스포츠 모바일 앱',
    period: '2014.08 - 2014.09',
    client: '라이브스포츠',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Mobile App',
    description: '스포츠 중계 및 정보 제공 앱 UI.',
    color: '#1a1a1a'
  },
  {
    
    title: '비상교육',
    period: '2014.08 - 2014.08',
    client: '비상교육',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Education',
    description: '교육 콘텐츠 프로모션 페이지.',
    color: '#1a1a1a'
  },
  {
    
    title: '현대해상 VOC시스템',
    period: '2014.07 - 2014.08',
    client: '현대해상',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Optimization',
    description: '고객의 소리(VOC) 관리 시스템 UI 개발.',
    color: '#1a1a1a'
  },
  {
    
    title: 'R&D도우미센터',
    period: '2014.07 - 2014.07',
    client: 'R&D도우미센터',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Public Sector',
    description: 'R&D 지원 정보 센터 웹사이트.',
    color: '#1a1a1a'
  },
  {
    
    title: '대한항공 신갈 연수원',
    period: '2014.07 - 2014.07',
    client: '대한항공',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Enterprise',
    description: '연수원 소개 및 시설 안내 사이트.',
    color: '#1a1a1a'
  },
  {
    
    title: '새만금 개발청',
    period: '2014.03 - 2014.07',
    client: '새만금 개발청',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Public Sector',
    description: '새만금 개발청 공식 홈페이지 구축.',
    color: '#1a1a1a'
  },
  {
    
    title: '대자연 쇼핑몰',
    period: '2014.02 - 2014.02',
    client: '대자연',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Commerce',
    description: '건강식품 쇼핑몰 UI 퍼블리싱.',
    color: '#1a1a1a'
  },
  {
    
    title: '방송고 앱북',
    period: '2014.01 - 2014.02',
    client: '방송고',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Education',
    description: '방송통신고등학교 디지털 교과서(앱북) 뷰어.',
    color: '#1a1a1a'
  },
  {
    
    title: '공연예술포털 모바일',
    period: '2013.11 - 2013.12',
    client: '공연예술포털',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Culture',
    description: '공연 정보 검색 및 예매 포털 모바일 UI.',
    color: '#1a1a1a'
  },
  {
    
    title: 'I Will센터',
    period: '2013.09 - 2013.10',
    client: 'I Will센터',
    stack: ['HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Public Sector',
    description: '인터넷 중독 예방 상담 센터 웹사이트.',
    color: '#1a1a1a'
  },
  {
    
    title: '메리츠화재 걱정인형 모바일',
    period: '2013.08 - 2013.09',
    client: '메리츠화재',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Finance',
    description: '메리츠화재 캐릭터 마케팅 모바일 페이지.',
    color: '#1a1a1a'
  },
  {
    
    title: '인제스피디움 반응형',
    period: '2013.07 - 2013.08',
    client: '인제스피디움',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Sports',
    description: '서킷/호텔 복합 테마파크 반응형 웹사이트.',
    color: '#1a1a1a'
  },
  {
    
    title: '현대오토에버 HKPRIMEPILOT',
    period: '2013.05 - 2013.10',
    client: '현대오토에버',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Enterprise',
    description: '현대오토에버 내부 시스템 UI 개발.',
    color: '#1a1a1a'
  },
  {
    
    title: '효성CMS 전자금융센터',
    period: '2013.06 - 2013.09',
    client: '효성CMS',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Finance',
    description: '효성 CMS 자금관리 시스템 UI.',
    color: '#1a1a1a'
  },
  {
    
    title: '하나생명',
    period: '2013.03 - 2013.06',
    client: '하나생명',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Finance',
    description: '하나생명 공식 웹사이트 리뉴얼.',
    color: '#1a1a1a'
  },
  {
    
    title: '우리은행 차세대',
    period: '2012.11 - 2013.03',
    client: '우리은행',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Finance',
    description: '우리은행 차세대 뱅킹 시스템 구축 프로젝트.',
    color: '#1a1a1a'
  },
  {
    
    title: 'KDB 산업은행 차세대',
    period: '2012.07 - 2012.11',
    client: 'KDB 산업은행',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Finance',
    description: '산업은행 차세대 시스템 UI 표준화.',
    color: '#1a1a1a'
  },
  {
    
    title: '국가 암정보 센터',
    period: '2012.09 - 2012.10',
    client: '국가 암정보 센터',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Medical',
    description: '암 정보 제공 대국민 포털 퍼블리싱.',
    color: '#1a1a1a'
  },
  {
    
    title: '전남대 안전망',
    period: '2012.05 - 2012.07',
    client: '전남대',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Education',
    description: '대학교 안전 관리 시스템 UI.',
    color: '#1a1a1a'
  },
  {
    
    title: '충북대 안전망',
    period: '2012.04 - 2012.06',
    client: '충북대',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Education',
    description: '대학교 연구실 안전 관리 시스템 UI.',
    color: '#1a1a1a'
  },
  {
    
    title: '인천대 안전망',
    period: '2012.03 - 2012.04',
    client: '인천대',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Education',
    description: '대학교 시설 안전 관리 시스템 UI.',
    color: '#1a1a1a'
  },
  {
    
    title: '㈜말타니바이오',
    period: '2012.02 - 2012.03',
    client: '㈜말타니바이오',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Corporate',
    description: '바이오 기업 홍보 웹사이트.',
    color: '#1a1a1a'
  },
  {
    
    title: '삼성SVC',
    period: '2011.08 - 2011.11',
    client: '삼성',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Enterprise',
    description: '삼성 서비스 관련 내부 시스템.',
    color: '#1a1a1a'
  },
  {
    
    title: '현대자동차 위치 기반포탈 SOI',
    period: '2011.06 - 2011.08',
    client: '현대자동차',
    stack: ['Photoshop', 'HTML', 'JavaScript', 'CSS', 'SVN'],
    category: 'Automotive',
    description: '위치 기반 서비스(LBS) 포털 UI 개발.',
    color: '#1a1a1a'
  },
  {
    
    title: 'GS Retail',
    period: '2010.10 - 2011.02',
    client: 'GS Retail',
    stack: ['Photoshop', 'HTML', 'CSS', 'SVN'],
    category: 'Commerce',
    description: 'GS리테일 브랜드 사이트 구축.',
    color: '#1a1a1a'
  },
  {
    
    title: '2011 현대자동차 키오스크',
    period: '2010.07 - 2010.10',
    client: '현대자동차',
    stack: ['Photoshop'],
    category: 'Kiosk',
    description: '전시회 및 매장용 키오스크 GUI 디자인.',
    color: '#1a1a1a'
  },
  {
    
    title: '한전 KDN 인트라망',
    period: '2010.05 - 2010.06',
    client: '한전 KDN',
    stack: ['Photoshop', 'HTML', 'CSS'],
    category: 'Enterprise',
    description: '한전 KDN 사내 인트라넷 유지보수.',
    color: '#1a1a1a'
  },
  {
    
    title: '국립공원관리공단 다국어',
    period: '2009.06 - 2010.04',
    client: '국립공원관리공단',
    stack: ['Photoshop', 'HTML', 'CSS'],
    category: 'Public Sector',
    description: '국립공원 다국어(영/일/중) 웹사이트.',
    color: '#1a1a1a'
  },
  {
    
    title: '바이오 코리아',
    period: '2009.03 - 2009.05',
    client: '바이오 코리아',
    stack: ['Photoshop', 'HTML', 'CSS'],
    category: 'Event',
    description: '바이오 산업 국제 컨퍼런스 웹사이트.',
    color: '#1a1a1a'
  },
  {
    
    title: '심토스 2009',
    period: '2009.01 - 2009.03',
    client: '심토스',
    stack: ['Photoshop', 'HTML', 'CSS'],
    category: 'Event',
    description: '국제 공작기계 전시회 SIMTOS 2009 사이트.',
    color: '#1a1a1a'
  },
  {
    
    title: '연동교회',
    period: '2008.06 - 2008.12',
    client: '연동교회',
    stack: ['Photoshop', 'HTML', 'CSS'],
    category: 'Organization',
    description: '교회 홈페이지 구축.',
    color: '#1a1a1a'
  },
  {
    
    title: '폰트포 디자인',
    period: '2008.03 - 2008.12',
    client: '엥끄닷컴',
    stack: ['Photoshop', 'HTML', 'CSS'],
    category: 'Design',
    description: '디자인 에이전시 웹사이트.',
    color: '#1a1a1a'
  },
  {
    
    title: '서원무역',
    period: '2008.01 - 2008.03',
    client: '서원무역',
    stack: ['Photoshop', 'HTML', 'CSS'],
    category: 'Corporate',
    description: '무역 회사 기업 소개 사이트.',
    color: '#1a1a1a'
  },
  {
    
    title: '애견 사이트 퍼펫',
    period: '2007.10 - 2007.12',
    client: '퍼펫',
    stack: ['Photoshop', 'HTML', 'CSS'],
    category: 'Community',
    description: '반려견 정보 공유 커뮤니티.',
    color: '#1a1a1a'
  },
  {
    
    title: '울산 동구 문화원',
    period: '2007.08 - 2007.10',
    client: '울산 동구 문화원',
    stack: ['Photoshop', 'HTML', 'CSS'],
    category: 'Public Sector',
    description: '지역 문화원 홈페이지.',
    color: '#1a1a1a'
  },
  {
    
    title: '진영정보통신',
    period: '2007.06 - 2007.08',
    client: '진영정보통신',
    stack: ['Photoshop', 'HTML', 'CSS'],
    category: 'Corporate',
    description: 'IT 기업 홈페이지.',
    color: '#1a1a1a'
  },
  {
    
    title: '키즈워십',
    period: '2007.02 - 2007.05',
    client: '키즈워십',
    stack: ['Photoshop', 'HTML', 'CSS'],
    category: 'Education',
    description: '어린이 교육 콘텐츠 사이트.',
    color: '#1a1a1a'
  },
  {
    
    title: '와이유엔 메디칼',
    period: '2007.01 - 2007.02',
    client: '와이유엔 메디칼',
    stack: ['Photoshop', 'HTML', 'CSS'],
    category: 'Medical',
    description: '의료 기기 업체 홈페이지.',
    color: '#1a1a1a'
  },
  {
    
    title: '희망원정대',
    period: '2006.10 - 2006.12',
    client: '희망원정대',
    stack: ['Photoshop', 'HTML', 'CSS'],
    category: 'Non-profit',
    description: '산악 챌린지 및 탐험 대원 소개 사이트.',
    color: '#1a1a1a'
  },
  {
    
    title: '쇼핑몰 수피아',
    period: '2006.09 - 2006.10',
    client: '수피아',
    stack: ['Photoshop', 'HTML', 'CSS'],
    category: 'Commerce',
    description: '패션 쇼핑몰 UI.',
    color: '#1a1a1a'
  },
  {
    
    title: '쇼핑몰 깡년',
    period: '2006.08 - 2006.09',
    client: '쇼핑몰 깡년',
    stack: ['Photoshop', 'HTML', 'CSS'],
    category: 'Commerce',
    description: '의류 쇼핑몰 웹사이트.',
    color: '#1a1a1a'
  },
  {
    
    title: '빅텍',
    period: '2006.02 - 2006.04',
    client: '빅텍',
    stack: ['Photoshop', 'HTML', 'CSS'],
    category: 'Corporate',
    description: '방위산업체 빅텍 기업 홈페이지.',
    color: '#1a1a1a'
  },
  {
    
    title: 'PDBOX',
    period: '2005.08 - 2005.12',
    client: 'PDBOX',
    stack: ['Photoshop', 'HTML', 'CSS'],
    category: 'Web Service',
    description: '대용량 파일 전송 및 공유 서비스.',
    color: '#1a1a1a'
  },
  {
    
    title: '알폰',
    period: '2005.06 - 2005.08',
    client: '알폰',
    stack: ['Photoshop', 'HTML', 'CSS'],
    category: 'Mobile',
    description: '알뜰폰 및 벨소리 다운로드 사이트.',
    color: '#1a1a1a'
  }
];
