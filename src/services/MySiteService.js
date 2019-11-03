import ProductService from "../modules/product/api/ProductService";
import CartService from "../modules/shopping-cart/api/CartService";

export default {
    ...ProductService,
    ...CartService
}