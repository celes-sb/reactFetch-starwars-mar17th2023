import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	//<a href="./demo.html">
	const { store, actions } = useContext(Context)

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
							<button type="button" className="btn btn-warning">
								Favorites <span className="badge text-bg-danger">4</span>
							</button>
							<ul className="dropdown-menu dropdown-menu-dark">
								{store.favoritos && store.favoritos.length > 0 ? <>
									{store.favoritos.map((item, index => {
										return <Link key={index} to={item.link} className="dropdown-item" href="#">
											{item.name}
										</Link>
									}))}
								</> : <></>}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
