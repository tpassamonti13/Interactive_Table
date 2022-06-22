import React, { useState } from "react";
import './BLevelContent.css';

function BLevelContentTwoThousand()
{
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

			<div id="tabContainer">
				<div class="tab-content">
					<div class="tab-pane fade show active" id="leadership" role="tabpanel" aria-labelledby="leadership-tab">
						<div class="row">
							<div class="col-md-2">
								<div class="img-inner"></div>
							</div>
							<div class="col-md-2">
								<div class="img-inner"></div>
							</div>'
							<div class="col-md-2">
								<div class="img-inner"></div>
							</div>
							<div class="col-md-2">
								<div class="img-inner"></div>
							</div>
							<div class="col-md-2">
								<div class="img-inner"></div>
							</div>
							<div class="col-md-2">
								<div class="img-inner"></div>
							</div>
							<div class="col-md-2">
								<div class="img-inner"></div>
							</div>
						</div>
					</div>
					<div class="tab-pane fade" id="esdc" role="tabpanel" aria-labelledby="esdc-tab">
						<div class="row">
							<div class="col-md-2">
								<div class="img-inner"></div>
							</div>
							<div class="col-md-2">
								<div class="img-inner"></div>
							</div>'
							<div class="col-md-2">
								<div class="img-inner"></div>
							</div>
							<div class="col-md-2">
								<div class="img-inner"></div>
							</div>
							<div class="col-md-2">
								<div class="img-inner"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}

export default BLevelContentTwoThousand