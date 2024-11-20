import { ProductCard } from "../../components";
import css from "./App.module.css"

const AboutUsPage = (ProductCard) => {
    return (
        <div>
            <h1>About Us</h1>
            <p>Our company is the best in the world when the fantasy and fun is real life</p>

            <div className={css.ProductList}>
            {product.map((product) => {
                return <ProductCard key={product.id} product={product} className={css.
                ProductList_card}/>
            })}

            </div>
                
        </div>
    );
}

export default AboutUsPage;