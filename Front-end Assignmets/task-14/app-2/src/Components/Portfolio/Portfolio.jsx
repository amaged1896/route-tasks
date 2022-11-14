import React from 'react';
import PortfolioStyle from '../Portfolio/Portfolio.module.css';
export default function Portfolio() {
	return (
		<>
			<section className="mt-5 pt-5">
				<div className="container w-50">
					<div className="content text-center">
						<h1 className=" fw-bolder display-5">PORTFOLIO</h1>
						<div className="icons pt-1 mb-4 d-flex align-items-center justify-content-center">
							<div className={PortfolioStyle.line}></div>
							<div className="px-3">
								<i className="fa fa-star fa-2xl"></i>
							</div>
							<div className={PortfolioStyle.line}></div>
						</div>
					</div>
					<div className="row g-2">
						<div className="col-md-4">
							<div className="item position-relative">
								<img className="w-100" src="../../../img/cabin.png" alt="" />
								<div className={`overlay w-100 h-100 ${PortfolioStyle.layer}`}>
									<div className={PortfolioStyle.title}>
										<i class="fa-solid fa-plus display-1"></i>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="item position-relative">
								<img className="w-100" src="../../../img/cake.png" alt="" />
								<div className={`overlay w-100 h-100 ${PortfolioStyle.layer}`}>
									<div className={PortfolioStyle.title}>
										<i class="fa-solid fa-plus display-1"></i>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="item position-relative">
								<img className="w-100" src="../../../img/circus.png" alt="" />
								<div className={`overlay w-100 h-100 ${PortfolioStyle.layer}`}>
									<div className={PortfolioStyle.title}>
										<i class="fa-solid fa-plus display-1"></i>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="item position-relative">
								<img className="w-100" src="../../../img/game.png" alt="" />
								<div className={`overlay w-100 h-100 ${PortfolioStyle.layer}`}>
									<div className={PortfolioStyle.title}>
										<i class="fa-solid fa-plus display-1"></i>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="item position-relative">
								<img className="w-100" src="../../../img/safe.png" alt="" />
								<div className={`overlay w-100 h-100 ${PortfolioStyle.layer}`}>
									<div className={PortfolioStyle.title}>
										<i class="fa-solid fa-plus display-1"></i>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="item position-relative">
								<img
									className="w-100"
									src="../../../img/submarine.png"
									alt=""
								/>
								<div className={`overlay w-100 h-100 ${PortfolioStyle.layer}`}>
									<div className={PortfolioStyle.title}>
										<i class="fa-solid fa-plus display-1"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
