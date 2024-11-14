import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/server/db";

/**
 * @swagger
 * /api/orders:
 *   get:
 *     tags:
 *      - Order
 *     description: Get all orders available
 *     responses:
 *       200:
 *         description: return orders
 *   post:
 *     tags:
 *      - Order
 *     description: Post a order to store
 *     responses:
 *       200:
 *         description: return orders
 *   put:
 *     tags:
 *      - Order
 *     description: Change information of item in store
 *     responses:
 *       200:
 *         description: return orders
 *   delete:
 *     tags:
 *      - Order
 *     description: Delete order available in store
 *     responses:
 *       200:
 *         description: return orders
 */
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  db.orders.findMany({}).then((data)=>{
    res.status(200).json({
      result: data,
    });
  });
};

export default handler;