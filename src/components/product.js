import React from 'react';
import '../css/form.css';
import {Link} from 'react-router-dom';

class Product  extends React.Component{
  showInner=(e)=>{
    console.log(e.currentTarget.childNodes);
  
      }
    
render(){
  
return(
        <>
          {Object.keys(this.props.post).map((key)=>{
            return (
              <React.Fragment key={key}>
                 <Link  to={
                {
                    pathname:"/postdetails",
                    state: this.props.post[key],
                } 
            }>
                 <li key={key} className="d-inline-block p-3 bg-white card" onClick={(e)=>{this.showInner(e)}}> 
               <span className="d-flex justify-content-end mb-4"><button style={{position:"absolute",fontSize:"25px",background:"white",border:"0px"}}><i className="fa fa-heart-o fa-1x"></i></button></span>
              
                 <figure className="d-block text-center" >
                   <img src={this.props.post[key].image} style={{width:"180px",height:"180px",padding:"5px",marginTop:"20px"}} className="img-fluid img-responsive" alt="product"/> 
                   </figure>
             
                <div className="pricce" style={{width:"200px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                 <span className="font-weight-bolder" style={{fontSize:'20px'}}>Rs {this.props.post[key].price}</span>
                <br/>
            <span style={{fontSize:'15px',color:"gray",overflowY:"hidden",textOverflow:"ellipsis"}}>{this.props.post[key].title}</span>
                </div>
                <div className="loc d-flex justify-content-between mt-2" style={{fontSize:'13px',color:"gray"}}>
                     <span>{this.props.post[key].city}</span>
                    <span>{this.props.post[key].time}</span>
                </div>
                </li>
                </Link>
              </React.Fragment>
            )})}
        </>
    )
}


}

export default Product;

       // this.props.this.props.post.map((v,i)=>{

        //     return(
        //       <li key={i} className="d-inline-block p-3 m-2 bg-white card"> 
        //       <span className="d-flex justify-content-end mb-4"><button style={{position:"absolute",fontSize:"25px",background:"white",border:"0px"}}><i className="fa fa-heart-o fa-1x"></i></button></span>
              
        //         <figure className="d-block m-auto pt-4 pb-2 pl-4 pr-4" >
        //           <img src={v.image} style={{width:"180px",height:"144px"}} alt="product"/> 
        //           </figure>
             
        //        <div className="pricce" style={{width:"200px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
        //         <span className="font-weight-bolder" style={{fontSize:'20px'}}>{v.price}</span>
        //        <br/>
        //        <span style={{fontSize:'15px',color:"gray",overflowY:"hidden",textOverflow:"ellipsis"}}>{v.title}</span>
        //        </div>
        //        <div className="loc d-flex justify-content-between mt-2" style={{fontSize:'13px',color:"gray"}}>
        //             <span>{v.location}</span>
        //            <span>{v.time}</span>
        //        </div>


        //        </li>
       
        //         )



        // })

