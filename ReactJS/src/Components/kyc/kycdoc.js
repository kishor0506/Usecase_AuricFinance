import React from 'react'
import LandingHeader from '../../Layouts/LandingHeader'
import Landing from '../LandingPage/Landing'
import history from '../../history'
import { Formik, Form } from 'formik';
import { TextField } from '../../TextField'
import * as Yup from 'yup';
import axios from 'axios';

import DashHeader from '../../Layouts/DashHeader';
import './Kycdoc.css';
export default function sign() {

    const validate = Yup.object({
      aadharNo: Yup.string()
      .min(16, 'Password must be at least 16 charaters')
        .required('Aadhar is required'),
        panNumber: Yup.string()
        .min(10, 'Pancard must be at least 10 charaters')
        .required('Pancard is required'),
        voterId: Yup.string()
        .min(10, 'voter must be at least 10 charaters')
        .required('voter is required'),
    })
    return (
      <Formik
        initialValues={{
          aadharNo: '0',
          panNumber: '0',
          voterId:'0',
          file:''
         
        }}
        validationSchema={validate}
        onSubmit={values => {
            sessionStorage.setItem('sign',true)
                history.push('/');
                axios.post("http://localhost:8082/api/kyc",values).then(
                    (res) =>{
                        console.log(res);
                        
                    }
                ).catch((err)=>{console.log("err")})
          console.log(JSON.stringify(values))
          history.push('/');
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
                  <DashHeader/>
                  <div className="row">
                      <div className="col-md-5 mt-5">
                          <h1 className="my-4 font-weight-bold .display-4">Kyc</h1>
                          <Form>
                              <TextField label="Aadhar" name="aadharNo" type="number" />
                              <TextField label="pancard" name="panNumber" type="number" />
                              <TextField label="VoterId" name="voterId" type="number" />
                              <TextField label="Upload your Aadhar" name="file" type="file" />
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









