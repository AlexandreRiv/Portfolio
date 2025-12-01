function AboutMe() {
    return (
        <section id="apropos" className="bg-gray-200 py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Qui suis-je ?
                        </h2>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            Je suis Alexandre, un étudiant en informatique .
                            Je suis un passionné de technologie et d'innovation,
                            Toujours en quête de nouveaux horizons à explorer.
                            Je suis constamment curieux et j'ai toujours envie d'apprendre.

                        </p>
                    </div>
                    <div className="relative">
                        <div className="relative aspect-square overflow-hidden rounded-full shadow-2xl">
                            <img
                                src={"../assets/image/about_me.jpg"}
                                alt="About Me"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;
