import React,{ Component } from 'react';
import axios from 'axios';
import './App.css';
import Show from './components/Show';
import Register from './components/Register';
import Viewlist from './components/Viewlist';
import View from './components/View';
import Signin from './components/Signin';
import Upload from './components/Upload';
import Uploadpicture from './components/Uploadpicture'


class App extends Component{
  constructor()
  {
    super();
    this.state={
      route:'home',
        isSignedIn : 'false',
        id:'',
        name:'',
        email:'',
        job:'',
        phone:'',
        data:{},
        profile:'',
        cv:'',
        filepath:''
      
    }
  }

  loadname = (data) =>{
    this.setState({name:data.name,
      id:data.id,
      isSignedIn:'true',
    profile:`profile-${data.id}`,
    cv:`cv-${data.id}`}
    )
  }

   loadUser = (data) => {
    this.setState({
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      job: data.job,
      isSignedIn:true,
      profile:`profile-${data.id}`,
    cv:`cv-${data.id}`
      
    })
  }

click=()=>{
  var body ={
    id:  this.state.profile
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
            type: "image/jpg"
          });
          //Build a URL from the file
          const fileURL = URL.createObjectURL(file);
          //Open the URL on new Window
         // window.open(fileURL);
         this.setState({filepath:fileURL})
        })
        .catch(error => {
          console.log(error);
        });
 
}
  register = () =>
  {
    this.setState({route:'register'})
  }

   signin = () =>
  {
    this.setState({route:'signin'})
  }

  upload = () =>
  {
    this.setState({route:'upload'})
  }

   uploadpicture = () =>
  {
    this.setState({route:'uploadpicture'})
  }

  signout=()=>
  {
    this.setState({
      route:'home',
        isSignedIn : 'false',
        id:'',
        name:'',
        email:'',
        job:'',
        phone:'',
        data:{},
        profile:'',
        cv:'',
        filepath:''
      });
  }

  viewdata = () =>
  {
    fetch('https://secure-garden-90949.herokuapp.com/viewlist')
    .then(response => response.json())
    .then(json => {
      this.setState({data:json , route:'index'});
       // var len=this.state.data.length;
        //for(var i=0;i<=len;i++)
        //{
          //console.log(this.state.data[i]);
        //}
    })
    .catch(console.log)
  }

   onRouteChange = (route) => {
    
    this.setState({route: route});
  }

  render(){

    const { route } = this.state;

    return (
    <div className="App">
    
    { route === "home" 

        ?
      
       <div>
       <h2>PWA Demo</h2>
    <hr/><br/>
       
        <Viewlist register={this.register} viewdata={this.viewdata} signin={this.signin}/>
      
        </div>
         :
      (
        route === "index" 
        ?
        <div>
        
        <Show data={this.state.data} onRouteChange={this.onRouteChange} route={this.state.route} isSignedIn={this.state.isSignedIn}/>
       
        </div>
        :
        (
          route === "home1"
          ?
          <div>
         
          <View signout={this.signout} filepath={this.state.filepath} viewdata={this.viewdata} name={this.state.name} cv={this.state.cv} profile={this.state.profile} upload={this.upload} uploadpicture={this.uploadpicture}/>
          
          </div>
          :
          ( 
            route === "signin"
            ?
            <div>
            
            <Signin onRouteChange={this.onRouteChange} click={this.click} loadname={this.loadname}/>
            
            </div>
            :
            (
              route === "upload"
              ?
              <div>
              <Upload onRouteChange={this.onRouteChange} id={this.state.id}/>
              </div>
              :
              (
                route === "uploadpicture"
              ?
              <div>
              <Uploadpicture click={this.click} onRouteChange={this.onRouteChange} id={this.state.id}/>
              </div>
              :
              
        <div>
        
        <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        

      </div>
      )
      )
      )
      )
        
      )
    
    }
    
    </div>  
  );


  }
}



export default App;
