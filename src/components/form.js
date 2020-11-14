import React from "react";
import "../css/form.css";
import fb,{storage} from "../config/firebase";
import {connect} from "react-redux";

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            parent : this.props.location.state.parentName,
            category : this.props.location.state.name,
            condition: "",
            type: "",
            title: "",
            description: "",
            price: "",
            state: "",
            file:[],
            filename:[],
            image : [],
            time:"",
            city:"",
            user : {
                name: "",
                photo: "",
                id : "",
                creation : "",
                no: "",
            },
           
           
           
            noErr : "",
            priceErr : "",
            condErr:"",
            descriptionErr:"",
            titleErr : "",
            fileErr:"",
            stateErr:"",
            titlecount:0, 
            descriptioncount:0,          
            errCD:"",
            errNC : "",
            errDC: "",
            errTC:"",
            errPC:"",
            errFL:"",
            errST:"",

           
           
    


        }

       
        
    }

    async change() {

            // storagRef.getDownloadURL().then((url)=> console.log(url)).catch((e)=> alert(e.code));

                if(this.state.city === "" && this.state.state === "" && this.state.condition === ""  && this.state.title === "" && this.state.description === ""  && this.state.user.no === "" && this.state.price === "" ){  
                    this.setState({
                        titleErr : "Title cannot be Empty",
                        errTC : "alert alert-danger",
                        descriptionErr : "Description cannot be Empty",
                        errDC : "alert alert-danger",
                        priceErr : "Price cannot be Empty",
                        errPC : "alert alert-danger",
                        noErr: "Invalid Number... Please Enter Your Number First",
                        errNC : "alert alert-danger",
                        stateErr : "State Cannot Be Empty",
                        errST: "alert alert-danger",
                        cityErr : "City Cannot Be Empty",
                        errCT: "alert alert-danger",
                      })
               
                }else if(this.state.user.no === ""){
                  this.setState({
                    noErr: "Invalid Number...Please Enter Your Number to Post",
                    errNC : "alert alert-danger",
                  })
                }else if(this.state.price === ""){
                   this.setState({
                     priceErr: "Please Enter Price it cant be Empty",
                     errPC : "alert alert-danger",
                   })
                 }else if(this.state.state === ""){
                    this.setState({
                        stateErr : "State Cannot Be Empty",
                        errST: "alert alert-danger",
                    })
                 }else if(this.state.city === ""){
                    this.setState({
                        cityErr : "City Cannot Be Empty",
                        errCT: "alert alert-danger",
                    })
                 }else if(this.state.description === ""){
                    this.setState({
                        descriptionErr : "Description Cannot Be Empty",
                        errDC: "alert alert-danger",
                    })
                 }else if(this.state.title === ""){
                    this.setState({
                        titleErr : "Title Cannot Be Empty",
                        errTC: "alert alert-danger",
                    })
                 }else{
                     
                    let ads = {
                        parent : this.props.location.state.parentName,
                        category : this.props.location.state.name,
                        condition: this.state.condition,
                        type: this.state.type,
                        title: this.state.title,
                        description: this.state.description,
                        price: this.state.price,
                        state: this.state.state,
                        file:this.state.file,
                        filename:this.state.filename,
                        image : this.state.image,
                        time: this.state.time,
                        city: this.state.city,
                        user : {
                            name: this.state.user.name,
                            photo: this.state.user.photo,
                            id : this.state.user.id,
                            creation : this.state.user.creation,
                            no: this.state.user.no,
                        },
                     }
                    await fb.database().ref().child("Ads/"+this.state.category).push(ads).then( (data)=>{

                        this.setState({
                            state : "",
                            noErr : "",
                            priceErr : "",
                            condErr:"",
                            descriptionErr:"",
                            titleErr : "",
                            fileErr:"",
                            stateErr:"",
                            cityErr: "",
                            titlecount:0, 
                            descriptioncount:0,          
                            errCD:"",
                            errNC : "",
                            errDC: "",
                            errTC:"",
                            errPC:"",
                            errFL:"",
                            errST:"",
                            errCT: "",
                        })
                   alert("Ad Posted");
                    }
                    ).catch((error)=>{ alert(error.message);
                        });    
                }
                
                
               
        }

// nogetter
    numgetter(e){
        if(e.target.value === ""){
            this.setState({
                noErr : "Phone No is Required",
                errNC : "alert alert-danger",
                user:{
                    me: this.props.state.current_user.name,
                    photo: this.props.state.current_user.photo,
                    id : this.props.state.current_user.id,
                    creation : this.props.state.current_user.creationDate,
                    no:"",
                }
            })
        }else{
            this.setState({
                user : {
                    name: this.props.state.current_user.name,
                    photo: this.props.state.current_user.photo,
                    id : this.props.state.current_user.id,
                    creation : this.props.state.current_user.creationDate,
                    no: e.target.value,
                },
                noErr : "",
                errNC: "",
            })
        }
    }

    getter(e) {
        e.target.parentNode.childNodes[2].click();

    }

    getter2(e) {
        e.target.parentNode.childNodes[4].click();

    }
// condition
    setCondition(e) {
        if(e.target.value === ""){
        this.setState({

            condErr : "Select Something from Above",
            errCD: "alert alert-danger",
        })
    }else{
            this.setState({
                condition: e.target.value,               
        })
    }
}

// type
    setType(e) {
        this.setState({
            type: e.target.value,
        })
    }
// title
    inputgetter(e) {
        let name = e.target.name;
            let val = e.target.value;
            let count = val.length;
        if(e.target.value.length > 0 && e.target.value.length < 5 ){
            this.setState({
                titlecount:count,
                titleErr:"Length of Char is less than 5",
                errTC : "alert alert-danger",
            })
        }else if(e.target.value === "" ){
        
            this.setState({
                titlecount:0,
                titleErr:"",
                errTC : "",
            })
        }else{
                this.setState({
                    [name]: val,
                    titleErr : "Perfect",
                    titlecount:count,
                    errTC : "alert alert-success",
                })
            }
      

    }
// price
    pricegetter(e){
        let name = e.target.name;
        let val = e.target.value;
        let count = val.length;
    if(e.target.value === "0" ){
        this.setState({
            titlecount:count,
            priceErr:"A Price can not be set to 0 Rs",
            errPC : "alert alert-danger",
        })
    }else if(e.target.value === "" ){
    
        this.setState({
            priceErr:"",
            errPC : "",
        })
    }else{
            this.setState({
                [name]: val,
                priceErr : "Perfect",
                errPC : "alert alert-success",
            })
        }  
    }

    // Description
    descgetter(e) {
            let name = e.target.name;
            let val = e.target.value;
            let count = val.length;
        if(e.target.value.length > 0 && e.target.value.length < 20 ){
            this.setState({
                descriptioncount:count,
               descriptionErr:"Length of Characters is less than 20",
                errDC : "alert alert-danger",
            })
        }else if(e.target.value === "" ){
        
            this.setState({
                descriptoncount:0,
                descriptionErr:"",
                errDC : "",
            })
        }else{
                this.setState({
                    [name]: val,
                    descriptionErr : "Perfect !!",
                   descriptioncount:count,
                    errDC : "alert alert-success",
                })
            }
      

    }
// city
    setselectcity(e) {
        if(e.target.options[e.target.selectedIndex].value === ""){
            this.setState({
               cityErr: "Please Select City from Above",
                errCT : "alert alert-danger",
            })
        }else{
        this.setState({
            city : e.target.options[e.target.selectedIndex].value,
            cityErr: "Perfect",
            errCT: "alert alert-success",
        })
    }
    }
    // state
    setselectopt(e) {
   if(e.target.options[e.target.selectedIndex].value === ""){
       this.setState({
           stateErr: "Please Select State from Above",
           errST : "alert alert-danger",
       })
   }else{
      this.getUrl();
        this.setState({
            state: e.target.options[e.target.selectedIndex].value,
            stateErr: "Perfect",
            errST: "alert alert-success",
        })
        
        if(e.target.options[e.target.selectedIndex].value === "Azad kashmir"){
            document.getElementById("bl").classList.add("d-none");
            document.getElementById("isl").classList.add("d-none");
            document.getElementById("kpk").classList.add("d-none");
            document.getElementById("na").classList.add("d-none");
            document.getElementById("pjb").classList.add("d-none");
            document.getElementById("sind").classList.add("d-none");
            document.getElementById("ak").classList.remove("d-none");

            
        }else if(e.target.options[e.target.selectedIndex].value === "Balochistan"){
            document.getElementById("ak").classList.add("d-none");
            document.getElementById("isl").classList.add("d-none");
            document.getElementById("kpk").classList.add("d-none");
            document.getElementById("na").classList.add("d-none");
            document.getElementById("pjb").classList.add("d-none");
            document.getElementById("sind").classList.add("d-none");
            document.getElementById("bl").classList.remove("d-none");


        }else if(e.target.options[e.target.selectedIndex].value === "Islamabad"){
            document.getElementById("ak").classList.add("d-none");
            document.getElementById("bl").classList.add("d-none");
            document.getElementById("kpk").classList.add("d-none");
            document.getElementById("na").classList.add("d-none");
            document.getElementById("pjb").classList.add("d-none");
            document.getElementById("sind").classList.add("d-none");
            document.getElementById("isl").classList.remove("d-none");
            

        }else if(e.target.options[e.target.selectedIndex].value === "KpK"){
            document.getElementById("ak").classList.add("d-none");
            document.getElementById("bl").classList.add("d-none");
            document.getElementById("isl").classList.add("d-none");
            document.getElementById("na").classList.add("d-none");
            document.getElementById("pjb").classList.add("d-none");
            document.getElementById("sind").classList.add("d-none");
            document.getElementById("kpk").classList.remove("d-none");

        }else if(e.target.options[e.target.selectedIndex].value === "Northern Areas"){
            document.getElementById("ak").classList.add("d-none");
            document.getElementById("bl").classList.add("d-none");
            document.getElementById("isl").classList.add("d-none");
            document.getElementById("kpk").classList.add("d-none");
            document.getElementById("pjb").classList.add("d-none");
            document.getElementById("sind").classList.add("d-none");
            document.getElementById("na").classList.remove("d-none");

        }else if(e.target.options[e.target.selectedIndex].value === "Punjab"){
            document.getElementById("ak").classList.add("d-none");
            document.getElementById("bl").classList.add("d-none");
            document.getElementById("isl").classList.add("d-none");
            document.getElementById("kpk").classList.add("d-none");
            document.getElementById("na").classList.add("d-none");
            document.getElementById("sind").classList.add("d-none");
            document.getElementById("pjb").classList.remove("d-none");

        }else if(e.target.options[e.target.selectedIndex].value === "Sindh"){
            document.getElementById("ak").classList.add("d-none");
            document.getElementById("bl").classList.add("d-none");
            document.getElementById("isl").classList.add("d-none");
            document.getElementById("kpk").classList.add("d-none");
            document.getElementById("na").classList.add("d-none");
            document.getElementById("pjb").classList.add("d-none");
            document.getElementById("sind").classList.remove("d-none");

        }else{
            document.getElementById("ak").classList.add("d-none");
            document.getElementById("bl").classList.add("d-none");
            document.getElementById("isl").classList.add("d-none");
            document.getElementById("kpk").classList.add("d-none");
            document.getElementById("na").classList.add("d-none");
            document.getElementById("pjb").classList.add("d-none");
            document.getElementById("sind").classList.add("d-none");
        }
    }
        
        
    }
// photo
    filegetter(e){
        let dat =  new Date();
        dat = dat.toLocaleString();
        if(e.target.files){
         let filearr = [];
         let filenamearr = [];
        let file = e.target.files;
        console.log("file===>",file);
        Object.values(file).map((val)=>{
     
            filearr.push(val);
            filenamearr.push(val.name);
           return this.setState({
                file: filearr,
                filename : filenamearr,  
                time: dat,
                fileErr : "Successfully Uploaded",
                errFL : "alert alert-success",
            })
        })
    }else{
        return this.setState({
            fileErr : "Image is Invalid",
            errFL : "alert alert-danger",
        })
    }
    }
// input handle from button
    handleClick(e){
        e.target.parentNode.childNodes[1].click();
    }

  getUrl = ()=>{
        let imagearr = [];
        this.state.file.map((v)=>{
           var storagRef = storage.ref(`${this.state.category} / ${v.name}`);
        return storagRef.put(v).then((snapshot)=> snapshot.ref.getDownloadURL().then((url)=>{
                  imagearr.push(url);
                  this.setState({
                
                   image:imagearr,
                   
    
                })
              }));
       
           })
    }

    render() {
        
        const data = {
            parentName: this.props.location.state.parentName,
            name: this.props.location.state.name,
            type: this.props.location.state.type,
        }
        return (

            <>
            {console.log("result==>",this.state)}
                <h4 style={{ textAlign: "center",fontSize:"24px",fontWeight:"700", }}>POST YOUR AD</h4>
                <div className="maindiv">
                    {/* categories */}
                    <div className="fheader p-3">
                        <h5 className="font-weight-bold">SELECTED CATEGORY</h5>
                        <span name="parent">{data.parentName}</span> / <span name="self">{data.name} </span> <span> <button className="btn-link bg-transparent border-0 ">Change</button></span>
                    </div>
                    {/* condition */}
                    <div className="fdetails p-3">
                        <h5 className="font-weight-bold">INCLUDE SOME DETAILS</h5>
                        <div className="new-used mb-4">
                            <label>Condition* <br/>
                                <input type="radio" name="condition" className="new pr-3 pl-3 pt-2 pb-2 mr-2 bg-transparent d-none" value="New" onClick={(e) => { this.setCondition(e) }} />
                                <button type="radio" className="new pr-3 pl-3 pt-2  mt-2 mr-2 pb-2 bg-transparent" onClick={(e) => this.getter(e)}>New</button>
                                <input type="radio" name="condition" className="used pr-3 pl-3 pt-2 pb-2 bg-transparent d-none" value="Used" onClick={(e) => { this.setCondition(e) }} />
                                <button type="radio" className="used pr-3 pl-3 pt-2 pb-2 bg-transparent" onClick={(e) => this.getter2(e)}>Used</button>
                            </label>
                            <p>{this.state.condErr}</p>
                        </div>
                        
                        {/* type */}
                        <div className="type mb-4">
                            <label>Type*</label><br/>
                            {data.type.map((v, i) => {
                                return <input type="radio" name={`type ${i}`} key={i} className="new pr-3 pl-3 mb-2 pt-2 pb-2 mr-2 bg-transparent d-none" value={v} onClick={(e) => { this.setType(e) }} />
                            })}
                            {data.type.map((v, i) => {
                                return <button value={v} name="type" key={i} className="new pr-3 pl-3 pt-2 mb-2 pb-2 mr-2 bg-transparent" onClick={(e) => { e.target.parentNode.childNodes[i + 2].click() }}>
                                    {v}
                                </button>
                            })

                        }
                        </div>
                        {/* ad-title */}
                        <div className="inputfield mb-4">
                           <div className="form-group ad-titlediv">
                           <span className="d-inline-block adinp-sub">A minimum length of 5 characters is required. Please edit the field.&nbsp;&nbsp;&nbsp;<span className="ad-inp">{this.state.titlecount}/70</span></span>
                            <span className={this.state.errTC}>{this.state.titleErr}</span> 
                            <input id="title" name="title" type="text" autoComplete="off" className="inp d-block ad-titleinp" maxLength="70" required onChange={(e) => { this.inputgetter(e) }} />
                            <label className="ad-titlelbl">Ad Title*</label>
                           </div>
                        </div>
                        {/* description */}
                        <div className="description">
                    <span className="d-inline-block txtinp-sub">A minimum length of 20 characters is required. Please edit the field.&nbsp; &nbsp;<span className="txt-inp">{this.state.descriptioncount}/4096</span></span>
                    <span className={this.state.errDC}>{this.state.descriptionErr}</span>
                            <textarea required autoComplete="off" id="description" className="descriptiontextarea  description d-block" maxLength="4096" name="description" placeholder="" onChange={(e) => { this.descgetter(e) }} style={{ height: "96px", width: "360px" }}></textarea>
                            <label className="descriptionlbl">Description*</label>
                            
                        </div>
                    </div>
                    {/* price */}
                    <div className="p-outer p-3">  
                    <div className="pinne price">                      
                    <p className={this.state.errPC}>{this.state.priceErr}</p>
                       <input id="price" required name="price" placeholder="1000" type="number" autoComplete="off" className="priceinp"  min="0" max="99999999999999999999999999" onChange={(e) => this.pricegetter(e)} pattern="(\d+[., \s]?\d?)*" />
                        <label className="pricelbl">Price*</label>
                        <h5 className="font-weight-bold">SET PRICE</h5>
                        </div>
                    </div>
                    {/* upload photos */}
                    <div className="upload p-3">
                        <h5 className="font-weight-bold pb-lg-2">UPLOAD UPTO 12 PHOTOS</h5>
                        <input required accept="image/png,image/jpeg" multiple autoComplete="off" type="file" name="image" className="d-none" onChange={(e) => this.filegetter(e)}/>
                            <button className="p-lg-4 m-auto border-gray bg-white ubtn" onClick={(e) => {this.handleClick(e)}}>
                            <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd"><path d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"></path></svg>
                            <br />
                            <span style={{ fontSize: "12px" }}>Add Photo</span>
                        </button>
                        <p className={this.state.errFL}>{this.state.fileErr}</p>
                    </div>
                    {/*  Location */}
                    <div className="location p-3">
                        <h5 className="font-weight-bold pb-lg-2">CONFIRM YOUR LOCATION</h5>
                        <ul className="locUl list-unstyled">
                            <li><button className="b1 bg-white">LIST</button></li>
                            <li className="x"><button className="b2 bg-white">CURRENT LOCATION</button></li>
                        </ul>
                        {/*State for Cities  */}
                        <div className="statediv d-flex flex-column-reverse">
                             <p className={this.state.errST}>{this.state.stateErr}</p>
                            <select className="state stateselect" size="0" required onChange={(e) => { this.setselectopt(e) }}>
                                <option selected value="">Select State</option>
                                <option value="Azad kashmir">Azad Kashmir</option>
                                <option value="Balochistan">Balochistan</option>
                                <option value="Islamabad">Islamabad Capital Territory</option>
                                <option value="KpK">Khyber Pakhtunkhwa</option>
                                <option value="Northern Areas">Northern Areas</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Sindh">Sindh</option>
                            </select>
                            <label className="statelbl">State*</label>
                        </div>
                        {/* Cities of State*/}
                        <div className="citydiv d-none mt-2" id="ak">
                        <p className={this.state.errCT}>{this.state.cityErr}</p>
                            <select className="city cityselect" size="0" required onChange={(e) => { this.setselectcity(e) }}>
                              <option selected value="">Select City</option>
                                <option value="Bhimber">Bhimber</option>
                                <option value="Hajira">Hajira</option>
                                <option value="Kotli">Kotli</option>
                                <option value="Mirpur">Mirpur</option>
                                <option value="Muzzaffarabad">Muzzaffarabad</option>
                                <option value="Pallandri">Pallandri</option>
                                <option value="Rawalkot">Rawalkot</option>
                            </select>
                            <label className="citylbl">City*</label>
                       </div>
                        <div className="citydiv mt-2 d-none" id="bl">
                        <p className={this.state.errCT}>{this.state.cityErr}</p>
                            <select className="city cityselect" size="0" required onChange={(e) => { this.setselectcity(e) }}>
                              <option selected value="">Select City</option>
                                <option value="Bella">Bella</option>
                                <option value="Jiwani">Jiwani</option>
                                <option value="Gawadar">Gawadar</option>
                                <option value="Kalat">Kalat</option>
                                <option value="Khuzdar">Muzzaffarabad</option>
                                <option value="Lasbella">Lasbella</option>
                                <option value="Loralai">Loralai</option>
                                <option value="Ormara">Ormara</option>
                                <option value="Pasni">Pasni</option>
                                <option value="Quetta">Quetta</option>
                                <option value="Zhob">Zhob</option>
                            </select>
                            <label className="citylbl">City*</label>
                       </div>
                        <div className="citydiv mt-2 d-none" id="isl">
                        <p className={this.state.errCT}>{this.state.cityErr}</p>
                            <select className="city cityselect" size="0" required onChange={(e) => { this.setselectcity(e) }}>
                              <option selected>Select City</option>
                                <option value="Islamabad">Islamabad</option>
                            </select>
                            <label className="citylbl">City*</label>
                       </div>
                        <div className="citydiv mt-2 d-none" id="kpk">
                        <p className={this.state.errCT}>{this.state.cityErr}</p>
                            <select className="city cityselect" size="0" required onChange={(e) => { this.setselectcity(e) }}>
                            <option selected value="">Select City</option>    
                            <option value="Abbottabad">Abbottabad</option>
                            <option value="Ali Masjid">Ali Masjid</option>
                            <option value="Bannu">Bannu</option>
                            <option value="Batagram">Batagram</option>
                            <option value="Buner">Buner</option>
                            <option value="Charsadda">Charsadda</option>
                            <option value="Chitral">Chitral</option>
                            <option value="Darra Adam Khel">Darra Adam Khel</option>
                            <option value="Dera Ismail Khan">Dera Ismail Khan</option>
                            <option value="Hangu">Hangu</option>
                            <option value="Haripur">Haripur</option>
                            <option value="Jamrud">Jamrud</option>
                            <option value="Jandola">Jandola</option>
                            <option value="Karak">Karak</option>
                            <option value="Kohat">Kohat</option>
                            <option value="Kohistan">Kohistan</option>
                            <option value="Lakki Marwat">Lakki Marwat</option>
                            <option value="Landi Kotal">Landi Kotal</option>
                            <option value="Lower Dir">Lower Dir</option>
                            <option value="Malakand">Malakand</option>
                            <option value="Mansehra">Mansehra</option>
                            <option value="Mardan">Mardan</option>
                            <option value="Mingora">Mingaora</option>
                            <option value="Miram Shah">Miram Shah</option>
                            <option value="Nowshera">Nowshera</option>
                            <option value="Parachinar">Parachinar</option>
                            <option value="Peshawar">Peshawar</option>
                            <option value="Shangla">Shangla</option>
                            <option value="Swabi">Swabi</option>
                            <option value="Swat">Swat</option>
                            <option value="Tank">Tank</option>
                            <option value="Torkham">Torkham</option>
                            <option value="Upper Dir">Upper Dir</option>
                            <option value="Wana">Wana</option>
                            </select>
                            <label className="citylbl">City*</label>
                        </div>
                        <div className="citydiv mt-2 d-none" id="na">
                        <p className={this.state.errCT}>{this.state.cityErr}</p>
                            <select className="cityselect" size="0" required onChange={(e) => { this.setselectcity(e) }}>
                              
                              <option selected value="">Select City</option>
                             <option value="Askoley">Askoley</option>
                             <option value="Chilas">Chilas</option>
                             <option value="Ghanche">Ghanche</option>
                             <option value="Ghizer">Ghizer</option>
                             <option value="Gilgit">Gilgit</option>
                             <option value="Khaplu">Khaplu</option>
                             <option value="Skardu">Skardu</option>
                            </select>
                            <label className="citylbl">City*</label>
                       </div>
                        <div className="citydiv mt-2 d-none" id="pjb">
                        <p className={this.state.errCT}>{this.state.cityErr}</p>
                            <select className="city cityselect" size="0" required onChange={(e) => { this.setselectcity(e) }}>
                            <option selected value="">Select City</option>
                            <option value="Ahmadpur East">Ahmadpur East</option>
                            <option value="Arifwala">Arifwala</option>
                            <option value="Attock">Attock</option>
                            <option value="Bhawalnagar">Bahawalnagar</option>
                            <option value="Bhawalpur">Bahawalpur</option>
                            <option value="Bhakkar">Bhakkar</option>
                            <option value="Burewala">Burewala</option>
                            <option value="Chakwal">Chakwal</option>
                            <option value="Chichawatni">Chichawatni</option>
                            <option value="Chiniot">Chiniot</option>
                            <option value="Chishtian Mandi">Chishtian Mandi</option>
                            <option value="Daska">Daska</option>
                            <option value="Depalpur">Depalpur</option>
                            <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
                            <option value="Faisalabad">Faisalabad</option>
                            <option value="Gojra">Gojra</option>
                            <option value="Gujar Khan">Gujar Khan</option>
                            <option value="Gujranwala">Gujranwala</option>
                            <option value="Gujrat">Gujrat</option>
                            <option value="Hafizabad">Hafizabad</option>
                            <option value="Haroonabad">Haroonabad</option>
                            <option value="Hasan Abdal">Hasan Abdal</option>
                            <option value="Hasilpur">Hasilpur</option>
                            <option value="Haveli lakha">Haveli lakha</option>
                            <option value="Hazro">Hazro</option>
                            <option value="Jaranwala">Jaranwala</option>
                            <option value="Jhang Sadar">Jhang Sadar</option>
                            <option value="Jhelum">Jhelum</option>
                            <option value="Kamoke">Kamoke</option>
                            <option value="Kasur">Kasur</option>
                            <option value="Khanewal">Khanewal</option>
                            <option value="Khanpur">Khanpur</option>
                            <option value="Khushab">Khushab</option>
                            <option value="Kot Addu">Kot Addu</option>
                            <option value="Kotli">Kotli</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Layyah">Layyah</option>
                            <option value="Lodhran">Lodhran</option>
                            <option value="Mailsi">Mailsi</option>
                            <option value="Mandi Bahauddin">Mandi Bahauddin</option>
                            <option value="Mian Chunnu">Mian Chunnu</option>
                            <option value="Mianwali">Mianwali</option>
                            <option value="Multan">Multan</option>
                            <option value="Muridike">Muridike</option>
                            <option value="Murree">Murree</option>
                            <option value="Muzaffargarh">Muzaffargarh</option>
                            <option value="Nankana Sahib">Nankana Sahib</option>
                            <option value="Naorwal">Narowal</option>
                            <option value="Okara">Okara</option>
                            <option value="Pakpattan">Pakpattan</option>
                            <option value="Pindi Bhattian">Pindi Bhattian</option>
                            <option value="Pirmahal">Pirmahal</option>
                            <option value="Rahimyar khan">Rahimyar Khan</option>
                            <option value="Raiwind">Raiwind</option>
                            <option value="Rajanpur">Rajanpur</option>
                            <option value="Rawalpindi">Rawalpindi</option>
                            <option value="Sadiqabad">Sadiqabad</option>
                            <option value="Safdar Abad">Safdar Abad</option>
                            <option value="Sahiwal">Sahiwal</option>
                            <option value="Samundri">Samundri</option>
                            <option value="Sargodha">Sargodha</option>
                            <option value="Shakargarh">Shakargarh</option>
                            <option value="Sheikhupura">Sheikhüpura</option>
                            <option value="Sialkot">Sialkot</option>
                            <option value="Sohawa">Sohawa</option>
                            <option value="Talagand">Talagang</option>
                            <option value="Taxila">Taxila</option>
                            <option value="Toba Tek Singh">Toba Tek singh</option>
                            <option value="Vehari">Vehari</option>
                            <option value="Wah">Wah</option>
                            <option value="Wazirabad">Wazirabad</option>
                            </select>
                            <label className="citylbl">City*</label>
                       </div>
                        <div className="citydiv mt-2 d-none" id="sind">
                        <p className={this.state.errCT}>{this.state.cityErr}</p>
                            <select className="city cityselect" size="0" required onChange={(e) => { this.setselectcity(e) }}>
                            <option selected value="">Select City</option>
                            <option value="Badin">Badin</option>
                            <option value="Dadu">Dadu</option>
                            <option value="Ghotki">Ghotki</option>
                            <option value="Hala">Hala</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Jacobabad">Jacobabad</option>
                            <option value="Jamshoro">Jamshoro</option>
                            <option value="Karachi">Karachi</option>
                            <option value="Khairpur">Khairpur</option>
                            <option value="Larkana">Larkana</option>
                            <option value="Mirpur Khas">Mirpur Khas</option>
                            <option value="Mithi">Mithi</option>
                            <option value="Nawabshah">Nawabshah</option>
                            <option value="Ratodero">Ratodero</option>
                            <option value="Sanghar">Sanghar</option>
                            <option value="Shikarpur">Shikarpur</option>
                            <option value="Sukkur">Sukkur</option>
                            <option value="Tando Adam">Tando Adam</option>
                            <option value="Thatta">Thatta</option>
                            <option value="Umerkot">Umerkot</option>
                            </select>
                            <label className="citylbl">City*</label>
                       </div>
                    </div>
                    {/* User */}
                    <div className="p-3 userdetails">
                        <h5 className="font-weight-bold">REVIEW YOUR DETAILS</h5>
                        <div className="d-inline-block">
                          
                        <figure className="d-inline-block float-left">
                            <img alt="userImage" src={this.props.state.current_user.photo} width="90px" height="90px" style={{borderRadius:"100%"}}/>
                        </figure>
                      
                      <div className="funamediv float-left ml-3 mt-1 form-group">
                        <input type="text" required className="funameinp" name="funame" value={this.props.state.current_user.name}/>
                        <label className="funamelbl">Name</label>
                        </div>
                        <div className="uphonediv float-left">
                        <label className="ml-3 uphonelbl">Your phone number</label>
                        <input type="tel" required className="uphoneinp ml-4 text-right" onChange={(e)=>{this.numgetter(e)}} name="uphone"/> 
                        <p className={this.state.errNC}>{this.state.noErr}</p>

                        </div>
                        </div>
                    </div>
                    
                    <div className="border border-gray text-center p-3">
                        <button type="submit" className="btn-sm btn-dark text-center" onClick={(e) => this.change()}>Post Now</button>
                    </div>
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
export default connect(matchStateToProp,null)(Form);