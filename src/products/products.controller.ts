import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Req, Res, Redirect } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product-dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Request, Response } from 'express';
@Controller('products')
export class ProductsController {


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

  @Get()

  getAll() {
    return 'getAll'
  }

  // @Get(':id')
  // getOne(@Param() params) {
  //   return 'getOne' + params.id
  // }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return 'getOne' + id
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductDto): string {
    return `Title: ${createProductDto.title} Price: ${createProductDto.price}`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'Remove ' + id

  }

  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
    return 'Update ' + id
  }
}
