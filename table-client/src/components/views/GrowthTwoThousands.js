import React, { useState } from "react";
import './BLevelContent.css';
import '../../components/Modal.css';

//Function to import all images & documents
function importAll(r) 
{
  return r.keys().map(r);
}

// General Category
const generalImages = importAll(require.context('../../images/00s/Growth/General', false, /\.(PNG|png|jpe?g|svg)$/));

// Annual Reports Category
const annualReportImages = importAll(require.context('../../images/00s/Growth/Annual_Report', false, /\.(PNG|png|JPG|jpe?g|svg)$/));
const annualReportDocuments = importAll(require.context('../../documents/00s/Growth/Annual_Report', false, /\.(pdf)$/));


// Asymmetric Threat Symposium Category
const asymmImages = importAll(require.context('../../images/00s/Growth/Asymm', false, /\.(PNG|png|JPG|jpe?g|svg)$/));
const asymmDocuments = importAll(require.context('../../documents/00s/Growth/Asymm', false, /\.(pdf)$/));



// Media Coverage Category
const mediaCoverageImages = importAll(require.context('../../images/00s/Growth/Media_Coverage', false, /\.(PNG|png|JPG|jpe?g|svg)$/));


function GrowthTwoThousands()
{
	const [isVisible, setIsVisible] = useState(false);
	const [modalContent, setModalContent] = useState();

	const className = 'bLevelContentModal ' + (isVisible ? "modalFadeIn" : "modalFadeOut");

	const toggleModal = (e) =>
	{
		if (isVisible === false)
		{
			setIsVisible(!isVisible);

			if (e.currentTarget.classList.contains('document'))
			{
				setModalContent('<div class="hideDocumentButtons"></div><div class="hideDocumentButtons"></div><embed type="application/pdf" width="1800" height="1000" src=' + e.target.getAttribute('data-src') + '?toolbar=0></embed>');
			}
			else
			{
				setModalContent('<img loading="lazy" src=' + e.target.getAttribute('data-src') + '/>');
			}
		}
		else
		{
			setIsVisible(!isVisible);
		}
	}

		var renderedGeneralOutput = generalImages.map(item => <div onTouchStart={toggleModal} className="col-md-2"><div className="imgPane"><img alt="" loading="lazy" src={item} data-src={item}/></div></div>);

		var annualReportOutput = annualReportImages.map((item, index) => <div onTouchStart={toggleModal} className="col-md-2 document"><div className="imgPane"><img loading="lazy" src={item} data-src={annualReportDocuments[index]} alt=''/></div></div>);

		var asymmOutput = asymmImages.map((item, index) => <div onTouchStart={toggleModal} className="col-md-2 document"><div className="imgPane"><img alt="" loading="lazy" src={item} data-src={asymmDocuments[index]} /></div></div>);

		var mediaCoverageOutput = mediaCoverageImages.map(item => <div onTouchStart={toggleModal} className="col-md-2"><div className="imgPane"><img alt="" loading="lazy" src={item} data-src={item}/></div></div>);

		return (
			<div>
				<ul className="nav nav-pills nav-fill" role="tablist">
				  <li className="nav-item" role="presentation">
					<button className="nav-link active" id="general-tab" data-bs-toggle="tab" data-bs-target="#generalGrowth" type="button" role="tab" aria-controls="generalGrowth" aria-selected="true"><strong>General</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="annualReports-tab" data-bs-toggle="tab" data-bs-target="#annualReports" type="button" role="tab" aria-controls="annualReports" aria-selected="false"><strong>Annual Reports</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="asymm-tab" data-bs-toggle="tab" data-bs-target="#asymm" type="button" role="tab" aria-controls="asymm" aria-selected="false"><strong>Asymmetric Threat Symposium</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="mediaCoverage-tab" data-bs-toggle="tab" data-bs-target="#mediaCoverage" type="button" role="tab" aria-controls="mediaCoverage" aria-selected="false"><strong>Media Coverage</strong></button>
				  </li>
				</ul>

				<div className="tab-content">
					<div className="tab-pane fade show active" id="generalGrowth" role="tabpanel" aria-labelledby="generalGrowth-tab">
						<div className='row'>
							{renderedGeneralOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="annualReports" role="tabpanel" aria-labelledby="annualReports-tab">
						<div className='row'>
							{annualReportOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="asymm" role="tabpanel" aria-labelledby="asymm-tab">
						<div className='row'>
							{asymmOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="mediaCoverage" role="tabpanel" aria-labelledby="mediaCoverage-tab">
						<div className='row'>
							{mediaCoverageOutput}
						</div>
					</div>
				</div>
				<div className={className}>
					<div className='modalBackground'>
						<div className="modalContent">
							<button onTouchStart={() => toggleModal() }  type="button" className="closeModalButton">X</button>
								<div className='modalBody' dangerouslySetInnerHTML={{__html: modalContent}}>
								</div>
						</div>
					</div>
				</div>
			</div>
		);

}

export default GrowthTwoThousands