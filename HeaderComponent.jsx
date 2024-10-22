import React, { useState } from 'react';


const HeaderComponent = () =>{
    const [count, setCount] = useState(0);

const incBtn =() =>{
    const countNum = count + 2;
    setCount(countNum);
}
const decBtn =() =>{
    const countNum = count - 2;
    setCount(countNum);
}



    return(
        <div className="buttonComponent ">
          <p> {count} </p>
          <button className='clickBtn' onClick={() => decBtn()}>Decrease</button>
          <button className='clickBtn' onClick={() => incBtn()}>Increase</button>
          
        </div>
    )
}

export default HeaderComponent;