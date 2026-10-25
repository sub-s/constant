import Reveal from '@/components/ui/Reveal';
import { AnimatePresence, motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import './Faq.scss';

/**
 * 자주 묻는 질문 — 화면 표시와 AEO(답변 엔진) 구조화 데이터(FAQPage)가 같은 배열을 사용한다.
 * 구조화 데이터는 반드시 화면에 보이는 내용과 일치해야 하므로 한 곳에서만 관리한다.
 */
const FAQS = [
  {
    q: '어떤 일을 하시나요?',
    a: '프론트엔드 개발자입니다. 금융·엔터프라이즈 서비스의 웹 퍼블리싱과 React 기반 프론트엔드 개발을 해 왔고, 1인 개인사업자(Constant)로 개인 프로젝트도 운영합니다.',
  },
  {
    q: '주로 사용하는 기술은 무엇인가요?',
    a: 'React와 TypeScript, Next.js를 중심으로 사용하고 HTML, CSS(SCSS), JavaScript와 Vue.js 경험도 있습니다.',
  },
  {
    q: '웹 접근성도 고려하나요?',
    a: '네. 시맨틱 마크업과 키보드 사용성, 스크린리더 대응을 기본으로 생각하며, 웹 접근성 지침 문서를 꾸준히 참고합니다.',
  },
  {
    q: '채용이나 협업 제안은 어떻게 하나요?',
    a: '페이지 하단의 메시지 폼 또는 이메일(tspoon718@naver.com)로 연락해 주세요. GitHub(github.com/sub-s)에서도 작업물을 확인할 수 있습니다.',
  },
];

/** FAQPage JSON-LD (검색 엔진 / 생성형 AI / 답변 엔진 공통 대응) */
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section faq">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="container faq-layout">
        <div className="faq-intro">
          <Reveal className="section-head">
            <span className="index">04</span>
            <span>FAQ</span>
          </Reveal>
          <Reveal>
            <h2 className="section-title">자주 묻는 질문.</h2>
          </Reveal>
        </div>

        <ul className="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={item.q}>
                <Reveal delay={i * 0.08}>
                  <div className={`faq-entry ${isOpen ? 'open' : ''}`}>
                    <button
                      className="faq-question"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                    >
                      <span>{item.q}</span>
                      <Plus className="faq-plus" size={20} aria-hidden="true" />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="faq-answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p>{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
