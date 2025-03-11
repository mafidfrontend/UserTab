import { productsType } from "@/typeProducts";
import React from "react";

function Products({ products }: { products: productsType[] | undefined }) {
    return (
        <>
            {products?.map((product, index) => {
                return (
                    <div key={index}>
                        <h2>{product.name}</h2>
                        <p>{product.sale_price}</p>
                        <img src={product.image} alt={product.name} />
                    </div>
                );
            })}
        </>
    );
}

export default Products;
