"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCar, FaRoad, FaGasPump, FaCog, FaArrowLeft, FaPhone, FaEnvelope, FaCalendarAlt, FaCheck, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import VEHICLES from "../../../../vehicles.data";
import { COMPANY_PHONE } from "../../../../site.config";

export default function VehiclePage() {
    const params = useParams();
    const vehicle = VEHICLES.find(v => v.id === params.id);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePreviousImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!vehicle) return;
        setSelectedImageIndex((prev) => (prev === 0 ? vehicle.images.length - 1 : prev - 1));
    };

    const handleNextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!vehicle) return;
        setSelectedImageIndex((prev) => (prev === vehicle.images.length - 1 ? 0 : prev + 1));
    };

    if (!vehicle) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Vehicle Not Found</h1>
                    <Link href="/inventory" className="text-amber-600 hover:text-amber-700 mt-4 inline-block">
                        Return to Inventory
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-white dark:from-neutral-900 to-gray-300 dark:to-neutral-900 pt-24">
            {/* Back Button */}
            <div className="container mx-auto px-4 py-2">
                <Link 
                    href="/inventory"
                    className="inline-flex items-center text-gray-600 dark:text-white hover:text-amber-600 transition-colors"
                >
                    <FaArrowLeft className="mr-2" />
                    Back to Inventory
                </Link>
            </div>

            <div className="container mx-auto px-4 pb-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div 
                            className="aspect-video bg-gray-200 dark:bg-neutral-800 rounded-lg overflow-hidden relative cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        >
                            {vehicle.images.length > 0 ? (
                                <Image
                                    src={vehicle.images[selectedImageIndex]}
                                    alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-neutral-800">
                                    <FaCar className="w-32 h-32 text-gray-400" />
                                </div>
                            )}
                        </div>
                        {/* Thumbnail Grid */}
                        {vehicle.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-4">
                                {vehicle.images.map((image, index) => (
                                    <div 
                                        key={index} 
                                        className={`aspect-video bg-gray-200 dark:bg-neutral-800 rounded-lg overflow-hidden relative cursor-pointer transition-all ${
                                            selectedImageIndex === index ? 'ring-2 ring-amber-500' : ''
                                        }`}
                                        onClick={() => setSelectedImageIndex(index)}
                                    >
                                        <Image
                                            src={image}
                                            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model} - View ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Vehicle Details */}
                    <div className="space-y-4">
                        {/* Title and Price */}
                        <div>
                            <span className="flex flex-wrap gap-2">
                            <h1 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white">
                                {vehicle.year}
                            </h1>
                            <h1 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white">
                                {vehicle.make}
                            </h1>
                            <h1 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white">
                                {vehicle.model}
                            </h1>
                            </span>
                            <p className="text-2xl text-amber-600 dark:text-amber-500 font-medium mt-2">{vehicle.trim}</p>
                            <div className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                                ${vehicle.price.toLocaleString()}
                            </div>
                        </div>

                        {/* Quick Specs */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-b border-gray-200">
                            <div className="flex flex-col items-center text-center">
                                <FaRoad className="w-6 h-6 text-amber-500 mb-2" />
                                <span className="text-sm text-gray-600 dark:text-white">Mileage</span>
                                <span className="font-medium">{vehicle.mileage.toLocaleString()} mi</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <FaGasPump className="w-6 h-6 text-amber-500 mb-2" />
                                <span className="text-sm text-gray-600 dark:text-white">Fuel Type</span>
                                <span className="font-medium">{vehicle.fuelType}</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <FaCog className="w-6 h-6 text-amber-500 mb-2" />
                                <span className="text-sm text-gray-600 dark:text-white">Transmission</span>
                                <span className="font-medium">{vehicle.transmission}</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <FaCalendarAlt className="w-6 h-6 text-amber-500 mb-2" />
                                <span className="text-sm text-gray-600 dark:text-white">Year</span>
                                <span className="font-medium">{vehicle.year}</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Description</h2>
                            <p className="text-gray-600 dark:text-white leading-relaxed">{vehicle.description}</p>
                        </div>

                        {/* Features */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Features</h2>
                            <div className="grid grid-cols-2 gap-2">
                                {vehicle.features.map((feature, index) => (
                                    <div key={index} className="flex items-center text-gray-600 dark:text-white">
                                        <FaCheck className="w-4 h-4 text-amber-500 mr-2" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6 mt-8">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Interested in this vehicle?</h2>
                            <div className="space-y-4">
                                <button onClick={() => window.location.href = `tel:${COMPANY_PHONE}`} className="w-full bg-amber-500 dark:bg-amber-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-amber-600 transition-colors flex items-center justify-center">
                                    <FaPhone className="mr-2" />
                                    Call Now
                                </button>
                                <button className="w-full bg-white dark:bg-neutral-800 border-2 border-amber-500 text-amber-500 dark:text-amber-600 py-3 px-6 rounded-lg font-medium hover:bg-amber-50 transition-colors flex items-center justify-center">
                                    <FaEnvelope className="mr-2" />
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Screen Modal */}
            {isModalOpen && vehicle.images.length > 0 && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 z-50"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full p-16">
                            <Image
                                src={vehicle.images[selectedImageIndex]}
                                alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    <button 
                        className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors z-10"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <FaTimes className="w-8 h-8" />
                    </button>
                    
                    <button 
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-500 transition-colors z-10"
                        onClick={handlePreviousImage}
                    >
                        <FaChevronLeft className="w-8 h-8" />
                    </button>
                    
                    <button 
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-500 transition-colors z-10"
                        onClick={handleNextImage}
                    >
                        <FaChevronRight className="w-8 h-8" />
                    </button>
                </div>
            )}
        </main>
    );
} 