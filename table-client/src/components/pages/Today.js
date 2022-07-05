import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CultureToday from '../views/CultureToday'
import TechnologyToday from '../views/TechnologyToday'
import GrowthToday from '../views/GrowthToday'
import VideoTwoThousands from '../views/VideoTwoThousands';
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

	const [timer, setTimer] = useState(0);

	const className1 = (isVisible ? "fadeIn" : "fadeOut");
	const className2 = (isVisibleCulture ? "categoryFadeIn" : "categoryFadeOut");
	const className3 = (isVisibleTechnology ? "categoryFadeIn" : "categoryFadeOut");
	const className4 = (isVisibleGrowth ? "categoryFadeIn" : "categoryFadeOut");
	
	//Sets a timeout for the kiosk. Returns to the Attract screen if the kiosk is timedout
	/*
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
	*/
	function navigateAttract()
	{
		setIsVisible(false);

		setTimeout(function()
		{
			navigate('/');
		}, 5000);
	}

	return (
			<div className = {className1}>
				<div className='tableLeft'>
					<h1 className='backgroundTextTop'>2010-NOW</h1>
					<VideoTwoThousands />
				</div>
				<div className='tableRight'>
					<div className='bLevelContentArea'>
						<div className={className2}>
							<CultureToday />
						</div>
						<div className={className3}>
							<TechnologyToday />
						</div>
						<div className={className4}>
							<GrowthToday />
						</div>
					</div>
					<div className='hcgtButtonsContainer'>
						<button className='HCGTButton' onTouchEnd={() => navigateAttract()}></button>
						<button className='HCGTButton' onTouchEnd={() => {setIsVisibleCulture(true); setIsVisibleTechnology(false); setIsVisibleGrowth(false);}}></button>
						<button className='HCGTButton' onTouchEnd={() => {setIsVisibleCulture(false); setIsVisibleTechnology(true); setIsVisibleGrowth(false);}}></button>
						<button className='HCGTButton' onTouchEnd={() => {setIsVisibleCulture(false); setIsVisibleTechnology(false); setIsVisibleGrowth(true);}}></button>
					</div>
					<h1 className='backgroundTextBottom'>2010-NOW</h1>
				</div>
			</div>
	);
}