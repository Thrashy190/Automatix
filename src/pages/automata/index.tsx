import React, {useState} from "react";
import Canvas from "@/components/Canva/Canvas";
import CanvasControls from "@/components/Hub/CanvaControls";
import Circle from "@/components/Figuras/Circle";
import circleInterface from "@/interfaces/circleInterface";

import {faPlus, faArrowPointer, faTrash} from '@fortawesome/free-solid-svg-icons'


export default function Automata() {

	const [cursor, setCursor] = useState<string>("pointer")
	const [circulos, setCirculos] = useState<circleInterface[]>([])

	const buttons = [{icon: faArrowPointer, label: "pointer"}, {icon: faPlus, label: "plus"}, {
		icon: faTrash,
		label: "trash"
	}]

	const handlerCursor = (cursorSelection: string) => {
		setCursor(cursorSelection)
	}

	const addCircle = (xMouse: number, yMouse: number) => {
		setCirculos([...circulos, {name: String("q" + circulos.length), x: xMouse, y: yMouse, radius: 50}])
	}


	return (
			<>
				<div className="text-xl">Automata</div>
				<div>
					<CanvasControls buttons={buttons} handlerCursor={handlerCursor} selected={cursor}/>
					<Canvas addCircle={addCircle}>
						{circulos.map(({name, x, y, radius,}, index) =>
								<Circle key={index} name={name} x={x} y={y} radius={radius}/>
						)}
					</Canvas>
				</div>
			</>
	);
}
