import React from 'react';
import ErrorStyle from '../ErrorPage/ErrorPage.module.css';
export default function ErrorPage() {
    return (
        <>
            <div className={ErrorStyle.error}>
                <h1 className={ErrorStyle.test}>Page Not Found</h1>
                <p className='fw-bolder pt-2'>We could't find what you were looking for.</p>
            </div>
        </>
    );
}
