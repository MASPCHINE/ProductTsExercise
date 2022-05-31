import { Product } from "./Product";

export class SimpleDataSource{
    private products : Array<Product>;

    constructor(){
        this.products = new Array<Product>(
            new Product(1,"Samsung S9","Phone",1000),
            new Product(2,"Samsung S10","Phone",2000),
            new Product(3,"Samsung S20","Phone",3000),
            new Product(4,"Samsung S21","Phone",4000), 

        )
    }

    getProducts() :Product[]{
        return this.products;
    }
}