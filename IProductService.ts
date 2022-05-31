import { Product } from "./Product";

export interface IProductService {
    getById(id :number) : Product;
    getProducts(): Array<Product>;
    saveProduct(product : Product) : void;
    deleteProducst(product:Product): void;
}