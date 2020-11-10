import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../css/login.css";
import Post from './post'
import { connect } from 'react-redux';
import {LoginWithGoogle} from '../store/actions/actions';
import {Link} from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      show : true,
      i:0,
  
    }
  
  
  }
  
// image flipper on login popup
  xan = () => {
    if (this.state.i === 2) {
      return this.setState({
        i:0,
      })
    } else if (this.state.i < 2) {
      return this.setState({
        i: this.state.i + 1,
      })
    } else if (this.state.i > 2) {
      return this.setState({
        i: this.state.i - 1,
      })
    }


  }

// display popup
handleShow = ()=>{
  this.setState({
    show:true,
  })}
// hide popup
handleClose = ()=>{
  this.setState({
    show:false,
  })
}

render(){

  return (
        <>
      { this.props.state.current_user.id === null ? (<Modal show={this.state.show}  onHide={this.handleClose} animation={false}>
        <Modal.Header closeButton className="d-flex border w-100">
          <Modal.Title className="m-auto w-100 p-2">
            <div className="mldiv text-center">
              <i className="fa fa-chevron-left float-left mt-5" onClick={() => this.xan()}></i>
              <i className="fa fa-chevron-right float-right mt-5" onClick={() => this.xan()}></i>
              <div className="inner">
                <img src={this.props.state.introimg[this.state.i]} style={{ width: "100px", height: "100px" }} alt="loginImg" />
              </div>
              <p style={{ fontSize: "15px", fontWeight: "light" }}>{this.props.state.introtitle[this.state.i]}</p>

            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Button className="loginwithgoogle fa fa-google btn-outline-dark text-black-50" onClick={() => this.props.GoogleLogin()}>
            &nbsp;&nbsp;&nbsp;Login With Google
          </Button>
        </Modal.Body>
        <Modal.Footer>
        <Link to="/"><Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          </Link>
        </Modal.Footer>
      </Modal> ) : <Post/>
      }
    </>
  );
}
 
}

const matchStateToProp = (state) =>{
return ({state});
}

const matchDispatchToProp = (dispatch) =>{
  return ({
    GoogleLogin: () => { dispatch(LoginWithGoogle())} 

  });
  }

export default  connect(matchStateToProp,matchDispatchToProp)(Login);
