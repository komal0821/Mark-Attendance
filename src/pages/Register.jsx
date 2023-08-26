import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Logo from "../images/logo1.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { registerRoute } from '../utils/APIRoutes';

 function Register() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
     
     const toastOptions = {
         position: "bottom-right",
         autoClose: 8000,
         pauseOnHover: true,
         draggable: true,
         theme: "dark",
     };

    useEffect(() => {
        if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
            navigate("/");
        }
    }, []);
    
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleValidation()) {
            const toastOptions = {}
            const { password,  username, email } = values;
            const { data } = await axios.post(registerRoute, {
                username,
                email,
                password
            });

            if (data.status === false) {
                toast.error(data.msg, toastOptions);
            }
            if (data.status === true) {
                localStorage.setItem('chat-app-user', JSON.stringify(data.user));
            }
            navigate("/");
        }
    };


    const handleValidation = () => {
        // const toastOptions = {}
            const { password, confirmPassword, username, email } = values;
            if(password !== confirmPassword) {
                toast.error(
                    "Password and confirm password should be same.",
                    toastOptions
                );
        return false;
    } else if (username.length < 3) {
        toast.error(
            "Username should be greater than 3 characters.",
            toastOptions
        );
        return false;
    } else if (password.length < 8) {
        toast.error(
            "Password should be equal or greater than 8 characters.",
            toastOptions
        );
        return false;
    } else if (email === "") {
        toast.error("Email is required.", toastOptions);
        return false;
    }

    return true;

    };
    

    return (
        <>
            <FormContainer>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className='brand'>
                        <img src={Logo} alt="Logo" />
                        <h1>SRMIST</h1>
                    </div>
                    <input
                        type="text"
                        placeholder='Username'
                        name='username'
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="email"
                        placeholder='Email'
                        name='email'
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        name='password'
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        name='confirmPassword'
                        onChange={(e) => handleChange(e)}
                    />
                    <button type='submit'>Create Your Account</button>
                    <span>Already have an account? <Link to="/login">Login</Link></span>
                </form>
            </FormContainer>
            
            <ToastContainer />
            </>
    )
}

const FormContainer = styled.div`
height: 100vh;
width:100vw;
display:flex;
flex-direction: column;
justify-content:center;
gap:1rem;
align-items: center;
background-color: #D7BBF5;
  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        height: 5rem;
    }
    h1 {
        color:#EFE1D1;
        /*text-transform: uppercase;*/
    }
  }
  form {
    display:flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #A076F9;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
        background-color: #EFE1D1;
        padding: 1rem;
        border: 0.1rem solid #331D2C;
        border-radius: 0.4rem;
        color: green;
        width: 100%;
        font-size: 1rem;
        font-weight: bold;
        &:focus {
            border: 0.1rem solid #3F2E3E;
            outline: none;
        }
    }
    button {
        background-color: #331D2C;
        color: white;
        padding: 1rem 2rem;
        border: none;
        font-weight: bold;
        cursor: pointer;
        border-radius: 0.4rem;
        font-size: 1rem;
        text-transform: uppercase;
        transition: 0.4s ease-in-out;
        &:hover {
            background-color: #CEE5D0;
            color:#331D2C;
            transform: scale(1.1);
        }
    }
    span {
        text-transform:uppercase;
        color: brown;
        font-weight: bold;
        a {
            color:#3F2E3E;
            font-weight: bold;
            text-decoration: none;
        }
    }
  }
`;

export default Register

/* #331D2C
   #3F2E3E
   #A78295
   #EFE1D1
   
   #94B49F
   #CEE5D0
   #FCF8E8
   #ECB390

   #D7BBF5
   #A076F9
   */

