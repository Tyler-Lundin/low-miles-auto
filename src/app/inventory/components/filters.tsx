"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilter, FaChevronDown, FaUndo } from 'react-icons/fa';

const priceRanges = [
    { label: 'Under $10,000', value: '0-10000' },
    { label: '$10,000 - $20,000', value: '10000-20000' },
    { label: '$20,000 - $30,000', value: '20000-30000' },
    { label: '$30,000 - $40,000', value: '30000-40000' },
    { label: '$40,000+', value: '40000-999999' },
];

const makes = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz'];
const years = Array.from({ length: 25 }, (_, i) => (new Date().getFullYear() - i).toString());
const mileageRanges = [
    { label: 'Under 10,000', value: '0-10000' },
    { label: '10,000 - 30,000', value: '10000-30000' },
    { label: '30,000 - 50,000', value: '30000-50000' },
    { label: '50,000 - 75,000', value: '50000-75000' },
    { label: '75,000+', value: '75000-999999' },
];
const transmissions = ['Automatic', 'Manual'];
const fuelTypes = ['Gasoline', 'Diesel', 'Hybrid', 'Electric'];

const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.3,
            staggerChildren: 0.1
        }
    },
    exit: { 
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.2,
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
};

function useWindowSize() {
    const [size, setSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    useEffect(() => {
        function handleResize() {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return size;
}

export default function Filters() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isOpen, setIsOpen] = useState(true);
    const { width } = useWindowSize();
    const isLargeScreen = width >= 1024;

    const [filters, setFilters] = useState({
        priceRange: searchParams.get('priceRange') || '',
        make: searchParams.get('make') || '',
        year: searchParams.get('year') || '',
        mileage: searchParams.get('mileage') || '',
        transmission: searchParams.get('transmission') || '',
        fuelType: searchParams.get('fuelType') || '',
        featured: searchParams.get('featured') === 'true',
    });

    const handleFilterChange = (key: string, value: string | boolean) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);

        const params = new URLSearchParams(searchParams);
        if (value && (typeof value !== 'boolean' || value === true)) {
            params.set(key, value.toString());
        } else {
            params.delete(key);
        }
        params.set('page', '1');
        router.push(`?${params.toString()}`);
    };

    const resetFilters = () => {
        setFilters({
            priceRange: '',
            make: '',
            year: '',
            mileage: '',
            transmission: '',
            fuelType: '',
            featured: false,
        });
        router.push('/inventory');
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg"
        >
            <div className="p-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <FaFilter className="text-amber-500" />
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Filters</h2>
                    </div>
                    {!isLargeScreen && (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-500 hover:text-gray-700 flex items-center gap-2"
                        >
                            {isOpen ? 'Hide' : 'Show'}
                            <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaChevronDown />
                            </motion.div>
                        </motion.button>
                    )}
                </div>
            </div>

            <AnimatePresence>
                {(isOpen || isLargeScreen) && (
                    <motion.div
                        variants={filterVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="px-6 pb-6"
                    >
                        <div className="space-y-6">
                            {/* Price Range */}
                            <motion.div variants={itemVariants}>
                                <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                                    Price Range
                                </label>
                                <select
                                    value={filters.priceRange}
                                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                                    className="w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500 transition-colors"
                                >
                                    <option value="">Any Price</option>
                                    {priceRanges.map((range) => (
                                        <option key={range.value} value={range.value}>
                                            {range.label}
                                        </option>
                                    ))}
                                </select>
                            </motion.div>

                            {/* Make */}
                            <motion.div variants={itemVariants}>
                                <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                                    Make
                                </label>
                                <select
                                    value={filters.make}
                                    onChange={(e) => handleFilterChange('make', e.target.value)}
                                    className="w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500 transition-colors"
                                >
                                    <option value="">Any Make</option>
                                    {makes.map((make) => (
                                        <option key={make} value={make}>
                                            {make}
                                        </option>
                                    ))}
                                </select>
                            </motion.div>

                            {/* Year */}
                            <motion.div variants={itemVariants}>
                                <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                                    Year
                                </label>
                                <select
                                    value={filters.year}
                                    onChange={(e) => handleFilterChange('year', e.target.value)}
                                    className="w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500 transition-colors"
                                >
                                    <option value="">Any Year</option>
                                    {years.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </motion.div>

                            {/* Mileage */}
                            <motion.div variants={itemVariants}>
                                <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                                    Mileage
                                </label>
                                <select
                                    value={filters.mileage}
                                    onChange={(e) => handleFilterChange('mileage', e.target.value)}
                                    className="w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500 transition-colors"
                                >
                                    <option value="">Any Mileage</option>
                                    {mileageRanges.map((range) => (
                                        <option key={range.value} value={range.value}>
                                            {range.label}
                                        </option>
                                    ))}
                                </select>
                            </motion.div>

                            {/* Transmission */}
                            <motion.div variants={itemVariants}>
                                <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                                    Transmission
                                </label>
                                <select
                                    value={filters.transmission}
                                    onChange={(e) => handleFilterChange('transmission', e.target.value)}
                                    className="w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500 transition-colors"
                                >
                                    <option value="">Any Transmission</option>
                                    {transmissions.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </motion.div>

                            {/* Fuel Type */}
                            <motion.div variants={itemVariants}>
                                <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                                    Fuel Type
                                </label>
                                <select
                                    value={filters.fuelType}
                                    onChange={(e) => handleFilterChange('fuelType', e.target.value)}
                                    className="w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500 transition-colors"
                                >
                                    <option value="">Any Fuel Type</option>
                                    {fuelTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </motion.div>

                            {/* Featured */}
                            <motion.div variants={itemVariants}>
                                <div className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        id="featured"
                                        checked={filters.featured}
                                        onChange={(e) => handleFilterChange('featured', e.target.checked)}
                                        className="w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-500 focus:ring-2"
                                    />
                                    <label htmlFor="featured" className="text-sm font-medium text-gray-700 dark:text-white cursor-pointer">
                                        Featured Vehicles Only
                                    </label>
                                </div>
                            </motion.div>

                            {/* Reset Button */}
                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={resetFilters}
                                className="w-full bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-white py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <FaUndo className="text-amber-500" />
                                Reset Filters
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
} 