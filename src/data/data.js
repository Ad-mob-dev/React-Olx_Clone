const categoryTitles = [
    "Mobiles",
    "Vehicles",
    "Property for Sale",
    "Property for Rent",
    "Electronics & Home Appliances",
    "Bikes",
    "Business,Industrial & Agriculture",
    "Services",
    "Jobs",
    "Animals",
    "Furniture & Home Decor",
    "Fashion & Beauty",
    "Books,Sports & Hobbies",
    "Kids"
  ];
  const categoryIcons = [
    "fa fa-mobile mr-3 ml-2 caticons",
    "fa fa-cab mr-3 caticons",
    "fa fa-home mr-3 caticons",
    "fa fa-home mr-3 caticons",
    "fa fa-laptop mr-3 caticons",
    "fa fa-motorcycle mr-3 caticons",
    "fa fa-industry mr-3 caticons",
    "fa fa-cutlery mr-3 caticons",
    "fa fa-suitcase mr-3 caticons",
    "fa fa-paw mr-3 caticons",
    "fa fa-bed mr-3 caticons",
    "fa fa-female mr-3 caticons",
    "fa fa-book mr-3 caticons",
    "fa fa-user-secret mr-3 caticons"
  ];

const grandData = {
  pathname : "/form",
  parentName : ["Mobiles","Vehicles","Property for Sale","Property for Rent","Electronics","Bikes","Business,industrial & Agriculture","Services","Jobs","Animals","Furniture & Home Decor","Fashion & Beauty","Books,Sports & Hobbies","Kids"],
  sub : [
  {cat0:"Tablets", cat1:"Accessories",cat2:"Mobile Phones"}, 
  {cat0:"Cars",cat1:"Cars on Installments",cat2:"Car Accessories",cat3:"Spare Parts",cat4:"Buses,Vans & Trucks",cat5:"Rickshaw & Chingchi",cat6:"Other Vehicles",cat7:"Boats",cat8:"Tractor & Trailers"},
  {cat0:"Land & Plots",cat1:"Houses",cat2:"Appartments & Flats",cat3:"Shops-Offices-Commercial Space",cat4:"Portions & Floors"},
  {cat0:"Land & Plots",cat1:"Houses",cat2:"Appartments & Flats",cat3:"Shops-Offices-Commercial Space",cat4:"Portions & Floors", cat5:"Rooms"},
  {cat0:"Computer & Accessories",cat1:"Tv-Video-Audio",cat2:"Cameras & Accessories",cat3:"Games & Entertainment",cat4:"Other Home Appliances", cat5:"AC & Coolers"},
  {cat0:"Motorcycles",cat1:"Spare Parts",cat2:"Bicycles",cat3:"ATV & Quads",cat4:"Scooters",},
  {cat0:"Business for Sale",cat1:"Food & Restaurants" ,cat2:"Trade & Industrial",cat3:"Construction & Heavy Machinery",cat4:"Other Buisness & Industry", cat5:"Medical & Pharma"},
  {cat0:"Education & Classes",cat1:"Travel & Visa" ,cat2:"Car Rental",cat3:"Health & Beauty",cat4:"Home & Office Repair",cat5:"Catering & Restaurant",cat6:"Other Services"},
  {cat0:"Online",cat1:"Marketing/Advertising/PR" ,cat2:"Education",cat3:"IT & Networking",cat4:"Medical",cat5:"Domestic Staff",cat6:"Part-Time", cat7:"Other Jobs"},
  {cat0:"Fish & Aquarium",cat1:"Birds" ,cat2:"Hens & Aseel",cat3:"Cats",cat4:"Dogs",cat5:"Live Stock",cat6:"Other Animals"},
  {cat0:"Sofa & Chairs",cat1:"Beds & Wardrobes" ,cat2:"Home Decoration",cat3:"Table & Dinning",cat4:"Garden & Outdoors",cat5:"Office Furniture",cat6:"Other HouseHold items"},
  {cat0:"Accessories",cat1:"Clothes" ,cat2:"FootWear",cat3:"Jewellery",cat4:"Make Up  ",cat5:"Skin & Hair",cat6:"Watches",cat7:"Wedding",cat8:"Lawn & Pret",cat9:"Other Fashion"},
  {cat0:"Books & Magazines",cat1:"Musical Instruments",cat2:"Sports Equipment",cat3:"Gym & Fitness",cat4:"Other Hobbies",},
  {cat0:"Kids Furniture",cat1:"Toys",cat2:"Prams & Walkers",cat3:"Swings & Sliders",cat4:"Kids Bikes",cat5:"Kids Accessories",},
],
  type:[
  ["tablets","Mobile Phones","Other"],
  ["Sedan","Sports","Suv","Bus / Van","Trucks","Other Vehicle"],
  ["Agricultural Land","Residential Land","Industrial Land","Files","Other Land"],
  ["Agricultural Land","Residential Land","Industrial Land","Files","Other Land","Room","House","Office"],
  ["Computers","Laptops","Air Conditioner","Audio/Video","Cameras","Camera Accessories","Play Station","Xbox","Other Accessories"],
  ["Honda","Suzuki","Super Power","ATV & Quads","Heavy Bikes","Accessories","Other Bikes"],
  ["Cooking Equipments","Seeds,Cops,Pesticides & Fertilizers","Farm Machinery & Equipment","Ovens & Ranges","Freezers & Coolers","Electrical & Electronic Equipment","Industrial Equipment","Mechanical Equipment","Bulldozer","Crane","Other Equipment"],
  ["Computer Classes","tutoring","Language Classes","Computer Repairing","Home Appliances Repairing","Mobile Repairing","Catering","Cooked food","Other Services"],
  ["Cv's & Resumes","Job Offer","Contract","Full Time","Part Time","Temporary" ,"Hourly Sallary","Weekly Sallary","Monthly Sallary"],
  ["Buffalloes","Cows","Bulls","Goats","Sheep","Other Live Stock","Cats","Dogs","Other Accessories"],
  ["wooden Furniture","Iron Furniture"],
  ["Accessories for Men","Accessories for Women","Clothes for Men","clothes for Women","Footwear for Men","Footwear for Women","Watches for Men","Watches for Women","Other Men Accessories","Other Women Accessories"],
  ["Education & Trainning","Literature & Fiction","Professional Books","Other"],
  ["Kids Shoes","Kids Clothes","Kids Bag","Kids Accessories","Kids Bicycle","Toys","Other Kids Accessories"],
],
}
 
 

  
 
export {categoryIcons,categoryTitles,grandData};