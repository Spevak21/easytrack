import { useState, useRef, useEffect, useCallback } from 'react';

export function useScrollShade() {
  const [scrollState, setScrollState] = useState({
    overflowing: false,
    position: null,
  });
  const containerRef = useRef(null);

  const checkScroll = useCallback(() => {
    const container = containerRef.current;
    if (container) {
      let position = 'middle';
      if (container.scrollTop === 0) {
        position = 'top';
      } else if (container.scrollTop === container.scrollHeight - container.offsetHeight
      ) {
        position = 'bottom';
      }

      setScrollState({
        overflowing: container.scrollHeight > container.clientHeight,
        position,
      });
    }
  }, []);

  useEffect(() => {
    checkScroll();
  }, [checkScroll]);

  return {
    scrollState,
    containerRef,
    checkScroll,
  };
}
