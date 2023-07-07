const WhatIsThisPage = (): JSX.Element => {
    return (
        <div className='flex flex-col pt-40'>
            <h1 className="flex-1 text-4xl text-center">
                ¿
                <pre className="inline">Qué es </pre>
                 <span className="font-extrabold text-5xl text-transparent bg-clip-text 
                 bg-gradient-to-l from-rose-300 to-sky-300">
                    Tree Vigilant
                </span>
                ?
            </h1>
            <div className="flex-1">
                <p className="px-5 lg:px-50 md:px-30 sm:px-20 pt-3 text-lg text-justify">
                    Tree vigilant es una app para inventariar la flora de tu zona, principalmente
                    árboles. Con ella podrás guardar información de cada uno de los ejemplares, 
                    como su localización geográfica, especie, enfermedades, comentarios... 
                    También podrás organizar sesiones de riego con tu comunidad para 
                    seguir cuidando tu flora.
                </p>
                <p>
                    
                </p>
            </div>
        </div>    
    )
}

export default WhatIsThisPage;
