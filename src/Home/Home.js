import React,{useEffect} from "react";
import 'aos/dist/aos.css';
import Aos from 'aos';
import { Container,   Row,Col, Button } from 'reactstrap';
import './homecss.css'
const Home = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className='home vh-100 w-100'>
            <Container className='p-5'>
                <Row>
                    <Col className='pt-5'>
                        <p className='text-white ' data-aos="fade-up">Hello, I'm</p>
                        <h1 className='fs-80 fw-bold text-white' data-aos="fade-up" data-aos-duration='1200'>Bahovuddin Xursanbekov</h1>
                        <div className='anim2 ' data-aos="fade-up" data-aos-duration='1200'>
                            <h1>Bloger</h1>
                            <h1>Web Developer</h1>
                            <h1>Youtuber</h1>
                        </div>
                        <div className='mt-3 ' data-aos="fade-up" data-aos-duration='1200'>
                            <Button className='rang' ><a href='see my work' class='see'>See my work</a></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
     
        </div>
     
    )
}

export default Home;