import React from 'react'
import DashHeader from '../../Layouts/DashHeader';
import './Emi.css';
import gold from "F:/Auric Finance/auric/src/assets/img/gold.gif";
import { useState,useEffect } from 'react';
import axios from 'axios'
export default function Emi() {
    const [rates, setRates] = useState()
    useEffect(() => {
        axios.get("https://metals-api.com/api/latest?access_key=w5wrggy15vd7riswq790e1wwib9ydc819ibr44975t25uf86tw076e72xo00").then(res => res.data).then((data) => {
            // rate=data.rates.INR;
            
            // setRates(data.rates.XAG)
        })
    }, [])
    console.log(rates)
    var goldp = 1828 * 5 ;
    var rgold=goldp * 54;
    var silverp = 25.57 * 21.02;
    var platinump = 1055.880 * 2.412;
    console.log(goldp);
    console.log(rgold);
    // const weight=document.getElementById('netweight').value;
 
    const [weight,setWeight]=useState({
        netweight:0
    });
    const onChangData=(event)=>
    {
        const {name,value}=event.target;
        setWeight((prev)=>
        {
            return{
                ...prev,
                [name]:value
            }
         
        })
    }
    var total=0;
    const submit=()=>
    {
       
    }
    total=weight.netweight*rgold*0.60;
    console.log(total);
    return (
        <div>
            <DashHeader/>
            <div className="content">
                
                {<img src={gold} alt=" " /> }
            </div>
            <div className="cal">
                <div class="row">
                    <div class="col-md-12">
                      <section>
                            <h2> Eligibility Calculator </h2>
                            <br/>
                            <fieldset>
                                <label for="name">Ornaments</label>
                                <select id="job" name="user_job">
                                    <option value="Select Ornaments">Select Ornaments</option>
                                    <option value="Necklace">Necklace</option>
                                    <option value="Ring">Ring</option>
                                    <option value="Chain">Chain</option>
                                    <option value="Gold Coin">Gold Coin</option>
                                    <option value="Solid Bangles">Solid Bangles</option>
                                    <option value="Others">Others</option>
                                </select>
<br/>
                                <label for="email">Net Weight</label>
                                <input type="number" id="netweight" name="netweight" value={weight.netweight} onChange={onChangData}/>


                                <label for="email">Caratage</label>
                                <select id="job" name="user_job">
                                    
                                    <option value="Select Caratage">Select Caratage</option>
                                    <option value="22">22</option>
                                    <option value="24">24</option>
                                </select>
                            </fieldset>
                            <fieldset>                
                                <label>Total Value</label>
                                <input type="number" id="totalvalue" name="totalvalue"  value={total}/>
                                <label>Eligle Loan Amount</label>
                                <input type="number" id="Eligle" name="Eligle" value={rgold}/>                
                                    {/* <label>Gross Value</label>
                                    <input type="number" id="gross" name="gross" /> */}
                               <button className="btn btn-dark mt-3" type="submit">submit</button>   
                            </fieldset>
                            {/* <button type="submit">kishor</button> */}
                            </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
