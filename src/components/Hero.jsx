import React from 'react'

const Hero = () => {
    return (
        <div className="container mx-auto bg-primary">
            <div className="text-center p-8 rounded-lg bg-light bg-opacity-80 backdrop-blur-sm shadow-xl">
                <h1 className="text-4xl font-bold text-dark mb-4">
                    Welcome to Our Website
                </h1>
                <p className="text-accent text-lg mb-6">
                    Discover amazing content and connect with our community.
                </p>
                <button className="px-6 py-2 rounded bg-accent text-light font-semibold hover:bg-secondary transition-colors duration-300">
                    Commencer
                </button>
            </div>
        </div>
    )
}

export default Hero