import React, { useState } from "react";
import './IMGPane.css';

function IMGPane()
{

	const [isVisible, setIsVisible] = useState(false);

	return (
		<>
		<div className="tab-pane fade show active" id="leadership" role="tabpanel" aria-labelledby="leadership-tab">
			<div className='row'>
				<div onClick={() => setIsVisible(true)} className='col-md-2'>
					<div className='imgPane'>
					</div>
				</div>
				<div onClick={() => setIsVisible(true)} className='col-md-2'>
					<div className='imgPane'>
					</div>
				</div>
				<div onClick={() => setIsVisible(true)} className='col-md-2'>
					<div className='imgPane'>
					</div>
				</div>
				<div onClick={() => setIsVisible(true)} className='col-md-2'>
					<div className='imgPane'>
					</div>
				</div>
				<div onClick={() => setIsVisible(true)} className='col-md-2'>
					<div className='imgPane'>
					</div>
				</div>
			</div>
		</div>
		<div className='bLevelContentModal' style={{ display: isVisible ? "block" : "none" }}>
			<div className='modalBackground'>
				<div className="modalContent">
					<button onClick={() => setIsVisible(false) }  type="button" className="closeModalButton">X</button>
				</div>
			</div>
		</div>
		</>
	);
}

export default IMGPane