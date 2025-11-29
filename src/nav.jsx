import { useState } from 'react'

function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Alexandre Riviere</h1>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <a href="#apropos" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">À propos</a>
                        <a href="#projects" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Projets</a>
                        <a href="#competences" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Compétences</a>
                        <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Contact</a>
                    </div>
                    <button
                        className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="#apropos" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium">À propos</a>
                        <a href="#projects" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium">Projets</a>
                        <a href="#competences" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium">Compétences</a>
                        <a href="#contact" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Nav;
