function Projects() {
    const projects = [
        {
            year: "2030",
            title: "Abyss of Deceptions",
            description: "A gripping coastal thriller that masterfully combines the sublime charm of a coastal setting with an enthralling mystery.",
            image: "../assets/images/project1.jpg"
        },
        {
            year: "2026",
            title: "The Midnight Enigma",
            description: "A mind-bending psychological thriller that follows a detective on a race against time to solve a series of cryptic and interconnected mysteries.",
            image: "../assets/images/project2.jpg"
        },
        {
            year: "2023",
            title: "Shadows of Deceit",
            description: "A suspenseful noir-inspired thriller where a private investigator delves into a web of conspiracy and intrigue in the dimly lit streets of a mysterious city.",
            image: "../assets/images/project3.jpg"
        },
        {
            year: "2018",
            title: "Coptic Descent",
            description: "A spine-tingling horror-thriller that takes place in an abandoned asylum, where a group of urban explorers encounters supernatural forces.",
            image: "../assets/images/project4.jpg"
        },
        {
            year: "2016",
            title: "The Vanishing Act",
            description: "A psychological thriller that explores the unsettling disappearance of a renowned illusionist, forcing a journalist to untangle the threads of illusion.",
            image: "../assets/images/project5.jpg"
        },
        {
            year: "2013",
            title: "Reflections of Fear",
            description: "A haunting thriller that blurs the lines between reality and the supernatural as a young woman confronts her own reflections in an eerie old mirror.",
            image: "../assets/images/project6.jpg"
        }
    ];

    return (
        <section id="projects" className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                        Projets
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                            <div className="relative aspect-[4/3] bg-gray-200">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors">
                                        <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white p-6">
                                <div className="flex items-baseline gap-3 mb-2">
                                    <span className="text-sm font-medium text-gray-500">{project.year}</span>
                                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
