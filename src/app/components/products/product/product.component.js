import './product.scss';

export default class ProductComponent {
    constructor(apiService) {
        this.apiService = apiService;

    }

    init() {
        this.pageRouterContainer = document.getElementById('router');
        this.pageRouterContainer.innerHTML = '';
        this.pageContainer = document.createElement('div');
        this.pageContainer.classList.add('product');
        this.pageRouterContainer.appendChild(this.pageContainer);
    }

    async render(id) {
        const productsResponse = await this.apiService.getProduct(id);

        if (productsResponse.success) {
            const product = productsResponse.data;
            console.table(product);
            this.createProductPage(product);

        } else {
            this.pageContainer.innerHTML = "Aucun produit trouvé.";
        }
    }


    createProductPage(data) {
        this.init();
        const productPage = document.createElement('div');
        productPage.classList.add('product-productPage');

        productPage.innerHTML = `
            <img src="${data.image}" alt="${data.title}">
            <div class="product-details">
                <h2><a href="/product/${data.id}" >${data.title}</a></h2>
                <p>${data.description}</p>
                <p class="rating">Note: ${data.rating.rate}</p>
                <p class="rating">Nombre de notes: ${data.rating.count}</p>
            </div>
        `;

        this.pageContainer.appendChild(productPage);
    }

}
