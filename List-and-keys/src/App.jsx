
import { useEffect,useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState([])

  
  const getData = async ()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/users")
  const list=await res.json()
  setUser(list)
}

  const fetchData = ()=>{
    getData()
  }

  const handleAllDelete = ()=>{
    setUser([])
  }

  useEffect(()=>{
    getData()
  },[])

  const deleteUser =(id)=>{

    const updatalist = user.filter((curEle)=>{
      return curEle.id != id
    })
    setUser(updatalist)

  }
  return (
    <>
    {
     <div className='container'>
      <h1 className='text-center mt-5'>User Data</h1>
      <table className='table table-primary mt-5 table-bordered table-hover'>
        <thead>
          <tr className='text-center'>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
           user.length > 0 ?   user.map((curEle)=>{
              return(
                <tr className='text-center' key={curEle.id}>
                  <td>{curEle.id}</td>
                  <td>{curEle.name}</td>
                  <td>{curEle.website}</td>
                  <td>{curEle.email}</td>
                  <td className='text-center'><button className='btn btn-danger' onClick={()=>{deleteUser(curEle.id)}}>Delete</button></td>
                 
                </tr>
              )
            }) : <td colSpan={5} className='text-center fw-bold fs-1'>No User Found</td>
          }
        </tbody>

      </table>
        <div className='text-center mt-5'>

        <button className='btn btn-danger' onClick={handleAllDelete}>Clear All Data</button>
        <button className='btn btn-primary ms-4' onClick={fetchData}>Get Data</button>
        
        </div>

     </div>
        
    }
    </>
  )
}

export default App
