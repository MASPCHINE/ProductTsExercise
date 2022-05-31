import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();

let result;
result = _productService.getById(2);

let productNew = new Product();
productNew.id=2;
productNew.name = "Iphone 12";
productNew.price = 3500;
productNew.category = "Phone";

// add Product
_productService.saveProduct(productNew);

// delete Product
//_productService.deleteProducst(result);

result = _productService.getProducts();

console.log(result);
  