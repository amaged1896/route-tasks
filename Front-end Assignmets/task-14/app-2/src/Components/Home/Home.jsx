import React from 'react';
import HomeStyle from '../Home/Home.module.css';

export default function Home() {
    return (
        <>
            <section className={HomeStyle.test}>
                <div className="content text-center">
                    <img className='w-50 pb-3' src='../../../img/avataaars.svg' alt="" />
                    <h1 className='text-white fw-bolder display-5'>START REACT</h1>
                    <div className='icons py-4 d-flex align-items-center justify-content-center'>
                        <div className={HomeStyle.line}></div>
                        <div className='px-3'>
                            <i className='text-white fa fa-star fa-2xl'></i>
                        </div>
                        <div className={HomeStyle.line}></div>
                    </div>
                    <p className='fw-bolder text-white'>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </section>
        </>
    );
}