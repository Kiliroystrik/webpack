import ProductsComponent from "../products/products.component";

export default class ProductByCategoriesComponent {
    constructor(apiService) {
        this.apiService = apiService;

        // Je créer mon instance de mon composant ProductsComponent
        this.productsComponent = new ProductsComponent(this.apiService);
    }

    init() {
        this.pageRouterContainer = document.getElementById('router');
        this.pageRouterContainer.innerHTML = '';

        this.pageContainer = document.createElement('div');

        this.pageContainer.classList.add('Category');
        this.pageRouterContainer.appendChild(this.pageContainer);
        // J'efface tout le contenu existant de pageRouterContainer
    }


    async render(category) {
        this.createCategoryPage(category);
    }

    async createCategoryPage(category) {
        this.init();
        this.pageContainer.innerHTML = `
            <h2>Categorie ${category}</h2>
            <p>Tout les produits ${category}</p>
            <section>
                <h2>Les produits</h2>
                <div class="products"></div>
            </section>
        `;

        // api
        // les différentes categories sont:
        // electronics
        // jewelery
        // men's clothing
        // women's clothing
        const productsResponse = await this.apiService.getProductsByCategory(category);

        // J'appelle la méthode renderInThisElement de mon composant ProductsComponent ici
        this.productsComponent.renderInThisElement(this.pageContainer.querySelector('.products'), productsResponse);
    }
}