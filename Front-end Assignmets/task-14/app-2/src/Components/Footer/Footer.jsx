import React from 'react';
import FooterStyle from './Footer.module.css';
export default function Footer() {
	return (
		<footer
			className={`fixed-bottom p-2 text-white text-center ${FooterStyle.footer}`}
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<h4>LOCATION</h4>
						<p>2215 John Daniel Drive</p>
						<p>Clark, MO 65243</p>
					</div>

					<div className="col-lg-4">
						<h4 className="pb-3">AROUND THE WEB</h4>
						<a
							class="btn btn-outline-light btn-social rounded-circle mx-1"
							href="#!"
						>
							<i class="fab fa-fw fa-facebook-f"></i>
						</a>
						<a
							class="btn btn-outline-light btn-social rounded-circle mx-1"
							href="#!"
						>
							<i class="fab fa-fw fa-twitter"></i>
						</a>
						<a
							class="btn btn-outline-light btn-social rounded-circle mx-1"
							href="#!"
						>
							<i class="fab fa-fw fa-linkedin-in"></i>
						</a>
						<a
							class="btn btn-outline-light btn-social rounded-circle mx-1"
							href="#!"
						>
							<i class="fab fa-fw fa-dribbble"></i>
						</a>
					</div>
					<div className="col-lg-4">
						<h4>ABOUT FREELANCER</h4>
						<p className="px-5">
							Freelance is a free to use,MIT licensed Bootstrap theme created by
							Route
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
