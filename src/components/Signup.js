import React,{ useState,useEffect} from "react";
import axios from 'axios';
import  { useNavigate } from 'react-router-dom';


function Signup (){
        let navigate = useNavigate();
        const [values, setValues] = useState(
            {
                username: "",
                fname: "",
                lname: "",
                email: "",
                password: "",
                cpassword: "",
            }
        );
 
        
        const handleChange = (event) =>{
            setValues({...values,[event.target.name]: event.target.value});
        };

        const handleSubmit=(e)=>{
            e.preventDefault();
            console.log(values);
           

            const Name=document.getElementById('username').value;
            const Fname=document.getElementById('fname').value;
            const Lname=document.getElementById('lname').value;
            const Email = document.getElementById('email').value;
            const Password = document.getElementById('password').value;
            const CPassword = document.getElementById('cpassword').value;
                
            if (Name ==="" || Fname === "" || Lname === "" || Email ==="" || Password ==="" || CPassword ===""){
                alert("Fill all the fields");
            }
            
            else{
                if(Password !== CPassword){
                    alert("Your password is incorrect or mismatched");
                }
                else{
                    alert("Signup Successful");
                }
            }  

            axios.post( 'https://633163943ea4956cfb5c778a.mockapi.io/signin/',{...values,[e.target.name]:e.target.value},{
                
                    headers:{
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json'
                    }
            })
            .then(function(response){
                setValues(response.data);
                localStorage.removeItem('Records');
                navigate("/");
            })
            .catch(function(error){
                console.log(error);
            });

        }    
       
        useEffect(() => {
            localStorage.setItem('Records', JSON.stringify(values));
        }, [values]);

        const Signin = (e) =>{
            e.preventDefault();
            navigate("/");
        }
        
        return(
            <div className="signup-form">
                    <h2>SignUp Form</h2>
                    <div className="form-control">
                        <form className="form" onSubmit={ handleSubmit }>
                            <label className="form-label">User Name</label><br/>
                            <input type="text" className="form-input" id="username" placeholder="Enter your name" required name="username" value = { values.username } onChange={handleChange}></input><br/>
                            <label className="form-label">First Name</label><br/>
                            <input type="text" className="form-input" id="fname" placeholder="Enter your firstname" required name="fname" value = { values.fname } onChange={handleChange}></input>
                            <label className="form-label">Last Name</label><br/>
                            <input type="text" className="form-input" id="lname" placeholder="Enter your lastname" name="lname" value = { values.lname } onChange={handleChange}></input><br/>
                            <label className="form-label">Email Id</label><br/>
                            <input type="email" className="form-input" id="email" placeholder="Enter your mail id" required name="email" value = { values.email } onChange={handleChange}></input><br/>
                            <label className="form-label">Password</label><br/>
                            <input type="password" className="form-input" id="password" placeholder="Enter your password" required name="password" value = { values.password } onChange={handleChange}></input><br/>
                            <label className="form-label">Confirm Password</label><br/>
                            <input type="password" className="form-input" id="cpassword" placeholder="Re-enter your password" required name="cpassword" value = { values.cpassword }  onChange={handleChange}></input><br/><br/>
                            <input type="submit" value="Sign Up" className="form-input submit"></input>
                            <a href="/" className="signin" onClick={ Signin }>Already have an account? SignIn</a>
                        </form>
                    </div>
       
            </div>
                
            );
    }

export default Signup;