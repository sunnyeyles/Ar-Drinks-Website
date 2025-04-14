"use client";

import { useEffect, useRef } from "react";

export default function BreakoutScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = 300;
    canvas.height = 200;

    // 3D scene elements
    const elements = [
      {
        x: 150,
        y: 100,
        z: 0,
        size: 40,
        color: "#8b5cf6",
        vz: 0.5,
        rotationSpeed: 0.01,
        rotation: 0,
      },
      {
        x: 100,
        y: 120,
        z: -20,
        size: 30,
        color: "#06b6d4",
        vz: 0.3,
        rotationSpeed: 0.02,
        rotation: 0,
      },
      {
        x: 200,
        y: 80,
        z: -40,
        size: 35,
        color: "#f59e0b",
        vz: 0.4,
        rotationSpeed: 0.015,
        rotation: 0,
      },
    ];

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Sort elements by z-index for proper rendering
      const sortedElements = [...elements].sort((a, b) => a.z - b.z);

      // Draw elements
      sortedElements.forEach((element) => {
        // Update z position and rotation
        element.z += element.vz;
        element.rotation += element.rotationSpeed;

        // Reset z position when element gets too close
        if (element.z > 50) {
          element.z = -50;
        }

        // Calculate scale based on z position
        const scale = 1 + element.z / 100;
        const size = element.size * scale;

        // Save context state
        ctx.save();

        // Translate to element position
        ctx.translate(element.x, element.y);

        // Rotate element
        ctx.rotate(element.rotation);

        // Draw element
        ctx.fillStyle = element.color;
        ctx.beginPath();

        // Draw different shapes
        if (element.color === "#8b5cf6") {
          // Hexagon
          for (let i = 0; i < 6; i++) {
            const angle = ((Math.PI * 2) / 6) * i;
            const x = (Math.cos(angle) * size) / 2;
            const y = (Math.sin(angle) * size) / 2;

            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
        } else if (element.color === "#06b6d4") {
          // Triangle
          ctx.moveTo(0, -size / 2);
          ctx.lineTo(size / 2, size / 2);
          ctx.lineTo(-size / 2, size / 2);
        } else {
          // Circle
          ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
        }

        ctx.closePath();
        ctx.fill();

        // Add a subtle stroke
        ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Restore context state
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-[300px] h-[200px]"
      style={{
        filter: "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.15))",
      }}
    />
  );
}
