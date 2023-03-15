import React from 'react'

function CardDish(props) {


  return (

    <li>
    <a href="javascript:;" onClick={()=>props.showPopUp(props.menuItem.strMeal)}>
            <img src={props.menuItem.strMealThumb} className="br-10 img" />
            <h5>{props.menuItem.strMeal}</h5>
    
            </a>   
            </li>  
  )
}

export default CardDish