import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function WelcomeToProjectFUE() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLOHqh3XatTe205mB3ODQzVipZWmv-GIPhBw&usqp=CAU' className='m-3' alt="Project FUE Logo" />
      </div>
      <h1 className='m-3'>Welcome to Project FUE</h1>
      <div className="text-center">
        <button className='btn btn-dark m-3' onClick={() => setCount((count) => count + 1)}>
          {count} fucks given
        </button>
      </div>
      <p className='m-5'>
        Made In Cornwall
      </p>
    </div>
  );
}

export default WelcomeToProjectFUE;
