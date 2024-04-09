import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function main() {
    const app =  await NestFactory.create(AppModule);

    // Enable validation pipe
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true, // remove non-whitelisted properties
        forbidNonWhitelisted: true, // throw error when non-whitelisted properties are present
    }));

    await app.listen(3000);
}

main();