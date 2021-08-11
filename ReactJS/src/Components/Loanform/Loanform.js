import React from 'react'
import form from "F:/Auric Finance/auric/src/assets/img/form.gif";
// import './Loanform.css';
import DashHeader from '../../Layouts/DashHeader';
export default function Loanform() {
	return (
		<div className="card">
			<DashHeader />
			<div className="card-body">
				<div class="loanform">
					<div id="newUser" class="col-sm-6 col-sm-offset-3">

						<form name="newUser" class="register">
							<h1>Loan Form</h1>
							<br/>
							<fieldset class="row1">


								<div class="form-group">
									<label>First Name *</label>
									<input type="email" name="Firstname" class="form-control" />
									<label>Last Name *</label>
									<input type="email" name="lastname" class="form-control" />
								</div>


							</fieldset>

							<fieldset class="row2">
								<legend></legend>
							
								<div class="form-group">
									<label>Gender :
										<br />
										<input type="radio" name="userGender" value="male" /> Male
										<br />
										<input type="radio" name="userGender" value="female" /> Female
									</label>
								</div>


								<div class="form-group">
									<label>Birthdate :</label>
									<select name="date">
										<option value="1">01
										</option>
										<option value="2">02
										</option>
										<option value="3">03
										</option>
										<option value="4">04
										</option>
										<option value="5">05
										</option>
										<option value="6">06
										</option>
										<option value="7">07
										</option>
										<option value="8">08
										</option>
										<option value="9">09
										</option>
										<option value="10">10
										</option>
										<option value="11">11
										</option>
										<option value="12">12
										</option>
										<option value="13">13
										</option>
										<option value="14">14
										</option>
										<option value="15">15
										</option>
										<option value="16">16
										</option>
										<option value="17">17
										</option>
										<option value="18">18
										</option>
										<option value="19">19
										</option>
										<option value="20">20
										</option>
										<option value="21">21
										</option>
										<option value="22">22
										</option>
										<option value="23">23
										</option>
										<option value="24">24
										</option>
										<option value="25">25
										</option>
										<option value="26">26
										</option>
										<option value="27">27
										</option>
										<option value="28">28
										</option>
										<option value="29">29
										</option>
										<option value="30">30
										</option>
										<option value="31">31
										</option>
									</select>
									<br/>
									<select name="month">
										<option value="1">January
										</option>
										<option value="2">February
										</option>
										<option value="3">March
										</option>
										<option value="4">April
										</option>
										<option value="5">May
										</option>
										<option value="6">June
										</option>
										<option value="7">July
										</option>
										<option value="8">August
										</option>
										<option value="9">September
										</option>
										<option value="10">October
										</option>
										<option value="11">November
										</option>
										<option value="12">December
										</option>
									</select>
									<br/>
									<input name="year" type="text" size="4" maxlength="4" placeholder=" Year (1999)" />
								</div>


								<div class="form-group">
									<label>City *</label>
									<input type="text" name="City" class="form-control" />
									<label>State *</label>
									<input type="text" name="state" class="form-control" />
								</div>

								<div class="form-group">
									<label>ZipCode *</label>
									<input type="phone" name="zipcode" class="form-control" />
								</div>


								<div class="form-group">
									{/* <label>Address *</label>
							<input type="address" name="street" class="form-control"/> */}
									{/* <label>City *</label>
							<input type="city" name="city" class="form-control"/> */}
									<label>Country *</label>
									<br />
									<select name="country">
										<option>
										</option>
										<option value='United State'>United State</option>
										<option value='United State'>India</option>
										<option value='United State'>UK</option>
									</select>
								</div>
							</fieldset>

							<fieldset class="row3">
								<legend>Further Information</legend>



								<div class="form-group">
									<label>Branch *</label>
									<input type="text" name="branch" class="form-control" />

								</div>
								<div class="form-group">
									<label>Phone *</label>
									<input type="phone" name="Phone" class="form-control" />
								</div>	
								<div class="form-group">
								<label>LandLine *</label>
								<input type="phone" name="LandLine" class="form-control" />
							</div>


							<div class="form-group">
								<label>Religion *</label>
								<input type="Text" name="religion" class="form-control" />
							</div>			
								</fieldset>

						

							<div class="form-group">
								<label>Community *</label>
								<input type="phone" name="community" class="form-control" />
							</div>
							<div class="form-group">
								<label>Nationality *</label>
								<input type="phone" name="nationality" class="form-control" />
							</div>
							<div class="form-group">
								<label>Education *</label>
								<input type="phone" name="education" class="form-control" />
							</div>
							<div class="form-group">
								<label>Occupation *</label>
								<input type="phone" name="occupation" class="form-control" />
							</div>


							<div>
								<button type="button" id="registerButton">Register &raquo;</button>
							</div>
						</form>
						{/* <div className="imgbox">
                
                {<img src={form} alt=" " /> }
            </div> */}

						<div id="updatedProfile" class="col-sm-6 col-sm-offset-3">


						</div>
					</div>
				</div>



			</div>
		</div>

	)
}
