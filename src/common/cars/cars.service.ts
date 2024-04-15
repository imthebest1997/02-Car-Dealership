import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        // {
        //     id: uuidv4(),
        //     brand: "Toyota",
        //     model: "Corolla",
        // },
        // {
        //     id: uuidv4(),
        //     brand: "Toyota",
        //     model: "Camry",
        // },
        // {
        //     id: uuidv4(),
        //     brand: "Toyota",
        //     model: "RAV4",
        // }
    ];    

    findAll(){
        return this.cars;
    }

    findOneById(id: string){                
        const car = this.cars.find(car => car.id === id);

        if(!car) 
            throw new NotFoundException(`Car with id '${ id }' not found`);

        return car;
    }

    create(createCarDto: CreateCarDto){

        const newCar:Car = {
            id: uuidv4(),
            ...createCarDto
        }

        this.cars.push(newCar);
        return newCar;        
    }

    update(id: string, updateCarDto: UpdateCarDto){
        let carDb = this.findOneById(id);
        if(updateCarDto.id && updateCarDto.id !== id)
            throw new NotFoundException(`Car with id '${ id }' not found`);
        this.cars = this.cars.map(car => {
            if(car.id === id){
                carDb = {
                    ...carDb,
                    ...updateCarDto
                }
                return carDb;
            }
            return car;
        });
        // Object.assign(car, body);

        return carDb;
    }

    delete(id: string){
        const car = this.findOneById(id);
        this.cars = this.cars.filter(car => car.id !== id);
        return car;
    }

    fillCarsWithSeedData( cars: Car[] ){
        this.cars = cars;
    }
}
