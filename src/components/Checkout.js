import { useContext } from "react";
import { StateContext } from "../context/AppProvider";

const Checkout= ()=>{

    const cartPackage = useContext(StateContext);

    let cartItemsAre = cartPackage.cartItems.map((item)=>{
        return(
            <div>
                <img src={item.img}></img>
                <h6>{item.title}</h6>
            </div>
        )
    })

    return(
        <div className="checkout"> 
                {cartItemsAre}

        </div>
    )
}

export default Checkout;