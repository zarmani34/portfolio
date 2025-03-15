import { useInView } from 'react-intersection-observer';

// For scroll-based animations
 export const useScrollAnimation = (defaultThreshHold=0.6) => {
  const [ref, inView] = useInView({
    threshold: defaultThreshHold,
  });

  return [ref, inView];
};