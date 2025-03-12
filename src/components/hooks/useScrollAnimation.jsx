import { useInView } from 'react-intersection-observer';

// For scroll-based animations
 export const useScrollAnimation = () => {
  const [ref, inView] = useInView({
    threshold: 0.6,
  });

  return [ref, inView];
};