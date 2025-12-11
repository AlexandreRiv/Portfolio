import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');
            emailjs.sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(() => {
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus(''), 3000);
            })
            .catch(() => {
                setStatus('error');
                setTimeout(() => setStatus(''), 3000);
            });
    };

    return (
        <section id="contact" className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-12">
                    Contact
                </h2>

                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                            Nom
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <img src={"../assets/image/person.svg"} alt="Nom" className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                id="name"
                                name="user_name"
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
                                <img src={"../assets/image/mail.svg"} alt="Mail" className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                id="email"
                                name="user_email"
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

                    {status === 'success' && (
                        <p className="text-green-600 text-center">Message envoyé avec succès !</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-600 text-center">Erreur lors de l'envoi. Réessayez.</p>
                    )}

                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
                        >
                            <img src={"../assets/image/send.svg"} alt="Button d'envoie" className="h-5 w-5 text-gray-400" />
                            {status === 'sending' ? 'ENVOI...' : 'SEND'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;