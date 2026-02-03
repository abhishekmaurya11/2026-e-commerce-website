
'use client'; // This directive is essential

import { useState, useEffect } from 'react';

// import  Header  from "next/headers";
import Header from "./header";
import Image from "next/image";
// import '@/app/ui/global.css';
import Products from "./products";
import SignUp from './SignUp';
import Login from './Login';


export default function Home() {
   useEffect(() => {
    // This code runs only in the browser
    // setWindowWidth(window.innerWidth);
    const signup_btn = document.querySelector('.signup-btn');
    const login_btn = document.querySelector('.login-btn');
    const  signupformclass = document.querySelector('.signupformclass');
    const  loginformclass = document.querySelector('.loginformclass');
    const  click_signup = document.querySelector('.click_signup');
    const  click_login = document.querySelector('.click_login');


signup_btn.addEventListener('click',function(){
signupformclass.style.display = 'block'
})

click_signup.addEventListener('click',function(){
  signupformclass.style.display = 'none';

})

login_btn.addEventListener('click',function(){
loginformclass.style.display = 'block'
})

 click_login.addEventListener('click',function(){
  loginformclass.style.display = 'none';

}) 



// login_btn.addEventListener('click',function(){
//   click_signup.style.display = 'hidden';
// // signupformclass.style.display = 'block'

// })
      



  }, []);

  return (

    <>
  <Header />
  <SignUp/>
  <Login  />
  <Products/>

  </>
  );
}
