
import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';



const Contact = () => {
    return (
        <div className="container m-5">

            <h2 className=" text-center p-5">Please Contact Us</h2>
            <p>We are care all time for for our tech child.Be alert to which attention-getting signals work best for children's learning styles. For visual learners, try blinking the lights or raising your hand.Get children's attention by labeling objects or activities, and pointing out similarities and differences. Ask them questions to get them to look at the item Some children can be easily distracted and/or exhibit impulsive behavior. When this is the case, speak calmly, use one-step directions, and give them gentle touches</p>

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