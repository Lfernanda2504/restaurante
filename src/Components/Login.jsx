import React,{ useState} from "react";
import { useForm } from '../Hooks/useForm'
import {loginToken}  from '../service'
import Swal from 'sweetalert2'

const Login = () => {
  const [user, setUser] = useState(null);
  const [formValues, handleInputChange, reset]=useForm({
    email: "",
    password: "",
  })

  const {email, password} = formValues;

  const handleLogin = async (e)=>{
    e.preventDefault()
    try{
      const user = await loginToken({
        email,
        password
      })
      console.log(user)
      setUser(user)
      reset();


    }catch(e){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
      
    }
    
  }
  
  return (
    <div>
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 d-none d-md-flex bg-image"></div>
          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-xl-6 mx-auto">
                    <h2 className="display-4">Log In</h2>
                    <form onSubmit={handleLogin}>
                      <div className="form-group mb-3">
                        <input
                          name="email"
                          type="email"
                          placeholder="Email address"
                          value={email}
                          onChange={handleInputChange}
                          className="form-control border-0 shadow-sm px-4"
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          name="password"
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={handleInputChange}
                          className="form-control  border-0 shadow-sm px-4 text-danger"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-danger btn-block mb-2"
                      >
                        Enviar
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
