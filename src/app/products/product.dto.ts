import { Product } from "./product.model";

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
    categoryid: string;
}

type example = Pick<Product, 'color' | 'description'>;
