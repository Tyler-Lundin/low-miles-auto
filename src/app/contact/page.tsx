import { COMPANY_ADDRESS, COMPANY_PHONE } from "../../../site.config";

export default function ContactPage() {
    return (
        <main className="container mx-auto px-4 pt-32 pb-8">
            <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Contact Us</h1>
            
            <div className="grid md:grid-cols-2 gap-8">
                <section className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Get in Touch</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-neutral-700 text-gray-900 dark:text-white"
                                required
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-neutral-700 text-gray-900 dark:text-white"
                                required
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-neutral-700 text-gray-900 dark:text-white"
                                required
                            ></textarea>
                        </div>
                        
                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </section>

                <section className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Business Hours</h2>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                        <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                        <p>Saturday: 10:00 AM - 6:00 PM</p>
                        <p>Sunday: Closed</p>
                    </div>

                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Location</h2>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                        <p>{COMPANY_ADDRESS}</p>
                        <p>Phone: <a href={`tel:${COMPANY_PHONE}`} className="text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-600">{COMPANY_PHONE}</a></p>
                    </div>
                </section>
            </div>
        </main>
    );
} 