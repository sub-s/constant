
import logoSymbol from '@/assets/logo-symbol.svg';
import './NoImage.css';

interface NoImageProps {
    className?: string;
}

const NoImage = ({ className = '' }: NoImageProps) => {
  return (
    <div className={`no-image-placeholder ${className}`}>
        <div className="no-image-inner">
            <div className="logo-container">
                <img src={logoSymbol} alt="Constant Logo" className="placeholder-logo" />
            </div>
            <div className="text-container">
                <h4 className="brand-title">CONSTANT</h4>
                <div className="accent-bar"></div>
                <p className="status-label">NO IMAGE AVAILABLE</p>
            </div>
        </div>
    </div>
  );
};

export default NoImage;
