import { HowToRegOutlined, LoginOutlined } from '@mui/icons-material';
import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Auth = () => {
    const [isSignUp,setIsSignUp]=useState(false);
    const [inputs,setInputs]=useState({
        name:"",
        password:"",
        email:""
    })

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setInputs((prevState)=>{
            return {
                ...prevState,
                [name]:value
            }
        })
    }
    const  handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputs);
    }

    const handleReset=()=>{
        setIsSignUp(!isSignUp)
        setInputs({
            name:"",
            password:"",
            email:""
        });
    }

    return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            margin={"auto"}
            padding={3}
            maxWidth={400}
            marginTop={5}
            boxShadow={"7px 7px 13px #ccc "}
            sx={{
                ":hover":{
                    boxShadow:"15px 15px 27px grey "
                }
            }}
        >
            <Typography variant='h3' textAlign={"center"} padding={2} >
                {isSignUp ? "SIGN UP" : "LOG IN"}
            </Typography>   
            { isSignUp &&  

                <TextField 
                    name='name'
                    placeholder='Name'
                    variant='outlined'
                    type='text'
                    margin='dense'
                    value={inputs.name}
                    onChange={handleChange}
                />
            }
            <TextField 
                name='email'
                placeholder='Email'
                variant='outlined'
                type='email'
                margin='dense'
                value={inputs.email}
                onChange={handleChange}

            />
            <TextField 
                name='password'
                placeholder='Password'
                variant='outlined'
                type='password'
                margin='dense'
                value={inputs.password}
                onChange={handleChange}
            />
            <Button
                endIcon={isSignUp ? <HowToRegOutlined/> : <LoginOutlined/> }
                variant='contained'
                color='warning'
                sx={{marginTop:2,padding: "0.6rem 2rem",
                    fontWeight: "800",
                    fontFamily: "cursive"
                }}
                type='submit'
            >{isSignUp ? "SIGN UP" : "LOG IN"}</Button>
            <Button
                endIcon={isSignUp ? <LoginOutlined/>:<HowToRegOutlined/> }
                sx={{marginTop:2}} 
                onClick={handleReset}
            >CHANGING TO {isSignUp ? "LOG IN" : "SIGN UP"}</Button>
        </Box>
      </form>
    </>
  )
}

export default Auth
