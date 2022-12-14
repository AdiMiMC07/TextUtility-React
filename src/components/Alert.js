import React from 'react'

function Alert(props) {
  return (
    <div style={{height: `3rem`}}>
    {props.alert && <div className={`alert alert-${props.alert.alertType} alert-dismissible fade show`} role="alert">
    <strong>{props.alert.alertType}</strong> : {props.alert.msg}
  </div>}
    </div>
  )
}

export default Alert