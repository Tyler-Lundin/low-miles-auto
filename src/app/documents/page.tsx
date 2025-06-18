"use client";

import { motion, Variants } from "framer-motion";
import { FaFilePdf, FaDownload } from "react-icons/fa";

// This would typically come from a CMS or API
const documents = [
    {
        id: 1,
        title: "Customer Information Sheet",
        description: "Standard agreement for vehicle purchases",
        fileSize: "45 KB",
        lastUpdated: "2025-06-17",
        url: "/documents/customer-info.pdf"
    },
    {
        id: 2,
        title: "As-Is Disclosure",
        description: "Application form for vehicle financing",
        fileSize: "37 KB",
        lastUpdated: "2025-06-17",
        url: "/documents/as-is.pdf"
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export default function DocumentsPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8 pt-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                        Important Documents
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Download and review our essential documents for vehicle purchases and services.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {documents.map((doc) => (
                        <motion.div
                            key={doc.id}
                            variants={itemVariants}
                            className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <FaFilePdf className="text-red-500 text-2xl" />
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{doc.fileSize}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    {doc.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                    {doc.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        Updated: {doc.lastUpdated}
                                    </span>
                                    <a
                                        href={doc.url}
                                        download
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-200 dark:focus:ring-offset-neutral-800"
                                    >
                                        <FaDownload className="mr-2" />
                                        Download
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
} 