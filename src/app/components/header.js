import React from 'react';
import {Link} from "react-router-dom";


function Header() {
  return (
    <nav className="fh5co-nav" role="navigation">
		<div className="container">
			<div className="top-menu">
				<div className="row">
					<div className="col-sm-2">
						<div id="fh5co-logo"><Link to="/"> &nbsp; Muza<span>.</span></Link></div>
					</div>
					<div className="col-sm-10 text-right menu-1">
						<ul>
							<li className="active"><Link to="/">Home</Link></li>
							<li ><Link to="/about">About</Link></li>
							<li ><Link to="/portfolio">Portfolio</Link></li>
							<li ><Link to="/cost">Cost</Link></li>
							<li ><Link to="/contact">Contact</Link></li>
							{/* <li className="has-dropdown"><a href="single.html">Dropdown</a>
								<ul className="dropdown">
									<li><a href="#">Infrastructure</a></li>
									<li><a href="#">Residential</a></li>
									<li><a href="#">Environmental</a></li>
									<li><a href="#">Megabuilders</a></li>
								</ul>
							</li>
							<li><a href="contact.html">Contact</a></li> */}
						</ul>
					</div>
				</div>
				
			</div>
		</div>
	</nav>
  );
}

export default Header;
