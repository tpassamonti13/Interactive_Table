import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DecadeButton from '../../components/DecadeButton.js';
import '../../App.css';
import './Pages.css';


function TwoThousand()
{
	const navigate = useNavigate();

	return (
		<div className='tableArea'>
			<div className='tableLeft'>
			</div>
			<div className='tableRight'>
				<h1>2000 - 2010</h1>
			</div>
		</div>
	);
}

export default TwoThousand