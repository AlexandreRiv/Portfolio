import { competences } from './assets/information.js';

function Competences() {
    return (
        <section id="competences" className="bg-gray-200 py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                        Compétences
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
                        Un aperçu de mes compétences techniques et des technologies que je maîtrise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {competences.map((category, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                                {category.category}
                            </h3>
                            <div className="space-y-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="flex items-center gap-3">
                                        {skill.image ? (
                                            <img
                                                src={skill.image}
                                                alt={skill.name}
                                                className="w-8 h-8 object-contain"
                                            />
                                        ) : (
                                            <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                                        )}
                                        <span className="text-sm sm:text-base font-medium text-gray-700">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Competences;
