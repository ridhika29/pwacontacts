import React from 'react';

const Viewlist = ({ register , viewdata ,signin}) => {
  return (
   
 <div>
      
       <button style={{cursor:'pointer'}} className="btn btn-info btn-lg" onClick={register} >Register
      </button>
     <br/><br/>
      
     <button style={{cursor:'pointer'}} className="btn btn-info btn-lg" onClick={signin}>Sign In
      </button>
      <br/><br/>
      <button style={{cursor:'pointer'}} className="btn btn-info btn-lg"onClick={viewdata}>View List
      </button>
      
    </div>
  );
}

export default Viewlist;