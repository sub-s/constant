
import AIRequest from '@/components/AIRequest/AIRequest';
import Footer from '@/components/Layout/Footer';
import { useEffect } from 'react';

const AIRequestPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-content pt-navbar">
      <AIRequest />
      <div className="container">
        <Footer />
      </div>
    </main>
  );
};

export default AIRequestPage;
