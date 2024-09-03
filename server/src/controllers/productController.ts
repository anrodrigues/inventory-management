import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getProducts = async (req: Request, res: Response) => {
  try {
    const search = req.query.search?.toString()

    const products = await prisma.products.findMany({
      where: {
        name: {
          contains: search
        }
      }
    });

    res.json(products  )
  } catch(error) {
    res.status(500).json({message: "Error retrieving products"})
  }
}

export const createPoduct = async ( req: Request, res: Response):Promise<void> => {
  try {
    const { productId, name, price, rating, stockQuantity } = req.body
    const product = await prisma.products.create({
      data: {
        name,
        price,
        productId,
        stockQuantity,
        rating,
      }
    })

    res.status(201).json(product)
  }catch(error) {

  }   res.status(500).json({message: "Error creating product"})
}