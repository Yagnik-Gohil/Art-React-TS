import React, { useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Form,
  Image,
} from 'react-bootstrap';
import { FaCircleUser } from 'react-icons/fa6';

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const initialFormData = {
    fullName: 'name surname',
    email: 'mymail123@gmail.com',
    phone: '9857445125'
  };

  const [form, setForm] = useState(initialFormData);

  const handleForm = (e:any) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setForm(initialFormData);
  };

  const handleImageChange = (selectedFile: File | null) => {
    setSelectedImage(selectedFile);
  };

  const UploadAndDisplayImage = () => {
    return (
      <div>
        <Card className="my-4">
          <div className="card-body">
            <div className="row">
              <div className="col-md-3 my-auto text-center p-2 col-sm-12">
                {selectedImage ? (
                  <Image
                    className="profile-img"
                    roundedCircle
                    alt="Selected Image"
                    src={URL.createObjectURL(selectedImage)}
                  />
                ) : (
                  <FaCircleUser className="profile-img" />
                )}
              </div>
              <div className="col-md-6 my-auto col-sm-12">
                <CardTitle>Upload a New Photo</CardTitle>
                <CardText>
                  <input
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                      const selectedFile =
                        event.target.files && event.target.files[0];
                      if (selectedFile) {
                        handleImageChange(selectedFile);
                      }
                    }}
                  />
                </CardText>
                <Button className="btn btn-primary">Update</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <div className="profile-page rounded">
      <UploadAndDisplayImage />
      <Form>
        <div className="mb-3 row">
          <Form.Group className="col-12 pb-3" controlId="formGridEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={form.fullName}
              name="fullName"
              disabled={!isEditing}
              onChange={handleForm}
            />
          </Form.Group>

          <Form.Group className="col" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              disabled={!isEditing}
              onChange={handleForm}
            />
          </Form.Group>
          <Form.Group className="col" controlId="formGridEmail">
            <Form.Label>Phone No</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              placeholder="Enter Phone No"
              value={form.phone}
              disabled={!isEditing}
              onChange={handleForm}
            />
          </Form.Group>
        </div>

        {isEditing ? (
          <div className="row">
            <div className="col-md-6">
              <Button className="profile-btn w-100" onClick={handleSaveClick}>
                Save
              </Button>
            </div>
            <div className="col-md-6">
              <Button
                className="profile-btn w-100"
                type="button"
                onClick={handleCancelClick}
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <Button className="profile-btn px-5" onClick={handleEditClick}>
            Edit
          </Button>
        )}
      </Form>

      <hr />

      <h2 className="pb-3">Change Password</h2>
      <Form className="pb-4">
        <Form.Group className="col my-2" controlId="formGridEmail">
          <Form.Label>Current Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Current Password" />
        </Form.Group>
        <Form.Group className="col my-2" controlId="formGridEmail">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="Enter New Password" />
        </Form.Group>
        <Form.Group className="col my-2" controlId="formGridEmail">
          <Form.Label>Retype New Password</Form.Label>
          <Form.Control type="password" placeholder="Retype New Password" />
        </Form.Group>
        <Button className="profile-btn my-3 px-5">Save</Button>
      </Form>
    </div>
  );
};

export default MyProfile;
