import { Link } from "react-router-dom"
import DarkModeToogle from "./DarkModeToogle"

const Navbar = (): JSX.Element => {
    return (
        <nav className='relative h-full flex flex-row items-center shadow-md 
        bg-green-900 shadow-green-700 dark:shadow-slate-700 dark:bg-gradient-to-b dark:from-slate-900 
        dark:via-slate-950 dark:to-slate-800'>
            <Link className="px-2 flex items-center text-2xl h-full dark:hover:bg-slate-700" 
            to="/">
                    Home
            </Link>
            <Link className="px-2 flex items-center text-2xl h-full dark:hover:bg-slate-700" 
            to="/inventory">
                    Inventory
            </Link>
            <Link className="px-2 flex items-center text-2xl h-full dark:hover:bg-slate-700" 
            to="/about">
                    About
            </Link>
            <DarkModeToogle />
        </nav>
    )
}

export default Navbar
