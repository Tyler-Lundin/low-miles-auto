import VehicleCard from "@/app/inventory/components/vehicle-card"
import VEHICLES from "../../vehicles.data"
import LandingPageCta from "./landing-page-cta"
    

export default function FeaturedVehicles() {
    const vehicles = VEHICLES.filter(vehicle => vehicle.featured).sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 3)
    return (
        <div>
            <h2 className="text-2xl font-bold text-center">Featured Vehicles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {vehicles.map(vehicle => (
                    <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
            </div>
            <div className="flex items-center justify-center gap-x-6 pb-4">
                <LandingPageCta text="View Featured Vehicles" href="/inventory?featured=true" />
            </div>
        </div>
    )
}