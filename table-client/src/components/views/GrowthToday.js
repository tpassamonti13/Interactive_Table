import React, { useState } from "react";
import './BLevelContent.css';
import '../../components/Modal.css';

//Function to import all images & documents
function importAll(r) 
{
  return r.keys().map(r);
}

// General Category
const generalDocuments = importAll(require.context('../../documents/Now/Growth/General', false, /\.(pdf)$/));
const generalImages = importAll(require.context('../../images/Now/Growth/General', false, /\.(PNG|png|jpe?g|svg)$/))

// Media Coverage Category
const mediaCoverageImages = importAll(require.context('../../images/Now/Growth/Media_Coverage', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

// NYSE Closing Bell Category
const closingBellImages = importAll(require.context('../../images/Now/Growth/NYSE_Closing_Bell', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

// PM Summit Category
const pmSummitImages = importAll(require.context('../../images/Now/Growth/PM_Summit', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

// Shared Services Center Category
const sscImages = importAll(require.context('../../images/Now/Growth/SSC', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

// HQ Ribbon Cutting Category
const hqRibbonCuttingImages = importAll(require.context('../../images/Now/Growth/HQ_Ribbon_Cutting', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

function GrowthToday()
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

		var renderedGeneralOutput = generalImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img alt="" loading="lazy" src={item} data-src={item}/></div></div>);
		renderedGeneralOutput[0] = <div onTouchEnd={toggleModal} className="col-md-2 document"><div className="imgPane"><img loading="lazy" src={generalImages[0]} data-src={generalDocuments[0]} alt=''/></div></div>;
		renderedGeneralOutput[1] = <div onTouchEnd={toggleModal} className="col-md-2 document"><div className="imgPane"><img loading="lazy" src={generalImages[1]} data-src={generalDocuments[1]} alt=''/></div></div>;

		var closingBelllOutput = closingBellImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img alt="" loading="lazy" src={item} data-src={item}/></div></div>);

		var mediaCoverageOutput = mediaCoverageImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img alt="" loading="lazy" src={item} data-src={item}/></div></div>);

		var pmSummitOutput = pmSummitImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img alt="" loading="lazy" src={item} data-src={item}/></div></div>);

		var hqRibbonCuttingOutput = hqRibbonCuttingImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img alt="" loading="lazy" src={item} data-src={item}/></div></div>);

		var sscOutput = sscImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img alt="" loading="lazy" src={item} data-src={item}/></div></div>);

		return (
			<div>
				<ul className="nav nav-pills nav-fill" role="tablist">
				  <li className="nav-item" role="presentation">
					<button className="nav-link active" id="general-tab" data-bs-toggle="tab" data-bs-target="#generalGrowth" type="button" role="tab" aria-controls="generalGrowth" aria-selected="true"><strong>General</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="ribbonGrowth-tab" data-bs-toggle="tab" data-bs-target="#ribbonGrowth" type="button" role="tab" aria-controls="ribbonGrowth" aria-selected="true"><strong>HQ Ribbon Cutting</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="mediaCoverage-tab" data-bs-toggle="tab" data-bs-target="#mediaCoverage" type="button" role="tab" aria-controls="mediaCoverage" aria-selected="false"><strong>Media Coverage</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="closingBell-tab" data-bs-toggle="tab" data-bs-target="#closingBell" type="button" role="tab" aria-controls="closingBell" aria-selected="false"><strong>NYSE Closing Bell 2020</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="pmSummit-tab" data-bs-toggle="tab" data-bs-target="#pmSummit" type="button" role="tab" aria-controls="pmSummit" aria-selected="false"><strong>PM Summit 2021</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="ssc-tab" data-bs-toggle="tab" data-bs-target="#ssc" type="button" role="tab" aria-controls="ssc" aria-selected="false"><strong>Shared Services Center</strong></button>
				  </li>
				</ul>

				<div className="tab-content">
					<div className="tab-pane fade show active" id="generalGrowth" role="tabpanel" aria-labelledby="generalGrowth-tab">
						<div className='row'>
							{renderedGeneralOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="mediaCoverage" role="tabpanel" aria-labelledby="mediaCoverage-tab">
						<div className='row'>
							{mediaCoverageOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="closingBell" role="tabpanel" aria-labelledby="closingBell-tab">
						<div className='row'>
							{closingBelllOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="ssc" role="tabpanel" aria-labelledby="ssc-tab">
						<div className='row'>
							{sscOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="pmSummit" role="tabpanel" aria-labelledby="pmSummit-tab">
						<div className='row'>
							{pmSummitOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="ribbonGrowth" role="tabpanel" aria-labelledby="ribbonGrowth-tab">
						<div className='row'>
							{hqRibbonCuttingOutput}
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

export default GrowthToday