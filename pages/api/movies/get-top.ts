import { NextApiRequest, NextApiResponse } from "next";
import data from "../../../database/data";

const getTop8 = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ data: data.slice(0, 8)});
};

export default getTop8;