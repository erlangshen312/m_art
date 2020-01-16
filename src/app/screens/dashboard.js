import React from 'react';

function Dashboard() {
  return (
    <div>
      {/* <div className="fh5co-loader"></div> */}
	    {/* <div id="page"></div> */}

        <div className="container">
		<div id="fh5co-intro">
			<div className="row animate-box">
				<div className="col-md-8 col-md-offset-2 col-md-pull-2">
					<h2>Best showcase for architecture &amp; interior. <span><em>by</em> <a href="http://freehtml5.co">FreeHTML5.co</a></span></h2>
				</div>
			</div>
		</div>
		<aside id="fh5co-hero">
			<div className="flexslider">
				<ul className="slides">
			   	<li>
					   <img src={require('../../assets/images/img_bg_1.jpg')}/>
			   		<div className="container-fluid">
			   			<div className="row">
				   			<div className="col-md-6 col-xs-8 col-md-offset-1 slider-text">
				   				<div className="slider-text-inner">
				   					<h1><a href="#">Best showcase for architecture</a></h1>
										<h2>Free html5 templates Made by <a href="http://freehtml5.co/" target="_blank">freehtml5.co</a></h2>
				   				</div>
				   			</div>
				   		</div>
			   		</div>
			   	</li>
			   	<li >
				   <img src={require('../../assets/images/img_bg_1.jpg')}/>
			   		<div className="container-fluid">
			   			<div className="row">
				   			<div className="col-md-6 col-xs-8 col-md-offset-1 slider-text">
				   				<div className="slider-text-inner">
				   					<h1><a href="#">Best showcase for architecture</a></h1>
										<h2>Free html5 templates Made by <a href="http://freehtml5.co/" target="_blank">freehtml5.co</a></h2>
				   				</div>
				   			</div>
				   		</div>
			   		</div>
			   	</li>
			   	<li >
				   <img src={require('../../assets/images/img_bg_1.jpg')}/>
			   		<div className="container-fluid">
			   			<div className="row">
				   			<div className="col-md-6 col-xs-8 col-md-offset-1 slider-text">
				   				<div className="slider-text-inner">
				   					<h1><a href="#">Best showcase for architecture</a></h1>
										<h2>Free html5 templates Made by <a href="http://freehtml5.co/" target="_blank">freehtml5.co</a></h2>
				   				</div>
				   			</div>
				   		</div>
			   		</div>
			   	</li>
			   	<li>
				   <img src={require('../../assets/images/img_bg_1.jpg')}/>
			   		<div className="container-fluid">
			   			<div className="row">
				   			<div className="col-md-6 col-xs-8 col-md-offset-1 slider-text">
				   				<div className="slider-text-inner">
				   					<h1><a href="#">Best showcase for architecture</a></h1>
										<h2>Free html5 templates Made by <a href="http://freehtml5.co/" target="_blank">freehtml5.co</a></h2>
				   				</div>
				   			</div>
				   		</div>
			   		</div>
			   	</li>	   	
			  	</ul>
		  	</div>
		</aside>
    </div>
    </div>
  );
}

export default Dashboard;
