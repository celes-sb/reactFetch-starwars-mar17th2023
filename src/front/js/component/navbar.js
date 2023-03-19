import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	//<a href="./demo.html">
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link to="/">
					<img className="img-responsive h-25 w-25" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" />
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
					<ul className="navbar-nav">
						<li className="nav-item dropdown">
							<button type="button" class="btn btn-warning">
								Favorites <span class="badge text-bg-danger">4</span>
							</button>
							<ul className="dropdown-menu dropdown-menu-dark">
								<div>
									<li><a className="dropdown-item" href="#">Items </a></li><button><i className="fa-solid fa-trash"></i></button>
								</div>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
