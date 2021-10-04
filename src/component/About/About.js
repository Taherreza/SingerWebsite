import React from 'react';
import { ProgressBar } from 'react-bootstrap';


const About = () => {
    return (
        <div className="container m-5">
            <div className="row">
                <div className="about text-center mt-3">
                    <h2>WHO WE ARE</h2>
                    <p>Fable daycare, preschool, and kindergarten</p>
                </div>
                <div className="about-left col-md-6">
                    <p> <b>Well come to Techedu come with us,</b>  we also teach children about the basic values of human beings as honesty, kindness, generosity, courage, freedom, equality and respect. Learn to celebrate diversity in a spirit of understanding and tolerance and develop a positive regard and awareness of other people. They are taught the values and responsibilities needed to become active members of the community, tolerance and develop something which the modern world is desperate for norem ipsum dolor sit amet desperate.</p>
                </div>
                <div className="about-right col-md-6">
                    <div>
                        <p> <b>Playing Science</b> </p>
                        <ProgressBar animated now={95} />
                    </div>
                    <div>
                        <p> <b>Arts And Craft</b> </p>
                        <ProgressBar animated now={80} />
                    </div>
                    <div>
                        <p> <b>English Lessons</b> </p>
                        <ProgressBar animated now={70} />
                    </div>
                    <div>
                        <p> <b>Creative Writing</b> </p>
                        <ProgressBar animated now={65} />
                    </div>
                    <div>
                        <p> <b>Entertainment Training</b> </p>
                        <ProgressBar animated now={60} />
                    </div>



                </div>

            </div>
        </div>
    );
};

export default About;

