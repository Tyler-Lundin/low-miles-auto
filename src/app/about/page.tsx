import { COMPANY_DESCRIPTION, COMPANY_ESTABLISHED_YEAR, COMPANY_NAME, OWNER_NAME } from "../../../site.config";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-50 dark:bg-neutral-900 pt-32">
            {/* Hero Section with Owner */}
            <div className="relative py-4 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
                <div className="container mx-auto px-4 h-full flex items-center relative z-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-black dark:text-white space-y-6">
                            <h1 className="text-5xl font-bold leading-tight">
                                Meet Our Founder
                            </h1>
                            <p className="text-xl text-gray-900 dark:text-white dark:bg-neutral-800 p-4 rounded-lg">
                                With over 20 years of experience in the automotive industry, our founder has built {COMPANY_NAME} on the principles of integrity, quality, and customer satisfaction.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="/images/owner.png"
                                alt="Company Owner"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/80 dark:from-black/80 to-transparent p-4">
                                <p className="text-black dark:text-white text-sm">
                                    <span className="font-bold border-b-2 border-black dark:border-white">{COMPANY_NAME} Owner</span>  <br/> {OWNER_NAME} - {COMPANY_ESTABLISHED_YEAR}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Company Story Section */}
                    <section className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Our Story</h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 dark:text-white mb-4">
                                Established in {COMPANY_ESTABLISHED_YEAR}, {COMPANY_NAME} has been serving our community with quality pre-owned vehicles.
                            </p>
                            <p className="text-gray-700 dark:text-white">
                                {COMPANY_DESCRIPTION}
                            </p>
                        </div>
                    </section>

                    {/* Values Section */}
                    <section className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Our Values</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 bg-blue-50 dark:bg-neutral-800 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">Integrity</h3>
                                <p className="text-gray-700 dark:text-white">We believe in complete transparency and honest dealings with every customer.</p>
                            </div>
                            <div className="p-6 bg-blue-50 dark:bg-neutral-800 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">Quality</h3>
                                <p className="text-gray-700 dark:text-white">Every vehicle in our inventory undergoes rigorous quality checks.</p>
                            </div>
                            <div className="p-6 bg-blue-50 dark:bg-neutral-800 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">Service</h3>
                                <p className="text-gray-700 dark:text-white">We&apos;re committed to providing exceptional service before, during, and after your purchase.</p>
                            </div>
                        </div>
                    </section>

                    {/* Promise Section */}
                    <section className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Our Promise</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <ul className="space-y-4">
                                <li className="flex items-center space-x-3">
                                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700 dark:text-white">Quality pre-owned vehicles</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700 dark:text-white">Transparent pricing</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700 dark:text-white">Comprehensive vehicle history</span>
                                </li>
                            </ul>
                            <ul className="space-y-4">
                                <li className="flex items-center space-x-3">
                                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700 dark:text-white">Professional service</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700 dark:text-white">Customer satisfaction guarantee</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700 dark:text-white">After-sales support</span>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
} 