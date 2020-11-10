import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
   current_user : {
       id:null,
   },
   introimg : [
    "https://statics.olx.com.pk/external/base/img/loginEntryPointPost.webp",
    "https://statics.olx.com.pk/external/base/img/loginEntryPointFavorite.webp",
    "https://statics.olx.com.pk/external/base/img/loginEntryPointChat.webp"],
  
    introtitle : [
        "Help Make OLX safer place to buy & Sell",
        "Contact and close deals faster",
        "Save all your favourite items in one Place",],

        Posts :[],

}

export default (Data=INITIAL_STATE,action)=>{

switch(action.type){
     case ActionTypes.LoginWithGoogle:
        return({
            ...Data,
            current_user: action.payload,
        })
    case ActionTypes.SignOut:
        return({
            ...Data,
            current_user: action.payload,

        })   
    case ActionTypes.FetchPosts:
        return({

            ...Data,
            Posts: action.payload
        })    
    default: 
        return Data;
}

}