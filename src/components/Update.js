import React,{ useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function Update() {

    let navigate = useNavigate();
    const [record, setRecord] = useState([]);
    const [id,setId] = useState('');
    const [username,setUsername] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');


    useEffect(() =>{
        setId(localStorage.getItem("Id"));
        setUsername(localStorage.getItem("username"));
        setFirstName(localStorage.getItem("firstname"));
        setLastName(localStorage.getItem("lastname"));
        setEmail(localStorage.getItem("email"));
        setPassword(localStorage.getItem("password"));
        setConfirmPassword(localStorage.getItem("confirm password"));

    },[])


    const updateData = async() =>{

        await axios.put(`https://633163943ea4956cfb5c778a.mockapi.io/signin/${id}`,{
            id,username,firstName,lastName,email,password,confirmPassword
        })
        .then(function(response){
            localStorage.removeItem('Before updated');
            setRecord(response.data);
        })
        navigate('/home'); 
    }



    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(record);
    }


    const back = (e) =>{
        e.preventDefault();
        navigate('/home');
    }

  return (
    <div>
      <div className="signup-form">
            <h2>SignUp Form</h2>
            <div className="form-control">
                <form className="form" key={id} onSubmit = { handleSubmit }>
                    <label className="form-label">User Name</label><br/>
                    <input type="text" className="form-input" id="username" placeholder="Enter your name" required name="username" value = { username } onChange={(e) =>setUsername(e.target.value)}></input><br/>
                    <label className="form-label">First Name</label><br/>
                    <input type="text" className="form-input" id="fname" placeholder="Enter your firstname" required name="fname" value = { firstName } onChange={(e) =>setFirstName(e.target.value)}></input><br/>
                    <label className="form-label">Last Name</label><br/>
                    <input type="text" className="form-input" id="lname" placeholder="Enter your lastname" name="lname" value = { lastName } onChange={(e) =>setLastName(e.target.value)}></input><br/>
                    <label className="form-label">Email Id</label><br/>
                    <input type="email" className="form-input" id="email" placeholder="Enter your mail id" required name="email" value = { email } onChange={(e) =>setEmail(e.target.value)}></input><br/>
                    <label className="form-label">Password</label><br/>
                    <input type="password" className="form-input" id="password" placeholder="Enter your password" required name="password" value = { password } onChange={(e) =>setPassword(e.target.value)}></input><br/>
                    <label className="form-label">Confirm Password</label><br/>
                    <input type="password" className="form-input" id="cpassword" placeholder="Re-enter your password" required name="cpassword" value = { confirmPassword }  onChange={(e) =>setConfirmPassword(e.target.value)}></input><br/><br/>
                    <input type="submit" value="Back" className="form-input submit data1" onClick={back}></input>
                    <input type="submit" value="Update" className="form-input submit data2" onClick = {() =>{ updateData(record) }}></input>
                    
                </form>
            </div>
       </div>
    </div>
  )
}

export default Update;
