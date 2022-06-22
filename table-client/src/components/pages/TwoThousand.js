import React, { useState } from "react";
import HCGTButton from '../../components/HCGTButton.js';
import BLevelContentTwoThousand from '../views/BLevelContentTwoThousand.js'
import '../../App.css';
import './Pages.css';


function TwoThousand()
{
	return (
		<div className='tableArea'>
			<div className='tableLeft'>
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
			</div>
		</div>
	);
}

export default TwoThousand