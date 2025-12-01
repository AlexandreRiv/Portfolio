function Header() {
    return (
        <div className={"video-container relative"}>
            <div className={"allspaces absolute inset-0 z-10 flex justify-center lg:justify-end items-center px-4 lg:pr-20"}>
                <div className={"upper-text-right flex flex-col items-start justify-center text-white z-10 p-6 lg:p-8 relative w-full max-w-[90%] sm:max-w-[500px] min-h-[300px] lg:h-[350px]"}>
                    <div className={"absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border-t-2 border-l-2 border-white"}></div>
                    <div className={"absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border-b-2 border-r-2 border-white"}></div>

                    <p className={"text-[10px] sm:text-xs tracking-widest mb-2 lg:mb-4"}>Etudiant Informatique</p>
                    <p className={"text-2xl sm:text-3xl lg:text-5xl font-bold mb-1 lg:mb-2"}>Alexandre Riviere</p>
                    <p className={"text-xl sm:text-2xl lg:text-4xl"}>Developpeur</p>

                    <div className={"absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 flex flex-row items-center gap-44 sm:gap-80 lg:gap-64 xl:gap-80"}>
                    <img src="../assets/image/down-arrow.svg" alt="arrow" className={"w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"} />
                        <p className={"text-xs sm:text-sm font-bold tracking-widest"}>PORTFOLIO</p>
                    </div>

                </div>
            </div>
            <video autoPlay loop muted playsInline className={"video-element w-full h-screen object-cover"}>
                <source src="../assets/videos/videoTest.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Header;
