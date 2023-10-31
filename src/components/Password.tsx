import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Password = () => {
    return (
        <div className='profile-page rounded'>
            <h2 className="my-4">Change Password</h2>
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
    )
}

export default Password
