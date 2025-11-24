import { useState } from 'react'

function Nav() {
    const [count, setCount] = useState(0)

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <header className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                        Bienvenue sur mon Portfolio
                    </h1>
                    <p className="text-xl text-purple-300">
                        Développeur React & Vite
                    </p>
                </header>

                {/* Card principale */}
                <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-12">
                    <div className="text-center mb-8">
                        <div className="inline-flex gap-4 mb-6">
                            <a
                                href="https://vite.dev"
                                target="_blank"
                                className="text-6xl hover:scale-110 transition-transform duration-300"
                            >
                                ⚡
                            </a>
                            <a
                                href="https://react.dev"
                                target="_blank"
                                className="text-6xl hover:scale-110 transition-transform duration-300"
                            >
                                ⚛️
                            </a>
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <button
                            onClick={() => setCount((count) => count + 1)}
                            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 active:scale-95"
                        >
                            Compteur: {count}
                        </button>
                    </div>

                    <p className="text-center text-gray-300 mt-6">
                        Modifiez <code className="bg-gray-800 px-2 py-1 rounded text-purple-400">src/App.jsx</code> pour tester le HMR
                    </p>
                </div>


                <footer className="text-center text-purple-200 opacity-75">
                    Cliquez sur les logos Vite et React pour en savoir plus
                </footer>
            </div>
        </div>
    )
}

export default Nav;