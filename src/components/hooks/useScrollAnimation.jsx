import { useInView } from 'react-intersection-observer';

// For scroll-based animations
 export const useScrollAnimation = () => {
  const [ref, inView] = useInView({
    threshold: 0.9,
    // rootMargin: '-100px 0px'
  });

  return [ref, inView];
};