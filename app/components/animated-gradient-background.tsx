"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientBackgroundProps {
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
}

export default function AnimatedGradientBackground({
  className,
  variant = "primary",
}: AnimatedGradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Define gradient colors based on variant
    let colors: string[] = [];

    switch (variant) {
      case "primary":
        colors = ["#6366f1", "#8b5cf6", "#d946ef"];
        break;
      case "secondary":
        colors = ["#06b6d4", "#0ea5e9", "#3b82f6"];
        break;
      case "tertiary":
        colors = ["#f59e0b", "#f97316", "#ef4444"];
        break;
      default:
        colors = ["#6366f1", "#8b5cf6", "#d946ef"];
    }

    // Create gradient blobs
    const blobs = Array.from({ length: 3 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius:
        Math.max(canvas.width, canvas.height) * (0.1 + Math.random() * 0.2),
      color: colors[i % colors.length],
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw blobs
      blobs.forEach((blob) => {
        // Update position
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Bounce off edges
        if (blob.x < -blob.radius) blob.x = canvas.width + blob.radius;
        if (blob.x > canvas.width + blob.radius) blob.x = -blob.radius;
        if (blob.y < -blob.radius) blob.y = canvas.height + blob.radius;
        if (blob.y > canvas.height + blob.radius) blob.y = -blob.radius;

        // Draw gradient blob
        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        );

        gradient.addColorStop(0, `${blob.color}80`); // Semi-transparent
        gradient.addColorStop(1, `${blob.color}00`); // Transparent

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [variant]);

  return <canvas ref={canvasRef} className={cn("w-full h-full", className)} />;
}
