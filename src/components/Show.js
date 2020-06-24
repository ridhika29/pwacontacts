import React from 'react';


class Show extends React.Component
{
	

back = (event) => {

	this.props.route === 'index' && this.props.isSignedIn === 'false'
	?
    this.props.onRouteChange('home')
	:
	this.props.onRouteChange('home1');
  }

render(){
	
		return (
   
 <div>
      <div className="hide table-responsive">
      <table  className="table table-sm table-striped" >
      <thead>
      <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Job</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {
          this.props.data.map(function(user){
            return <tr key={user.id}><td>{user.name}</td><td>{user.email}</td><td>{user.phone}</td><td>{user.job}</td></tr>;
          })
        }
        </tbody>
        </table>
      </div>
     <button className="btn btn-info"onClick={this.back}>Back</button>
    </div>
  )
}

	
}






export default Show;