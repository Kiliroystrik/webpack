// app.js
import ProductComponent from './components/products/product/product.component';
import ProductsComponent from './components/products/products.component';
import HomeComponent from './components/home/home.component';
import ApiService from './services/apiService';
import ProductByCategoriesComponent from './components/categories/ProductsByCategories.component';
import page from 'page';

export default class App {
    constructor() {
    }

    init() {
        this.apiService = new ApiService();
        this.productComponent = new ProductComponent(this.apiService);
        this.productsComponent = new ProductsComponent(this.apiService);
        this.homeComponent = new HomeComponent(this.apiService);
        this.categoryComponent = new ProductByCategoriesComponent(this.apiService);

        this.initRoutes();
    }


    initRoutes() {

        page('/home', () => this.homeComponent.render());
        page('/category/:category', (context) => this.categoryComponent.render(context.params.category));
        page('/product/:id', (context) => this.productComponent.render(context.params.id));


        // init page
        page.start();
    }

}
