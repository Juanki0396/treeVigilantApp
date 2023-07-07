import { useState } from "react";
import { ClickButtonProps } from "./ClickButton";

interface ToogleButtonProps extends ClickButtonProps  {
    startToogled: boolean | (() => boolean);
}
const ToogleButton = (props: ToogleButtonProps): JSX.Element=> {
    const [toogled, setToogle] = useState(props.startToogled)

    const onClick = (e: React.MouseEvent<HTMLElement>): void => {
        props.onClick(e)
        setToogle(!toogled)
    }

    return (
        <label className="inline-flex relative w-min items-center cursor-pointer m-1">
            <input type="checkbox" defaultChecked={toogled} className="sr-only peer"/>
            <div onClick={onClick} className="w-11 h-6 bg-gray-200 rounded-full peer  
            peer-focus:ring-green-300 peer-checked:after:translate-x-full 
            peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 
            after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
            after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"
            ></div>
            <span onClick={onClick} className="mx-1 font-bold text-sm">{props.buttonText}</span>
        </label>
    )
}

export default ToogleButton
