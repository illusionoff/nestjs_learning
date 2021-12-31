import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product-dto';
import { Product, ProductDocument } from './schemas/products.schemas';
import { Model } from 'mongoose';
import { UpdateProductDto } from './dto/update-product.dto';


@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {

  }

  private products = [];

  async getAll(): Promise<Product[]> {
    return this.productModel.find().exec()
  }

  async getById(id: string): Promise<Product> {
    return this.productModel.findById(id)
  }

  async create(productDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(productDto);
    return newProduct.save()
    // this.products.push({
    //   ...productDto,
    //   id: Date.now().toString()
    // })
  }

  async remove(id: string): Promise<Product> {
    return this.productModel.findByIdAndDelete(id)
  }

  async update(id: string, productDto: UpdateProductDto): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, productDto, { new: true })
  }

}
