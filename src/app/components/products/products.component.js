import './products.scss';
import './product/product.scss';

export default class ProductsComponent {
    constructor(apiService) {
        this.apiService = apiService;

    }

    init() {
        this.pageRouterContainer = document.getElementById('router');
        this.pageContainer = document.createElement('div');
        this.pageContainer.classList.add('products');
        this.pageRouterContainer.appendChild(this.pageContainer);
    }

    async render() {
        const productsResponse = await this.getProducts();

        if (productsResponse.success && productsResponse.data && productsResponse.data.length > 0) {
            const products = productsResponse.data;

            products.forEach((product) => {
                const productCard = this.createProductCard(product);
                this.pageContainer.appendChild(productCard);
            });
        } else {
            this.pageContainer.innerHTML = "Aucun produit trouvé.";
        }
    }

    async renderInThisElement(element, productsResponse) {

        // const productsResponse = await this.getProducts();

        if (productsResponse.success && productsResponse.data && productsResponse.data.length > 0) {
            const products = productsResponse.data;

            products.forEach((product) => {
                const productCard = this.createProductCard(product);
                element.appendChild(productCard);

            });
        } else {
            element.innerHTML = "Aucun produit.";
        }
    }


    async getProducts() {
        return this.apiService.getProducts();
    }

    createProductCard(product) {
        this.init();
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="product-details">
                <h2><a href="/product/${product.id}" >${product.title}</a></h2>
                <p>${product.description}</p>
                <p class="rating">Note: ${product.rating.rate}</p>
                <p class="rating">Nombre de notes: ${product.rating.count}</p>
            </div>
        `;

        return card;
    }
}
