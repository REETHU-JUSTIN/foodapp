import { all } from 'axios';
import React, { useContext } from 'react'
import { AllMenuContext } from './AllMenuContext';
import { DispatchContext } from '../context/AppProvider'; 

function PopUp({closePopup,currentDish,allDishes,addToCartHandler}) {

  const allMenus = useContext(AllMenuContext);
  const dispatch = useContext(DispatchContext);


// console.log(allDishes);

let dishDetails =  allMenus.filter((menuItem)=>{

  return menuItem.strMeal == currentDish
}).map((item)=>{
  return (
    <div className="popup-content-data">
      <div className='popup-header'>
      <img src={item.strMealThumb} alt="" />
      <h5 className='popup-header-category '>{item.strCategory}</h5>

      </div>
     
    <h2>{item.strMeal}</h2>
    <p>{item.strInstructions}</p>

    <ul className='dish-ingredients '>
      <li>{item.strIngredient1}</li>
      <li>{item.strIngredient2}</li>
      <li>{item.strIngredient3}</li>
      <li>{item.strIngredient4}</li>
    </ul>

    <button 
    onClick={()=>{dispatch({type:'add_to_cart',
                          payload:{title: item.strMeal ,img: item.strMealThumb }})}}>
      Order Now</button>
    <h5 className='popup-close' onClick={closePopup}><img src="https://img.icons8.com/color/1x/close-window.png" alt="" style={{"height":"30px","width":"40px"}}/></h5>

    </div>
  )
})

  return (
    <div className='popup'>
     
     <div className="popup-content">
    {dishDetails}
     </div>

    </div>
  )
}

export default PopUp