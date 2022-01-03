import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule,
    // mongodb+srv://alex:<password>@cluster0.fgr0d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    MongooseModule.forRoot('mongodb+srv://alex:pasalex16@cluster0.fgr0d.mongodb.net/products?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
