import React from 'react'

function Signup() {
  return (
    <>
    Signup
    <div class="mb-3 row">
      <label for="name" class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-6">
        <input type="text" readonly class="form-control" id="name"/>
      </div>
     </div>
     <div class="mb-3 row">
      <label for="username" class="col-sm-2 col-form-label">Username</label>
      <div class="col-sm-6">
        <input type="text" readonly class="form-control" id="username"/>
      </div>
     </div>
     <div class="mb-3 row">
      <label for="email" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-6">
        <input type="text" readonly class="form-control" id="email"/>
      </div>
     </div>
     <div class="mb-3 row">
      <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-6">
        <input type="password" class="form-control" id="inputPassword"/>
     </div><br></br>
     <div class="mb-3 row">
      <label for="cPassword" class="col-sm-2 col-form-label">Confirm Password</label>
      <div class="col-sm-6">
        <input type="password" class="form-control" id="cPassword"/>
     </div>
    </div>
    </div>
    </>
  )
}

export default Signup