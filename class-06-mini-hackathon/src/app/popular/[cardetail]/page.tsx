import Container from '@/components/Container';
import React from 'react';
import CarDetails from '@/data/CarDetails.json';
import Image from 'next/image';
import Button from '@/components/Button';
import Link from 'next/link';

interface VehicleI {
  number_of_doors: number;
  engine: string;
  condition: string;
  driven: string;
  suspension_type: string;
  avg_fuel_consumption: string;
  transmission: string;
  fuel_type: string;
}

interface CarI {
  title: string;
  imageSrc: string;
  vehicle_description: VehicleI;
  price: string;
}

interface PageProps {
  params: {
    cardetail: string;
  };
}

function Page({ params }: PageProps) {
  const carDetail: string = params.cardetail;
  const car: CarI = CarDetails[carDetail as keyof typeof CarDetails];

  return (
    <div className="bg-gray-200 text-gray-900 py-8">
      <Container>
        <div className="w-full max-w-4xl mx-auto text-center flex flex-col gap-10 justify-center items-center">
          <h1 className="text-4xl font-bold underline">
            {car.title} Price in Pakistan, Images, Reviews & Specs
          </h1>
          <Image
            src={car.imageSrc}
            alt={car.title}
            height={1000}
            width={1000}
            className="h-56 w-80 rounded"
          />
          <div className="flex gap-2">
            <Button variant="darkBlue">Book a Test Drive</Button>
            <Button variant="white">Request Bank Finance</Button>
            <Button variant="white">Visit Place</Button>
            <Button variant="white">Car Inspection</Button>
          </div>
          <div className="space-y-3 px-8">
            <h2 className="text-3xl font-medium">Vehicle Description</h2>
            <div className="flex gap-2 flex-wrap mx-auto text-sm">
              <span>
                <b>Number of Doors:</b> {car.vehicle_description.number_of_doors}
              </span>
              <span>
                <b>Engine:</b> {car.vehicle_description.engine}
              </span>
              <span>
                <b>Condition:</b> {car.vehicle_description.condition}
              </span>
              <span>
                <b>Driven:</b> {car.vehicle_description.driven}
              </span>
              <span>
                <b>Suspension Type:</b> {car.vehicle_description.suspension_type}
              </span>
              <span>
                <b>Avg:</b> {car.vehicle_description.avg_fuel_consumption}
              </span>
              <span>
                <b>Transmission:</b> {car.vehicle_description.transmission}
              </span>
              <span>
                <b>Fuel Type:</b> {car.vehicle_description.fuel_type}
              </span>
            </div>
          </div>
          <p className="text-2xl text-green-600">{car.price}</p>
          <Link href="/checkout">
            <Button variant="darkBlue">Make Payment</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Page;
