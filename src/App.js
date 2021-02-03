
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./style/App.css"
import Nav from './components/nav'
import useGetWeather from './components/useGetWeather';
import Now from './components/pages/now';
import Hourly from './components/pages/hourly';
import Daily from './components/pages/daily';
import Alerts from './components/pages/alerts';
import { useSelector } from 'react-redux';
import Loading from './components/loading';


function App() {

    useGetWeather()
    
  const isPending = useSelector(state => state.isPending)

  return (
    <BrowserRouter>
    <div className="App">

    {isPending &&  <Loading />}

      <Nav />

       <Switch>
         <Route exact path = '/'>
           <Now />
         </Route>
         <Route path = '/hourly'>
           <Hourly />
         </Route>
         <Route  path = '/daily'>
           <Daily />
         </Route>
         <Route  path = '/alerts'>
           <Alerts/>
         </Route>

       </Switch>

      
  
    </div>
    </BrowserRouter>
    
  );
}

export default App;
