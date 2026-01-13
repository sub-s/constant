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

            <a href="tel:010-0000-0000" className="contact-card">
                <div className="icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 16.92V19.92C22.0011 20.1986 21.9441 20.4742 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.4019C21.1468 21.5902 20.9046 21.7336 20.6411 21.8228C20.3776 21.912 20.0983 21.9452 19.82 21.92C16.7428 21.5857 13.787 20.5342 11.19 18.81C8.77382 17.2459 6.72907 15.1355 5.23 12.63C3.54731 9.97292 2.5323 6.94291 2.23 3.79C2.20571 3.51867 2.23894 3.24606 2.32766 2.98826C2.41639 2.73046 2.55877 2.49279 2.74619 2.28956C2.93361 2.08633 3.16208 1.92158 3.41785 1.80521C3.67362 1.68884 3.95123 1.62325 4.23 1.61H7.23C7.72926 1.60421 8.21206 1.78768 8.58617 2.12513C8.96029 2.46258 9.20146 2.93172 9.26 3.44C9.36611 4.45339 9.61334 5.44682 9.99 6.38C10.0927 6.63664 10.1171 6.918 10.0593 7.18663C10.0016 7.45526 9.86443 7.69854 9.666 7.884L8.396 9.154C9.82024 11.6606 11.8845 13.6828 14.43 15.07L15.7 13.8C15.8856 13.6018 16.129 13.4648 16.3978 13.4071C16.6666 13.3495 16.9481 13.374 17.205 13.477C18.1384 13.8539 19.132 14.1013 20.146 14.207C20.66 14.266 21.134 14.512 21.474 14.894C21.814 15.276 22.001 15.774 22 16.29V16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="contact-details">
                    <span className="label">Contact</span>
                    <span className="value">010-0000-0000</span>
                </div>
            </a>
        </div>

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
