import React, { useRef, useEffect } from 'react';

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(dpr, dpr);
    };
    setSize();
    window.addEventListener('resize', setSize);

    const stars: {x: number, y: number, z: number, o: number}[] = [];
    const numStars = 100; // Minimalist count
    const speed = 0.05; // Extremely slow

    for(let i=0; i<numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2,
        o: Math.random(),
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach(star => {
        star.y -= speed * star.z;
        
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        // Twinkle slowly
        const opacity = 0.1 + 0.3 * Math.sin(Date.now() * 0.001 * star.o);
        
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        const size = Math.max(0.2, star.z * 1.2); 
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setSize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default Starfield;