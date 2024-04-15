import { Module } from "@nestjs/common";
import { CarsModule } from './common/cars/cars.module';
import { BrandsModule } from './common/brands/brands.module';
import { SeedModule } from './common/seed/seed.module';

@Module({
    imports: [CarsModule, BrandsModule, SeedModule],
    controllers: [],
    providers: [],
    exports: []
})
 
export class AppModule {}