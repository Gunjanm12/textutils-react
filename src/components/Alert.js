import React from 'react'

function alert(props) {
  // const capitalize=(word)=>{
  //   const lower= word.toLowerCase();
  //   return lower.charAt(0).toUpperCase() + lower.slice(1);
  // }
  return (
    <div>
        
        <div className={` alert alert-${props.alert.type}`} role="alert">
       <strong> {props.alert.type} </strong> :{props.alert.msg}
       
        {/* <button type='button' className="btn-close" data-bs-dismiss="alert" aria-label='Close'></button> */}
        </div>
    </div>
    
  )
}

export default alert