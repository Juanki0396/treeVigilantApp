import DarkModeToogle from "./DarkModeToogle"

const Navbar = (): JSX.Element => {
    return (
        <nav className='relative flex-1 flex flex-row items-center flex-nowrap shadow-md 
        bg-green-900 shadow-green-700 dark:shadow-slate-700 dark:bg-gradient-to-b dark:from-slate-900 
        dark:via-slate-950 dark:to-slate-800'>
            <div className='basis-1/3 text-2xl align-middle'>Barra de Navegacion</div>
            <DarkModeToogle />
        </nav>
    )
}

export default Navbar
