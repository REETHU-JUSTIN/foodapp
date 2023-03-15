import { StateContext } from "../context/AppProvider"
import { useContext } from "react"

const AddToCart = ({addToCartItem})=>{

    const cartPackage = useContext(StateContext);
    // console.log("the cart items",cartPackage);

    let cartItemsAre = cartPackage.cartItems.map((item)=>{
        return(
            <div>
                <img src={item.img}></img>
                <h6>{item.title}</h6>
            </div>
        )
    })


    let addToCartResult = addToCartItem.map((item)=>{
        return(
            <div>
                <img src={item.img}/>
                <h6>{item.title}</h6>
            </div>
        )
    })

    return(
       <div className="add-to-cart-wrapper">
       <div className="add-to-card-item">
        <h6 className="text-center">Your Cart </h6>

       {cartItemsAre}
    </div>
       </div>
    )

}

export default AddToCart