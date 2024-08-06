import { Product } from "./ProductModel";

//permite crear una interfaz o tipo excluyendo las propiedades mencionadas
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt'| 'updatedAt'| 'category'> {
    categoryId: string;
}

//permite crear una interfaz o tipo solamente con las propiedades mencionadas
type example = Pick<Product, 'title'|'stock'>;

//convierte todos las propiedades en requeridas
export interface updateProductDto extends Partial<CreateProductDto>{
}

//convierte todos las propiedades en requeridas
export interface RequiredProductDto extends Required<CreateProductDto>{
}

// Convierto todos los parametros en opcionales pero de solo lectura
// se omite el campo tags para convertilo en un array inmutable
export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>>{
    readonly tags: ReadonlyArray<String>
}