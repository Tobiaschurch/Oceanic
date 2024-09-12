
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
