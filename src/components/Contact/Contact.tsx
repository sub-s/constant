import emailjs from '@emailjs/browser';
import BlurText from '@/components/ui/BlurText';
import Reveal from '@/components/ui/Reveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { Check, GitBranch, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import Footer from '../Layout/Footer';
import './Contact.scss';

/** 연락 섹션 — 채용·협업 제안을 폼 검증 후 EmailJS 로 전송한다 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  /** 입력값 검증: 이름 2자 이상, 이메일 형식, 메시지 10자 이상 */
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    // 이름 검증 (최소 2자)
    if (formData.name.trim().length < 2) {
      newErrors.name = '성함 또는 소속을 2자 이상 입력해 주세요.';
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

    if (formData.message.trim().length < 10) {
      newErrors.message = '메시지는 최소 10자 이상 입력해 주세요.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  /** 입력 변경 반영 + 해당 필드의 에러 메시지 해제 */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  /** 검증 통과 시 EmailJS 로 메시지 전송 */
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
      phone: '-', // 연락처 입력란 제거 — EmailJS 템플릿 변수 호환용 고정값
      메시지: formData.message,
      분석_세부정보: 'N/A' // AI 의뢰 기능 제거 — 템플릿 변수 호환용 고정값
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Email 전송 실패:', err);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact-aurora" aria-hidden="true" />
      <div className="container">
        <Reveal className="section-head">
          <span className="index">05</span>
          <span>Contact</span>
        </Reveal>

        <div className="contact-grid">
          <div className="contact-intro">
            <h2 className="contact-headline">
              <BlurText text={'함께 일할 기회,\n편하게 제안해 주세요.'} />
            </h2>
            <Reveal delay={0.2}>
              <p className="contact-text">
                채용, 협업, 프로젝트 제안 모두 환영합니다.
                간단한 소개와 내용을 남겨주시면 확인 후 이메일로 답장드립니다.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="contact-links">
              <SpotlightCard as="a" href="mailto:tspoon718@naver.com" className="contact-link">
                <span className="contact-link-icon"><Mail size={20} aria-hidden="true" /></span>
                <span className="contact-link-text">
                  <span className="label">Email</span>
                  <span className="value">tspoon718@naver.com</span>
                </span>
              </SpotlightCard>
              <SpotlightCard as="a" href="https://github.com/sub-s" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-link-icon"><GitBranch size={20} aria-hidden="true" /></span>
                <span className="contact-link-text">
                  <span className="label">GitHub</span>
                  <span className="value">github.com/sub-s</span>
                </span>
              </SpotlightCard>
            </Reveal>
          </div>

          <Reveal className="contact-panel" delay={0.15}>
            {status === 'success' ? (
              <div className="success-message" role="status">
                <span className="success-mark" aria-hidden="true"><Check size={20} /></span>
                <h3>메시지가 전달되었습니다.</h3>
                <p>확인 후 이메일로 답장드리겠습니다.</p>
                <button className="secondary-btn" onClick={() => setStatus('idle')}>새 메시지 작성하기</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="name" 
                                            placeholder="성함 / 소속" 
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
                                        <textarea 
                                            name="message" 
                                            placeholder="제안 내용을 간단히 적어주세요 (10자 이상)" 
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
                                        {status === 'sending' ? '전송 중…' : <>메시지 보내기 <Send size={16} aria-hidden="true" /></>}
                                    </button>
                                    {status === 'error' && <p className="error-notice" role="alert">전송 중 오류가 발생했습니다. 다시 시도해 주세요.</p>}
                                </form>
            )}
          </Reveal>
        </div>

        <Footer />
      </div>
    </section>
  );
};

export default Contact;
