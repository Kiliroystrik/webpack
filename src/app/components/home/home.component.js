import ProductsComponent from "../products/products.component";
import "./home.scss"
import bannerImage from "../../../../images/Home-large.jpg";

export default class HomeComponent {
    constructor(apiService) {
        this.apiService = apiService;

        // Je créer mon instance de mon composant ProductsComponent
        this.productsComponent = new ProductsComponent(this.apiService);

    }

    init() {
        this.pageRouterContainer = document.getElementById('router');
        // J'efface tout le contenu existant de pageRouterContainer
        this.pageRouterContainer.innerHTML = '';
        this.pageContainer = document.createElement('div');
        this.pageContainer.classList.add('home');
        this.pageRouterContainer.appendChild(this.pageContainer);

    }

    async render() {
        this.createHomePage();
    }

    async createHomePage() {
        this.init();
        this.pageContainer.innerHTML = `
            <div class="banner">
                <img class="banner-image" src="${bannerImage}" alt="banner">
            </div>
            <h2>Achat de Vetements et Accessoires En Ligne</h2>
            <p>Venez acheter vos Vetements et Accessoires en Ligne</p>
            <section>
                <h2>Les produits</h2>
                <div class="products"></div>
            </section>
        `;

        // api
        const productsResponse = await this.apiService.getProducts();

        // J'appelle la méthode renderInThisElement de mon composant ProductsComponent ici
        this.productsComponent.renderInThisElement(this.pageContainer.querySelector('.products'), productsResponse);
    }
}