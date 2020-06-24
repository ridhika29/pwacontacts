import React from 'react';


class Viewlist extends React.Component
{ 
		constructor(props) {
    super(props);
      this.state = {
        
        
      }
   
  }

   


sign=()=>
{
	this.props.signout();
}


render(){
  return (
   
 <div>
      <div>
      <img src={this.props.filepath}  style={{width:'50px' ,height:'40px' , float:'left'}} alt="profile"/>
      <span className="h3"> {`Welcome, ${this.props.name}`}</span>
      <button  style={{cursor:'pointer'}} className="btn btn-info btn-sm float-right"  onClick={this.sign}>Sign Out</button>
     <hr />
     
      </div>
      <button  style={{cursor:'pointer'}} className="btn btn-info btn-lg"  onClick={this.props.viewdata}>View List</button>
      <br/><br/>
      <button  style={{cursor:'pointer'}} className="btn btn-info btn-lg"  onClick={this.props.upload}>Upload CV</button>
      <br/><br/>
      <button  style={{cursor:'pointer'}} className="btn btn-info btn-lg"  onClick={this.props.uploadpicture}>Upload Profile Pic</button>
    </div>
  );
}
}

export default Viewlist;