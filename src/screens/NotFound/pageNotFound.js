import React from "react";
import { useParams } from "react-router";
import  NotFoundFoto from "../../assets/WB_NotFound.png";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";


function pageNotFound() {

	
  return (
    <>
     <Header/>
		<div className='NotFound' style={{width: '100%'}}>
            <img src={NotFoundFoto} style={{ width: '70%', margin:'auto', marginTop:'50px', objectFit:'cover'}}/>
		</div>
    <Footer/>
    </>
  );

}
export default pageNotFound;
