import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-container">
        <h2 className="section-title">Ready to Start?</h2>
        <p className="contact-text">
          일관성 있고, 확장이 가능한 프리미엄 웹사이트를 만듭니다.
          <br />지금 바로 프로젝트를 시작해보세요.
        </p>
        
        <a href="mailto:contact@constant.dev" className="contact-email">
          hello@constant.dev
        </a>

        <footer className="footer">
          <div className="social-links">
            <a href="#">GitHub</a>
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
