import React from 'react';
import {Link} from "react-router-dom";


function Header() {
  return (
    <nav class="fh5co-nav" role="navigation">
		<div class="container">
			<div class="top-menu">
				<div class="row">
					<div class="col-sm-2">
						<div id="fh5co-logo"><a href="index.html">Architect M<span>.</span></a></div>
					</div>
					<div class="col-sm-10 text-right menu-1">
						<ul>
							<li class="active"><Link to="/">Home</Link></li>
							<li ><Link to="/about">About</Link></li>
							<li ><Link to="/portfolio">Portfolio</Link></li>
							<li ><Link to="/cost">Cost</Link></li>
							<li ><Link to="/contact">Contact</Link></li>
							{/* <li class="has-dropdown"><a href="single.html">Dropdown</a>
								<ul class="dropdown">
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
