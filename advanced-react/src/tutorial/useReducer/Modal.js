import React,{useStae,useEffect} from 'react';

const Modal=(props)=>{
    const {modalcontent,closeModal}=props;
    useEffect(()=>{
        setTimeout(() => {    // we can also use it without useeffect also
            closeModal();
        }, 3000);
    });
    return(
        <>
        <h4 className='heading'>{modalcontent}</h4>
        </>
    );
}
export default Modal;