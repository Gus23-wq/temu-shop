import React, { Component } from "react";

import css from "./ProductCard.module.css";

class ProductCard extends Component {
    
    componentDidMount() {
        console.log('ProductCard mounted');
    }

    componentDidUpdate() {
        console.log('ProductCrad updated');
    }

    componentWillUnmount() {
        console.log('ProductCard unmounted');
    }

    render() {

        const { product } = this.props;

        return (
            <div className={css.ProductCard}>
                <div className={css.ProductCard_header}>
                    <img src={Product.ProductCard_body} alt="Product" />
                </div>
                <div className={css.ProductCard_body}>
                    <h2>Product Name</h2>
                    <p>Product Description</p>
                </div>
                <button className={css.ProductCard_button}>Add to Cart</button>
            </div>
        )
    }
}

export default ProductCard;