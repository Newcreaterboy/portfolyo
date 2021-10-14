import React, {useEffect} from 'react';
import { Col, Container,Button, Row } from 'reactstrap';
import img from './photo.jpg';
import 'aos/dist/aos.css';
import Aos from 'aos';
import './aboutcss.css';

function About(){
    useEffect(()=>{
        Aos.init();
    },[]);
    return(
        <>
          <Container className='mb-5  p-3'>
            
                    <div className='About '>
                       <div className='title '  data-aos="fade-up" data-aos-duration='1200'>
                            About me
                        </div>
                    </div>
                    <div className='row yy'>
                        
                        <div className='rr  col-sm-12 col-md-6 col-lg-6 col-xl-6'><img src={img} data-aos="fade-up" data-aos-duration='1200' className='photo rounded '/></div>
                        <div className='  col-sm-12 col-md-6 col-lg-6 col-xl-6  tt pl-3'>
                            <h1 data-aos="fade-up" data-aos-duration='1200' className='fs-3 fw-bold mb-3'>Hey there! I'm Bahovuddin </h1>
                            <p  className='About_p' data-aos="fade-up" data-aos-duration='1200'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nobis, molestias aut quia perspiciatis consectetur dolore facere asperiores similique exercitationem quae neque voluptatum itaque vero, ab maxime? Dolores accusamus ipsum illo minima quae delectus esse excepturi nesciunt cumque quia eligendi, impedit ad distinctio repellat accusantium officia rerum possimus omnis repudiandae?
                            <br/>
                            <br/>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nobis, molestias aut quia perspiciatis consectetur dolore facere asperiores similique exercitationem quae neque voluptatum itaque vero, ab maxime? Dolores accusamus ipsum illo minima quae delectus esse excepturi nesciunt cumque quia!
                            </p>
                            <div >
                                    <Button className='rang'><a href='see my work' class='see'>See my work</a></Button>
                                </div>
                        </div>
             </div>
          </Container>
        </>
    )
}
export default About;