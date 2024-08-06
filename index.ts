import { faker } from "@faker-js/faker";
import { addProduct, findProduct, products } from "./src/products/ProductService";


for (let index = 0; index < 20; index++) {
    addProduct({
        categoryId: faker.string.uuid(),
        title: faker.commerce.productName(),
        image: faker.image.url(),
        description: faker.commerce.productDescription(),
        stock: faker.number.int({min: 1, max: 100}),
        prize: parseInt(faker.commerce.price(), 10),
        tags: faker.helpers.arrayElements(['A', 'B', 'C', 'D'])
    });
}

const res = findProduct({
    stock: 10,
    tags: []
})

console.log('Products', res)