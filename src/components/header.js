import React from "react";
import logo from '../logo.png';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { connect } from 'react-redux';
import { SignOut } from "../store/actions/actions";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const path = {
  c0: '/',
  c0title: "Home",
  c1: '/MobilePhones',
  c1title: "Mobile Phones",
  c2: '/Cars',
  c2title: "Cars",
  c3: '/Motorcycles',
  c3title: "Motorcycles",
  c4: '/Houses',
  c4title: "Houses",
  c5: '/Tv-Audio-Video',
  c5title: "Tv-Audio-Video",
  c6: '/Tablets',
  c6title: "Tablets",
  c7: '/Land&Plots',
  c7title: "Lands & Plots",


};


class Header extends React.Component {

render() {
  return(
    <>
<Navbar bg="light" expand="lg" className="mobnav" style={{display:"none"}}>
  <Navbar.Brand ><Link to="/"><img className="logo" src={logo} alt="header" /></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  {/* collapsable nav mobile */}
  <Navbar.Collapse id="basic-navbar-nav">
    {/* inner nav */}
  {this.props.state.current_user.id !== null ? 
  <Nav className="mr-auto">
           <Dropdown.Item>
         
            <img className="xxx mt-1 float-left" src={this.props.state.current_user.photo} width="56px" height="56px" alt="uimage" style={{ borderRadius:"100px"}}/>
            
           <span>
            
             <div className="float-left ml-2 mb-2">
             <span>Hello,</span>
             <br/>
             <strong>{this.props.state.current_user.name}</strong>
             <br/>
             <span style={{textDecoration:"underline",fontSize:"13px"}}>View and edit your profile</span>
             </div>

           </span>

             </Dropdown.Item>
            {/* group1 */}
          <Dropdown.Item className="bg-transparent border">
          <Dropdown.Item>MyAds</Dropdown.Item>
           <Dropdown.Item>Buy Business Packages</Dropdown.Item>
           <Dropdown.Item>Bought Packages &amp; Billing</Dropdown.Item>
          </Dropdown.Item>
            {/* group2 */}
           <Dropdown.Item className="bg-transparent border">
             <Dropdown.Item>Help</Dropdown.Item>
             <Dropdown.Item>Settings</Dropdown.Item>
          </Dropdown.Item>
         {/* log out */}
         <Dropdown.Item className="border"><Dropdown.Item onClick={()=>this.props.SignOut()}>LogOut</Dropdown.Item></Dropdown.Item>
        
    
    </Nav>: 
    <Nav className="mr-auto">
    <Dropdown.Item>
  
     <img className="xxx mt-3 mb-3 float-left" src="https://statics.olx.com.pk/external/base/img/avatar_empty_state.png" width="60px" height="60px" alt="uimage" style={{ borderRadius:"100px"}}/>
     

     
      <div className="float-left ml-2 mb-2">
        <br/> 
      <strong>Enter to your account</strong>
      <br/>
      <Link to="/login">
      <span style={{textDecoration:"underline",fontSize:"13px"}}>Log in to your account </span>

      </Link>
      </div>

      </Dropdown.Item>


   <Dropdown.Item>Start Selling</Dropdown.Item>
    <Dropdown.Item>My Ads</Dropdown.Item>
      <Dropdown.Item>Chat</Dropdown.Item>
      <Dropdown.Item>Help</Dropdown.Item>
  <Link to="/login"> <button className="btn btn-outline-primary w-100">Login</button> </Link>



</Nav>
    
    }
  </Navbar.Collapse>
  <Link to='/login' className="_21nYN ml-0 d-inline-block">
      <svg width="104px" height="48px" viewBox="0 0 1603 768" className="_3V9PS"> 
      <g>
        <path className="_2bClX _12yOz" d="M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058s164.337-367.058 367.058-367.058z"></path>
        <path className="_2bClX _YBz-" d="M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-0.016-0.014c-69.113-54.119-108.754-131.557-108.754-212.474 0-41.070 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845-24.842 47.745-37.441 98.726-37.441 151.499 0 104.027 50.962 203.61 139.799 273.175h0.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783h-299.698z"></path>
        <path className="_2bClX _3uYj7" d="M1318.522 38.596v0c-45.72-14.369-93.752-21.658-142.762-21.658h-748.511c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829v0c44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.010-97.197-67.703-154.957-85.852z"></path>
        <path className="_2bClX BfroU" d="M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88 0 25.235-3.772 50.26-11.214 74.363-38.348 124.311-168.398 211.129-316.262 211.129h-448.812l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498 9.572-31.009 14.423-63.162 14.423-95.559 0-98.044-43.805-190.216-123.317-259.551z"></path>
        </g>
      </svg>
        
        <div className="DrSmZ">
        <i className="fa fa-plus EgzsJ"></i>
        <span>Sell</span>
        </div>
      </Link>
</Navbar>




  <div className="container-fluid sticky-top desktopnav">

  <div className="row bg-light mainrow">
    <div className="col-md-1 d-flex justify-content-lg-end align-content-lg-center">
   <Link to="/"><img className="logo" src={logo} alt="header" /></Link>
    </div>
    <div className="col-md-8 d-flex">
      <div className="hsearch">
        <button className="btnsearch bg-white border-0"> <i className="fa fa-search"></i></button>
        <input placeholder="Search city, area or location" title="Sorry Search is currently in UnderConstruction" type="text" className="border-0 hinp form-control-lg" />
        <button className="btndown bg-white border-0"> <i className="fa fa-chevron-down"></i></button>
      </div>
      <div className="csearch">
        <input placeholder="Find Cars,Mobile Phones and more" title="Sorry Search is currently in UnderConstruction" type="text" className="border-0 w-100 cinp form-control-lg" />
        <button className="btnsearch bg-white border-0 p-2"> <i className="fa fa-search"></i></button>
      </div>
    </div>
    <div className="col-md-3 d-flex justify-content-center align-items-center">
    { 
      // disp link if uid === null 
       this.props.state.current_user.id === null ? ( <Link className="mr-2" to={{
          pathname: "/login",
          state :{
            show : true,
        
          }
        }}>Login</Link> ): 
        <div className="d-inline-block mr-2"> 
        <div className="chatdiv d-inline-block mr-2" style={{borderRadius:"100px"}}>
        <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="chat" fillRule="evenodd">
          <path d="M469.333 171.119c-164.693 0-298.667 134.684-298.667 300.25v359.529l108.907-54.753 19.093-4.525h256c164.693 0 298.667-134.684 298.667-300.25s-133.973-300.25-298.667-300.25h-85.333zM147.093 938.667l-61.76-38.368v-428.929c0-212.856 172.267-386.036 384-386.036h85.333c211.733 0 384 173.18 384 386.036s-172.267 386.036-384 386.036h-245.931l-161.643 81.261z"></path>
          </svg>
        </div>
        <div className="notidiv d-inline-block" style={{borderRadius:"100px"}}>
          <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="noti" fillRule="evenodd">
            <path d="M730.855 763.955h-435.559c-0.833-87.945-2.676-279.627-2.676-289.496 0-119.351 98.911-216.463 220.498-216.463s220.455 97.112 220.455 216.463c0 10-1.843 201.594-2.72 289.496v0zM819.282 748.603c0.92-93.341 2.062-266.38 2.062-274.144 0-141.589-98.692-260.545-231.64-294.319 2.192-7.237 3.684-14.782 3.684-22.765 0-44.345-35.969-80.27-80.27-80.27-44.345 0-80.27 35.923-80.27 80.27 0 7.983 1.491 15.483 3.684 22.765-132.948 33.731-231.64 152.687-231.64 294.319 0 7.721 1.14 182.339 2.019 276.030l-90.27 36.581 0.92 64.609h316.032c3.729 40.881 37.679 73.031 79.523 73.031s75.794-32.151 79.523-73.031h312.962l1.754-64.523-88.078-38.556z"></path>
          </svg>
         </div> 
         <div className="imgdiv d-inline-block" style={{borderRadius:"100px"}}>
          <Dropdown className="dropdown">
          <Dropdown.Toggle>
          <img className="mr-1 xxx" src={this.props.state.current_user.photo} width="35px" alt="uimage" style={{ borderRadius:"100px"}}/> 
          <svg className="adown" width="20px" height="20px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd">
            <path d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path>
          </svg>
          </Dropdown.Toggle>
          <Dropdown.Menu className="menu">
          <Dropdown.Item>
            <div className="float-left">
            <img className="xxx mt-1" src={this.props.state.current_user.photo} width="56px" height="56px" alt="uimage" style={{ borderRadius:"100px"}}/>
            </div>
          <span>
            
            <div className="float-left ml-2 mb-2">
            <span>Hello,</span>
            <br/>
            <strong>{this.props.state.current_user.name}</strong>
            <br/>
            <span style={{textDecoration:"underline",fontSize:"13px"}}>View and edit your profile</span>
            </div>

          </span>

           </Dropdown.Item>
           {/* group1 */}
         <Dropdown.Item className="bg-transparent border">
         <Dropdown.Item>MyAds</Dropdown.Item>
          <Dropdown.Item>Buy Business Packages</Dropdown.Item>
          <Dropdown.Item>Bought Packages &amp; Billing</Dropdown.Item>
         </Dropdown.Item>
           {/* group2 */}
          <Dropdown.Item className="bg-transparent border">
            <Dropdown.Item>Help</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
         </Dropdown.Item>
        {/* log out */}
        <Dropdown.Item className="border"><Dropdown.Item onClick={()=>this.SignOut()}>LogOut</Dropdown.Item></Dropdown.Item>
          
          </Dropdown.Menu>
          </Dropdown>
        </div>
        </div>           
    } 
      <Link to='/login' className="_21nYN ml-0 d-inline-block">
      <svg width="104px" height="48px" viewBox="0 0 1603 768" className="_3V9PS"> 
      <g>
        <path className="_2bClX _12yOz" d="M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058s164.337-367.058 367.058-367.058z"></path>
        <path className="_2bClX _YBz-" d="M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-0.016-0.014c-69.113-54.119-108.754-131.557-108.754-212.474 0-41.070 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845-24.842 47.745-37.441 98.726-37.441 151.499 0 104.027 50.962 203.61 139.799 273.175h0.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783h-299.698z"></path>
        <path className="_2bClX _3uYj7" d="M1318.522 38.596v0c-45.72-14.369-93.752-21.658-142.762-21.658h-748.511c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829v0c44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.010-97.197-67.703-154.957-85.852z"></path>
        <path className="_2bClX BfroU" d="M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88 0 25.235-3.772 50.26-11.214 74.363-38.348 124.311-168.398 211.129-316.262 211.129h-448.812l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498 9.572-31.009 14.423-63.162 14.423-95.559 0-98.044-43.805-190.216-123.317-259.551z"></path>
        </g>
      </svg>
        
        <div className="DrSmZ">
        <i className="fa fa-plus EgzsJ"></i>
        <span>Sell</span>
        </div>
      </Link>
    </div>
  </div>

  {/*nav categories  */}
  <div className="categories bg-white container-fluid">
   <nav className="navbar-expand-lg navbar-collapse navbar-nav">
      ALL CATEGORIES<i className="fa fa-chevron-down ml-1"></i>
      <ul className="list-unstyled d-inline-flex nav">
        <li><Link className="link" to={path.c1}>{path.c1title}</Link></li>
        <li><Link className="link" to={path.c2}>{path.c2title}</Link></li>
        <li><Link className="link" to={path.c3}>{path.c3title}</Link></li>
        <li><Link className="link" to={path.c4}>{path.c4title}</Link></li>
        <li><Link className="link" to={path.c5}>{path.c5title}</Link></li>
        <li><Link className="link" to={path.c6}>{path.c6title}</Link></li>
        <li><Link className="link" to={path.c7}>{path.c7title}</Link></li>
         </ul>
   </nav>

  </div>


</div>

  </>
)

}

}
const matchStateToProp = (state) => {
  return ({ state })
}
const matchDispatchToProp = (dispatch) => {
  return ({
    SignOut: () => { dispatch(SignOut()) }
  })
}
export default connect(matchStateToProp, matchDispatchToProp)(Header);
export { path };