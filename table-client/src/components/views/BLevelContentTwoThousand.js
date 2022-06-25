import React, { useState } from "react";
import './BLevelContent.css';
import IMGPane from '../../components/IMGPane.js';
import '../../components/Modal.css';

function BLevelContentTwoThousand()
{
	const [isVisible, setIsVisible] = useState(false);

	return (
		<div>
			<ul className="nav nav-pills nav-fill" role="tablist">
			  <li className="nav-item" role="presentation">
				<a className="nav-link active" id="leadership-tab" data-bs-toggle="tab" data-bs-target="#leadership" type="button" role="tab" aria-controls="leadership" aria-selected="true"><strong>Category 1</strong></a>
			  </li>
			  <li className="nav-item" role="presentation">
				<a className="nav-link" id="esdc-tab" data-bs-toggle="tab" data-bs-target="#esdc" type="button" role="tab" aria-controls="esdc" aria-selected="true"><strong>Category 2</strong></a>
			  </li>
			</ul>

			<div className="tab-content">
				<IMGPane />
			</div>
		</div>
	);
}
export default BLevelContentTwoThousand