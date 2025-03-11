"use client";
import Products from "@/components/Products";
import { productsType } from "@/typeProducts";
import axios from "axios";
import { useEffect, useState } from "react";



export default function Home() {
    const [products, setProducts] = useState<productsType[]>();
    useEffect(() => {
        axios
            .get(
                "https://gw.texnomart.uz/api/web/v1/home/special-products?type=hit_products"
            )
            .then((res) => {
                console.log(res.data.data.data);
                setProducts(res.data.data.data)
            });
    }, []);
    return <div>
      <Products products={products}/>
    </div>;
}
