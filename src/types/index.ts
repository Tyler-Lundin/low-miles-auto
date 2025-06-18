export interface Vehicle {
    id: string;
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    color: string;
    transmission: string;
    fuelType: string;
    trim: string;
    vin: string;
    features: string[];
    condition: string;
    images: string[];
    description: string;
    isFeatured: boolean;
    isSold: boolean;
    notes: string;
    createdAt: string;
    updatedAt: string;
    featured: boolean;
}
