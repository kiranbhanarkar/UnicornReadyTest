import React from 'react'

function Login() {
  return (
  <>
  <div>Login</div>
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
    </div>
  </div>
  </>
  )
}

export default Login