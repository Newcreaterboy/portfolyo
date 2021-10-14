import React,{useEffect} from "react";
import { Card, CardText, CardTitle, Row } from "reactstrap";
import './servicescss.css'
import 'aos/dist/aos.css';
import Aos from 'aos';
const Services = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className='container Cervices mb-5'>
            <Row>
                <div className='col-sm-12 col-md-12'>
                    <div className='About ' data-aos="fade-up" data-aos-duration='1200'>
                        <div className='title titles' >
                            MY Services
                        </div>

                    </div>
                    <p className='lorem' data-aos="fade-up" data-aos-duration='1200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a repellat cupiditate error consequatur? Id perferendis, modi quas ipsa dignissimos labore adipisci sint nulla voluptatibus reprehenderit numquam iste, itaque necessitatibus!</p>

                </div>
            </Row>
            <div className='row'>
                <div className='col-sm-12 col-md-4'>
                    <Card className='text-center mb-2 CardS p-3' data-aos="fade-right" data-aos-duration='1200'>
                        <div className='my-4' id='red'>
                            <i className="bi bi-palette icon" ></i>
                        </div>
                        <CardTitle className='colorS'>
                            Web design
                        </CardTitle>
                        <CardText className='lorem'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur adipisicing
                        </CardText>
                    </Card>
                </div>
                <div className='col-sm-12 col-md-4' >
                    <Card className='text-center  CardS p-3 ' data-aos="fade-down" data-aos-duration='1200'>
                        <div className='my-4' id='red'>
                        <i className="bi bi-file-code icon"></i>
                        </div>
                        <CardTitle className='colorS'>
                            Web developer
                        </CardTitle>
                        <CardText className='lorem '>
                            Lorem, ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur adipisicing
                        </CardText>
                    </Card>
                </div>
                <div className='col-sm-12 col-md-4 mt-2'>
                    <Card className='text-center CardS p-3' data-aos="fade-left" data-aos-duration='1200'>
                    <div className='my-4 ' id='red'>
                       <i class="bi bi-subtract icon"></i>
                    </div>
                        <CardTitle className='colorS'>
                            YouTuber
                        </CardTitle>
                        <CardText className='lorem'>

                            Lorem, ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur adipisicing
                        </CardText>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Services;