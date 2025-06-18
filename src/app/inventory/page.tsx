import { Suspense } from "react";
import { getVehicles } from "./actions";
import VehicleCard from "./components/vehicle-card";
import Filters from "./components/filters";
import Pagination from "@/app/inventory/components/pagination";

export const revalidate = 3600; // Revalidate every hour

export default async function InventoryPage({
    searchParams,
}: {
    searchParams: Promise<{ page?: string; [key: string]: string | undefined }>;
}) {
    const params = await searchParams;
    const currentPage = Number(params.page) || 1;
    const filters = {
        priceRange: params.priceRange,
        make: params.make,
        year: params.year,
        mileage: params.mileage,
        transmission: params.transmission,
        fuelType: params.fuelType,
        featured: params.featured === 'true',
    };

    const { vehicles, total, pageCount, currentPage: page } = await getVehicles(currentPage, filters);

    return (
        <main className="container mx-auto px-4 py-8 pt-32">
            <h1 className="text-4xl font-bold mb-8">Our Inventory</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                    <Suspense fallback={<div>Loading filters...</div>}>
                        <Filters />
                    </Suspense>
                </div>

                <div className="lg:col-span-3">
                    <div className="mb-4 text-gray-600">
                        Showing {vehicles.length} of {total} vehicles
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {vehicles.map((vehicle, index) => (
                            <VehicleCard key={vehicle.id + index} vehicle={vehicle} />
                        ))}
                    </div>

                    {vehicles.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-600 text-lg">No vehicles match your current filters.</p>
                        </div>
                    )}

                    {pageCount > 1 && (
                        <div className="mt-8">
                            <Pagination
                                currentPage={page}
                                totalPages={pageCount}
                            />
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
} 

