import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Req, Res, Redirect } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product-dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product, ProductDocument } from './schemas/products.schemas';
// import { Request, Response } from 'express';
@Controller('products')
export class ProductsController {


  constructor(private readonly productsService: ProductsService) {

  }
  // nest g products service
  // nest g products controller
  // @Get()
  // // @Redirect('https://google.com', 301)
  // // getAll() {
  // //   return 'getAll'
  // // }
  // getAll(@Req() req: Request, @Res() res: Response): string {
  //   res.status(201).end('poka')
  //   return 'getAll'
  // }

  // @Get()
  // getAll() {
  //   return 'getAll'
  // }

  @Get()
  getAll(): Promise<Product[]> {
    return this.productsService.getAll()
  }

  // @Get(':id')
  // getOne(@Param() params) {
  //   return 'getOne' + params.id
  // }

  @Get(':id')
  // getOne(@Param('id') id: string): string {
  getOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.getById(id)
    // return 'getOne' + id
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    // return `Title: ${createProductDto.title} Price: ${createProductDto.price}`
    return this.productsService.create(createProductDto)
  }

  @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return 'Remove ' + id

  // }
  remove(@Param('id') id: string): Promise<Product> {
    return this.productsService.remove(id)

  }

  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): Promise<Product> {
    // return 'Update ' + id
    return this.productsService.update(id, updateProductDto)
  }
}
