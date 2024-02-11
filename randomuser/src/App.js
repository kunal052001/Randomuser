import React, { useEffect,useState } from 'react'
import{Container,Row,Col,Button}from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import ProfileCard from'./component/ProfileCard'
import Axios from 'axios'
function App() {
  const [details,setDetails]=useState({})
  const fetchUsers=async()=>{
    const {data}= await Axios.get("https://randomuser.me/api/")
    const details=data.results[0];
    console.log(details)
    setDetails(details)
  }
  useEffect(()=>{
    fetchUsers()
  },[])
  return (
    <div>
     <Container fluid className='p-4 bg-primary App'>
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          

          <ProfileCard details={details}/>
        </Col>

      </Row>
      <Button onClick={fetchUsers} className='bg-danger offset-md-4 mt-4 text-center'>GET RANDOM USER</Button>
      </Container> 
   </div>
  )
}

export default App
