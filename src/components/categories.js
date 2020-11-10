import React from 'react';
import CatDisplayer from './catdisplayer';
import Product from './product';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/cat.css';


const Catpost = (props) => {
    return <div className="row container-fluid">
        <div className="col-lg-3">
            <strong className="ml-3" style={{fontSize:"19px",fontFamily:"-moz-initial"}}>Filters</strong>
            <hr className="ml-3"/>
            <h6 className="ml-3">
            <strong style={{fontSize:"20px",fontFamily:"-moz-initial"}}>CATEGORIES</strong>
            </h6>
            { <Link className="ml-4" style={{fontSize:"13px",color:"rgba(0,47,52,.64)"}} to={props.Data.path.path1}>{props.Data.pathname.path1name}</Link> }
            <br />
            {<Link className="ml-4"  style={{fontSize:"13px",color:"rgba(0,47,52,.64)"}} to={props.Data.path.path2}>{props.Data.pathname.path2name} ({props.Data.cat1.length}) </Link>}
            <br />
            {<Link className="ml-4"  style={{fontSize:"13px",color:"rgba(0,47,52,.64)"}} to={props.Data.path.path3}>{props.Data.pathname.path3name} ({props.Data.cat2.length}) </Link>}
            <br />
            {<Link className="ml-4"  style={{fontSize:"13px",color:"rgba(0,47,52,.64)"}} to={props.Data.path.path4}>{props.Data.pathname.path4name} ({props.Data.cat3.length}) </Link>}
        </div>
        <div className="col-lg-9 grid">
            <ul className="list-unstyled d-grid" >
                <Product post={props.Data.post} />
            </ul>
        </div>

    </div>
}

// mobiles
class MobilePhones extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            name: "Mobile Phones",
            headerImg: "https://tpc.googlesyndication.com/simgad/710528743316220813",
            post: [],
            cat1: [],
            path: { path1: "/", path2: "/MobilePhones", path3: "/Tablets", path4: "/Accessories" },
            pathname: { path1name: "All Categories", path2name: "Mobile Phones", path3name: "Tablets", path4name: "Accessories" },
            cat2: [],
            cat3: [],
        })
    }

    componentDidMount() {
        let arrm = [];
        let arrt = [];
        let arra = [];
        Object.keys(this.props.state.Posts).map((key) => {
            return Object.values(this.props.state.Posts[key]).map((val) => {
                switch (val.category) {
                    case "Mobile Phones":
                        arrm.push(val);
                        this.setState({
                            cat1: arrm,
                            post: arrm,
                        })
                        break;
                    case "Tablets":
                        arrt.push(val);
                        this.setState({
                            cat2: arrt,

                        })
                        break;
                    case "Accessories":
                        arra.push(val);
                        this.setState({
                            cat3: arra,
                        })
                        break;
                     default:
                        break;
                }
                
            })
            
        })

    }


    render() {
        return (
            <>
                <CatDisplayer headerImg={this.state.headerImg} />
                <div className="breadcrumb bg-transparent"> <Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/">Home</Link>&nbsp;/&nbsp;<Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/Mobiles">Mobiles</Link>&nbsp;/&nbsp;<Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/MobilePhones">Mobile Phones</Link> </div>
                <Catpost Data={this.state} />
            </>

        )
    };
}

// accessories
class Accessories extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            name: "Accessories",
            headerImg: "https://tpc.googlesyndication.com/simgad/710528743316220813",
            post: [],
            cat1: [],
            path: { path1: "/", path2: "/Accessories", path3: "/MobilePhones", path4: "/Tablets" },
            pathname: { path1name: "All Categories", path2name: "Accessories", path3name: "Mobile Phones", path4name: "Tablets" },
             cat2: [],
            cat3: [],
        })
    }

 componentDidMount() {
        let arrm = [];
        let arrt = [];
        let arra = [];
        Object.keys(this.props.state.Posts).map((key) => {
            return Object.values(this.props.state.Posts[key]).map((val) => {
                switch (val.category) {
                    case "Accessories":
                         arra.push(val);
                        this.setState({
                            cat1: arra,
                            post: arra,
                        })
                        break;
                    case "Mobile Phones":
                        arrm.push(val);
                        this.setState({
                            cat2: arrm,
                        })
                    break;
                    case "Tablets":
                        arrt.push(val);
                        this.setState({
                        cat3: arrt,
    
                        })
                        break;
                    default:
                        break;
                }
            })

        })

    }


    render() {
        return (
            <>
                <CatDisplayer headerImg={this.state.headerImg} />
                <div className="breadcrumb bg-transparent"> <Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/">Home</Link>&nbsp;/&nbsp;<Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/Mobiles">Mobiles</Link>&nbsp;/&nbsp;<Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="Accessories">Accessories</Link> </div>
                <Catpost Data={this.state}/>
            </>

        )
    }
}

// tablets
class Tablets extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            name: "Tablets",
            headerImg: "https://tpc.googlesyndication.com/simgad/710528743316220813",
            post: [],
            cat1: [],
            path: { path1: "/", path2: "/Tablets", path3: "/MobilePhones", path4: "/Accessories" },
            pathname: { path1name: "All Categories", path2name: "Tablets", path3name: "Mobile Phones", path4name: "Accessories" },
            cat2: [],
            cat3: [],
        })
    }
    componentDidMount() {
        let arrm = [];
        let arrt = [];
        let arra = [];
        Object.keys(this.props.state.Posts).map((key) => {
            Object.values(this.props.state.Posts[key]).map((val) => {
                switch (val.category) {
                    case "Tablets":
                        arrt.push(val);
                        this.setState({
                            cat1: arrt,
                            post: arrt,
                        })
                        break;
                    case "Mobile Phones":
                        arrm.push(val);
                        this.setState({
                            cat2: arrm,

                        })
                        break;
                    case "Accessories":
                        arra.push(val);
                        this.setState({
                            cat3: arra,
                        });
                    default:
                        break;
                }
            })

        })

    }


    render() {

        return (
            <>
                <CatDisplayer headerImg={this.state.headerImg} />
                <div className="breadcrumb bg-transparent"> <Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/">Home</Link>&nbsp;/&nbsp;<Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/Mobiles">Mobiles</Link>&nbsp;/&nbsp;<Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/Tablets">Tablets</Link> </div>
                <Catpost Data={this.state} />
            </>
        )
    }
}

// cars
class Cars extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            name: "Cars",
            headerImg: "https://tpc.googlesyndication.com/simgad/13183149018415275016",
            post: [],
            cat1: [],
            path: { path1: "/", path2: "/Cars", path3: "/CarsOnInstallments", path4: "/CarAccessories" },
            pathname: { path1name: "All Categories", path2name: "Cars", path3name: "Cars on installments", path4name: "Car Accessories" },
            cat2: [],
            cat3: [],

        })
    }
    componentDidMount() {
        let Cars = [];
        let Coi = [];
        let Caa = [];
        Object.keys(this.props.state.Posts).map((key) => {
            Object.values(this.props.state.Posts[key]).map((val) => {
                switch (val.category) {
                    case "Cars":
                        Cars.push(val);
                        this.setState({
                            cat1: Cars,
                            post: Cars,
                        })
                        break;
                    case "Cars on installments":
                        Coi.push(val);
                        this.setState({
                            cat2: Coi,

                        })
                        break;
                    case "Car Accessories":
                        Caa.push(val);
                        this.setState({
                            cat3: Caa,
                        })
                    default:
                        break;
                }
            })

        })

    }
    render() {
        return (
            <>
                <CatDisplayer headerImg={this.state.headerImg} />
                <div className="breadcrumb bg-transparent"> <Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/">Home</Link>&nbsp;/&nbsp;<Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/Vehicles">Vehicles</Link>&nbsp;/&nbsp;<Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/Cars">Cars</Link> </div>
                <Catpost Data={this.state} />
            </>
        )
    }
}

// motorcycles
class Motorcycles extends React.Component {
    constructor() {
        super()
        this.state = ({
            name: "Motorcycles",
            headerImg: "https://www.nagshanti.com/copy//assets/images/passion.jpg",
            post: [],
            cat1: [],
            path: { path1: "/", path2: "/Motorcycles", path3: "/SpareParts", path4: "/Bicycles" },
            pathname: { path1name: "All Categories", path2name: "Motorcycles", path3name: "Spare Parts", path4name: "Bicycles" },
            cat2: [],
            cat3: [],
        })
    }

    componentDidMount() {
        let Motorcycles = [];
        let SpareParts = [];
        let Bicycles = [];
        Object.keys(this.props.state.Posts).map((key) => {
            Object.values(this.props.state.Posts[key]).map((val) => {
                switch (val.category) {
                    case "Motorcycles":
                        Motorcycles.push(val);
                        this.setState({
                            cat1: Motorcycles,
                            post: Motorcycles,
                        })
                        break;
                    case "Spare Parts":
                        SpareParts.push(val);
                        this.setState({
                            cat2: SpareParts,

                        })
                        break;
                    case "Bicycles":
                        Bicycles.push(val);
                        this.setState({
                            cat3: Bicycles,
                        })
                    default:
                        break;
                }
            })

        })

    }

    render() {
        return (
            <>
                <CatDisplayer headerImg={this.state.headerImg} />
                <div className="breadcrumb bg-transparent"> <Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/">Home</Link>&nbsp;/&nbsp;<Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/Bikes">Bikes</Link>&nbsp;/&nbsp;<Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/Motorcycles">Motorcycles</Link> </div>
                <Catpost Data={this.state} />
            </>
        )
    }
}

// houses
class Houses extends React.Component {
    constructor() {
        super()
        this.state = ({
            name: "Houses",
            headerImg: "https://tpc.googlesyndication.com/simgad/5795928505396801473",
            post: [],
            cat1: [],
            path: { path1: "/", path2: "/Houses", path3: "/Portions&Floors", path4: "/Appartments&Flats" },
            pathname: { path1name: "All Categories", path2name: "Houses", path3name: "Portions & Floors", path4name: "Appartments & Flats" },
            cat2: [],
            cat3: [],
        })
    }

    componentDidMount() {
        let Houses = [];
        let FloorsPortions = [];
        let ApartmentsFlats = [];
        Object.keys(this.props.state.Posts).map((key) => {
            Object.values(this.props.state.Posts[key]).map((val) => {
                switch (val.category) {
                    case "Houses":
                        Houses.push(val);
                        this.setState({
                            cat1: Houses,
                            post: Houses,
                        })
                        break;
                    case "Portions & Floors":
                        FloorsPortions.push(val);
                        this.setState({
                            cat2: FloorsPortions,

                        })
                        break;
                    case "Appartments & Flats":
                        ApartmentsFlats.push(val);
                        this.setState({
                            cat3: ApartmentsFlats,
                        })
                    default:
                        break;
                }
            })

        })

    }
    render() {
        return (
            <>
                <CatDisplayer headerImg={this.state.headerImg} />
                <div className="breadcrumb bg-transparent"> <Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/">Home</Link>&nbsp;/&nbsp;<Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/PropertyforSale">Property for Sale</Link>&nbsp;/&nbsp;<Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/Houses">Houses</Link> </div>
                <Catpost Data={this.state} />
            </>
        )
    }
}


class TvAudioVideo extends React.Component {
    constructor() {
        super()
        this.state = ({
            name: "Tv_Audio_video",
            headerImg: "https://tpc.googlesyndication.com/simgad/1463075302801836900?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qkMcg9BEgHi2ECW7EFw_rmMJ9nlyw",
            post: [],
            cat1: [],
            path: { path1: "/", path2: "/Tv-Audio-Video", path3: "/Computer&Accessories", path4: "/OtherHomeAppliances" },
            pathname: { path1name: "All Categories", path2name: "Tv-Audio-Video", path3name: "Computer & Accessories", path4name: "Other Home Appliances" },
            cat2: [],
            cat3: [],
        })
    }

    componentDidMount() {
        let TvAudioVideo = [];
        let ComputerAccessories = [];
        let OtherHomeAppliances = [];
        Object.keys(this.props.state.Posts).map((key) => {
            Object.values(this.props.state.Posts[key]).map((val) => {
                switch (val.category) {
                    case "Tv-Video-Audio":
                        TvAudioVideo.push(val);
                        this.setState({
                            cat1: TvAudioVideo,
                            post: TvAudioVideo,
                        })
                        break;
                    case "Computer & Accessories":
                        ComputerAccessories.push(val);
                        this.setState({
                            cat2: ComputerAccessories,

                        })
                        break;
                    case "Other Home Appliances":
                        OtherHomeAppliances.push(val);
                        this.setState({
                            cat3: OtherHomeAppliances,
                        })
                    default:
                        break;
                }
            })

        })

    }
    render() {
        return (
            <>
                <CatDisplayer headerImg={this.state.headerImg} />
                <div className="breadcrumb bg-transparent"> <Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/">Home</Link>&nbsp;/&nbsp;<Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/Electronics&HomeAppliances">Electronics & Home Appliances</Link>&nbsp;/&nbsp;<Link  style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/Tv-Audio-Video">Tv-Audio-Video</Link> </div>
                <Catpost Data={this.state} />
            </>
        )
    }
}

class Land_Plots extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Land & Plots",
            headerImg: "https://s3.envato.com/files/145683518/Preview/970x250%202.jpg",
            post: [],
            cat1: [],
            path: { path1: "/", path2: "/Land&Plots", path3: "/Shops-Offices-Commercial-Space ", path4: "/Agricultural&ResidentialLand" },
            pathname: { path1name: "All Categories", path2name: "Land & Plots", path3name: "Shops-Offices-Commercial Space ", path4name: "Agricultural & Residential Land" },
            cat2: [],
            cat3: [],
        }
    }

    componentDidMount() {
        let Land_Plots = [];
        let ShopsOfficesCommercial = [];
        let AgriculturalResidential = [];
        Object.keys(this.props.state.Posts).map((key) => {
            Object.values(this.props.state.Posts[key]).map((val) => {
                switch (val.category) {
                    case "Land & Plots":
                        Land_Plots.push(val);
                        this.setState({
                            cat1: Land_Plots,
                            post: Land_Plots,
                        })
                        break;
                    case "Shops-Offices-Commercial Space":
                       ShopsOfficesCommercial.push(val);
                        this.setState({
                            cat2: ShopsOfficesCommercial,

                        })
                        break;
                    case "Agricultural & Residential Land":
                        AgriculturalResidential.push(val);
                        this.setState({
                            cat3: AgriculturalResidential,
                        })
                    default:
                        break;
                }
            })

        })

    }
    render() {
        return (
            <>
                <CatDisplayer headerImg={this.state.headerImg} />
                <div className="breadcrumb bg-transparent"> <Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/">Home</Link>&nbsp;/&nbsp;<Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/PropertyforSale">Property for Sale</Link>&nbsp;/&nbsp;<Link style={{fontSize:"15px",color:"rgba(0,47,52,.64)"}} to="/Land&Plots">Land & Plots</Link> </div>
                <Catpost Data={this.state} />
            </>
        )
    }
}

const matchStateToProp = (state) => {
    return ({
        state,
    })
}

export default {
    Tablets: connect(matchStateToProp, null)(Tablets),
    MobilePhones: connect(matchStateToProp, null)(MobilePhones),
    Accessories: connect(matchStateToProp, null)(Accessories),
    Cars: connect(matchStateToProp, null)(Cars),
    Motorcycles: connect(matchStateToProp, null)(Motorcycles),
    Houses: connect(matchStateToProp, null)(Houses),
    TvAudioVideo: connect(matchStateToProp, null)(TvAudioVideo),
    Land_Plots: connect(matchStateToProp, null)(Land_Plots),
};
