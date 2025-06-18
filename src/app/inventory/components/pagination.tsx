'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
    const searchParams = useSearchParams();

    const createPageURL = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `?${params.toString()}`;
    };

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    const maxVisiblePages = 5;
    let visiblePages = pages;

    if (totalPages > maxVisiblePages) {
        const start = Math.max(1, currentPage - 2);
        const end = Math.min(totalPages, start + maxVisiblePages - 1);
        visiblePages = pages.slice(start - 1, end);
    }

    return (
        <nav className="flex justify-center items-center space-x-2">
            {/* Previous Button */}
            <Link
                href={createPageURL(currentPage - 1)}
                className={`px-3 py-2 rounded-lg ${
                    currentPage === 1
                        ? 'bg-gray-100 dark:bg-neutral-800 text-gray-400 dark:text-white cursor-not-allowed'
                        : 'bg-white dark:bg-neutral-800 text-gray-700 dark:text-white hover:bg-amber-50 dark:hover:bg-amber-600'
                }`}
                aria-disabled={currentPage === 1}
            >
                Previous
            </Link>

            {/* Page Numbers */}
            {visiblePages.map((page) => (
                <Link
                    key={page}
                    href={createPageURL(page)}
                    className={`px-4 py-2 rounded-lg ${
                        currentPage === page
                            ? 'bg-amber-500 text-white'
                            : 'bg-white dark:bg-neutral-800 text-gray-700 dark:text-white hover:bg-amber-50 dark:hover:bg-amber-600'
                    }`}
                >
                    {page}
                </Link>
            ))}

            {/* Next Button */}
            <Link
                href={createPageURL(currentPage + 1)}
                className={`px-3 py-2 rounded-lg ${
                    currentPage === totalPages
                        ? 'bg-gray-100 dark:bg-neutral-800 text-gray-400 dark:text-white cursor-not-allowed'
                        : 'bg-white dark:bg-neutral-800 text-gray-700 dark:text-white hover:bg-amber-50 dark:hover:bg-amber-600'
                }`}
                aria-disabled={currentPage === totalPages}
            >
                Next
            </Link>
        </nav>
    );
} 