function Competences() {
    const competences = [
        {
            category: "Langages",
            skills: [
                { name: "JavaScript", level: 85 },
                { name: "Python", level: 75 },
                { name: "HTML/CSS", level: 90 },
                { name: "Java", level: 70 }
            ]
        },
        {
            category: "Frameworks & Bibliothèques",
            skills: [
                { name: "React", level: 80 },
                { name: "Node.js", level: 75 },
                { name: "Express", level: 70 },
                { name: "Tailwind CSS", level: 85 }
            ]
        },
        {
            category: "Outils & Technologies",
            skills: [
                { name: "Git", level: 80 },
                { name: "Docker", level: 65 },
                { name: "MongoDB", level: 70 },
                { name: "PostgreSQL", level: 65 }
            ]
        }
    ];

    return (
        <section id="competences" className="bg-white py-16 sm:py-20 lg:py-24">
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
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm sm:text-base font-medium text-gray-700">
                                                {skill.name}
                                            </span>
                                            <span className="text-sm text-gray-600">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-gray-900 h-2 rounded-full transition-all duration-500"
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
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
