import React, { useEffect } from 'react'
import { getAuth, EmailAuthProvider } from 'firebase/auth';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default function Auth(props) {
useEffect(()=>{
    const ui = firebaseui.auth.AuthUI.getInstance() ||
    new firebaseui.auth.AuthUI(props.auth) 
    ui.start(".firebaseui-auth-container", {
        signInOptions:[
            {
                provider: firebase.EmailAuthProvider.PROVIDER_ID,
                requireDisplayName: false
            }
        ],
        signInSuccessUrl: '/'
    });

},[props.auth])

  return (
    <div>
        <h1>auth</h1>
        <div className='firebaseui-auth-container'></div>

    </div>
  )
}
