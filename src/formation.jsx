import { formations } from '../assets/information.js';

function Formation() {
    return (
        <section id="formation" className="bg-gray-100 py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div className="space-y-6">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                            Formation
                        </h2>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            Étudiant en informatique, je suis passionné par le monde de la tech et je
                            cherche un stage pour mettre en pratique mes compétences tout en approfondissant
                            mes connaissances ainsi que aider mon amélioration à réaliser des projets.
                        </p>
                    </div>
                    <div className="space-y-6">
                        {formations.map((formation, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-gray-900"
                            >
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                                    {formation.title}
                                </h3>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                                    <p className="text-sm sm:text-base text-gray-600 font-medium">
                                        {formation.school}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1 sm:mt-0">
                                        {formation.period}
                                    </p>
                                </div>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    {formation.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Formation;
