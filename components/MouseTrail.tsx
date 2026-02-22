import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  life: number;
}

export const MouseTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const colors = [
      'rgba(219, 39, 119, 0.8)', 
      'rgba(236, 72, 153, 0.7)', 
      'rgba(212, 175, 55, 0.8)', 
      'rgba(235, 210, 123, 0.7)' 
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (x: number, y: number) => {
      const size = Math.random() * 5 + 2; 
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particles.current.push({
        x,
        y,
        size,
        color,
        speedX: Math.random() * 1.5 - 0.75, 
        speedY: Math.random() * 1.5 - 0.75,
        life: 1.0 
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      
      for (let i = 0; i < 3; i++) {
        createParticle(e.clientX, e.clientY);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        
        p.x += p.speedX;
        p.y += p.speedY;
        
        p.life -= 0.025; 
        p.size -= 0.05;

        if (p.life <= 0 || p.size <= 0) {
          particles.current.splice(i, 1);
          i--;
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.fill();
        ctx.globalAlpha = 1.0; 
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block"
    />
  );
};