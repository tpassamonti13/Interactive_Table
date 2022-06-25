import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HCGTButton from '../../components/HCGTButton.js';
import BLevelContentTwoThousand from '../views/BLevelContentTwoThousand.js'
import '../../App.css';
import './Pages.css';


function TwoThousand()
{
	const navigate = useNavigate();
	
	// Sets a timeout for the kiosk. Returns to the Attract screen if the kiosk is timedout
	var timeoutKiosk = window.setTimeout(function()
		{
			navigate('/');
		}, 300000);

	function resetTimeout()
	{
		clearTimeout(timeoutKiosk);

		timeoutKiosk = window.setTimeout(function()
		{
			navigate('/');
		}, 300000);
	}

	return (
			<div onClick={() => resetTimeout()}>
				<div className='tableLeft'>
					<h1 className='backgroundTextTop'>2000-2009</h1>
					<div className='videoPlaylistContainer'>
					</div>
					<div className='largeVideoThumbnailContainer'>
					</div>
					<div className='videoTitleArea'>
					</div>
				</div>
				<div className='tableRight'>
					<div className='bLevelContentArea'>
						<BLevelContentTwoThousand />
					</div>
					<div className='hcgtButtonsContainer'>
						<HCGTButton navigation = '/' />
						<HCGTButton navigation = 'culture' />
						<HCGTButton navigation = 'growth' />
						<HCGTButton navigation = 'technology' />
					</div>
					<h1 className='backgroundTextBottom'>2000-2009</h1>
				</div>
			</div>
	);
}

export default TwoThousand