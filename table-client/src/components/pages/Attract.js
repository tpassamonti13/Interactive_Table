import React, { useState } from "react";
import DecadeButton from '../../components/DecadeButton.js';
import { useNavigate } from "react-router-dom";
import { StartVideo } from '../../components/Video';
import logo from '../../images/caciLogo.png';
import '../../App.css';
import './Pages.css';

export default function Attract()
{
	const [isVisible, setIsVisible] = useState(true);
	const navigate = useNavigate();
	const className = 'tableArea ' + (isVisible ? "fadeIn" : "fadeOut");

	function playOverviewVideo(navigation)
	{
		setIsVisible(false);

		if (navigation === '/twoThousand')
		{
			StartVideo('overview_twothousand');

			setTimeout(function()
			{
				navigate('/twoThousand');
			}, 5000);
		}
		else if (navigation === '/today')
		{
			StartVideo('overview_today');

			setTimeout(function()
			{
				navigate('/today');
			}, 5000);
		}
  
	}

	return (
		<div className={className}>
			<div className='tableLeft'>
				<div className='container-fluid h-100'>
					<div className='row h-100'>
						<div className='col-md-12 text-center'>
							<div className='buttonContainer'>
								<img src={logo} alt="" width="60%" />
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
								<div onClick={() => playOverviewVideo('/today')}>
									<DecadeButton text='2010-NOW' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
