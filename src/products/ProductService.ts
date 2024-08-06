import { faker } from "@faker-js/faker";
import { CreateProductDto, FindProductDto, updateProductDto } from "./ProductDto";
import { Product } from "./ProductModel";

export const products: Product[] = [];

export const addProduct= (data: CreateProductDto)=>{
    const newData:Product = {
        ...data,
        id: faker.string.uuid(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        category: {
            name: faker.commerce.department(),
            id: faker.string.uuid(),
            createdAt:  faker.date.recent(),
            updatedAt:  faker.date.recent()
        }
    }
    products.push(newData);
}

/*  
    se puede buscar el tipado buscandolo por el nombre de la propiedad 
    Product['id'] === string
*/
export const updateProduct = (id: Product['id'], changes: updateProductDto) => {
    const index = products.findIndex(item => item.id === id);
    const prevData = products[index];
    products[index] = {
        ...prevData,
        ...changes
    }
    console.log('Update : ', id, changes);
}

export const findProduct = (dto: FindProductDto): Product[] => {
    const filterProduct = products.filter((product)=> {
        return dto.stock === product.stock
    });
    return products;
}