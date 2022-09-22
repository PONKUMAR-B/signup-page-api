import React,{ useState,useEffect } from 'react';
import axios from 'axios';
// import ReactDeleteRow from 'react-delete-row';
import { useNavigate } from 'react-router-dom';

function Home() {
      let navigate = useNavigate();
      const [record, setRecord] = useState([]);

      useEffect(() => {
        getData();  
      }, []);

      const getData = async() =>{
        const response = await axios.get('http://localhost:3003/users/');
        setRecord(response.data);
      }

      const deleteData = async(id) =>{
        const response = await axios.delete(`http://localhost:3003/users/${id}`);
        setRecord(response.data);
      }

      const updateData = async(id) =>{
        const response = await axios.put(`http://localhost:3003/users/${id}`);
        navigate("/signup");
        setRecord(response.data);
      }
      



  return (
    <div>
        <h2>Welcome to my site</h2>
        {/* <div className="search-control">
              <input type="search" className="search" id="search" placeholder="search here" onChange={(e) => {setSearch(e.target.value);}}></input>
              <button className="button" name="search"  value={ values.search } onClick={ Search }>Search</button>
        </div> */}

        <table className="table">
            <tbody className="tablebody">
                {record.map((item,id) =>{
                    return(
                      <tr key={item.id}>
                          <td className="tabledata">{item.id}</td>
                          <td className="tabledata">{item.username}</td>
                          <td className="tabledata">{item.fname}</td>
                          <td className="tabledata">{item.lname}</td>
                          <td className="tabledata">{item.email}</td>
                          <td className="tabledata">{item.password}</td>
                          <td className="tabledata">{item.cpassword}</td> 
                          <td><button className="button1" onClick={() =>{updateData(item.id)}}>Update</button></td>
                          <td><button className="button2" onClick={() =>{deleteData(item.id)}}>Delete</button></td>
                      </tr>
                    )})} 
              </tbody>
                
        </table>
    </div>
  )
}

export default Home;