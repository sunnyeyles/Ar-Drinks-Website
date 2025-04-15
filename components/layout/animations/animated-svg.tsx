"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSvgProps {
  type: "can" | "rocket" | "qr";
  className?: string;
}

export function AnimatedSvg({ type, className }: AnimatedSvgProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Animation logic based on type
    if (type === "can") {
      // Can animation
      const can = svg.querySelector(".can");
      const particles = svg.querySelectorAll(".particle");

      if (can && particles.length) {
        // Animate can floating
        can.animate(
          [
            { transform: "translateY(0)" },
            { transform: "translateY(-10px)" },
            { transform: "translateY(0)" },
          ],
          {
            duration: 3000,
            iterations: Number.POSITIVE_INFINITY,
            easing: "ease-in-out",
          }
        );

        // Animate particles
        particles.forEach((particle, index) => {
          particle.animate(
            [
              {
                transform: "translate(0, 0) scale(1)",
                opacity: 0.8,
              },
              {
                transform: `translate(${
                  (index % 2 === 0 ? 1 : -1) * (20 + Math.random() * 30)
                }px, ${-30 - Math.random() * 50}px) scale(${
                  0.5 + Math.random() * 0.5
                })`,
                opacity: 0,
              },
            ],
            {
              duration: 1500 + Math.random() * 1000,
              iterations: Number.POSITIVE_INFINITY,
              delay: Math.random() * 1000,
              easing: "ease-out",
            }
          );
        });
      }
    } else if (type === "rocket") {
      // Rocket animation
      const rocket = svg.querySelector(".rocket");
      const flames = svg.querySelectorAll(".flame");
      const stars = svg.querySelectorAll(".star");

      if (rocket) {
        rocket.animate(
          [
            { transform: "translateY(0)" },
            { transform: "translateY(-15px)" },
            { transform: "translateY(0)" },
          ],
          {
            duration: 2000,
            iterations: Number.POSITIVE_INFINITY,
            easing: "ease-in-out",
          }
        );
      }

      if (flames.length) {
        flames.forEach((flame) => {
          flame.animate(
            [
              { transform: "scaleY(0.8)", opacity: 0.7 },
              { transform: "scaleY(1.2)", opacity: 1 },
              { transform: "scaleY(0.8)", opacity: 0.7 },
            ],
            {
              duration: 500 + Math.random() * 300,
              iterations: Number.POSITIVE_INFINITY,
              easing: "ease-in-out",
            }
          );
        });
      }

      if (stars.length) {
        stars.forEach((star, index) => {
          star.animate([{ opacity: 0.2 }, { opacity: 1 }, { opacity: 0.2 }], {
            duration: 1000 + Math.random() * 1000,
            iterations: Number.POSITIVE_INFINITY,
            delay: index * 100,
            easing: "ease-in-out",
          });
        });
      }
    } else if (type === "qr") {
      // QR code animation
      const qrElements = svg.querySelectorAll(".qr-element");

      if (qrElements.length) {
        qrElements.forEach((element, index) => {
          element.animate(
            [
              { opacity: 0.5, transform: "scale(0.95)" },
              { opacity: 1, transform: "scale(1)" },
              { opacity: 0.5, transform: "scale(0.95)" },
            ],
            {
              duration: 2000,
              iterations: Number.POSITIVE_INFINITY,
              delay: index * 50,
              easing: "ease-in-out",
            }
          );
        });
      }
    }
  }, [type]);

  // Render different SVGs based on type
  const renderSvgContent = () => {
    switch (type) {
      case "can":
        return (
          <svg
            ref={svgRef}
            viewBox="0 0 200 200"
            className={cn("w-full h-full", className)}
          >
            {/* Can body */}
            <g className="can">
              <rect
                x="70"
                y="50"
                width="60"
                height="100"
                rx="5"
                fill="#e2e8f0"
                stroke="#94a3b8"
                strokeWidth="2"
              />
              <ellipse
                cx="100"
                cy="50"
                rx="30"
                ry="10"
                fill="#f1f5f9"
                stroke="#94a3b8"
                strokeWidth="2"
              />
              <ellipse
                cx="100"
                cy="150"
                rx="30"
                ry="10"
                fill="#cbd5e1"
                stroke="#94a3b8"
                strokeWidth="2"
              />

              {/* Can label */}
              <rect
                x="75"
                y="70"
                width="50"
                height="60"
                rx="3"
                fill="#8b5cf6"
              />
              <text
                x="100"
                y="100"
                textAnchor="middle"
                fill="white"
                fontWeight="bold"
                fontSize="8"
              >
                AR
              </text>
              <text
                x="100"
                y="110"
                textAnchor="middle"
                fill="white"
                fontSize="6"
              >
                SCAN ME
              </text>
            </g>

            {/* 3D elements emerging from can */}
            <circle
              className="particle"
              cx="110"
              cy="90"
              r="5"
              fill="#f472b6"
            />
            <circle
              className="particle"
              cx="120"
              cy="100"
              r="4"
              fill="#38bdf8"
            />
            <circle
              className="particle"
              cx="115"
              cy="80"
              r="6"
              fill="#4ade80"
            />
            <circle className="particle" cx="90" cy="85" r="3" fill="#fb923c" />
            <circle className="particle" cx="85" cy="95" r="4" fill="#a78bfa" />
          </svg>
        );

      case "rocket":
        return (
          <svg
            ref={svgRef}
            viewBox="0 0 200 200"
            className={cn("w-full h-full", className)}
          >
            {/* Stars */}
            <circle className="star" cx="30" cy="40" r="2" fill="white" />
            <circle className="star" cx="50" cy="20" r="1" fill="white" />
            <circle className="star" cx="70" cy="50" r="1.5" fill="white" />
            <circle className="star" cx="150" cy="30" r="2" fill="white" />
            <circle className="star" cx="170" cy="60" r="1" fill="white" />
            <circle className="star" cx="120" cy="25" r="1.5" fill="white" />
            <circle className="star" cx="40" cy="150" r="2" fill="white" />
            <circle className="star" cx="180" cy="120" r="1.5" fill="white" />

            {/* Rocket */}
            <g className="rocket">
              {/* Rocket body */}
              <path
                d="M100,30 L120,80 L120,130 L80,130 L80,80 Z"
                fill="#f1f5f9"
                stroke="#94a3b8"
                strokeWidth="2"
              />
              <path
                d="M100,30 C85,50 85,70 100,80 C115,70 115,50 100,30 Z"
                fill="#8b5cf6"
                stroke="#7c3aed"
                strokeWidth="1"
              />

              {/* Fins */}
              <path
                d="M80,100 L60,120 L80,130 Z"
                fill="#cbd5e1"
                stroke="#94a3b8"
                strokeWidth="1"
              />
              <path
                d="M120,100 L140,120 L120,130 Z"
                fill="#cbd5e1"
                stroke="#94a3b8"
                strokeWidth="1"
              />

              {/* Window */}
              <circle
                cx="100"
                cy="90"
                r="10"
                fill="#38bdf8"
                stroke="#0ea5e9"
                strokeWidth="1"
              />

              {/* Flames */}
              <path
                className="flame"
                d="M90,130 L100,150 L110,130 Z"
                fill="#fb923c"
              />
              <path
                className="flame"
                d="M95,130 L100,160 L105,130 Z"
                fill="#f59e0b"
              />
            </g>
          </svg>
        );

      case "qr":
        return (
          <svg
            ref={svgRef}
            viewBox="0 0 200 200"
            className={cn("w-full h-full", className)}
          >
            <rect width="200" height="200" fill="white" />

            {/* QR code elements */}
            <g className="qr-elements">
              {/* Position detection patterns */}
              <g className="qr-element">
                <rect x="20" y="20" width="40" height="40" fill="black" />
                <rect x="30" y="30" width="20" height="20" fill="white" />
                <rect x="35" y="35" width="10" height="10" fill="black" />
              </g>

              <g className="qr-element">
                <rect x="140" y="20" width="40" height="40" fill="black" />
                <rect x="150" y="30" width="20" height="20" fill="white" />
                <rect x="155" y="35" width="10" height="10" fill="black" />
              </g>

              <g className="qr-element">
                <rect x="20" y="140" width="40" height="40" fill="black" />
                <rect x="30" y="150" width="20" height="20" fill="white" />
                <rect x="35" y="155" width="10" height="10" fill="black" />
              </g>

              {/* QR code data elements */}
              {Array.from({ length: 20 }).map((_, i) => (
                <rect
                  key={i}
                  className="qr-element"
                  x={70 + (i % 5) * 12}
                  y={70 + Math.floor(i / 5) * 12}
                  width="10"
                  height="10"
                  fill="black"
                />
              ))}
            </g>

            {/* AR text */}
            <text
              x="100"
              y="180"
              textAnchor="middle"
              fill="black"
              fontWeight="bold"
              fontSize="12"
            >
              SCAN FOR AR
            </text>
          </svg>
        );

      default:
        return null;
    }
  };

  return renderSvgContent();
}
