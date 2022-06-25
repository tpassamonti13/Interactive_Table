import React, { useState } from "react";
import DecadeButton from '../../components/DecadeButton.js';
import { useNavigate } from "react-router-dom";
import { StartVideo } from '../../components/Video';
import logo from '../../images/caciLogo.png';
import '../../App.css';
import './Pages.css';

function Home()
{
	const [isVisible, setIsVisible] = useState(true);
	const navigate = useNavigate();

	function playOverviewVideo(navigation)
	{
		//setIsVisible(false);
		navigate(navigation);
	  	//StartVideo('1');
	}

	return (
		<div className='tableArea' style={{ display: isVisible ? "block" : "none" }}>
			<div className='tableLeft'>
				<div className='container-fluid h-100'>
					<div className='row h-100'>
						<div className='col-md-12 text-center'>
							<div className='buttonContainer'>
								<img src={logo} alt="Logo" width="60%" />
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
								<h1>SELECT A DECADE</h1>
								<br/>
								<div onClick={() => playOverviewVideo('/twoThousand')}>
									<DecadeButton text='2000-2009' />
								</div>
								<br />
								<br />
								<br />
								<br />
								<DecadeButton text='2010 - NOW' navigation='/today' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home