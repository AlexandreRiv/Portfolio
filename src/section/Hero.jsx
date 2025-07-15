import React from 'react'
import Button from '../components/Button.jsx'

const Hero = () => {
    return (
        <div className="h-screen flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="p-6 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold">Riviere Alexandre</h1>
                    <div className="h-4"></div>
                    <p className="text-center font-serif">Étudiant en deuxième année dans le domaine de l'informatique, je suis passionné par la création de projets innovants et l'apprentissage continu.</p>
                    <div className="h-4"></div>
                    <div className="flex flex-col items-center">
                        <Button
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="See my work"
                        />
                    </div>
                </div>

                <div className="p-6 flex flex-col items-center justify-center text-center">
                    <div className="container">
                        <div className="card card0">
                            <div className="border">
                                <h2 className=" font-bold">Alexandre RIVIERE</h2>
                                <div className="icons">
                                    <a href="https://www.linkedin.com/in/alexandre-riviere-135b90333/" className="social-link">
                                        <i className="fa fab fa-linkedin"></i>
                                        <span className="fa social-text">LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero