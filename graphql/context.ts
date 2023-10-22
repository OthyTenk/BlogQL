// graphql/context.ts

import type { NextApiRequest, NextApiResponse } from "next";


export async function createContext({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  
  // if the user is not logged in, return an empty object

  const { user } = req.cookies;

  return {
    user,
  };
}
