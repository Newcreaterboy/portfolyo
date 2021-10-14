import React,{useEffect} from "react";
import {Row , Col,Button } from 'reactstrap';
import 'aos/dist/aos.css';
import Aos from 'aos';
import ImgW from './photo1.jpg';
import './workcss.css';
import ImgW1 from './photo2.jpg';
import ImgW2 from './photo3.jpg';
import ImgW3 from './photo4.jpg';
import ImgW4 from './photo5.jpg';
import ImgW5 from './photo6.jpg';
const Work = () =>{
    useEffect(()=>{
        Aos.init();
    },[]);
    return(
<div className='bg-dark'>
<div className='container '>
            <Row>
                <Col md='12'>
                <div className='About 'data-aos="zoom-in-right" data-aos-duration='1200'>
                       <div className='title'  data-aos="fade-up" data-aos-duration='1200'>
                            About me
                        </div>
                    </div>
                </Col>
            </Row>
           <Row>
               <Col col='12' sm='6' md='4'>
                    <div className='box mt-3'data-aos="zoom-in-left" data-aos-duration='1200'>
                       <img src={ImgW} className='imgw'/>
                    </div>
               </Col>
               <Col col='12' sm='6' md='4'>
               <div className='box mt-3'data-aos="fade-left" data-aos-duration='1200'>
               <img src={ImgW1} className='imgw'/>
               </div>
               </Col>
               <Col col='12' sm='6' md='4'>
               <div className='box mt-3' data-aos="flip-right" data-aos-duration='1200'>
               <img src={ImgW2} className='imgw'/>
               </div>
               </Col>
               <Col col='12' sm='6' md='4'>
               <div className='box mt-3' data-aos="flip-right" data-aos-duration='1200'>
               <img src={ImgW3} className='imgw'/>
               </div>
               </Col>
               <Col col='12' sm='6' md='4'>
               <div className='box mt-3' data-aos="flip-up" data-aos-duration='1200'>
               <img src={ImgW4} className='imgw'/>
               </div>
               </Col>
               <Col col='12' sm='6' md='4'>
               <div className='box mt-3' data-aos="flip-down" data-aos-duration='1200'>
               <img src={ImgW5} className='imgw'/>
               </div>
               </Col>

           </Row>
           <div className='mt-4  d-flex justify-content-center align-items-center mb-5' >
                            <Button  className='rang mb-4 ' ><a href='see my work' class='see'>See my work</a></Button>
                        </div>
        </div>
</div>
    )
}

export default Work;