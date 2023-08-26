import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Logo from "../images/logo1.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { loginRoute } from '../utils/APIRoutes';


function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        password: "",

    });

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
            const { password,  username } = values;
            const { data } = await axios.post(loginRoute, {
                username,
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
        const toastOptions = {}
            const { password, username } = values;
            if(password === "") {
                toast.error(
                    "Password must be correct.",
                    toastOptions
                );
        return false;
    } else if (username.length === "") {
        toast.error(
            "Username and Password must be required.",
            toastOptions
        );
        return false;
    } 
    return true;

    };
    
    

    // const handleChange = (event) => { 
    //     setValues({ ...values, [event.target.name]: event.target.value });
    // };

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
                        min="3"
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        name='password'
                        onChange={(e) => handleChange(e)}
                    />
                    <button type='submit'>Login Your Account</button>
                    <span>Don't have an account? <Link to="/register">Register</Link></span>
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
background-color: #3A3845;

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
    background-color: #826F66;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
        background-color: white;
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
            transform: scale(0.8);
        }
    }
    span {
        text-transform:uppercase;
        color: #3A3845;
        font-weight: bold;
        a {
            color:#F7CCAC;
            font-weight: bold;
            text-decoration: none;
        }
    }
  }
`;

export default Login

/* 
#AD8B73
#CEAB93
#E3CAA5
#FFFBE9

#FEFFDE
#DDFFBC
#91C788
#52734D

#6096B4

#F3F1F5
#F0D9FF
#BFA2DB
#7F7C82
   */

