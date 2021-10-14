import React, {useEffect} from "react";
import { Container, Row, Col,Button } from "reactstrap";
import './Skillscss.css';
import Img from './gif1.gif'
import 'aos/dist/aos.css';
import Aos from 'aos';

function Skills() {
    useEffect(()=>{
        Aos.init();
    },[]);
    return (
        <div className=' bg-dark w-100 oo '>
            <Container className=''>
                <div className='About ' data-aos="fade-up" data-aos-duration='1200'>
                    <div className='title' >
                        My Skills
                    </div>
                </div>
                <Row>
                    <Col md='6 ' sm='12' col='12'>

                        <div >
                            <h1 className='text-white' data-aos="fade-up" data-aos-duration='1200'>My skills and experiences</h1>
                            <p  className='text-white' data-aos="fade-up" data-aos-duration='1200'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa mollitia in, cum laborum asperiores nostrum sequi commodi unde. Dolorum sed itaque dolores facere soluta saepe debitis, atque, quae provident commodi nam accusamus nisi exercitationem ut vitae ipsam obcaecati tempora modi harum veniam delectus et libero tenetur. Ullam laborum placeat autem!</p>
                            <div className='mt-5' >
                                    <Button data-aos="fade-up" data-aos-duration='1200' className='rang'><a href='see my work' class='see'>See my work</a></Button>
                                </div>
                        </div>
                    </Col>
                    <Col md='6' sm='12' col='12' className='mb-4' data-aos="fade-up" data-aos-duration='1200'>
                        <div className='info text-white pt-3'>
                            <span>Html</span>
                            <span>95%</span>
                        </div>
                        <div className='line'></div>
                        <div className='info text-white pt-3'>
                            <span>Css</span>
                            <span>95%</span>
                        </div>
                        <div className='line'></div>
                        <div className='info text-white pt-3'>
                            <span>Javascript</span>
                            <span>95%</span>
                        </div>
                        <div className='line'></div>
                        <div className='info text-white pt-3'>
                            <span>Jquery</span>
                            <span>95%</span>
                        </div>
                        <div className='line'></div>
                        <div className='info text-white pt-3'>
                            <span>Reactjs</span>
                            <span>95%</span>
                        </div>
                        <div className='line'></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Skills;