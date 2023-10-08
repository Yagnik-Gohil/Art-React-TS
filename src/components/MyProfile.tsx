import React, { useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Form,
  Image,
} from 'react-bootstrap';

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [fullName, setFullName] = useState('Name Surname');
  const [email, setEmail] = useState('mymail23@gmail.com');
  const [address, setAddress] = useState('1234 Main St');
  const [city, setCity] = useState('Bhavnagar');
  const [state, setState] = useState('Gujrat');
  const [zipCode, setZipCode] = useState('36548');
  const [country, setCountry] = useState('India');

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };
  return (
    <div className="profile-page rounded">
      <Card className="my-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-2">
              <Image
                className="profile-img"
                src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"
                width={'120px'}
                height={'120px'}
                roundedCircle
              />
            </div>
            <div className="col-md-8">
              <CardTitle>Upload a New Photo</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button className="profile-btn">Update</Button>
            </div>
          </div>
        </div>
      </Card>

      <Form>
        <div className="mb-3 row">
          <Form.Group className="col" controlId="formGridEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={fullName}
              disabled={!isEditing}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="col" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              disabled={!isEditing}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </div>

        <Form.Group className="mb-3 col" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            value={address}
            disabled={!isEditing}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <div className="mb-3 row">
          <Form.Group className="col" controlId="formGridState">
            <Form.Label>Country</Form.Label>
            <Form.Select
              defaultValue={country}
              disabled={!isEditing}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option>Choose...</option>
              <option>India</option>
              <option>Japan</option>
              <option>Pakistan</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="col" controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select
              defaultValue={state}
              disabled={!isEditing}
              onChange={(e) => setState(e.target.value)}
            >
              <option>Choose...</option>
              <option>Gujrat</option>
              <option>Goa</option>
              <option>Punjab</option>
            </Form.Select>
          </Form.Group>
        </div>
        <div className="mb-3 row">
          <Form.Group className="col" controlId="formGridEmail">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter code"
              value={zipCode}
              disabled={!isEditing}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="col" controlId="formGridState">
            <Form.Label>City</Form.Label>
            <Form.Select
              defaultValue={city}
              disabled={!isEditing}
              onChange={(e) => setCity(e.target.value)}
            >
              <option>Choose...</option>
              <option>Bhavnagar</option>
              <option>Vadodara</option>
              <option>Surat</option>
            </Form.Select>
          </Form.Group>
        </div>

        {isEditing ? (
          <Button className="profile-btn" onClick={handleSaveClick}>
            Save
          </Button>
        ) : (
          <Button className="profile-btn" onClick={handleEditClick}>
            Edit
          </Button>
        )}
      </Form>

      <hr></hr>

      <h2 className="pb-3">Change Password</h2>
      <Form className="pb-4">
        <Form.Group className="col my-2" controlId="formGridEmail">
          <Form.Label>Current Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Current Password"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="col my-2" controlId="formGridEmail">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="Enter New Password" />
        </Form.Group>
        <Form.Group className="col my-2" controlId="formGridEmail">
          <Form.Label>Retype New Password</Form.Label>
          <Form.Control type="password" placeholder="Retype New Password" />
        </Form.Group>
        <Button className="profile-btn my-3">Save</Button>
      </Form>
    </div>
  );
};

export default MyProfile;
