import { Module } from "@nestjs/common";
import { CarsModule } from './common/cars/cars.module';

@Module({
    imports: [CarsModule],
    controllers: [],
    providers: [],
    exports: []
})
 
export class AppModule {}