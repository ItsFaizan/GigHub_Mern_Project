import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../../assets/profile.png';
import styles from '../../styles/Login.module.css';


function Login() {

  return (
<div className="container mx-auto" style={{background: '#dcdce6', backgroundImage: `url(${require('../../assets/Background.png')})`}}>

    <div className='flex justify-center items-center h-screen'>
      <div className={styles.glass}>

        <div className="title flex flex-col items-center">
        <h4 className='text-4xl font-bold' style={{ marginTop: '-50px' }}>
        Welcome!
      </h4>
         
        </div>

        <form className='py-1' >
            <div className='profile flex justify-center py-4'>
                <img src={avatar} className={styles.profile_img} alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
                <input className={styles.textbox} type="text" placeholder='Username' />
                <input className={styles.textbox} type="text" placeholder='Password' />
                <button className={styles.btn} type='submit'>Login</button>
            </div>

            <div className="text-center py-4">
              <span className='text-gray-500'>Don't have an account? <Link className='text-red-500' to="/register">Sign Up</Link></span>
            </div>

        </form>

      </div>
    </div>
</div>
  );
}

export default Login;