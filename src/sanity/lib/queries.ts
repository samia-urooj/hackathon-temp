import { defineQuery } from "next-sanity";



export const allProducts = defineQuery(`
    *[_type == "products"]{
    title,
    price,
    priceWithoutDiscount,
    badge,
    "imageUrl" : image.asset->url,
    category,
    description,
    inventory,
    tags
    }`)

    
export const fourProducts = defineQuery(`
    *[_type == "products"][0..3]{
    title,
    price,
    priceWithoutDiscount,
    badge,
    "imageUrl"   : image.asset->url,
    category,
    description,
    inventory,
    tags
    }`)