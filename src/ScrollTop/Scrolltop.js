import React, { useEffect, useState } from "react";
import {useWindowScroll} from 'react-use';
import './ScrollTop.css'
function ScrollTop (){
    const { y:pageYoffset} = useWindowScroll();
    const [visible, setVisible] = useState(false);

    useEffect(()=>{
        if(pageYoffset>400){
            setVisible(true);
        }else{
            setVisible(false);
        }
    },[pageYoffset])

const ScrollToTop = ()=> window.scrollTo({top:0,behavior:'smooth'}) 

    if(!visible){
        return false;
    }
    return(
        <div className='scroll-to-top cursor-pointer text-center' onClick={ScrollToTop}>
                <i className='iconS bi bi-chevron-up'></i>
        </div>
    )
}

export default ScrollTop;