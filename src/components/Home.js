import React,{ useState,useEffect } from 'react';
import axios from 'axios';
// import ReactDeleteRow from 'react-delete-row';
import { useNavigate } from 'react-router-dom';



function Home() {
      let navigate = useNavigate();
      const [record, setRecord] = useState([]);
      const [id,setId] = useState('');
      const [username,setUsername] = useState('');
      const [firstName,setFirstName] = useState('');
      const [lastName,setLastName] = useState('');
      const [email,setEmail] = useState('');
      const [password,setPassword] = useState('');
      const [confirmPassword,setConfirmPassword] = useState('');
      
      useEffect(() => {
        getData();  
      }, []);

      const getData = () => {
        axios.get(`https://633163943ea4956cfb5c778a.mockapi.io/signin/`)
            .then((response) => {
                 setRecord(response.data);
             })
      }

      const deleteData = async(id) =>{
        const response = await axios.delete(`https://633163943ea4956cfb5c778a.mockapi.io/signin/${id}`)
        .then(() =>{
          getData();
        })
      }

      const setData= ({ id,username,fname,lname,email,password,cpassword }) =>{
          localStorage.setItem("Id",id);
          localStorage.setItem("username",username);
          localStorage.setItem("firstname",fname);
          localStorage.setItem("lastname",lname);
          localStorage.setItem("email",email);
          localStorage.setItem("password",password);
          localStorage.setItem("confirm password",cpassword);
          navigate('/update');
      }
    
      const logout = () =>{
        localStorage.removeItem("Token");
        localStorage.removeItem('Before updated');
        localStorage.removeItem('After updated');
        navigate('/');
      }



  return (
    <div>
        <h2>Welcome to my site</h2>
        {/* <div className="search-control">
              <input type="search" className="search" id="search" placeholder="search here" onChange={(e) => {setSearch(e.target.value);}}></input>
              <button className="button" name="search"  value={ values.search } onClick={ Search }>Search</button>
        </div> */}
        
        <button className='logout' onClick={logout}>Logout</button>
        <br/><br/>
        <table className="table">
            <tbody className="tablebody">
                {record.map((item) =>{
                    return(
                      <tr key={item.id}>
                          <td className="tabledata">{item.id}</td>
                          <td className="tabledata">{item.username}</td>
                          <td className="tabledata">{item.fname}</td>
                          <td className="tabledata">{item.lname}</td>
                          <td className="tabledata">{item.email}</td>
                          <td className="tabledata">{item.password}</td>
                          <td className="tabledata">{item.cpassword}</td> 
                          <td><button className="button1" onClick={() =>{setData(item)}}>Update</button></td>
                          <td><button className="button2" onClick={() =>{deleteData(item.id)}}>Delete</button></td>
                      </tr>
                    )})} 
              </tbody>
                
        </table>
    </div>
  )
}

export default Home;