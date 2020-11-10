import React from 'react';
import { Route,Switch,  BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/home';
import Header from '../components/header';
import Footer from '../components/footer';
import Components from '../components/categories';
import Post from '../components/post';
import Form from '../components/form';
import Login from '../components/login';
import PostDetail from '../components/postdetail';



class AppRoutes extends React.Component{
render(){
    return(
      
        <Router>
            <Header/>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/MobilePhones' component={Components.MobilePhones} />
            <Route exact path='/Tablets' component={Components.Tablets} />
            <Route exact path='/Accessories' component={Components.Accessories} />
            <Route exact path='/Cars' component={Components.Cars} />
            <Route exact path='/Motorcycles' component={Components.Motorcycles} />
            <Route exact path='/Houses' component={Components.Houses} />
            <Route exact path='/Tv-Audio-Video' component={Components.TvAudioVideo} />
            <Route exact path='/Land&Plots' component={Components.Land_Plots} />
            <Route exact path='/post' component={Post} />
            <Route exact path='/form' component={Form} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/postdetails' component={PostDetail} />
            </Switch>
            <Footer/>
        </Router>
       
    )
    }
}
export default AppRoutes;