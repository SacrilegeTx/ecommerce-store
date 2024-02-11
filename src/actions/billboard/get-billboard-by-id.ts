import type { Billboard } from "../../../types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboardById = async (id: string): Promise<Billboard> => {
  const response = await fetch(`${URL}/${id}`);
  const data = await response.json();

  return data;
};

export default getBillboardById;
