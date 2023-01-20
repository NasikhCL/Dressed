import React, { useEffect } from "react";
import { Children } from "react";
import { Await, Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";



const PrivateRoute = ({children}) => {
   console.log(children)

        const localUser = JSON.parse(sessionStorage.getItem("adminUser"));
        const auth =   getAuth();
        const user =  auth.currentUser; 
        console.log('local user', localUser)
        
        console.log('user', user)
        if (user && user.uid === localUser) {
    return children
    
  } else { 
    console.log('went wront', user);
    return <Navigate to={"/admin/login"} />;

  }


};

export default PrivateRoute;
