import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AIWizard.css';

const AIWizard = ({ isOpen, type, onClose }: { isOpen: boolean, type: 'website' | 'blog', onClose: () => void }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    industry: '',
    brandName: '',
    goal: '',
    topic: '', // 블로그 전용
    frequency: '', // 블로그 전용
  });

  const getOfferData = () => {
    if (type === 'blog') {
      return {
        title: 'Premium Blog Auto-Pilot',
        price: '400,000원',
        features: ['워드프레스 기반 시스템', '전문 콘텐츠 자동 생성', '고도화된 SEO 최적화', '주기적 키워드 분석 리포트'],
        period: '셋업 24시간 내'
      };
    }

    switch (formData.industry) {
      case '쇼핑몰':
        return {
          title: 'Constant Commerce-v2',
          price: '150,000원',
          features: ['쇼핑몰 통합 엔진', '결제 연동 무상 지원', '상품 등록 자동화', '무제한 유지보수'],
          period: '3~5일'
        };
      case '기업/브랜드':
        return {
          title: 'Constant Elite-v2',
          price: '50,000원',
          features: ['브랜드 특화 엔진', '고해상도 에셋 생성', '반응형 UI 최적화', '무제한 유지보수'],
          period: '24시간 내'
        };
      case '포트폴리오':
        return {
          title: 'Constant Light-v1',
          price: '30,000원',
          features: ['커스텀 레이아웃', '이미지 최적화 갤러리', '모바일 전용 뷰', '무제한 유지보수'],
          period: '24시간 내'
        };
      default:
        return {
          title: 'Constant Standard',
          price: '50,000원',
          features: ['표준 구축 엔진', '핵심 섹션 구성', '기본 호스팅 포함', '무제한 유지보수'],
          period: '24시간 내'
        };
    }
  };

  const handleFinalSubmit = () => {
    // 분석 데이터 저장
    const analysisResult = {
      type,
      ...formData,
      offer: getOfferData(),
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('constant_ai_analysis', JSON.stringify(analysisResult));
    
    // 모달 닫기
    onClose();
    
    // 홈으로 이동 후 문의 섹션으로 스크롤 (조금 지연을 두어 페이지 전환 후 안정적으로 스크롤)
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const nextStep = () => {
    if (step === 3) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(4);
      }, 4500);
    } else {
      setStep(step + 1);
    }
  };

  if (!isOpen) return null;

  const isStepValid = () => {
    if (type === 'website') {
      if (step === 1) return !!formData.industry;
      if (step === 2) return !!formData.brandName;
      if (step === 3) return !!formData.goal;
    } else {
      if (step === 1) return !!formData.brandName;
      if (step === 2) return !!formData.topic;
      if (step === 3) return !!formData.frequency;
    }
    return true;
  };

  return (
    <div className={`wizard-overlay ${type === 'blog' ? 'blog-mode' : ''}`}>
      <div className="wizard-container modern-glass">
        <div className="wizard-header-bar">
          <h3 className="wizard-title">
            {type === 'website' ? '프리미엄 홈페이지 제작 의뢰' : '전문 블로그 매니지먼트 의뢰'}
          </h3>
          <button className="close-btn-new" onClick={onClose} aria-label="닫기">&times;</button>
        </div>
        
        <div className="wizard-progress">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className={`progress-dot ${step >= s ? 'active' : ''} ${step === s ? 'current' : ''}`}>
              <span className="dot-label">{s === 4 ? '완료' : `단계 ${s}`}</span>
            </div>
          ))}
          <div className="progress-bar" style={{ width: `${(step - 1) * 33.3}%` }}></div>
        </div>

        <div className="wizard-content">
          {loading ? (
            <div className="ai-analyzing">
              <div className="scanner"></div>
              <div className="ai-brain">
                <div className="brain-core"></div>
                <div className="pulse-ring"></div>
              </div>
              <h3>{type === 'website' ? '비즈니스 모델을 정밀 분석 중입니다...' : '블로그 운영 최적화 전략을 수립 중입니다...'}</h3>
              <p>{type === 'website' ? '최적의 레이아웃과 독점 디자인 에셋을 선별하고 있습니다.' : '데이터 기반 키워드 분석과 시스템 최적화 설정을 구성 중입니다.'}</p>
              <div className="loading-stats">
                {type === 'website' ? (
                  <>
                    <span>데이터 구조 파악 중... 92%</span>
                    <span>업종 트렌드 분석 완료</span>
                    <span>최적화 UI 컴포넌트 선별 중...</span>
                    <span>서버 아키텍처 구성 중...</span>
                  </>
                ) : (
                  <>
                    <span>타겟 키워드 분석 중... 95%</span>
                    <span>SEO 자동화 모듈 최적화</span>
                    <span>콘텐츠 생성 알고리즘 셋업 완료</span>
                    <span>워드프레스 엔진 연동 중...</span>
                  </>
                )}
              </div>
            </div>
          ) : (
            <>
              {type === 'website' ? (
                // 홈페이지 마법사 질문
                <>
                  {step === 1 && (
                    <div className="step-content animate-in">
                      <h2>어떤 홈페이지를 원하시나요?</h2>
                      <p>비즈니스 성격에 맞는 최적의 엔진을 선택합니다.</p>
                      <div className="option-grid">
                        {['기업/브랜드', '쇼핑몰', '포트폴리오', '랜딩페이지'].map((item) => (
                          <button 
                            key={item} 
                            className={`option-card-new ${formData.industry === item ? 'selected' : ''}`}
                            onClick={() => setFormData({...formData, industry: item})}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {step === 2 && (
                    <div className="step-content animate-in">
                      <h2>브랜드의 이름을 알려주세요</h2>
                      <p>브랜드명에 가장 어울리는 프리미엄 톤앤매너를 추천합니다.</p>
                      <input 
                        type="text" 
                        placeholder="예: Constant Lab" 
                        className="wizard-input"
                        value={formData.brandName}
                        onChange={(e) => setFormData({...formData, brandName: e.target.value})}
                        autoFocus
                      />
                    </div>
                  )}
                  {step === 3 && (
                    <div className="step-content animate-in">
                      <h2>가장 중요한 목표는 무엇인가요?</h2>
                      <p>목표에 최적화된 하이엔드 UI/UX 시나리오가 설계됩니다.</p>
                      <div className="option-grid">
                        {['매출 증대', '브랜드 홍보', '문의 확보', '정보 전달'].map((item) => (
                          <button 
                            key={item} 
                            className={`option-card-new ${formData.goal === item ? 'selected' : ''}`}
                            onClick={() => setFormData({...formData, goal: item})}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                // 블로그 마법사 질문
                <>
                  {step === 1 && (
                    <div className="step-content animate-in">
                      <h2>블로그의 이름을 정해주셨나요?</h2>
                      <p>없으시다면 기업명이나 서비스명을 입력해주세요.</p>
                      <input 
                        type="text" 
                        placeholder="예: 월간 테크 리뷰" 
                        className="wizard-input"
                        value={formData.brandName}
                        onChange={(e) => setFormData({...formData, brandName: e.target.value})}
                        autoFocus
                        spellCheck={false}
                      />
                    </div>
                  )}
                  {step === 2 && (
                    <div className="step-content animate-in">
                      <h2>운영할 핵심 주제가 무엇인가요?</h2>
                      <p>주제에 부합하는 고난도 전문 키워드 군을 추출합니다.</p>
                      <input 
                        type="text" 
                        placeholder="예: IT 트렌드, 건강 정보, 육아 지식 등" 
                        className="wizard-input"
                        value={formData.topic}
                        onChange={(e) => setFormData({...formData, topic: e.target.value})}
                        autoFocus
                        spellCheck={false}
                      />
                    </div>
                  )}
                  {step === 3 && (
                    <div className="step-content animate-in">
                      <h2>포스팅 빈도는 어느 정도가 좋을까요?</h2>
                      <p>빈도에 최적화된 콘텐츠 학습 및 생성 시스템이 가동됩니다.</p>
                      <div className="option-grid">
                        {['주 3회 집중', '매일 정기', '주 1회 심층', '비정규 대량'].map((item) => (
                          <button 
                            key={item} 
                            className={`option-card-new ${formData.frequency === item ? 'selected' : ''}`}
                            onClick={() => setFormData({...formData, frequency: item})}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              {step === 4 && (
                <div className="step-content animate-in success-step">
                  <div className="success-icon">🏆</div>
                  <h2>분석이 완료되었습니다!</h2>
                  <div className="offer-box">
                    <p><strong>{formData.brandName}</strong> 고객님을 위한 전용 분석 결과</p>
                    <ul>
                      <li>엔진 아키텍처: <span className="highlight-red">{getOfferData().title}</span></li>
                      <li>월 서비스 비용: <span className="highlight-red">{getOfferData().price} (고정)</span></li>
                      {getOfferData().features.map((f, i) => (
                        <li key={i}>{f}: <span className="highlight-red">포함</span></li>
                      ))}
                      <li>인도/시작 예정: <span className="highlight-red">{getOfferData().period}</span></li>
                    </ul>
                  </div>
                  <p className="final-desc">수립된 전문 전략으로 즉시 비즈니스를 <br/>가속화할 준비가 완료되었습니다.</p>
                  <button className="final-cta" onClick={handleFinalSubmit}>
                    이 조건으로 확정하기
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {!loading && step < 4 && (
          <div className="wizard-footer">
            <button className="back-btn" onClick={() => setStep(step - 1)} disabled={step === 1}>이전</button>
            <button 
                className="next-btn" 
                onClick={nextStep}
                disabled={!isStepValid()}
            >
              {step === 3 ? '전문 분석 시작' : '다음 단계'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIWizard;
