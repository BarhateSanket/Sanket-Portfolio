import { useEffect } from 'react';

function AnimatedCursor() {
  useEffect(() => {
    if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0)) {
      return;
    }
    const cursor = document.createElement('div');
    cursor.id = 'animated-cursor';
    cursor.style.cssText = `position: fixed; top: 0; left: 0; width: 26px; height: 26px; border-radius: 50%; border: 1px solid rgba(99,102,241,0.9); pointer-events:none; transform:translate(-50%, -50%); transition:transform 0.12s ease, background 0.2s ease, width 0.18s ease, height 0.18s ease; z-index:9999; mix-blend-mode:screen;`; 
    document.body.appendChild(cursor);

    const move = (event: MouseEvent) => {
      cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    };

    const enlarge = () => {
      cursor.style.width = '42px';
      cursor.style.height = '42px';
      cursor.style.background = 'rgba(7, 10, 19, 0.25)';
    };

    const shrink = () => {
      cursor.style.width = '26px';
      cursor.style.height = '26px';
      cursor.style.background = 'transparent';
    };

    window.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, .interactive').forEach((item) => {
      item.addEventListener('mouseenter', enlarge);
      item.addEventListener('mouseleave', shrink);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      document.querySelectorAll('a, button, .interactive').forEach((item) => {
        item.removeEventListener('mouseenter', enlarge);
        item.removeEventListener('mouseleave', shrink);
      });
      cursor.remove();
    };
  }, []);

  return null;
}

export default AnimatedCursor;
