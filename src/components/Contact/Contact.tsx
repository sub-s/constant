import './Contact.css';

import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', contact: '', message: '' };

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = '성함 또는 회사명을 입력해 주세요.';
      isValid = false;
    }

    // Contact Validation (Email or Phone)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    
    if (!formData.contact.trim()) {
      newErrors.contact = '연락처를 입력해 주세요.';
      isValid = false;
    } else if (!emailRegex.test(formData.contact) && !phoneRegex.test(formData.contact)) {
      newErrors.contact = '유효한 이메일 또는 전화번호 형식이 아닙니다.';
      isValid = false;
    }

    // Message Validation
    if (formData.message.trim().length < 10) {
      newErrors.message = '문의 내용은 최소 10자 이상 입력해 주세요.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }

    const { name, contact, message } = formData;
    
    // Construct mailto link
    const subject = `[프로젝트 문의] ${name}님 견적 요청`;
    const body = `이름: ${name}%0D%0A연락처: ${contact}%0D%0A%0D%0A문의 내용:%0D%0A${message}`;
    
    window.location.href = `mailto:tspoon718@naver.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-container">
        <h2 className="section-title">Ready to Start?</h2>
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
                />
                {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    name="contact" 
                    placeholder="이메일 또는 연락처 (010-0000-0000)" 
                    value={formData.contact}
                    onChange={handleChange}
                    className={errors.contact ? 'error' : ''}
                />
                {errors.contact && <span className="error-msg">{errors.contact}</span>}
            </div>
            <div className="form-group">
                <textarea 
                    name="message" 
                    placeholder="프로젝트 요약 및 문의 내용 (10자 이상)" 
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className="error-msg">{errors.message}</span>}
            </div>
            <button type="submit" className="primary-btn submit-btn">견적 문의하기</button>
        </form>

        <footer className="footer">
          <div className="social-links">
            <a href="https://github.com/sub-s">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Constant. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
