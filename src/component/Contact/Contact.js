
import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';



const Contact = () => {
    return (
        <div className="container m-5">
            <h2 className=" text-center p-5">Please Contact Us</h2>
            <InputGroup className="mb-3">

                <FormControl aria-label="First name" placeholder="Enter Your First Name" />
                <FormControl aria-label="Last name" placeholder="Enter Your Last Name" />
                <FormControl aria-label="Messege" placeholder="Enter Your Email" />
                <Button variant="outline-secondary" id="button-addon2">Submit</Button>
            </InputGroup>


        </div>
    );
};


export default Contact;