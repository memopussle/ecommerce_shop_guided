import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client"; //get url image inside of sanity
const Product = ({ product: { image, name, slug, price } }) => {
  console.log(slug) //slug: unique string 
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          ></img>
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
