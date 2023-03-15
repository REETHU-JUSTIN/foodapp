import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Hero from './Hero'
import Header from './Header';
import SpecialDishes from './SpecialDishes';
import FilteredDishes from './FilteredDishes';
import {AllMenus} from './AllMenuContext';
import Checkout from './Checkout';
import { AppProvider } from "../context/AppProvider";



function Menus() {
  return (
    <div>
<Router>
  <AppProvider>
<Header/>
<Hero />
<Switch>
  <Route exact path="/">
  <AllMenus>
       <SpecialDishes /> 
        <FilteredDishes /> 
   </AllMenus>
  </Route>
  <Route path="/checkout">
     <Checkout />
  </Route>
</Switch>
</AppProvider>
</Router>
</div>

    
  ); 
}

export default Menus;