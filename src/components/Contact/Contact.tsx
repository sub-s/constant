import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import Footer from '../Layout/Footer';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [analysisData, setAnalysisData] = useState<any>(null);

  useEffect(() => {
    // AI 분석 데이터 불러오기
    const savedData = localStorage.getItem('constant_ai_analysis');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setAnalysisData(parsedData);
        
        // 분석 데이터가 있으면 메시지 자동 구성
        const aiMessage = `[AI 분석 결과 연동]
- 서비스 유형: ${parsedData.type === 'website' ? '홈페이지 제작' : '블로그 운영'}
- 브랜드명: ${parsedData.brandName}
${parsedData.type === 'website' ? `- 업종: ${parsedData.industry}\n- 목표: ${parsedData.goal}` : `- 주제: ${parsedData.topic}\n- 빈도: ${parsedData.frequency}`}
- 제안 패키지: ${parsedData.offer.title}
- 제안 가격: ${parsedData.offer.price}

위 분석 내용을 바탕으로 상담을 진행하고 싶습니다.`;
        
        setFormData(prev => ({ 
          ...prev, 
          message: aiMessage, 
          name: parsedData.brandName || '' 
        }));
      } catch (e) {
        console.error('Failed to parse analysis data', e);
      }
    }
  }, []);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', phone: '', message: '' };

    // 이름 검증 (최소 2자)
    if (formData.name.trim().length < 2) {
      newErrors.name = '성함 또는 회사명을 2자 이상 정확히 입력해 주세요.';
      isValid = false;
    }

    // 이메일 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = '이메일 주소를 입력해 주세요.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = '유효한 이메일 형식이 아닙니다 (example@mail.com).';
      isValid = false;
    }

    // 전화번호 검증 (숫자 기반 형식)
    const phoneRegex = /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/;
    const purePhone = formData.phone.replace(/[^0-9]/g, '');
    
    if (!formData.phone.trim()) {
      newErrors.phone = '연락처를 입력해 주세요.';
      isValid = false;
    } else if (!phoneRegex.test(purePhone)) {
      newErrors.phone = '올바른 휴대폰 번호 형식을 입력해 주세요 (01012345678).';
      isValid = false;
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = '문의 내용은 최소 10자 이상 구체적으로 입력해 주세요.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setStatus('sending');

    const serviceId = 'service_i88gl8h'; // 최종 Service ID 적용 완료
    const templateId = 'template_ul8szr7'; // 최종 Template ID 적용 완료
    const publicKey = 'x8MkWIyNkPu_snuKk'; // 최종 Public Key 적용 완료!

    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      메시지: formData.message,
      분석_세부정보: analysisData ? JSON.stringify(analysisData, null, 2) : 'N/A'
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus('success');
        localStorage.removeItem('constant_ai_analysis');
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((err) => {
        console.error('Email 전송 실패:', err);
        if (publicKey.includes('placeholder') || publicKey.includes('constant')) {
            alert('문의가 접수되었습니다. (시스템 시뮬레이션)');
            setStatus('success');
        } else {
            setStatus('error');
        }
      });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-container">
        <h2 className="section-title">Ready to Start?</h2>
        
        {status === 'success' ? (
            <div className="success-message animate-in">
                <div className="success-icon">✉️</div>
                <h3>문의가 성공적으로 전달되었습니다!</h3>
                <p>24시간 이내에 전담 매니저가 연락드리겠습니다.</p>
                <button className="secondary-btn" onClick={() => setStatus('idle')}>새 문의 작성하기</button>
            </div>
        ) : (
            <>
                <p className="contact-text">
                일관성 있고, 확장이 가능한 프리미엄 웹사이트를 만듭니다.
                <br />지금 바로 프로젝트를 시작해보세요.
                </p>
                
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="성함 / 회사명" 
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? 'error' : ''}
                            disabled={status === 'sending'}
                        />
                        {errors.name && <span className="error-msg">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="이메일 주소 (example@email.com)" 
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error' : ''}
                            disabled={status === 'sending'}
                        />
                        {errors.email && <span className="error-msg">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="phone" 
                            placeholder="연락처 (010-0000-0000)" 
                            value={formData.phone}
                            onChange={handleChange}
                            className={errors.phone ? 'error' : ''}
                            disabled={status === 'sending'}
                            inputMode="tel"
                        />
                        {errors.phone && <span className="error-msg">{errors.phone}</span>}
                    </div>
                    <div className="form-group">
                        <textarea 
                            name="message" 
                            placeholder="프로젝트 요약 및 문의 내용 (10자 이상)" 
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            className={errors.message ? 'error' : ''}
                            disabled={status === 'sending'}
                        ></textarea>
                        {errors.message && <span className="error-msg">{errors.message}</span>}
                    </div>
                    <button 
                        type="submit" 
                        className={`primary-btn submit-btn ${status === 'sending' ? 'loading' : ''}`}
                        disabled={status === 'sending'}
                    >
                        {status === 'sending' ? '전송 중...' : '견적 문의하기'}
                    </button>
                    {status === 'error' && <p className="error-notice">전송 중 오류가 발생했습니다. 다시 시도해 주세요.</p>}
                </form>
            </>
        )}

        <div className="contact-info-container">
            <a href="mailto:tspoon718@naver.com" className="contact-card">
                <div className="icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="contact-details">
                    <span className="label">Project Inquiry</span>
                    <span className="value">tspoon718@naver.com</span>
                </div>
            </a>

            <a href="tel:01051515252" className="contact-card">
                <div className="icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 16.92V19.92C22.0011 20.1986 21.9441 20.4742 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.4019C21.1468 21.5902 20.9046 21.7336 20.6411 21.8228C20.3776 21.912 20.0983 21.9452 19.82 21.92C16.7428 21.5857 13.787 20.5342 11.19 18.81C8.77382 17.2459 6.72907 15.1355 5.23 12.63C3.54731 9.97292 2.5323 6.94291 2.23 3.79C2.20571 3.51867 2.23894 3.24606 2.32766 2.98826C2.41639 2.73046 2.55877 2.49279 2.74619 2.28956C2.93361 2.08633 3.16208 1.92158 3.41785 1.80521C3.67362 1.68884 3.95123 1.62325 4.23 1.61H7.23C7.72926 1.60421 8.21206 1.78768 8.58617 2.12513C8.96029 2.46258 9.20146 2.93172 9.26 3.44C9.36611 4.45339 9.61334 5.44682 9.99 6.38C10.0927 6.63664 10.1171 6.918 10.0593 7.18663C10.0016 7.45526 9.86443 7.69854 9.666 7.884L8.396 9.154C9.82024 11.6606 11.8845 13.6828 14.43 15.07L15.7 13.8C15.8856 13.6018 16.129 13.4648 16.3978 13.4071C16.6666 13.3495 16.9481 13.374 17.205 13.477C18.1384 13.8539 19.132 14.1013 20.146 14.207C20.66 14.266 21.134 14.512 21.474 14.894C21.814 15.276 22.001 15.774 22 16.29V16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="contact-details">
                    <span className="label">Contact</span>
                    <span className="value">010-5151-5252</span>
                </div>
            </a>
        </div>

        <Footer />
      </div>
    </section>
  );
};

export default Contact;
