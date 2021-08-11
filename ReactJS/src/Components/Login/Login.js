import React from 'react'
import LandingHeader from '../../Layouts/LandingHeader'
import Landing from '../LandingPage/Landing'
import history from '../../history'
import { Formik, Form } from 'formik';
import { TextField } from '../../TextField'
import * as Yup from 'yup';
import axios from 'axios';

export default function sign() {

    const validate = Yup.object({
        rEmail: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
      rpassword: Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
        rusername:Yup.string()
        .min(6, ' must be at least 6 charaters')
        .required('Username is required'),
    })
    return (
      <Formik
        initialValues={{
            rEmail: '',
            rpassword: '',
            repassword: '',
            rusername:'',

         
        }}
        validationSchema={validate}
        onSubmit={values => {
            // sessionStorage.setItem('sign',true)
                history.push('/');
                axios.post("http://localhost:8082/api/user",values).then(
                    (res) =>{
                        console.log(res);
                        
                    }
                ).catch((err)=>{console.log("err")})
          console.log(JSON.stringify(values))
  

        }
        }
      >
        {formik => (
            
              <div className="container mt-3">
                  <LandingHeader/>
                  <div className="row">
                      <div className="col-md-5 mt-5">
                          <h1 className="my-4 font-weight-bold .display-4">SignUp</h1>
                          <Form>
                          <TextField label="Username" name="rusername" type="text" />
                              <TextField label="Email" name="rEmail" type="email" />
                              <TextField label="password" name="rpassword" type="password" />
                              <TextField label=" Re-enter Password" name="repassword" type="password" />
                              <button className="btn btn-dark mt-3" type="submit">submit</button>
                          </Form>
                      </div>
                      <div className="col-md-7 my-auto">
                         
                      </div>
                  </div>
              </div>
        )}
      </Formik>
    )
 





 }















// import React, { useState } from 'react'
// import axios from 'axios';
// import LandingHeader from '../../Layouts/LandingHeader';
// export default function Login() {

//     const[signUP,setSignUP] =useState({
//         rUsername:'',
//         rPassword:'',
//         rEmail:''
//     })

//     const sOnchange= (e) =>{
//         setSignUP((prev)=>{
//             return {
//                 ...prev,
//                 [e.target.name]:e.target.value
//             }
//         })
//         console.log(signUP);
//     }

//     const onsubmit=()=>{
//         // sessionStorage.setItem('sign',true)
//         axios.post("http://localhost:8082/api/user",signUP).then(
//             (res) =>{
//                 console.log(res);
                
//             }
//         ).catch((err)=>{console.log("err")})
//     }


//     return (
//         <div >
//             <LandingHeader/>
//         <div className="login-wrap" style={{marginTop:'110px'}}>
//         <div className="login-html">
//             <input id="tab-1" type="radio" name="tab" className="sign-in" /><label for="tab-1" className="tab" ></label>
//             <input id="tab-2" type="radio" name="tab" className="sign-up" checked/><label for="tab-2" className="tab">SignUp</label>
//             <div className="login-form">
                
//                 <div className="sign-up-htm">
//                     <div className="group">
//                         <label for="user" className="label">Username</label>
//                         <input name="rUsername" type="text" className="input" onChange={sOnchange}/>
//                     </div>
//                     <div className="group">
//                         <label for="pass" className="label">Password</label>
//                         <input  name="rPassword" type="password" className="input" data-type="password" onChange={sOnchange}/>
//                     </div>
//                     <div className="group">
//                         <label for="pass" className="label">Repeat Password</label>
//                         <input  type="password" className="input" data-type="password"/>
//                     </div>
//                     <div className="group">
//                         <label for="pass" className="label">Email Address</label>
//                         <input  name="rEmail" type="text" className="input" onChange={sOnchange}/>
//                     </div>
//                     <div className="group">
//                         <input type="button" className="button" value="Sign Up" onClick={onsubmit}/>
//                     </div>
//                     <div className="hr"></div>
//                     <div className="foot-lnk">
//                         <label for="tab-1">Already Me</label>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//         </div> 
//     )
// }




