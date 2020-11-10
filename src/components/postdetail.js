import React from 'react';
import '../css/postdetail.css';



class PostDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state={
          no: "** *** ****",
          showno: "Show Number",
        }

    }
showno(){
    this.setState({
        no : this.props.location.state.user.no,
        showno: "Hide Number",
    })
}
hideno(){
    this.setState({
        no : "** *** ****",
        showno: "Show Number",
    })
}


componentDidMount(){
window.scrollTo(0,0)
}

    render() {
        return (
            <>

                <div className="container-fluid main">
                    <div className="leftdiv d-inline-block">
                        <div className="carousel" >
                            <div className="carousel-inner">
                                <a href={this.props.location.state.image}> <img src={this.props.location.state.image} alt="post" className="img-responsive img-fluid postdetailimg" /></a>
                                <span className="carousel-control-prev"><i className="carousel-control-prev-icon"></i></span>
                                <span className="carousel-control-next"><i className="carousel-control-next-icon"></i></span>
                            </div>
                        </div>
                        {/* details */}
                        <div className="card pdetails border p-3">
                            <strong className="mb-2">Details</strong>
                            <div className="row pdrow">
                                <div className="col-md-3 type">Type</div>
                                <div className="col-md-3 typed">{this.props.location.state.type}</div>
                                <div className="col-md-3 cond">Condition</div>
                                <div className="col-md-3 condd">{this.props.location.state.condition}</div>
                            </div>
                            <hr className="hr" />
                            <strong className="mb-2">Description</strong>
                            <div className="description">
                            <span>{this.props.location.state.description}</span>
                            </div>
                        </div>
                    </div>
                    <div className="rightdiv d-flex flex-column justify-content-start">
                        {/* 1 */}
                        <div className="inner w-100 border ml-2 mr-2 p-3 mb-1 d-flex flex-column">
                            <div className="">
                                <h3>RS {this.props.location.state.price}</h3>
                                <span>{this.props.location.state.title}</span>
                            </div>
                            <br />
                            <div className="d-flex justify-content-between pb-4">
                                <sub>{`${this.props.location.state.city}, ${this.props.location.state.state}`}</sub>
                                <sub>{this.props.location.state.time}</sub>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="inner w-100 border ml-2 mt-1 mr-2 p-0 d-flex flex-column">
                            <div className="p-3">
                                <span style={{fontSize:"20px",fontWeight:"bold"}}>Seller description</span>
                            <div className="w-100 p-3">
                            <img className="xxx float-left mr-2" src={this.props.location.state.user.photo} width="68px" height="68px" alt="uimage" style={{ borderRadius:"100px"}}/> 
                            <div className="pt-2 mt-1 ml-2">
                            <span className="float-right">  <i className="fa fa-chevron-right mt-2"/></span>
                            <strong className="">{this.props.location.state.user.name}</strong>
                            <p className="mt-0">Member Since { `${ new Date(this.props.location.state.user.creation).toLocaleString('default', { month: 'short' })} ${ new Date(this.props.location.state.user.creation).getUTCFullYear()}`}</p> 


                            </div>
                            <button className="btn w-100 cwseller">Chat with seller</button>
                            <div className="text-center numdiv">
                            <svg width="26px" height="26px" viewBox="0 0 1024 1024"  className="" fillRule="evenodd"><path d="M784.555 852.395c-331.435-14.635-598.315-281.515-612.949-612.949l149.973-59.989 91.691 183.424-70.997 35.499v26.453c0 141.653 115.243 256.896 256.896 256.896h26.453l11.861-23.637 23.68-47.36 183.381 91.733-59.989 149.931zM918.101 643.456l-256.939-128.469-57.472 19.2-30.037 60.032c-74.069-11.093-132.736-69.803-143.872-143.872l60.075-30.037 19.157-57.429-128.427-256.939-54.187-20.608-214.187 85.632-26.88 39.808c0 401.365 326.571 727.893 727.936 727.893l39.765-26.88 85.632-214.187-20.608-54.187z"></path></svg>
                           <span>{this.state.no}</span>
                           <span className="shownum" onClick={()=>this.showno()} onDoubleClick={()=>{this.hideno()}}>{this.state.showno}</span>
                            </div>
                            </div>
                            </div>
                        </div>
                        {/*3  */}

                        <div className="inner w-100 border w-1 ml-2 mt-2 mr-2 p-0 d-flex flex-column">
                            <div className="p-3">
                                <span  className="" style={{fontSize:"20px",fontWeight:"bold"}}>Posted in</span>
                            <div className="innerpostedin">
                            <p className="innerpostedinp mt-1">{`${this.props.location.state.city}, ${this.props.location.state.state}`}</p>
                           
                            <img alt="Map" src="https://maps.googleapis.com/maps/api/staticmap?center=33.49%2C73.115&amp;language=en&amp;size=640x256&amp;zoom=15&amp;scale=1&amp;channel=olx-latam-ar-web-dev&amp;key=AIzaSyAChxbDof4fywIkC6U-7MCgXBpUp4t2DiA&amp;signature=XQmH3-_Fu44yk5v0suNgSHZPgaI=" width="100%"/>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </div>



            </>

        )
    }
}

export default PostDetail;