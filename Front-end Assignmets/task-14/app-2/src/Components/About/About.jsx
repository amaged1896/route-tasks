import React from 'react';
import AboutStyle from '../About/About.module.css';
export default function About() {
	return (
		<section className={AboutStyle.test}>
			<div className="container text-center text-white fw-bolder">
				<h1 className="fw-bolder display-5">ABOUT</h1>
				<div className="icons py-1 d-flex align-items-center justify-content-center">
					<div className={AboutStyle.line}></div>
					<div className="px-3">
						<i className="text-white fa fa-star fa-2xl"></i>
					</div>
					<div className={AboutStyle.line}></div>
				</div>
				<div className="content d-flex pt-3 justify-content-center">
					<div className="left me-4 text-start w-25">
						<p>
							Freelancer is a free bootstrap theme created by Route. The
							download includes the complete source files including HTML, CSS,
							and JavaScript as well as optional SASS stylesheets for easy
							customization.
						</p>
					</div>
					<div className="right ms-4 text-start w-25">
						<p>
							You can create your own custom avatar for the masthead, change the
							icon in the dividers, and add your email address to the contact
							form to make it fully functional!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
