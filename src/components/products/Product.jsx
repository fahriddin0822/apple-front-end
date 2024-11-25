import "./Product.scss";
import { PRODUCTS__POPULAR } from "../../static/index.js";

const Product = () => {
  return (
    <div className="wrapper">
      {PRODUCTS__POPULAR?.map((product) => (
        <div
          style={{
            backgroundImage: `url(${product.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="wrapper__card"
          key={product.id}
        >
          <div className="card-content">
            <h3 style={{color:product.txtColor}}>{product.title}</h3>
            {product.series && <p style={{color:product.txtColor}} >{product.series}</p>}
          </div>
          <button className="btn__card">Learn more</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
