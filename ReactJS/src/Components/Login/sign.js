import React from 'react'
import LandingHeader from '../../Layouts/LandingHeader'
import Landing from '../LandingPage/Landing'
import history from '../../history'
import { Formik, Form } from 'formik';
import { TextField } from '../../TextField'
import * as Yup from 'yup';

export default function sign() {

    const validate = Yup.object({
      email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
    })
    return (
      <Formik
        initialValues={{
          email: '',
          password: '',
         
        }}
        validationSchema={validate}
        onSubmit={values => {
            sessionStorage.setItem('sign',true)
                history.push('/');
            //     // axios.post("http://localhost:8082/api/user",signUP).then(
            //     //     (res) =>{
            //     //         console.log(res);
                        
            //     //     }
            //     // ).catch((err)=>{console.log("err")})
        //   console.log(JSON.stringify(values))
        //   sessionStorage.setItem('login',true)
        // //   axios.post(`${ApiUrl}Student`,values).then((res)=>{
        // //     Swal.fire('Good JOb',"","success")
        // //     
        // //   }).catch((err)=>Swal.fire(err,"","error")
        // history.push('/ViewStudent')

        }
        }
      >
        {formik => (
            
              <div className="container mt-3">
                  <LandingHeader/>
                  <div className="row">
                      <div className="col-md-5 mt-5">
                          <h1 className="my-4 font-weight-bold .display-4">Login</h1>
                          <Form>
                              <TextField label="Email" name="email" type="email" />
                              <TextField label="password" name="password" type="password" />
                              <button className="btn btn-dark mt-3" type="submit">Login</button>
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
