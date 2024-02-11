import React from 'react'
import{Card,CardBody,CardTitle,CardText}from 'reactstrap'
import{FaEnvelope,FaMapMarkedAlt,FaPhone}from 'react-icons/fa'
function ProfileCard({details}) {
  return (
    <div>
      <Card>
            <CardBody classname='text-center'>
                <img className='rounded-circle img-thumbnail border-danger' hight='150' width='150'
                 src={details.picture?.large} alt=''/>
              <CardTitle className='text-primary'>
                <h1>
                   <span>{details.name?.title}.{details.name?.first}.{details.name?.last}</span>
                </h1>
              </CardTitle>
              <CardText className='m-3' >
                  <span><FaMapMarkedAlt/>{details.location?.city}</span>
              </CardText>
              <CardText className='m-3' >
                  <span><FaPhone/>{details.phone}</span>
              </CardText>
              <CardText className='m-3' >
                  <span><FaEnvelope/>{details.email}</span>
              </CardText>
            </CardBody>
            </Card>     
      
    </div>
  )
}
export default ProfileCard
