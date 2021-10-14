import React from "react";
import { Col } from 'reactstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='About '>
                    <div className='title ' data-aos="fade-up" data-aos-duration='1200'>
                        About me
                    </div>
                </div>
                <Col col='12' sm='6' md='3'>
                    <div className='card CardC'>
                        <div className='action'>
                            <i className='bi bi-geo-alt' id='iconC'></i>
                        </div>
                        <strong className='fs-4'>Adress</strong>
                        <p>Andijon city Revael 136 house</p>
                    </div>
                </Col>
                <Col col='12' sm='6' md='3'>
                    <div className='card CardC'>
                        <div className='action'>
                            <i className='bi bi-phone' id='iconC'></i>
                        </div>
                        <strong className='fs-4'>Phone</strong>
                        <p>93 541 7375</p>
                    </div>
                </Col>
                <Col col='12' sm='6' md='3'>
                    <div className='card CardC'>
                        <div className='action'>
                            <i className='bi bi-envelope' id='iconC'></i>
                        </div>
                        <strong className='fs-4'>Email Address</strong>
                        <p>Xursanbekovbaho<br/>vuddin@gmail.com</p>
                    </div>
                </Col>
                <Col col='12' sm='6' md='3'>
                    <div className='card CardC'>
                        <div className='action'>
                            <i className='bi bi-globe' id='iconC'></i>
                        </div>
                        <strong  className='fs-4'>Website</strong>
                        <p>AnMyPorfolio.netlify.app</p>
                    </div>
                </Col>
            </div>
        </div>
    )
}

export default Contact;