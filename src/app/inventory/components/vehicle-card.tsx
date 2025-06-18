"use client";
import { Vehicle } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaCar, FaRoad, FaGasPump, FaCog } from "react-icons/fa";

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
    return (
        <Link 
            href={`/vehicle/${vehicle.id}`}
            className="group block bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
            {/* Image Container */}
            <div className="aspect-video bg-gray-200 dark:bg-neutral-800 relative overflow-hidden">
                {vehicle.images.length > 0 ? (
                    <Image 
                        src={vehicle.images[0]} 
                        alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`} 
                        fill 
                        className="object-cover transition-transform duration-300 group-hover:scale-105" 
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-neutral-800">
                        <FaCar className="w-16 h-16 text-gray-400" />
                    </div>
                )}
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-amber-500 dark:bg-amber-600 text-white px-3 py-1 rounded-full font-bold">
                    ${vehicle.price.toLocaleString()}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Title */}
                <div className="mb-4">
                    <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white group-hover:text-amber-600 transition-colors">
                        {vehicle.year} {vehicle.make} {vehicle.model}
                    </h2>
                    <p className="text-amber-600 dark:text-amber-500 font-medium">{vehicle.trim}</p>
                </div>

                {/* Quick Specs */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-100 dark:border-neutral-800">
                    <div className="flex flex-col items-center text-center">
                        <FaRoad className="w-5 h-5 text-gray-400 dark:text-white mb-1" />
                        <span className="text-sm text-gray-600 dark:text-white">{vehicle.mileage.toLocaleString()} mi</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <FaGasPump className="w-5 h-5 text-gray-400 dark:text-white mb-1" />
                        <span className="text-sm text-gray-600 dark:text-white">{vehicle.fuelType}</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <FaCog className="w-5 h-5 text-gray-400 dark:text-white mb-1" />
                        <span className="text-sm text-gray-600 dark:text-white">{vehicle.transmission}</span>
                    </div>
                </div>

                {/* Condition Badge */}
                <div className="mt-4 flex justify-between items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {vehicle.condition}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-white">
                        {vehicle.features.length} features
                    </span>
                </div>
            </div>
        </Link>
    );
}