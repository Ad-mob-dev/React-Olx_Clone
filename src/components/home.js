import React from 'react';
import CatDisplayer from "./catdisplayer"
import HomeProduct from "./hproducts";
import '../css/catdisp.css';
import {connect} from "react-redux";
import {FetchPosts} from '../store/actions/actions';




class Home extends React.Component{
constructor() {
    super()

    this.state = {
        name: "Home",
        headerImg: "https://statics.olx.com.pk/external/base/img/hero_bg_pk.jpg",
        data : {},
        limit: 4,
    }

}

componentDidMount(){
  return this.props.getPosts();
}


    render(){

    return(
       
        <>
        <CatDisplayer headerImg={this.state.headerImg}/>
        <span style={{fontSize:"24px",marginLeft:"55px"}} className="fresh font-weight-bold">FRESH RECOMENDATIONS</span>
        <div className="container-fluid mgrid">
        <ul className="list-unstyled ">
        <HomeProduct post={this.props.state.Posts} limit={this.state.limit}/>
        <button className="btn btn-outline-primary loadmore d-block m-auto" onClick={()=>{

        this.setState({
            limit: this.state.limit +2,
                })
        }} >Load More</button>
        </ul>
        </div>
        </>
       

    )
}
}
const matchStateToProp = (state) =>{
    return ({
        state,
    })
    }

const matchDispatchToProp = (dispatch) => {
  return ({
      getPosts: ()=>{dispatch(FetchPosts())}
  })  
}
export default connect(matchStateToProp,matchDispatchToProp)(Home);