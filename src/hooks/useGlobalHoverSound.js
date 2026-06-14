import { useEffect } from 'react';
import { playHoverSound } from '../utils/sound';

export default function useGlobalHoverSound() {
  useEffect(() => {
    const handleHover = (e) => {
      const target = e.target.closest('.sound-card');

      if (target) {
        playHoverSound();
      }
    };

    document.addEventListener('mouseover', handleHover);

    return () => {
      document.removeEventListener('mouseover', handleHover);
    };
  }, []);
}