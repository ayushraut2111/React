import React from 'react';

const ErrorExample=()=>
{
    let title='error example';
    const Errorfn=()=>
    {
        title='Hello people';
        
        console.log(title);
    }
    return(
      <React.Fragment>
          <h2>{title}</h2>
          <button type='button'className='btn' onClick={()=>Errorfn()}>
              Button
              </button>
      </React.Fragment>
    );
}
export default ErrorExample;