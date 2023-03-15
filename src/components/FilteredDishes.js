import React, { useContext, useState,useEffect } from 'react'
import CardDish from './CardDish';
import Pagination from './Pagination';
import { AllMenuContext } from './AllMenuContext';
import PopUp from './PopUp';


function FilteredDishes(props) {


    
let [menuCategory,setMenuCategory]=useState([]);
let[singleDish,setSingleDish]=useState([])
let allMenus = useContext(AllMenuContext)
let [filteredDishes,setFilteredDishes] = useState([]);
let[activeDish,setActiveDish]=useState("Beef")
let[currentPage,setCurrentPage] = useState(1)
let[itemsPerPage,setItemsPerPage] = useState(4);
  
 

//get all the categories
   async function getAllTheCategories(){
    const API_URL ="https://www.themealdb.com/api/json/v1/1/categories.php "
        let response = await fetch(API_URL)
        let categoryData = await response.json()
        setMenuCategory(categoryData.categories)
    
  }
  async function getOnlyOneDish(){
    const API_URL ="https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef "
        let response = await fetch(API_URL)
        let singleDishData = await response.json()
        setSingleDish(singleDishData.meals)
        
    
  }

    useEffect(()=> {
      
        getAllTheCategories();
        getOnlyOneDish();
      
    
    }, []);


   



let indexOfLastDish = currentPage * itemsPerPage;
//1 * 4 = 4
//2 * 4 = 8
//3 * 4 = 12


let indexOfFirstDish = indexOfLastDish - itemsPerPage;

// 4 - 4 = 0
// 8 - 4 = 4
// 12 - 4 =8

let showTheseDishesNow = filteredDishes.slice(indexOfFirstDish,indexOfLastDish)

//lets show only single dishes
let maxItem=8 
let singleDishItems = singleDish.map((item,index)=> {

    if(index < maxItem)
    return(  
        <li>
            <img src={item.strMealThumb} className="br-10 gap-25" alt="" />
            <h5>{item.strMeal}</h5>
        </li>
    )
})



 

//show Dishes on click
function showFilteredDishesHandler(category){
    setSingleDish([])
    setActiveDish(category)
  let filteredDishesAre = allMenus.filter((menuItem)=>{
    
        return menuItem.strCategory === category
    }).map((menuItem)=>{
        return(  
            <CardDish menuItem={menuItem}/>
        )
    })

    setFilteredDishes(filteredDishesAre)

}

// Lets show all the categories
let allCategories = menuCategory.map((item)=> { 
    return(
<li className={item.strCategory==activeDish ? "active": ""} onClick={()=>{showFilteredDishesHandler(item.strCategory)}} >{item.strCategory}</li>
    )
})
 
//Rendering
  return (
  <div className='filterd-dishes'>
        <div className='container'>
            <div className="text-center">
            <h2>Choose Your Dishes</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias laudantium dolorum cupiditate quia incidunt dolore repellendus perspiciatis accusantium molestiae totam.</p>

            </div>

            <div className="filtered-dishes">
                <ul>
              {allCategories}

                </ul>

            </div>

            <div className="filtered-dishes-results"> 
            
                  <ul className='flex flex-wrap content gap-25'>
                    {singleDishItems}
                    {singleDishItems !=0 || filteredDishes.length !=0 ? showTheseDishesNow: 
                    <div className='alert'>
                    <h3>Sorry,No Items Found.</h3>
                    <h4>Please try another dishes</h4>
                    </div>}
        
                  </ul>  
                  <Pagination 
            filteredDishes = {filteredDishes}
            itemsPerPage ={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            ></Pagination>   
            </div>
           
          
        </div>
    </div>
  ) 
}

export default FilteredDishes;

