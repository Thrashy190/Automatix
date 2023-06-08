import React, {useRef, useEffect, Children} from "react";
import circle from "@/interfaces/circleInterface";
import Circle from "@/components/Figuras/Circle";


const Canvas = ({addCircle, children}:any) => {


	const canvasRef = useRef<HTMLCanvasElement>(null);

	const generateCircle = ({name, x, y, radius}: circle, ctx: CanvasRenderingContext2D) => {
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI);
		ctx.fillStyle = "#6366F1";
		ctx.fill();
		ctx.lineWidth = 2;
		ctx.strokeStyle = "black";
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.strokeStyle = "black";
		ctx.stroke();
		ctx.fillStyle = "black";
		ctx.strokeStyle = "none";
		ctx.stroke();
		ctx.font="20px arial";
		ctx.fillText(name, x-10, y+5)
		ctx.strokeText(name, x-10, y+5)
		ctx.closePath();
	}

	const generateDotBackground = (
		ctx: CanvasRenderingContext2D,
		canvas: HTMLCanvasElement
	) => {
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

	const drawCanvas = () => {
		if (canvasRef.current) {
			const canvas = canvasRef.current;
			const ctx = canvas.getContext("2d");

			canvas.width = window.innerWidth - 10;
			canvas.height = window.innerHeight - 10;

			if (ctx) {

				generateDotBackground(ctx, canvas);

				canvas.addEventListener("mousemove", (event: MouseEvent) => {
					const rect = canvas.getBoundingClientRect();
					const mouseX = event.clientX - rect.left;
					const mouseY = event.clientY - rect.top;
					const radius = 50;

					ctx.clearRect(0, 0, canvas.width, canvas.height);

					generateDotBackground(ctx, canvas);

					Children.forEach(children, (child) => {
						if (child.type === Circle) {
							generateCircle(child.props, ctx);
						}
					});


					ctx.beginPath();
					ctx.arc(mouseX, mouseY, radius, 0, 2 * Math.PI);
					ctx.fillStyle = "#6366F1";
					ctx.fill();

				});

				canvas.addEventListener("click", (event: MouseEvent) => {
					ctx.clearRect(0, 0, canvas.width, canvas.height);

					const rect = canvas.getBoundingClientRect();
					const mouseX = event.clientX - rect.left;
					const mouseY = event.clientY - rect.top;
					addCircle(mouseX,mouseY)


					generateDotBackground(ctx, canvas);

					Children.forEach(children, (child) => {
						if (child.type === Circle) {
							generateCircle(child.props, ctx);
						}
					});
				});

			}
		}
	};

	useEffect(() => {
		drawCanvas();
	}, [addCircle]);

	return <canvas ref={canvasRef}  />;
};

export default Canvas;
