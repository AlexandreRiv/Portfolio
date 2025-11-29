function Contact() {
    return (
        <section id="contact" className="bg-gray-100 py-16 sm:py-20 lg:py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-12">
                    Contact
                </h2>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                            Nom
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="block w-full pl-12 pr-4 py-3 bg-gray-200 border-none rounded-full text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gray-900 focus:outline-none"
                                placeholder="Votre nom"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                            Mail
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="block w-full pl-12 pr-4 py-3 bg-gray-200 border-none rounded-full text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gray-900 focus:outline-none"
                                placeholder="votre@email.com"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            className="block w-full px-4 py-3 bg-gray-200 border-none rounded-3xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gray-900 focus:outline-none resize-none"
                            placeholder="Votre message..."
                            required
                        />
                    </div>

                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
