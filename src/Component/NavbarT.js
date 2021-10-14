import React,{useEffect} from "react";
import './NAvbarcss.css'
import { NavLink } from "react-router-dom";
import $ from 'jquery'

const NavbarT = ()=>{
    function Animation(){
        let tabsNewAnim = $('#navbarSupportedContent');
        let activeNewAnim = tabsNewAnim.find('.active');
        let activeNewHeight = activeNewAnim.innerHeight();
        let activenewWidth = activeNewAnim.innerWidth();
        let itemPosNewAnimTop = activeNewAnim.position();
        let itemPosNewAnimLeft = activeNewAnim.position();
        // $(".hori-selector").css({
        //     "top":itemPosNewAnimTop.top + " px",
        //     "left":itemPosNewAnimLeft.left + " px",
        //     "height": activeNewHeight + " px",
        //     "width": activenewWidth +  " px"
        // })
        $("#navbarSupportedContent").on("click","li",function(){
            $("#navbarSupportedContent ul li").removeClass('active');
            $(this).addClass('active');
            let activeNewHeight = $(this).innerHeight();
            let activenewWidth = $(this).innerWidth();
            let itemPosNewAnimTop = $(this).position();
            let itemPosNewAnimLeft = $(this).position();
            $(".hori-selector").css({
                "top":itemPosNewAnimTop.top + "px",
                "left":itemPosNewAnimLeft.left + "px",
                "height": activeNewHeight + "px",
                "width": activenewWidth + "px"
            })
        })
        
    }

    useEffect(()=>{
        Animation();
        $(window).on("resize",function(){
            setTimeout(function(){
                Animation();
            },100)
        })
    }, []);

 
  function bos(){
      
  }
        
    
    return(
       

      
        <nav className='navbar navbar-expand-lg navbar-mainbg'>
             <div className='container vv'>
            <NavLink className='navbar-brand navbar-logo' to='/' exact>
                Bahovuddin
            </NavLink>
            <button onClick={function(){
                setTimeout(function(){
                    Animation()
                })
            }} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className='fas fa-bars text-white'></i>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav ml-auto'> 
                    <div className='hori-selector'>
                        <div className='left'></div>
                        <div className='right'></div>
                    </div>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/home' exact>Home</NavLink>
                    </li>
                    <li className='nav-item '>
                        <NavLink onClick={bos} className='nav-link' to='/about' exact>About</NavLink>
                    </li>
                    <li className='nav-item '>
                        <NavLink className='nav-link' to='/skills' exact>Skills</NavLink>
                    </li>
                    <li className='nav-item '>
                        <NavLink className='nav-link' to='/services' exact>Services</NavLink>
                    </li>
                    <li className='nav-item '>
                        <NavLink className='nav-link' to='/work' exact>Work</NavLink>
                    </li>
                    <li className='nav-item '>
                        <NavLink className='nav-link' to='/contact' exact>Contact</NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
      
 



// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Link</a>
//       </li>
//       <li class="nav-item dropdown">
//         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown
//         </a>
//         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//           <a class="dropdown-item" href="#">Action</a>
//           <a class="dropdown-item" href="#">Another action</a>
//           <div class="dropdown-divider"></div>
//           <a class="dropdown-item" href="#">Something else here</a>
//         </div>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//     <form class="form-inline my-2 my-lg-0">
//       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
// </nav>

    )
}

export default NavbarT