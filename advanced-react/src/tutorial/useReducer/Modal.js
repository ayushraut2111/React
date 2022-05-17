import React,{useStae,useEffect} from 'react';

const Modal=(props)=>{
    const {modalcontent}=props;
    console.log(modalcontent)
    return(
        <>
        <h4 className='heading'>{modalcontent}</h4>
        </>
    );
}
export default Modal;