"use client";

import { useEffect, useRef } from "react";

export default function SplineScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add a placeholder message
    const placeholderText = document.createElement("div");
    placeholderText.className =
      "absolute inset-0 flex items-center justify-center text-center p-4";
    placeholderText.innerHTML = `
      <div class="max-w-md">
        <h3 class="text-lg font-semibold mb-2">Spline.design 3D Scene Placeholder</h3>
        <p class="text-muted-foreground">
          This is where your embedded Spline.design AR scene would be displayed, 
          featuring 3D can templates and AR visualization.
        </p>
      </div>
    `;
    container.appendChild(placeholderText);

    // Create a simple canvas animation as a visual placeholder
    const canvas = document.createElement("canvas");
    canvas.className = "absolute inset-0 w-full h-full -z-10";
    container.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create a simple 3D-like animation
    const cans = Array.from({ length: 5 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 200 - 100,
      rotationY: Math.random() * Math.PI * 2,
      rotationSpeed: Math.random() * 0.01 + 0.005,
      color: ["#8b5cf6", "#06b6d4", "#f59e0b", "#10b981", "#ef4444"][i % 5],
    }));

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = "rgba(255, 255, 255, 0.01)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Sort cans by z-index
      const sortedCans = [...cans].sort((a, b) => a.z - b.z);

      // Draw cans
      sortedCans.forEach((can) => {
        // Update rotation
        can.rotationY += can.rotationSpeed;

        // Calculate scale based on z position
        const scale = 0.5 + (can.z + 100) / 200;

        // Save context
        ctx.save();

        // Translate to can position
        ctx.translate(can.x, can.y);

        // Draw can
        const width = 40 * scale;
        const height = 80 * scale;

        // Draw can body
        ctx.fillStyle = can.color;
        ctx.fillRect(-width / 2, -height / 2, width, height);

        // Draw can top ellipse
        ctx.beginPath();
        ctx.ellipse(0, -height / 2, width / 2, width / 4, 0, 0, Math.PI * 2);
        ctx.fillStyle = "#f1f5f9";
        ctx.fill();

        // Draw can bottom ellipse
        ctx.beginPath();
        ctx.ellipse(0, height / 2, width / 2, width / 4, 0, 0, Math.PI * 2);
        ctx.fillStyle = "#cbd5e1";
        ctx.fill();

        // Restore context
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full rounded-lg border border-muted bg-muted/20"
    />
  );
}
