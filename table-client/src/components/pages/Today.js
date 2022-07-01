import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CultureToday from '../views/CultureToday'
import TechnologyTwoThousands from '../views/TechnologyTwoThousands.js'
import GrowthTwoThousands from '../views/GrowthTwoThousands.js'
import '../../App.css';
import './Pages.css';
import '../HCGTButton.css'

export default function TwoThousand()
{
	const navigate = useNavigate();

	const [isVisible, setIsVisible] = useState(true);
	const [isVisibleCulture, setIsVisibleCulture] = useState(true);
	const [isVisibleTechnology, setIsVisibleTechnology] = useState(false);
	const [isVisibleGrowth, setIsVisibleGrowth] = useState(false);

	const className = (isVisible ? "fadeIn" : "fadeOut");

	const [timer, setTimer] = useState(0);
	
	//Sets a timeout for the kiosk. Returns to the Attract screen if the kiosk is timedout
	useEffect(() => 
	{
		setTimer(timer => setTimeout(() => 
  		{
  			setIsVisible(false);

			setTimeout(function()
			{
				navigate('/');
			}, 5000);
  		}, 600000));

  		return () => clearTimeout(timer);
	
	}, []);

	const resetTimeout = () => 
	{
		setTimer(0); 
		clearTimeout(timer);

			setTimer(timer => setTimeout(() => 
	  		{
	  			setIsVisible(false);

				setTimeout(function()
				{
					navigate('/');
				}, 5000);
	  		}, 600000));

	  		return () => clearTimeout(timer);
	}


	function navigateAttract()
	{
		setIsVisible(false);

		setTimeout(function()
		{
			navigate('/');
		}, 5000);
	}

	return (
			<div className = {className} onTouchStart={() => resetTimeout()}>
				<div className='tableLeft'>
					<h1 className='backgroundTextTop'>2010-NOW</h1>
					<div className='videoPlaylistContainer'>
					</div>
					<div className='largeVideoThumbnailContainer'>
					</div>
					<div className='videoTitleArea'>
					</div>
				</div>
				<div className='tableRight'>
					<div className='bLevelContentArea'>
						<div style={{ display: isVisibleCulture ? "block" : "none" }}>
							<CultureToday />
						</div>
						<div style={{ display: isVisibleTechnology ? "block" : "none" }}>
							<TechnologyTwoThousands />
						</div>
						<div style={{ display: isVisibleGrowth ? "block" : "none" }}>
							<GrowthTwoThousands />
						</div>
					</div>
					<div className='hcgtButtonsContainer'>
						<button className='HCGTButton' onTouchStart={() => navigateAttract()}></button>
						<button className='HCGTButton' onTouchStart={() => {setIsVisibleCulture(true); setIsVisibleTechnology(false); setIsVisibleGrowth(false);}}></button>
						<button className='HCGTButton' onTouchStart={() => {setIsVisibleCulture(false); setIsVisibleTechnology(true); setIsVisibleGrowth(false);}}></button>
						<button className='HCGTButton' onTouchStart={() => {setIsVisibleCulture(false); setIsVisibleTechnology(false); setIsVisibleGrowth(true);}}></button>
					</div>
					<h1 className='backgroundTextBottom'>2010-NOW</h1>
				</div>
			</div>
	);
}