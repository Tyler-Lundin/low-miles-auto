'use server';

import VEHICLES from "../../../vehicles.data";
import { Vehicle } from "@/types";

export type VehicleFilters = {
    priceRange?: string;
    make?: string;
    year?: string;
    mileage?: string;
    transmission?: string;
    fuelType?: string;
    featured?: boolean;
};

export type PaginatedVehiclesResponse = {
    vehicles: Vehicle[];
    total: number;
    pageCount: number;
    currentPage: number;
};

const ITEMS_PER_PAGE = 9;

export async function getVehicles(
    page: number = 1,
    filters: VehicleFilters = {}
): Promise<PaginatedVehiclesResponse> {
    // Simulate database delay
    await new Promise(resolve => setTimeout(resolve, 100));

    let filtered = [...VEHICLES];

    // Apply filters
    if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(Number);
        filtered = filtered.filter(vehicle => {
            if (max) {
                return vehicle.price >= min && vehicle.price <= max;
            }
            return vehicle.price >= min;
        });
    }

    if (filters.make) {
        filtered = filtered.filter(vehicle => vehicle.make === filters.make);
    }

    if (filters.year) {
        filtered = filtered.filter(vehicle => vehicle.year === parseInt(filters.year!));
    }

    if (filters.mileage) {
        const [min, max] = filters.mileage.split('-').map(Number);
        filtered = filtered.filter(vehicle => {
            if (max) {
                return vehicle.mileage >= min && vehicle.mileage <= max;
            }
            return vehicle.mileage >= min;
        });
    }

    if (filters.transmission) {
        filtered = filtered.filter(vehicle => vehicle.transmission === filters.transmission);
    }

    if (filters.fuelType) {
        filtered = filtered.filter(vehicle => vehicle.fuelType === filters.fuelType);
    }

    if (filters.featured) {
        filtered = filtered.filter(vehicle => vehicle.featured === true);
    }

    // Calculate pagination
    const total = filtered.length;
    const pageCount = Math.ceil(total / ITEMS_PER_PAGE);
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    // Get paginated results
    const paginatedVehicles = filtered.slice(start, end);

    return {
        vehicles: paginatedVehicles,
        total,
        pageCount,
        currentPage: page
    };
} 