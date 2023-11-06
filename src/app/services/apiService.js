export default class ApiService {
    async getProduct(id) {
        try {
            const response = await fetch('https://fakestoreapi.com/products/' + id);
            const data = await response.json();

            return {
                success: true,
                data: data,
                error: null,
            };
        } catch (error) {
            return {
                success: false,
                data: null,
                error: error.message,
            };
        }
    }

    async getProducts() {
        try {
            const response = await fetch(`https://fakestoreapi.com/products`);
            const data = await response.json();

            return {
                success: true,
                data: data,
                error: null,
            };
        } catch (error) {
            return {
                success: false,
                data: null,
                error: error.message,
            };
        }
    }

    async getProductsByCategory(category) {
        try {
            // les différents categories sont:
            // electronics
            // jewelery
            // men's clothing
            // women's clothing
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
            const data = await response.json();

            return {
                success: true,
                data: data,
                error: null,
            };
        } catch (error) {
            return {
                success: false,
                data: null,
                error: error.message,
            };
        }
    }
}
