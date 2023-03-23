import React, { useRef, useEffect } from "react";

const generateBackground = (
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) => {
  // Dibujar patrón de fondo punteado
  ctx.fillStyle = "#F3F3F3";

  for (let x = 0; x < canvas.width; x += 10) {
    for (let y = 0; y < canvas.height; y += 10) {
      if (x % 20 === 0 && y % 20 === 0) {
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  }
};

const Canvas = (props: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawCanvas = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      canvas.width = window.innerWidth - 30;
      canvas.height = window.innerHeight - 10;

      if (ctx) {
        // Agregar evento mousemove para mover el círculo
        canvas.addEventListener("mousemove", (event: MouseEvent) => {
          const rect = canvas.getBoundingClientRect();
          const mouseX = event.clientX - rect.left;
          const mouseY = event.clientY - rect.top;
          const radius = 50;

          ctx.clearRect(0, 0, canvas.width, canvas.height);

          generateBackground(ctx, canvas);

          // Dibujar círculo
          ctx.beginPath();
          ctx.arc(mouseX, mouseY, radius, 0, 2 * Math.PI);
          ctx.fillStyle = "#CEE6D3";
          ctx.fill();
        });

        canvas.addEventListener("click", (event: MouseEvent) => {
          console.log("hola");
        });
      }
    }
  };

  useEffect(() => {
    drawCanvas();
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
