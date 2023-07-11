import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import WhatIsThisPage from './pages/WhatIsThisPage'
import TreeInvetoryPage from './pages/TreeInventoryPage'

function App() {
    return (
        <div className='absolute pt-16 h-screen w-screen flex flex-col overflow-scroll
        backdrop-blur-md text-green-100 dark:text-slate-100 bg-gradient-to-tr 
        from-green-500/40 via-green-400/40 to-green-500/40 dark:bg-gradient-to-tr 
        dark:from-slate-800/60 dark:via-slate-700/60  dark:to-slate-900/60'>
            <header className='fixed top-0 h-16 w-screen'>
                <Navbar />
            </header>
            <main className='flex-1'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<WhatIsThisPage />} />
                    <Route path='/inventory' element={<TreeInvetoryPage />} />
                </Routes>
            </main>
            <footer className=''>
                <Footer />
            </footer>
        </div>
       )
}

export default App
