import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Signin() {
    let navigate = useNavigate();
    const [record, setRecord] = useState([]);
    const [values, setValues] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    
    
    const handleChange = (event) =>{
        setValues({...values,[event.target.name]: event.target.value});
    };

    useEffect(() =>{
        localStorage.setItem("signin record",JSON.stringify(record));
        setUsername(localStorage.getItem("username"));
        setPassword(localStorage.getItem("password"));
    },[record]);



    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(values);

        axios.get(`https://633163943ea4956cfb5c778a.mockapi.io/signin/`)
        .then(function(response){
            setRecord(response.data);
            localStorage.setItem("Token",JSON.stringify(response.data.token))
        })

        {record.map((e) =>{
            if(e.username === values.username && e.password === values.password){
                alert("Login successfully");
                navigate('/home');
            }
            else{
                alert("username or password is incorrect");
               
            }
        })} 

    }

    const Signup = (e) =>{
        e.preventDefault();
        navigate("/signup");
    };



    return (
        <div className='signup-form'>
            <h2>SignIn Form</h2>
            <div className="form-control">
                <form className="form" onSubmit={ handleSubmit }>
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