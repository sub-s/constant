import { useState } from 'react';
import './AIRequest.css';
import AIWizard from './AIWizard';

const AIRequest = () => {
  const [wizardConfig, setWizardConfig] = useState<{ isOpen: boolean; type: 'website' | 'blog' }>({
    isOpen: false,
    type: 'website'
  });

  const openWizard = (type: 'website' | 'blog') => {
    setWizardConfig({ isOpen: true, type });
  };

  return (
    <section id="ai-request" className="section ai-request">
      <AIWizard 
        isOpen={wizardConfig.isOpen} 
        type={wizardConfig.type}
        onClose={() => setWizardConfig({ ...wizardConfig, isOpen: false })} 
      />
      <div className="container">
        <div className="ai-request-header" data-aos="fade-up">
          <span className="subtitle">Premium AI Solution</span>
          <h2 className="section-title">
            AI로 만드는 <span className="highlight">압도적 퀄리티</span>의 비즈니스
          </h2>
          <p className="section-desc">
            복잡한 구축과 운영은 AI가, 감각적인 포인트는 전문가가 채웁니다.<br />
            원하시는 서비스를 선택하여 AI 분석을 시작해보세요.
          </p>
          <div className="hero-action-area dual-actions">
            <button className="primary-btn glass-btn" onClick={() => openWizard('website')}>
                AI 홈페이지 제작 의뢰
            </button>
            <button className="primary-btn glass-btn blog-btn" onClick={() => openWizard('blog')}>
                AI 전문 블로그 운영 의뢰
            </button>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-icon">💰</div>
            <h3>제작비 0원</h3>
            <p>초기 제작 비용 부담을 완전히 없앴습니다. 성장을 위한 투자에만 집중하세요.</p>
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-icon">☕</div>
            <h3>월 5만원</h3>
            <p>하루 커피 한 잔 가격으로 최정상급 프리미엄 사이트를 소유하고 운영하세요.</p>
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-icon">📝</div>
            <h3>월 40만원</h3>
            <p>워드프레스 + AI 자동화 기술로 고퀄리티 블로그를 365일 지치지 않고 운영합니다.</p>
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-icon">🔄</div>
            <h3>무제한 유지보수</h3>
            <p>추가 비용 걱정 마세요. 텍스트 수정부터 이미지 교체까지 무제한 지원합니다.</p>
          </div>
        </div>

        <div className="process-section" data-aos="fade-up">
            <h3 className="sub-title">1. <span className="highlight-text">AI 홈페이지 제작</span> 비교</h3>
            <div className="comparison-table modern-glass">
                <div className="table-row header">
                    <div className="cell">비교 항목</div>
                    <div className="cell">일반 업체 제작</div>
                    <div className="cell cell-highlight">
                        Constant AI 제작 <span className="badge-premium">추천</span>
                    </div>
                </div>
                <div className="table-row">
                    <div className="cell">제작 비용</div>
                    <div className="cell">300만원 이상</div>
                    <div className="cell cell-highlight">0원</div>
                </div>
                <div className="table-row">
                    <div className="cell">제작 기간</div>
                    <div className="cell">2주 ~ 4주</div>
                    <div className="cell cell-highlight">24시간 내 초안</div>
                </div>
                <div className="table-row">
                    <div className="cell">유지보수</div>
                    <div className="cell">건당 비용 발생</div>
                    <div className="cell cell-highlight">무제한 무상 지원</div>
                </div>
                <div className="table-row">
                    <div className="cell">이미지 에셋</div>
                    <div className="cell">직접 준비</div>
                    <div className="cell cell-highlight">AI 커스텀 생성</div>
                </div>
            </div>
        </div>

        <div className="process-section" data-aos="fade-up">
            <h3 className="sub-title">2. <span className="highlight-text">AI 전문 블로그 운영</span> 비교</h3>
            <div className="comparison-table modern-glass blog-table">
                <div className="table-row header">
                    <div className="cell">비교 항목</div>
                    <div className="cell">일반 대행사</div>
                    <div className="cell cell-highlight">
                        Constant AI 운영 <span className="badge-premium premium-tag">PREMIUM</span>
                    </div>
                </div>
                <div className="table-row">
                    <div className="cell">월 운영비</div>
                    <div className="cell">50만원 ~ 75만원</div>
                    <div className="cell cell-highlight">월 40만원</div>
                </div>
                <div className="table-row">
                    <div className="cell">콘텐츠 퀄리티</div>
                    <div className="cell">단순 정보 나열</div>
                    <div className="cell cell-highlight">AI SEO 최적화 전문 포스팅</div>
                </div>
                <div className="table-row">
                    <div className="cell">포스팅 빈도</div>
                    <div className="cell">협의 (추가금)</div>
                    <div className="cell cell-highlight">주 3~7회 자동 발행</div>
                </div>
                <div className="table-row">
                    <div className="cell">플랫폼</div>
                    <div className="cell">네이버/티스토리</div>
                    <div className="cell cell-highlight">워드프레스 기반 (소유권 귀속)</div>
                </div>
                <div className="table-row">
                    <div className="cell">기술 지원</div>
                    <div className="cell">없음</div>
                    <div className="cell cell-highlight">자동화 엔진 무상 업데이트</div>
                </div>
            </div>
            <div className="table-caption">* 블로그 운영 서비스는 워드프레스 설치 및 AI 자동화 셋업이 포함된 전문 서비스입니다.</div>
        </div>

        <div className="process-section" data-aos="fade-up">
            <h3 className="sub-title">제작 프로세스</h3>
            <div className="process-steps">
                <div className="step">
                    <span className="step-num">01</span>
                    <h4>상담 신청</h4>
                    <p>AI 위저드 설문 작성</p>
                </div>
                <div className="step-line"></div>
                <div className="step">
                    <span className="step-num">02</span>
                    <h4>AI 분석 및 제안</h4>
                    <p>맞춤형 엔진 설계</p>
                </div>
                <div className="step-line"></div>
                <div className="step">
                    <span className="step-num">03</span>
                    <h4>베타 전달</h4>
                    <p>24시간 내 결과 발송</p>
                </div>
            </div>
        </div>

        <div className="process-section" data-aos="fade-up">
            <h3 className="sub-title">자주 묻는 질문</h3>
            <div className="faq-grid">
                <div className="faq-item">
                    <h4>Q. 정말 제작비가 0원인가요?</h4>
                    <p>네, 홈페이지 초기 구축 비용은 Constant AI 엔진이 부담합니다. 고객님은 월 운영 관리비만 지불하시면 됩니다.</p>
                </div>
                <div className="faq-item">
                    <h4>Q. 블로그 운영은 어떻게 자동화되나요?</h4>
                    <p>워드프레스 기반의 AI 시스템이 업종 키워드를 분석하여 고퀄리티 콘텐츠를 정기적으로 생산하고 SEO를 최적화합니다.</p>
                </div>
                <div className="faq-item">
                    <h4>Q. 유지보수 범위는 어디까지인가요?</h4>
                    <p>간단한 텍스트 수정부터 이미지 교체, 메뉴 추가까지 운영에 필요한 모든 변경 사항을 무제한으로 지원해 드립니다.</p>
                </div>
            </div>
        </div>

        <div className="ai-request-cta" data-aos="fade-up">
            <div className="cta-content">
                <h3>압도적인 성장, <br />지금 바로 AI와 시작하세요.</h3>
                <div className="cta-actions">
                  <button className="primary-btn pulse" onClick={() => openWizard('website')}>
                      AI 홈페이지 제작 의뢰
                  </button>
                  <button className="primary-btn pulse blog-cta" onClick={() => openWizard('blog')}>
                      AI 전문 블로그 운영 의뢰
                  </button>
                </div>
            </div>
            <div className="cta-bg-effect"></div>
        </div>
      </div>
    </section>
  );
};

export default AIRequest;
