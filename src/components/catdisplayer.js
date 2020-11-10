import React from 'react';
import "../css/catdisp.css"


class CatDisplayer extends React.Component{
    render(){
        return(
            <>
            <div className="headerImgDiv mb-2">
            <img className="img-fluid headerImg" src={this.props.headerImg} alt="headerimg"/>
            </div>


            </>
        )
    }
}
export default CatDisplayer;