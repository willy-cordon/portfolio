// pages/examplepage.tsx

import React, { useState } from 'react';
import Head from 'next/head';
import ClientAxios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router';

const Login = () => {
        const router = useRouter();
        //State con los datos del formulario
        const [credenciales,guardarCredenciales] = useState({});

        //iniciar session en el servidor
        const iniciarSesion = async e => {
            e.preventDefault();
            
            try {
                const response = await ClientAxios.post('http://localhost:5000/login',credenciales) 
                const {token} = response.data;
                localStorage.setItem('token', token);
                
                Swal.fire(
                    'Login correcto',
                    'has iniciado session',
                    'success'
                );
                router.push('/dashboard')
            } catch (error) {
                console.log(error);
                Swal.fire({
                    type:error,
                    title:'Hubo un error',
                    text: error.response.data.mensaje
                })
            }

        }



        //Almacenar los datos que escribe el usuario en el state
        const leerDatos = e =>{
            guardarCredenciales({
                ...credenciales,
                [e.target.name] : e.target.value
            })
        }
		return (
			<div>
				<Head>
					 <link href="assets_admin/css/style.css" rel="stylesheet" />
				</Head>

				<div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="row w-100 m-0">
          <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
            <div className="card col-lg-4 mx-auto">
              <div className="card-body px-5 py-5">
                <h3 className="card-title text-left mb-3">Login</h3>
                <form onSubmit={iniciarSesion}>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="text" 
                           className="form-control p_input"
                           name="email"
                           required
                           onChange={leerDatos} />
                  </div>
                  <div className="form-group">
                    <label>Password *</label>
                    <input type="password"
                           className="form-control p_input"
                           required
                           name="password"
                           onChange={leerDatos} />
                  </div>
                  {/* <div className="form-group d-flex align-items-center justify-content-between">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" /> Remember me </label>
                    </div>
                    <a href="#" className="forgot-pass">Forgot password</a>
                  </div> */}
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block enter-btn">Login</button>
                  </div>
                 
                 
                </form>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    
    </div>
			</div>
		);
	}


export default Login;