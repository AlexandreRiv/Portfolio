import { projects } from "./assets/information.js";

function Projects() {
    return (
        <section id="projects" className="bg-gray-200 py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                        Projets
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow bg-white flex flex-col">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                                <img
                                    src={project.images}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="bg-white p-6 flex flex-col flex-1">
                                <div className="flex items-baseline gap-3 mb-2">
                                    <span className="text-sm font-medium text-gray-500">{project.year}</span>
                                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-1">
                                    {project.description}
                                </p>
                                <div className="flex gap-3 mt-auto">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                                        >
                                            <img src="../public/assets/image/github.svg" alt="GitHub" className="w-5 h-5" />
                                            GitHub
                                        </a>
                                    )}
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                                        >
                                            <img src="../public/assets/image/site.svg" alt="Site" className="w-5 h-5" />
                                            Site
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
