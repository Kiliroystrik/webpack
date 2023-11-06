export default class Product {

    constructor(id, title, price, description, category, image, rating) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.rating = rating;
    }

    getRating() {
        return this.rating.rate;
    }

    getRatingCount() {
        return this.rating.count;
    }
}