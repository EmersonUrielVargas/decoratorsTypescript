import { BaseModel } from "../baseModel";
import { Category } from "../categories/Category";

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModel {
    title: string;
    image: string;
    description: string;
    stock: number;
    size?: Sizes;
    prize: number;
    category: Category;
    tags: string[];
}
