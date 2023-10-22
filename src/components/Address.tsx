import React, { useState } from 'react';
import { Button, Card, Form, ListGroup, Modal } from 'react-bootstrap';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Address = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
  });

  const [submittedData, setSubmittedData] = useState<
    Array<{
      name: string;
      street: string;
      city: string;
      state: string;
      country: string;
      pincode: string;
    }>
  >([]);

  const [editIndex, setEditIndex] = useState(-1);

  const handleCloseForm = () => {
    setShowForm(false);
    setEditIndex(-1);
  };

  const handleShowForm = () => setShowForm(true);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (editIndex !== -1) {
      const updatedData = [...submittedData];
      updatedData[editIndex] = formData;
      setSubmittedData(updatedData);
    } else {
      setSubmittedData([...submittedData, formData]);
    }
    handleCloseForm();
    setFormData({
      name: '',
      street: '',
      city: '',
      state: '',
      country: '',
      pincode: '',
    });
    setEditIndex(-1);
  };

  const handleDeleteCard = (index: number) => {
    const updatedData = [...submittedData];
    updatedData.splice(index, 1);
    setSubmittedData(updatedData);
  };

  const handleEditCard = (index: number) => {
    const dataToEdit = submittedData[index];
    setFormData(dataToEdit);
    setEditIndex(index);
    setShowForm(true);
  };

  return (
    <div>
      <div className="d-flex flex-wrap">
        <Card className="address-card" onClick={handleShowForm}>
          <AiOutlinePlusCircle className="mx-auto my-auto" size={100} />
        </Card>

        <Card className="address-card">
          <h5 className="text-center  m-2">Default</h5>
          <hr className="m-0" />
          <Card.Body>
            <h5>data.name</h5>
            <h6>data.street</h6>
            <h6>data.city</h6>
            <h6>data.state</h6>
            <h6>data.country</h6>
            <h6>data.pincode</h6>

            <Button variant="secondary btn-sm">Delete</Button>
            <Button className="mx-2 btn-sm" variant="secondary">
              Edit
            </Button>
          </Card.Body>
        </Card>

        {submittedData.map((data, index) => (
          <Card key={index} className="address-card">
            <Card.Body>
              <h5>{data.name}</h5>
              <h6>{data.street}</h6>
              <h6>{data.city}</h6>
              <h6>{data.state}</h6>
              <h6>{data.country}</h6>
              <h6>{data.pincode}</h6>

              <Button
                variant="secondary btn-sm"
                onClick={() => handleDeleteCard(index)}
              >
                Delete
              </Button>
              <Button
                className="mx-2 btn-sm"
                variant="secondary"
                onClick={() => handleEditCard(index)}
              >
                Edit
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Modal show={showForm} onHide={handleCloseForm} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {editIndex !== -1 ? 'Edit Details' : 'Enter Details'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={formData.name}
                onChange={(e: any) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formBasicStreet">
              <Form.Label>Street</Form.Label>
              <Form.Control
                type="text"
                placeholder="151-a,Prayosha,TalajaRoad"
                value={formData.street}
                onChange={(e: any) =>
                  setFormData({ ...formData, street: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formBasicStreet">
              <Form.Label>City</Form.Label>
              <Form.Control
                as="select"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              >
                <option>Select</option>
                <option value="Bhvnagar">Bhvnagar</option>
                <option value="Baroda">Baroda</option>
                <option value="Ahemdabad">Ahemdabad</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicStreet">
              <Form.Label>State</Form.Label>
              <Form.Control
                as="select"
                value={formData.state}
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
              >
                <option>Select</option>
                <option value="Gujrat">Gujrat</option>
                <option value="Goa">GOA</option>
                <option value="Punjab">Punjab</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicStreet">
              <Form.Label>Country</Form.Label>
              <Form.Control
                as="select"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              >
                <option>Select</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Shrilanka">Shrilanka</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={formData.pincode}
                onChange={(e: any) =>
                  setFormData({ ...formData, pincode: e.target.value })
                }
              />
            </Form.Group>
            <div className="mt-3">
              <Button variant="secondary" type="submit">
                {editIndex !== -1 ? 'Save' : 'Submit'}
              </Button>
              <Button
                variant="secondary"
                className="mx-2"
                onClick={handleCloseForm}
              >
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Address;
