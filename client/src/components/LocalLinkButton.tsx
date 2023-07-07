import { Link } from "react-router-dom"

const LocalLinkButton = (props: {to: string, text: string}): JSX.Element => {
    return (
        <Link to={props.to}>
            <p className=" inline py-3 px-5 rounded-lg bg-green-700 shadow-sm 
            shadow-black hover:bg-green-600
            dark:bg-cyan-800 dark:hover:bg-cyan-700">
                {props.text}
            </p>
        </Link>
    )
}

export default LocalLinkButton

