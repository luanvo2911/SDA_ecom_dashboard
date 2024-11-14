import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/server/db";

/**
 * @swagger
 * /api/products:
 *   get:
 *     tags:
 *      - Product
 *     description: Get all products available
 *     responses:
 *       200:
 *         description: return products
 *   post:
 *     tags:
 *      - Product
 *     description: Post a product to store
 *     responses:
 *       200:
 *         description: return products
 *   put:
 *     tags:
 *      - Product
 *     description: Change information of item in store
 *     responses:
 *       200:
 *         description: return products
 *   delete:
 *     tags:
 *      - Product
 *     description: Delete product available in store
 *     responses:
 *       200:
 *         description: return products
 */
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  db.product.findMany({}).then((data)=>{
    res.status(200).json({
      result: data,
    });
  });
};

export default handler;