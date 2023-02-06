import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddMovie() {
    const [Title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [imageUrl,setImageUrl]=useState("")
    const [Rating,setRating]=useState(0)
    const [creatAt,setCreatAt]=useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    dataasubmit()
};
  const handleShow = () => setShow(true);
const dataasubmit=()=>{
    var obj={
        title:Title,
        description:description,
        imageUrl:imageUrl,
        Rating:Rating,
        creatAt:creatAt
    }
    localStorage.setItem("title1",JSON.stringify(obj))

}
  return (
    <>
   
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" onChange={(event)=>setTitle(event.target.value)} />
      </Form.Group> <br></br>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter description" onChange={(event)=>setDescription(event.target.value)} />
        
      </Form.Group> <br></br>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>imageUrl</Form.Label>
        <Form.Control type="text" placeholder="Enter Urlimage" onChange={(event)=>setImageUrl(event.target.value)}/>
        
      </Form.Group> <br></br>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>rating</Form.Label>
        <Form.Control type="number" placeholder="Enter rating" onChange={(event)=>setRating(event.target.value)} />
        
      </Form.Group> <br></br>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>crateAt</Form.Label>
        <Form.Control type="date" placeholder="Enter date"onChange={(event)=>setCreatAt(event.target.value)} />
        
      </Form.Group> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;