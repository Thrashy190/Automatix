import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

interface ButtonGroupProps {
	buttons: {
		label: string;
		icon: IconDefinition;
	}[];
	handlerCursor: (cursorSelection: string) => void;
	selected: string;
}

const CanvasControls: React.FC<ButtonGroupProps> = ({buttons, handlerCursor,selected}) => {

	return (
			<div>
				<div className="flex flex-col h-full justify-center" style={{
					position: "absolute",
					top: "50%",
					left: "10px",
					transform: "translateY(-50%)",
				}}>
					{buttons.map((button, index) => (
							<button
									key={index}
									onClick={() => handlerCursor(button.label)}
									className={`${
											index > 0 ? "mt-2" : ""
									}  ${selected === button.label ? "bg-indigo-500" : ""} flex items-center 
									justify-center px-4 py-2 
									rounded-md 
									hover:bg-indigo-800 `}
							>
								<FontAwesomeIcon color="#E3E3E3E3" size="2xl" icon={button.icon}/>
							</button>
					))}
				</div>
			</div>
	);
};

export default CanvasControls;