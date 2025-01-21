import { defineQuery } from "next-sanity";


export const productQuery = defineQuery(`
  *[_type == "products" && _id == $id][0]{
    title,
    price,
    priceWithoutDiscount,
    badge,
    "imageUrl": image.asset->url,
    category,
    description,
    inventory,
    tags
  }
`)

export const allProducts = defineQuery(`
    *[_type == "products"]{
    _id,
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
    _id,
    title,
    price,
    priceWithoutDiscount,
    badge,
    "imageUrl"   : image.asset->url,
    category,
    description,
    inventory,
    tags,
  
    }`)