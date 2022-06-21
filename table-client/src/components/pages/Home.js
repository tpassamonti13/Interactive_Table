import React, { useState } from "react";
import DecadeButton from '../../components/DecadeButton.js';
import logo from '../../images/caciLogo.png';
import '../../App.css';
import './Pages.css';


function Home()
{
	return (
		<div className='tableArea'>
			<div className='tableLeft'>
				<div className='container-fluid h-100'>
					<div className='row h-100'>
						<div className='col-md-12 text-center'>
							<div className='buttonContainer'>
								<img src={logo} alt="Logo" width="80%" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='tableRight'>
				<div className='container-fluid h-100'>
					<div className='row h-100'>
						<div className='col-md-12 text-center'>
							<div className='buttonContainer'>
								<DecadeButton text='2000-2010' navigation='/twoThousand' />
								<br />
								<br />
								<br />
								<br />
								<DecadeButton text='2011 - TODAY' navigation='/today' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home