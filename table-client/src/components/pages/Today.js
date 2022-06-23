import React, { useState } from "react";
import HCGTButton from '../../components/HCGTButton.js';
import '../../App.css';
import './Pages.css';


function Today()
{
	return (
		<div className='tableArea'>
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
				</div>
				<div className='hcgtButtonsContainer'>
					<HCGTButton navigation = '/' />
					<HCGTButton navigation = 'culture' />
					<HCGTButton navigation = 'growth' />
					<HCGTButton navigation = 'technology' />
				</div>
				<h1 className='backgroundTextBottom'>2010-NOW</h1>
			</div>
		</div>
	);
}

export default Today