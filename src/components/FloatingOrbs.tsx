import React, { useEffect, useState } from 'react';

interface Orb {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  direction: number;
}

export default function FloatingOrbs() {
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Removed pink colors
  const colors = [
    'bg-purple-500/20',
    'bg-blue-500/20',
    'bg-emerald-500/20',
    'bg-amber-500/20',
    'bg-cyan-500/20',
    'bg-indigo-500/20',
  ];

  useEffect(() => {
    // Create initial orbs
    const initialOrbs: Orb[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 200 + 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 0.5 + 0.2,
      direction: Math.random() * Math.PI * 2,
    }));

    setOrbs(initialOrbs);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrbs(prevOrbs =>
        prevOrbs.map(orb => {
          // Calculate mouse influence
          const dx = mousePosition.x - orb.x;
          const dy = mousePosition.y - orb.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - distance / 300);

          // Apply mouse repulsion
          let newX = orb.x + Math.cos(orb.direction) * orb.speed;
          let newY = orb.y + Math.sin(orb.direction) * orb.speed;

          if (influence > 0) {
            const repulsionForce = influence * 2;
            newX -= (dx / distance) * repulsionForce;
            newY -= (dy / distance) * repulsionForce;
          }

          // Wrap around screen edges
          if (newX < -orb.size) newX = window.innerWidth + orb.size;
          if (newX > window.innerWidth + orb.size) newX = -orb.size;
          if (newY < -orb.size) newY = window.innerHeight + orb.size;
          if (newY > window.innerHeight + orb.size) newY = -orb.size;

          return {
            ...orb,
            x: newX,
            y: newY,
            direction: orb.direction + (Math.random() - 0.5) * 0.1,
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, [mousePosition]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {orbs.map(orb => (
        <div
          key={orb.id}
          className={`absolute rounded-full blur-xl ${orb.color} transition-all duration-1000 ease-out`}
          style={{
            left: orb.x - orb.size / 2,
            top: orb.y - orb.size / 2,
            width: orb.size,
            height: orb.size,
            transform: `scale(${1 + Math.sin(Date.now() * 0.001 + orb.id) * 0.1})`,
          }}
        />
      ))}
    </div>
  );
}