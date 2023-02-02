import { mount as mountProductsList } from "products/ProductsList";
import { mount as mountShoppingCart } from "cart/ShoppingCart";

mountProductsList(document.querySelector("#products-list"));
mountShoppingCart(document.querySelector("#shopping-cart"));
