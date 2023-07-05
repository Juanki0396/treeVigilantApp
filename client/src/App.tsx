import React from 'react'
import { useState } from 'react'

function App() {
    const [count, _setCount] = useState(0)

        const toogleDarkMode = (e: React.MouseEvent): void => {
            if (document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.remove("dark")
            }
            else {
                document.documentElement.classList.add("dark")
            }
        }

    return (
            <>
            <div className='relative h-screen bg-green-700 text-green-100 dark:bg-slate-800 dark:text-slate-100'>
                <nav className="sticky top-0 bg-green-900 dark:bg-slate-900 p-4">
                    <div className="text-2xl">Barra de Navegacion</div>
                </nav>
                <main className='m-5 flex flex-col align-middle content-center'>
                    <h1 className='text-center text-3xl'>Inventario</h1>
                    Hey {count}        
                    <button onClick={toogleDarkMode}>Dark</button>
                </main>
                <footer className='absolute bottom-0'>
                    This is the footer
                </footer>
            </div>
            </>
           )
}

export default App
