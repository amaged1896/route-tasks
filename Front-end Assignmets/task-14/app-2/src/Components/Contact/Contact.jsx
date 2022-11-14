import React from 'react';
import ContactStyle from '../Contact/Contact.module.css';

export default function Contact() {
	return (
		<section className={ContactStyle.test}>
			<div className="container">
				<div className="content text-center">
					<h1 className=" fw-bolder display-5">CONTACT ME</h1>
					<div className="icons pt-1 mb-4 d-flex align-items-center justify-content-center">
						<div className={ContactStyle.line}></div>
						<div className="px-3">
							<i className="fa fa-star fa-2xl"></i>
						</div>
						<div className={ContactStyle.line}></div>
					</div>
				</div>
				<div className="form d-flex flex-column justify-content-center align-items-center">
					<input
						className={`${ContactStyle.input} pb-2 pt-2 w-50 `}
						placeholder="Name"
						type="text"
					/>
					<input
						className={`${ContactStyle.input} pb-2 pt-2 mt-2 w-50 `}
						placeholder="Email Address"
						type="email"
					/>
					<input
						className={`${ContactStyle.input} pb-2 pt-2 mt-2 w-50 `}
						placeholder="Phone Number"
						type="number"
					/>
					<textarea
						className={`${ContactStyle.input} pb-2 pt-2 mt-2 w-50 `}
						name=""
						id=""
						cols="25"
						maxLength={'200'}
						placeholder="Message"
						rows="5"
					></textarea>
					<div className="d-flex justify-content-start mt-3 w-50">
						<button
							className={`btn px-4 py-3 text-start btn-2xl ${ContactStyle.button}`}
						>
							Send
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
