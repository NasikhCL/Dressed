import React from "react";
import { Children } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import AddUser from "./components/AddUser";


const PrivateRoute = ({ children }) => {

  const location = useLocation();  
  const localUser = JSON.parse(sessionStorage.getItem("user"));
  const auth = getAuth();
  const user = auth.currentUser;
  console.log("local user", localUser);
// console.log(children)
  console.log("user", user);

  if(children.type === AddUser){
    if(user && user.uid === localUser && user.uid === '2zBotXyOCzaNDBdg6W20zUFjGAi2'){
      return children
    }else{
       return <Navigate to={"/admin/login"} />
    }
  }else{
    if(user && user.uid === localUser){
      return children
    }else{
      return <Navigate to={"/user/login"} />
    }
  }


 


  // if (user && user.uid === localUser) {
  //   if(children.type === AddUser){
  //     if(user.uid === '2zBotXyOCzaNDBdg6W20zUFjGAi2')
  //     return children
  //   }else{ 
  //     return <Navigate to='/admin/login' />
  //   }
  //   return children;
  // } else {
  //   console.log("went wront", user);
   
  //   return <Navigate to={"/user/login"} />
  // }
};

export default PrivateRoute;
