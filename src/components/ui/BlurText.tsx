import { motion } from 'motion/react';
import './ui.scss';

interface BlurTextProps {
  /** 표시할 문장. 줄바꿈은 \n 으로 지정 */
  text: string;
  className?: string;
  /** 첫 단어가 나타나기까지의 지연(초) */
  delay?: number;
  /** 감싸는 태그 (제목 의미 유지용) */
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p';
}

/**
 * 단어 단위로 블러가 풀리며 올라오는 텍스트 이펙트
 * (Magic UI / React Bits 의 Blur Text 스타일)
 * - 스크린리더에는 전체 문장을 aria-label 로 한 번만 읽히게 한다
 */
const BlurText = ({ text, className, delay = 0, as = 'span' }: BlurTextProps) => {
  const Tag = motion[as];
  let wordIndex = 0;

  return (
    <Tag className={`blur-text ${className ?? ''}`} aria-label={text.replace(/\n/g, ' ')}>
      {text.split('\n').map((line, lineIdx) => (
        <span className="blur-line" key={lineIdx} aria-hidden="true">
          {line.split(' ').map((word) => {
            const i = wordIndex++;
            return (
              <motion.span
                key={i}
                className="blur-word"
                initial={{ opacity: 0, filter: 'blur(14px)', y: 28 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.9, delay: delay + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
};

export default BlurText;
