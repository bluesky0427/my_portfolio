import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

interface MousePosition {
  x: number;
  y: number;
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<MousePosition>({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Particle colors - removed pink
  const colors = [
    'rgba(147, 51, 234, 0.6)', // purple
    'rgba(59, 130, 246, 0.6)', // blue
    'rgba(16, 185, 129, 0.6)', // emerald
    'rgba(251, 191, 36, 0.6)', // amber
    'rgba(99, 102, 241, 0.6)', // indigo
    'rgba(14, 165, 233, 0.6)', // sky
  ];

  // Create a new particle
  const createParticle = (x: number, y: number): Particle => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 2 + 0.5;
    
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0,
      maxLife: Math.random() * 120 + 60,
    };
  };

  // Update canvas dimensions
  const updateDimensions = () => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }
  };

  // Handle mouse movement
  const handleMouseMove = (e: MouseEvent) => {
    mouseRef.current = {
      x: e.clientX,
      y: e.clientY,
    };

    // Create particles at mouse position occasionally
    if (Math.random() < 0.1) {
      particlesRef.current.push(createParticle(e.clientX, e.clientY));
    }
  };

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas with fade effect
    ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw subtle gradient based on mouse position - no pink
    const gradient = ctx.createRadialGradient(
      mouseRef.current.x,
      mouseRef.current.y,
      0,
      mouseRef.current.x,
      mouseRef.current.y,
      400
    );
    gradient.addColorStop(0, 'rgba(147, 51, 234, 0.05)');
    gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.03)');
    gradient.addColorStop(1, 'rgba(16, 185, 129, 0.01)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particlesRef.current = particlesRef.current.filter(particle => {
      // Update particle position
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life++;

      // Apply mouse attraction
      const dx = mouseRef.current.x - particle.x;
      const dy = mouseRef.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 150) {
        const force = (150 - distance) / 150 * 0.02;
        particle.vx += (dx / distance) * force;
        particle.vy += (dy / distance) * force;
      }

      // Apply friction
      particle.vx *= 0.99;
      particle.vy *= 0.99;

      // Update opacity based on life
      const lifeRatio = particle.life / particle.maxLife;
      particle.opacity = (1 - lifeRatio) * 0.8;

      // Draw particle
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();

      // Add glow effect
      ctx.shadowBlur = 20;
      ctx.shadowColor = particle.color;
      ctx.fill();
      ctx.restore();

      // Draw connections to nearby particles
      particlesRef.current.forEach(otherParticle => {
        if (otherParticle === particle) return;
        
        const dx = otherParticle.x - particle.x;
        const dy = otherParticle.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.save();
          ctx.globalAlpha = (1 - distance / 100) * 0.2;
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
          ctx.restore();
        }
      });

      return particle.life < particle.maxLife;
    });

    // Limit particle count
    if (particlesRef.current.length > 30) {
      particlesRef.current = particlesRef.current.slice(-30);
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    window.addEventListener('mousemove', handleMouseMove);

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        width: '100vw',
        height: '100vh',
      }}
    />
  );
}