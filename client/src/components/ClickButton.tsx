export interface ClickButtonProps {
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    buttonText: string
}

const ClickButton = (props: ClickButtonProps):JSX.Element => {
    return (
            <button onClick={props.onClick} className='w-min p-1 px-3 rounded 
            bg-green-600 hover:bg-green-500 shadow-lg shadow-green-900 
            dark:shadow-slate-950 dark:hover:bg-slate-500 dark:bg-slate-600'>
                {props.buttonText}
            </button>
    ) 
}

export default ClickButton
