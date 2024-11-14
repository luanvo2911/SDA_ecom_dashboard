import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/server/db";

/**
 * @swagger
 * /api/customsers:
 *   get:
 *     tags:
 *      - Customer
 *     description: Get all customers available
 *     responses:
 *       200:
 *         description: return customers
 *   post:
 *     tags:
 *      - Customer
 *     description: Post a customer to store
 *     responses:
 *       200:
 *         description: return customers
 *   put:
 *     tags:
 *      - Customer
 *     description: Change information of item in store
 *     responses:
 *       200:
 *         description: return customers
 *   delete:
 *     tags:
 *      - Customer
 *     description: Delete customer available in store
 *     responses:
 *       200:
 *         description: return customers
 */
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  db.customers.findMany({}).then((data)=>{
    res.status(200).json({
      result: data,
    });
  });
};

export default handler;