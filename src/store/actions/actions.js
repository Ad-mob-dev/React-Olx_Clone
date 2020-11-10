import ActionTypes from '../constant/constant';
import fb, { auth } from '../../config/firebase';


// log!n
const LoginWithGoogle = () => {
    return (dispatch) => {
        fb.auth().signInWithPopup(auth).then(function (result) {
            let user = result.user;
             let userData = {
              id: user.uid,
              name: user.displayName,
              email: user.email,
              photo: user.photoURL,
              creationDate: user.metadata.creationTime,
            }
            alert(userData.name +" Successfully Logged In");
            fb.database().ref('users').child(userData.id).set(userData);
            dispatch({type:ActionTypes.LoginWithGoogle,payload:userData});
          }).catch(function (error) {
            var errorCode = error.code;
            alert(errorCode)
          });

    }
   
}

// logOut
const SignOut = () =>{
    return (dispatch) =>{
        
            fb.auth().signOut();
            alert("Signed Out");
            dispatch({type:ActionTypes.SignOut,payload:{id:null}});
            window.location.replace("/");


    }
}

const FetchPosts = () =>{
  return (dispatch) =>{
    fb.database().ref("Ads").on("value",(data)=>{
      dispatch({type:ActionTypes.FetchPosts,payload: data.val()})
  })

  }
}
export {LoginWithGoogle,SignOut,FetchPosts};