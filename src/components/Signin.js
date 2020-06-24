import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faEnvelope,faLock }  from '@fortawesome/free-solid-svg-icons';

class Signin extends React.Component
{
	constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }


    onSubmitSignIn = () => {
    fetch('https://secure-garden-90949.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
        	this.props.loadname(user);
          this.props.click();
          this.props.onRouteChange('home1');
        }
      })
  }

	 render() {
    return (
      <article className="card-body mx-auto">
	<h4 className="card-title mt-3 text-center">Sign In</h4>
	
	
	

	<div className="form-group input-group">
		 
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
    
     <button type="submit" onClick={this.onSubmitSignIn} className="btn btn-info btn-block">Sign In 
     </button>
</div>
</article>
    );
}


}

export default Signin;