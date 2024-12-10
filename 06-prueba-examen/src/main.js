import { ProductList } from "./components/ProductList";

const apiurl = "http://localhost:3000/products";

const productlist = new ProductList(apiurl);
productlist.init();

