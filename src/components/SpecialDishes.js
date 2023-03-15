import React,{useContext, useState} from 'react'
import CardDish from './CardDish';
import PopUp from './PopUp';
import AddToCart from './AddToCart';


import { AllMenuContext } from './AllMenuContext';

function SpecialDishes(props) {
    // console.log("Props :", props.specialMenu)

let [showPopUp,setShowPopup]=useState(false);
let [currentDish,setCurrentDish]= useState('');
let [addToCartItem,setAddToCartItem]=useState([]);


const allMenus = useContext(AllMenuContext)
// console.log("Global state menus are",allMenus)


//lets show the popup
function showPopupHandler(dishName){
   setShowPopup(true)
   setCurrentDish(dishName)
}


// lets close the popup
function closePopupHandler(){
    setShowPopup(false)
}


//Add to cart handler

function addToCartHandler (addToCartImg, addToCartTitle){
   setAddToCartItem(
    [
    ...addToCartItem,
    {
    "img" : addToCartImg,
    "title" : addToCartTitle
   }
]
)
}


    let maxSpecialDishes = 8;

let specialMenus = allMenus.map((menuItem,index)=>{
    if(index<maxSpecialDishes){

        return(
        
            <CardDish
             menuItem={menuItem} 
             showPopUp={showPopupHandler}
             />
            
    )
    }
    
})


  return (
    
    <section  className='special-dishes'>
        {showPopUp && <PopUp
        currentDish={currentDish}
        closePopup={closePopupHandler}
        addToCartHandler={addToCartHandler}
         ></PopUp> }
        <div className='container'>

        <AddToCart addToCartItem={addToCartItem}/>

            <div className='special-dishes-content text-center'>
            <h2 > Our Special Dishes</h2>
<p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, impedit fugiat. Error dolor nobis quidem numquam porro quos? Sunt minima provident nobis aspernatur illo dolorem corporis facere debitis voluptate excepturi.</p>
            </div>
<div className='special-dishes-list'>
    <ul className='flex flex-wrap gap'>
    {specialMenus}
    </ul>
</div>

        </div>

    </section>
  )
}

export default SpecialDishes