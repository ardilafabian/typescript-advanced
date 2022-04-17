import { Product } from "./product.model";

// Creación
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
    categoryid: string;
}

type example = Pick<Product, 'color' | 'description'>;

// Actualización
export interface UpdateProductDto extends Partial<CreateProductDto> {}

type example2 = Required<Product>;

// usqueda
export interface FindProductDto extends Readonly<Partial<Product>> {}
