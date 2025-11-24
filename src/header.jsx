function Header() {
    return (
        <div className={"video-container relative"}>
            <div className={"allspaces absolute inset-0 z-10 flex "}>
                <div className={"upper-text-left w-1/2 hidden md:block"}></div>
                <div className={"upper-text-right flex flex-col items-center md:items-start justify-start md:justify-start text-white z-10  border-2 w-full border-white p-2 m-8 mr-20"}>
                    <p className={"text-4xl md:text-4xl lg:text-6xl  pt-12 md:pt-24 lg:pt-36"}> Alexandre RIVIERE</p>
                    <p className={"Descriptif text-3xl md:text-3xl lg:text-5xl  "}>Developper</p>
                </div>
            </div>
            <video autoPlay loop muted className={"video-element w-full h-screen object-cover"}>
                <source src="../assets/videos/videoTest.mp4" type="video/mp4" />
            </video>

        </div>
    )
}

export default Header;