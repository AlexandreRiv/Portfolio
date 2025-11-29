function AboutMe() {
    return (
        <section id="apropos" className="bg-gray-100 py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/*  texte de presentation */}
                    <div className="space-y-6">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Bienvenue dans un monde mystérieux
                        </h2>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum dolor sit amet
                            venenatis tincidunt. Nulla sem nunc, congue nec porttitor nec, tempor ac erat. Nunc et
                            dui nunc. Quisque sodales orci a hendrerit vulputate. Aliquam maximus eu libero in
                            tincidunt. Aliquam dignissim libero vitae odio sollicitudin, eu placerat urna pretium.
                        </p>
                    </div>

                    {/* Video / image pour le site */}
                    <div className="relative">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="../assets/videos/" type="video/mp4" />
                            </video>
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded">
                                <p className="text-xs sm:text-sm font-medium text-gray-900 tracking-wide uppercase">
                                    Image Super
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;
