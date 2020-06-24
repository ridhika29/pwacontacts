import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faUser,faEnvelope,faLock,faBuilding,faPhone }  from '@fortawesome/free-solid-svg-icons';

class Register extends React.Component
{
	constructor(props){
		super(props);
		this.state = {
      email: '',
      password: '',
      name: '',
      job:'',
      phone:''
    }
	}

	onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onJobChange = (event) => {
    this.setState({job: event.target.value})
  }

  onPhoneChange = (event) => {
    this.setState({phone: event.target.value})
  }
  onSubmitSignIn = () => {
   fetch('https://secure-garden-90949.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        job: this.state.job,
        phone: this.state.phone
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
        	this.props.loadUser(user)
          this.props.onRouteChange('home1');
          //alert(user);
        }
      })
      
  }

  render() {
    return (
      <article className="card-body mx-auto">
	<h4 className="card-title mt-3 text-center">Create Account</h4>
	
	
	

	<div className="form-group input-group">
		<div className="input-group-prepend">
		    <span className="input-group-text"> <FontAwesomeIcon icon={faUser} /> </span>
		 </div>
        <input name="name" id="name" className="form-control" 
        onChange={this.onNameChange} placeholder="Full name" type="text">
    </input></div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <FontAwesomeIcon icon={faEnvelope} /> </span>
		 </div>
        <input name="email" id="email" 
        onChange={this.onEmailChange} className="form-control" placeholder="Email address" type="email">
   </input> </div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <FontAwesomeIcon icon={faLock} /></span>
		</div>
        <input className="form-control" 
        onChange={this.onPasswordChange} id="pass" placeholder="Create password" type="password">
   </input> </div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <FontAwesomeIcon icon={faPhone} /> </span>
		</div>
    	<input name="phone" id="phone" 
    	onChange={this.onPhoneChange} className="form-control" placeholder="Phone number" type="text">
    </input>
    </div>
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <FontAwesomeIcon icon={faBuilding} /></span>
		</div>
		<select className="form-control" id="job" name="job" onChange={this.onJobChange}>
			<option value="notSelected"> Select job type</option>
			<option value="Designer">Designer</option>
			<option value="Manager">Manager</option>
			<option value="Accounting">Accounting</option>
			<option value="Developer">Developer</option>
		</select>
	</div> 
   
     <button type="submit" onClick={this.onSubmitSignIn} className="btn btn-info btn-block">Create Account 
     </button>

</article>
    );
}


}

export default Register;