import LocalLinkButton from "../components/LocalLinkButton";

const HomePage = (): JSX.Element => {
    return (
        <div className='flex flex-col space-y-6 px-20 pt-40'>
            <h1 className="flex-1 text-center font-extrabold text-5xl text-transparent 
            bg-clip-text bg-gradient-to-l from-rose-300 to-sky-300">
                    Tree Vigilant
            </h1>
            <div className="flex-1 flex flex-row justify-center space-x-4">
                <LocalLinkButton to="/whatis" text="Info"/>
                <LocalLinkButton to="/inventory" text="Inventory"/>
            </div>
        </div>    
    )
}

export default HomePage;
