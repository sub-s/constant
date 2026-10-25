
import logoSymbol from '@/assets/logo-symbol.svg';
import './NoImage.scss';

interface NoImageProps {
    className?: string;
}

/** 프로젝트 이미지가 없을 때 보여주는 브랜드 플레이스홀더 */
const NoImage = ({ className = '' }: NoImageProps) => {
  return (
    <div className={`no-image-placeholder ${className}`}>
        <div className="no-image-inner">
            <div className="logo-container">
                <img src={logoSymbol} alt="" className="placeholder-logo" />
            </div>
            <div className="text-container">
                <div className="accent-bar"></div>
                <p className="status-label">NO IMAGE AVAILABLE</p>
            </div>
        </div>
    </div>
  );
};

export default NoImage;
