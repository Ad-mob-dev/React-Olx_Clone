import React from 'react';
import "../css/post.css";
import { grandData, categoryIcons, categoryTitles } from '../data/data';
import { Link } from 'react-router-dom';

class Postcat extends React.Component {


  dispSub = (e) => {

    e = e.currentTarget;
    var sub1 = document.getElementById("subcat0");
    var sub2 = document.getElementById("subcat1");
    var sub3 = document.getElementById("subcat2");
    var sub4 = document.getElementById("subcat3");
    var sub5 = document.getElementById("subcat4");
    var sub6 = document.getElementById("subcat5");
    var sub7 = document.getElementById("subcat6");
    var sub8 = document.getElementById("subcat7");
    var sub9 = document.getElementById("subcat8");
    var sub10 = document.getElementById("subcat9");
    var sub11 = document.getElementById("subcat10");
    var sub12 = document.getElementById("subcat11");
    var sub13 = document.getElementById("subcat12");
    var sub14 = document.getElementById("subcat13");

    if (e.childNodes[1].id === "0") {
      sub1.style.display = "block";
      sub2.style.display = "none";
      sub3.style.display = "none";
      sub4.style.display = "none";
      sub5.style.display = "none";
      sub6.style.display = "none";
      sub7.style.display = "none";
      sub8.style.display = "none";
      sub9.style.display = "none";
      sub10.style.display = "none";
      sub11.style.display = "none";
      sub12.style.display = "none";
      sub13.style.display = "none";
      sub14.style.display = "none";

    }
    else if (e.childNodes[1].id === "1") {
      sub1.style.display = "none";
      sub2.style.display = "block";
      sub3.style.display = "none";
      sub4.style.display = "none";
      sub5.style.display = "none";
      sub6.style.display = "none";
      sub7.style.display = "none";
      sub8.style.display = "none";
      sub9.style.display = "none";
      sub10.style.display = "none";
      sub11.style.display = "none";
      sub12.style.display = "none";
      sub13.style.display = "none";
      sub14.style.display = "none";

    } else if (e.childNodes[1].id === "2") {
      sub1.style.display = "none";
      sub2.style.display = "none";
      sub3.style.display = "block";
      sub4.style.display = "none";
      sub5.style.display = "none";
      sub6.style.display = "none";
      sub7.style.display = "none";
      sub8.style.display = "none";
      sub9.style.display = "none";
      sub10.style.display = "none";
      sub11.style.display = "none";
      sub12.style.display = "none";
      sub13.style.display = "none";
      sub14.style.display = "none";
    } else if (e.childNodes[1].id === "3") {
      sub1.style.display = "none";
      sub2.style.display = "none";
      sub3.style.display = "none";
      sub4.style.display = "block";
      sub5.style.display = "none";
      sub6.style.display = "none";
      sub7.style.display = "none";
      sub8.style.display = "none";
      sub9.style.display = "none";
      sub10.style.display = "none";
      sub11.style.display = "none";
      sub12.style.display = "none";
      sub13.style.display = "none";
      sub14.style.display = "none";
    } else if (e.childNodes[1].id === "4") {
      sub1.style.display = "none";
      sub2.style.display = "none";
      sub3.style.display = "none";
      sub4.style.display = "none";
      sub5.style.display = "block";
      sub6.style.display = "none";
      sub7.style.display = "none";
      sub8.style.display = "none";
      sub9.style.display = "none";
      sub10.style.display = "none";
      sub11.style.display = "none";
      sub12.style.display = "none";
      sub13.style.display = "none";
      sub14.style.display = "none";
    } else if (e.childNodes[1].id === "5") {
      sub1.style.display = "none";
      sub2.style.display = "none";
      sub3.style.display = "none";
      sub4.style.display = "none";
      sub5.style.display = "none";
      sub6.style.display = "block";
      sub7.style.display = "none";
      sub8.style.display = "none";
      sub9.style.display = "none";
      sub10.style.display = "none";
      sub11.style.display = "none";
      sub12.style.display = "none";
      sub13.style.display = "none";
      sub14.style.display = "none";
    } else if (e.childNodes[1].id === "6") {
      sub1.style.display = "none";
      sub2.style.display = "none";
      sub3.style.display = "none";
      sub4.style.display = "none";
      sub5.style.display = "none";
      sub6.style.display = "none";
      sub7.style.display = "block";
      sub8.style.display = "none";
      sub9.style.display = "none";
      sub10.style.display = "none";
      sub11.style.display = "none";
      sub12.style.display = "none";
      sub13.style.display = "none";
      sub14.style.display = "none";
    } else if (e.childNodes[1].id === "7") {
      sub1.style.display = "none";
      sub2.style.display = "none";
      sub3.style.display = "none";
      sub4.style.display = "none";
      sub5.style.display = "none";
      sub6.style.display = "none";
      sub7.style.display = "none";
      sub8.style.display = "block";
      sub9.style.display = "none";
      sub10.style.display = "none";
      sub11.style.display = "none";
      sub12.style.display = "none";
      sub13.style.display = "none";
      sub14.style.display = "none";
    } else if (e.childNodes[1].id === "8") {
      sub1.style.display = "none";
      sub2.style.display = "none";
      sub3.style.display = "none";
      sub4.style.display = "none";
      sub5.style.display = "none";
      sub6.style.display = "none";
      sub7.style.display = "none";
      sub8.style.display = "none";
      sub9.style.display = "block";
      sub10.style.display = "none";
      sub11.style.display = "none";
      sub12.style.display = "none";
      sub13.style.display = "none";
      sub14.style.display = "none";
    } else if (e.childNodes[1].id === "9") {
      sub1.style.display = "none";
      sub2.style.display = "none";
      sub3.style.display = "none";
      sub4.style.display = "none";
      sub5.style.display = "none";
      sub6.style.display = "none";
      sub7.style.display = "none";
      sub8.style.display = "none";
      sub9.style.display = "none";
      sub10.style.display = "block";
      sub11.style.display = "none";
      sub12.style.display = "none";
      sub13.style.display = "none";
      sub14.style.display = "none";
    } else if (e.childNodes[1].id === "10") {
      sub1.style.display = "none";
      sub2.style.display = "none";
      sub3.style.display = "none";
      sub4.style.display = "none";
      sub5.style.display = "none";
      sub6.style.display = "none";
      sub7.style.display = "none";
      sub8.style.display = "none";
      sub9.style.display = "none";
      sub10.style.display = "none";
      sub11.style.display = "block";
      sub12.style.display = "none";
      sub13.style.display = "none";
      sub14.style.display = "none";
    } else if (e.childNodes[1].id === "11") {
      sub1.style.display = "none";
      sub2.style.display = "none";
      sub3.style.display = "none";
      sub4.style.display = "none";
      sub5.style.display = "none";
      sub6.style.display = "none";
      sub7.style.display = "none";
      sub8.style.display = "none";
      sub9.style.display = "none";
      sub10.style.display = "none";
      sub11.style.display = "none";
      sub12.style.display = "block";
      sub13.style.display = "none";
      sub14.style.display = "none";
    } else if (e.childNodes[1].id === "12") {
      sub1.style.display = "none";
      sub2.style.display = "none";
      sub3.style.display = "none";
      sub4.style.display = "none";
      sub5.style.display = "none";
      sub6.style.display = "none";
      sub7.style.display = "none";
      sub8.style.display = "none";
      sub9.style.display = "none";
      sub10.style.display = "none";
      sub11.style.display = "none";
      sub12.style.display = "none";
      sub13.style.display = "block";
      sub14.style.display = "none";
    } else if (e.childNodes[1].id === "13") {
      sub1.style.display = "none";
      sub2.style.display = "none";
      sub3.style.display = "none";
      sub4.style.display = "none";
      sub5.style.display = "none";
      sub6.style.display = "none";
      sub7.style.display = "none";
      sub8.style.display = "none";
      sub9.style.display = "none";
      sub10.style.display = "none";
      sub11.style.display = "none";
      sub12.style.display = "none";
      sub13.style.display = "none";
      sub14.style.display = "block";
    }

  }



  render() {
    return (
      <>

        {
          <div className="outer border mb-2">
            <strong className="d-flex outerstrong">CHOOSE A CATEGORY</strong>
            <ul className="ul list-unstyled" id="ul">
              {categoryTitles.map((v, i) => (
                <li key={i} onClick={(e) => this.dispSub(e)} className={`cat${i} list-group-item-action w-50 border ml-2 p-3`}><i className={categoryIcons[i]}></i>{<span id={i}>{v}</span>}<i className="fa fa-angle-right float-right forwicon"></i></li>
              ))}
            </ul>

            {Object.keys(grandData.sub).map((key) => {
              return <>
                <ul key={key} id={"subcat" + key} className="float-left list-unstyled">
                  {Object.keys(grandData.sub[key]).map((catkey) => {
                    return <Link to={{
                      pathname: grandData.pathname,
                      state: {
                        name: grandData.sub[key][catkey],
                        parentName: grandData.parentName[key],
                        type: grandData.type[key],
                      }
                    }}>
                      <li key={catkey} className="subulli list-group-item-action w-100 ml-2 p-3 border"><span>
                        {grandData.sub[key][catkey]}
                      </span></li>
                    </Link>
                  })}


                </ul>
              </>
            })}

          </div>


        }
      </>
    )
  }
}



export default Postcat;