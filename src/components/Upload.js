import React from 'react';
import axios from 'axios';

class Upload extends React.Component{

	constructor(props) {
    super(props);
      this.state = {
        selectedFile: null,
        loaded:''
      }
   
  }

	onChangeHandler=event=>{

    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
      
    })

}

onClickHandler = () => {
    const data = new FormData() 
    data.append('file', this.state.selectedFile,`cv-${this.props.id}`)
   
   axios.post("https://secure-garden-90949.herokuapp.com/upload", data, { 
      // receive two    parameter endpoint url ,form data
  })
   .then(res => { // then print response status
   console.log(res);
    
 })
}
click=()=>{

	var body ={
    id:  `cv-${this.props.id}`
  }

	axios('https://secure-garden-90949.herokuapp.com/public ', {
        method: "POST",
        data:body,
        responseType: "blob"
        //Force to receive data in a Blob Format
      })
        .then(response => {
          //Create a Blob from the PDF Stream
          const file = new Blob([response.data], {
            type: "application/pdf"
          });
          //Build a URL from the file
          const fileURL = URL.createObjectURL(file);
          //Open the URL on new Window
          window.open(fileURL);
        })
        .catch(error => {
          console.log(error);
        });
	
	
 
 
}

back=()=>{
  this.props.onRouteChange('home1');
}


render(){
	return(

		<div className="container">
		<div className="row">
		<div className="offset-md-3 col-md-3">
		<div className="form-group files">
		<h3>Upload Your CV</h3>
		<hr/>
		 <input type="file" className="form-control-file" name="file" onChange={this.onChangeHandler}/>
		</div>
		<button type="button" className="btn btn-info btn-lg" onClick={this.onClickHandler}>Upload</button> 
		<br/>
		<br/>
		<button type="button" className="btn btn-info btn-lg"  onClick={this.click}>View CV</button>
		<br/><br/>
    <button type="button"  className="btn btn-info btn-lg" onClick={this.back}>Back</button> 
		</div>
		</div>

		</div>


		




		)
}

	

}

export default Upload;