"use client"

import { useCartStore } from "@/store"
import { Product } from "@/typings/ProductTypings"
import { Button } from "./ui/button";
import RemoveFromCart from "./RemoveFromCart";


function AddToCart({product}:{product: Product}) {

     const [cart, addToCart]= useCartStore((state)=> [
        state.cart,
        state.addToCart,
     ]);

     console.log(cart);

     const howManyInCart = cart.filter(
        (item) => item.meta.sku === product.meta.sku
     ).length;

     console.log("how many in cart", howManyInCart);

     const handleAdd = () => {
        console.log("Adding to cart" , product);
        addToCart(product);
     };

     if(howManyInCart > 0){
        return (
        <div className="flex space-x-5 items-center">
            <RemoveFromCart product={product} />
            <p>-</p>
            <span>{howManyInCart}</span>
            <Button className="bg-walmart hover:bg-walmart/50 " onClick={handleAdd} >
                +
            </Button>
        </div>
        );
    }
  return <Button onClick={handleAdd}>Add to cart </Button>
}

export default AddToCart;