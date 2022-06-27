import React, { useState } from "react";
import './BLevelContent.css';
import '../../components/Modal.css';

//Function to import all images & documents
function importAll(r) 
{
  return r.keys().map(r);
}

const generalImages = importAll(require.context('../../images/00s/Culture/General', false, /\.(PNG|png|jpe?g|svg)$/));
const caciTimesCultureStoriesImages = importAll(require.context('../../images/00s/Culture/CACI_Times/Culture_Stories_of_Interest', false, /\.(PNG|png|jpe?g|svg)$/));
const mediaCoverageImages = importAll(require.context('../../images/00s/Culture/CACI_Times/Culture_Stories_of_Interest', false, /\.(PNG|png|jpe?g|svg)$/));

function TechnologyTwoThousands()
{
	const [isVisible, setIsVisible] = useState(false);
	const [modalContent, setModalContent] = useState();

	const toggleModal = (e) =>
	{
		if (isVisible == false)
		{
			setIsVisible(!isVisible);
			setModalContent('<img src=' + e.target.getAttribute('data-src') + '/>');
		}
		else
		{
			setIsVisible(!isVisible);
		}
	}

		var renderedGeneralOutput = generalImages.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item}/></div></div>);

		var renderedCACITimesCultureStoriesOutput = caciTimesCultureStoriesImages .map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item}/></div></div>);

		return (
			<div>
				<ul className="nav nav-pills nav-fill" role="tablist">
				  <li className="nav-item" role="presentation">
					<a className="nav-link active" id="general-tab" data-bs-toggle="tab" data-bs-target="#general" type="button" role="tab" aria-controls="general" aria-selected="true"><strong>General</strong></a>
				  </li>
				  <li className="nav-item" role="presentation">
					<a className="nav-link" id="mediaCoverage-tab" data-bs-toggle="tab" data-bs-target="#mediaCoverage" type="button" role="tab" aria-controls="mediaCoverage" aria-selected="false"><strong>Media Coverage</strong></a>
				  </li>
				</ul>

				<div className="tab-content">
					<div className="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
						<div className='row'>
							{renderedGeneralOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="employeeRecognition" role="tabpanel" aria-labelledby="employeeRecognition-tab">
						<div className='row'>
						</div>
					</div>
				</div>
				<div className='bLevelContentModal' style={{ display: isVisible ? "block" : "none" }}>
					<div className='modalBackground'>
						<div className="modalContent">
							<button onClick={() => toggleModal() }  type="button" className="closeModalButton">X</button>
								<div className='modalBody' dangerouslySetInnerHTML={{__html: modalContent}}>
								</div>
						</div>
					</div>
				</div>
			</div>
		);

}

export default TechnologyTwoThousands