import React from 'react';
const subcategories = [
  
    { id:0 , subcat:[ "Tablets","Accessories","Mobile Phones"]},
    {id:1, subcat:[  "Cars","Cars on Installments","Car Accessories","Spare Parts","Buses,Vans & Trucks","Rickshaw & Chingchi","Other Vehicles","Boats","Tractor & Trailers"]},
    {id:2, subcat:[ "Land & Plots","Houses","Appartments & Flats","Shops-Offices-Commercial Space","Portion & Floors",]},
    {id:3, subcat:[  "Rooms","Roommates & Paying Guests","Vacations Rental - Guest Houses",]},
    {id:4, subcat:[ "Computer & Accessories","TV-Video-Audio","Cameras & Accessories","Games & Entertainment","Other Home Appliances","Generators, UPS & Power Solutions","Kitchen Appliances","AC & Coolers","Fridges & Freezers","Washing Machines & Dryers"]},

];

class Subcat extends  React.Component{
    constructor(props) {
        super(props)
      
    }

    
    
 
    render() {
        return (
          <div>
              {
                 console.log(subcategories.filter(cat => cat.id === subcategories[0].id))
              }
              <p>welcome to right</p>
          </div>
         
        );
    }
    
}
export default Subcat;