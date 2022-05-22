import React from "react";
import {useFetch} from '../custom-hooks/useFetch'
import Product from "./products";
const url='https://api.github.com/users'
const Index=()=>{
    const {products}=useFetch(url);
    const Products=[...products,{login:'hello',id:100}]
    console.log(products);
    console.log(products)
    return(
        <>
        <h1>
            -----Products-----
        </h1>
        <div>
            {Products.map((product)=>{
                return <Product key={product.id} {...product}/>
            })}
        </div>
        </>
    )}
export default Index;