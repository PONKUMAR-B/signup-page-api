import React,{ useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signin() {
    let navigate = useNavigate();
    const [record, setRecord] = useState([]);
    const [values, setValues] = useState(
        {
            username: "",
            password: "",
        }
    );
    
    const handleChange = (event) =>{
        setValues({...values,[event.target.name]: event.target.value});
    };
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(values);

        {record.map((e) =>{
            if(e.username === values.username && e.password === values.password){
                alert("Login successfully");
                navigate('/home');
            }
            else{
                alert("username or password is incorrect");
            }
        })}   

        axios.get('http://localhost:3003/users',{
            headers:{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
                }
        }).then(function(response){
            setRecord(response.data);
        })
         
    }

    const Signup = (e) =>{
        e.preventDefault();
        navigate("/signup");
    };

    return (
        <div className='signup-form'>
            <h2>SignIn Form</h2>
            <div className="form-control">
                <form className="form" onSubmit={handleSubmit}>
                    <label className="form-label">User Name</label><br/>
                    <input type="text" className="form-input" id="username" placeholder="Enter your name" required name="username" value = { values.username } onChange={handleChange}></input><br/>
                    <label className="form-label">Password</label><br/>
                    <input type="password" className="form-input" id="password" placeholder="Enter your password" required name="password" value = { values.password } onChange={handleChange}></input><br/>
                    <input type="submit" value="Sign In" className="form-input submit"></input>
                    <a href="/signup" className="signin" onClick={ Signup }>Create new account? Sign Up</a>
                </form>
            </div>
    </div>
  )
}

export default Signin;