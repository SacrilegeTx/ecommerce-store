import type { Product } from "../../../types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`${URL}/${id}`);
  const data = await response.json();

  return data;
};

export default getProductById;
