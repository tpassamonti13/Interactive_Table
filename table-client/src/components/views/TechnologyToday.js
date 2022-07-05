import React, { useState } from "react";
import './BLevelContent.css';
import '../../components/Modal.css';

//Function to import all images & documents
function importAll(r) 
{
  return r.keys().map(r);
}

// General Category
const generalImages = importAll(require.context('../../images/Now/Technology/General', false, /\.(PNG|png|jpe?g|svg|JPG)$/));

// Biometric Identity Solutions Category
const bioImages = importAll(require.context('../../images/Now/Technology/Biometrics_Identity_Solutions', false, /\.(PNG|png|jpe?g|svg|JPG)$/));

// CACI Digital Forensics Lab Category
const caciDFLImages = importAll(require.context('../../images/Now/Technology/CACI_DFL', false, /\.(PNG|png|jpe?g|svg|JPG)$/));

// CACI Digital Forensics Lab Category
const caciFellowsImages = importAll(require.context('../../images/Now/Technology/CACI_Fellows', false, /\.(PNG|png|jpe?g|svg|JPG)$/));

// CACI Network Category
const caciNetworkImages = importAll(require.context('../../images/Now/Technology/CACI_Network', false, /\.(PNG|png|jpe?g|svg|JPG)$/));

// CMMI Level 3 Findings Category
const cmmiFindingsImages = importAll(require.context('../../images/Now/Technology/CMMI_Findings', false, /\.(PNG|png|jpe?g|svg|JPG)$/));

// CMMI Banner Category
const cmmiBannerImages = importAll(require.context('../../images/Now/Technology/CMMI_Banner', false, /\.(PNG|png|jpe?g|svg|JPG)$/));

// CRADLE Category
const cradleImages = importAll(require.context('../../images/Now/Technology/CRADLE', false, /\.(PNG|png|jpe?g|svg|JPG)$/));

// IRAD Category
const iradImages = importAll(require.context('../../images/Now/Technology/IRAD_Olympics', false, /\.(PNG|png|jpe?g|svg|JPG)$/));

// ISO CMMI Celebration Category
const cmmiCelebrationImages = importAll(require.context('../../images/Now/Technology/CMMI_Celebration', false, /\.(PNG|png|jpe?g|svg|JPG)$/));

// Integrated Shared Services Category
const iscImages = importAll(require.context('../../images/Now/Technology/ISC', false, /\.(PNG|png|jpe?g|svg|JPG)$/));

// Investor Day Category
const investorDayImages = importAll(require.context('../../images/Now/Technology/Investor_Day', false, /\.(PNG|png|jpe?g|svg|JPG)$/));

// Media Coverage Category
const mediaCoverageImages = importAll(require.context('../../images/Now/Technology/Media_Coverage', false, /\.(PNG|png|jpe?g|svg)$/));

// VSX Category
const vscImages = importAll(require.context('../../images/Now/Technology/VS_Center', false, /\.(PNG|png|jpe?g|svg)$/));

function TechnologyToday()
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

		var bioOutput = bioImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img alt="" loading="lazy" src={item} data-src={item}/></div></div>);

		var caciDFLOutput = caciDFLImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img alt="" loading="lazy" src={item} data-src={item}/></div></div>);

		var caciFellowsOutput = caciFellowsImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img alt="" loading="lazy" src={item} data-src={item}/></div></div>);

		var caciNetworkOutput = caciNetworkImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img alt="" loading="lazy" src={item} data-src={item}/></div></div>);

		var cmmiFindingsOutput = cmmiFindingsImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img alt="" loading="lazy" src={item} data-src={item}/></div></div>);

		var cmmiBannerOutput = cmmiBannerImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img alt="" loading="lazy" src={item} data-src={item}/></div></div>);

		var cradleOutput = cradleImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img alt="" loading="lazy" src={item} data-src={item}/></div></div>);

		var iradOutput = iradImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img alt="" loading="lazy" src={item} data-src={item}/></div></div>);

		var cmmiCelebrationOutput =cmmiCelebrationImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img alt="" loading="lazy" src={item} data-src={item}/></div></div>);

		var iscOutput =iscImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img alt="" loading="lazy" src={item} data-src={item}/></div></div>);

		var investorDayOutput =investorDayImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img alt="" loading="lazy" src={item} data-src={item}/></div></div>);

		var renderedMediaCoverageOutput = mediaCoverageImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img alt="" src={item} data-src={item}/></div></div>);

		var vscOutput = vscImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img alt="" src={item} data-src={item}/></div></div>);

		return (
			<div>
				<ul className="nav nav-pills nav-fill" role="tablist">
				<li className="nav-item" role="presentation">
					<button className="nav-link active" id="biometrics-tab" data-bs-toggle="tab" data-bs-target="#biometrics" type="button" role="tab" aria-controls="bionetrics" aria-selected="true"><strong>Biometrics Identiy Solutions</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="caciDFL-tab" data-bs-toggle="tab" data-bs-target="#caciDFL" type="button" role="tab" aria-controls="caciDFL" aria-selected="true"><strong>CACI Digital Forensics Lab</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="caciFellows-tab" data-bs-toggle="tab" data-bs-target="#caciFellows" type="button" role="tab" aria-controls="caciFellows" aria-selected="true"><strong>CACI Fellowship Awards</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="caciNetwork-tab" data-bs-toggle="tab" data-bs-target="#caciNetwork" type="button" role="tab" aria-controls="caciNetwork" aria-selected="true"><strong>CACI Network</strong></button>
				  </li>
				<li className="nav-item" role="presentation">
					<button className="nav-link" id="cmmiFindings-tab" data-bs-toggle="tab" data-bs-target="#cmmiFindings" type="button" role="tab" aria-controls="cmmiFindings" aria-selected="true"><strong>CMMI Level 3 Findings</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="cmmiBanner-tab" data-bs-toggle="tab" data-bs-target="#cmmiBanner" type="button" role="tab" aria-controls="cmmiBanner" aria-selected="true"><strong>CMMI Level 5 Banner</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="cradle-tab" data-bs-toggle="tab" data-bs-target="#cradle" type="button" role="tab" aria-controls="cradle" aria-selected="true"><strong>CRADLE</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="generalTechnology-tab" data-bs-toggle="tab" data-bs-target="#generalTechnology" type="button" role="tab" aria-controls="generalTechnology" aria-selected="true"><strong>General</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="irad-tab" data-bs-toggle="tab" data-bs-target="#irad" type="button" role="tab" aria-controls="irad" aria-selected="true"><strong>IRAD Olympics</strong></button>
				  </li>
				   <li className="nav-item" role="presentation">
					<button className="nav-link" id="cmmiCelebration-tab" data-bs-toggle="tab" data-bs-target="#cmmiCelebration" type="button" role="tab" aria-controls="cmmiCelebration" aria-selected="true"><strong>ISO CMMI Celebration</strong></button>
				  </li>
				   <li className="nav-item" role="presentation">
					<button className="nav-link" id="isc-tab" data-bs-toggle="tab" data-bs-target="#isc" type="button" role="tab" aria-controls="isc" aria-selected="true"><strong>Integrated Shared Services</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="investorDay-tab" data-bs-toggle="tab" data-bs-target="#investorDay" type="button" role="tab" aria-controls="investorDay" aria-selected="true"><strong>Investor Day 2019</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="mediaCoverageTechnology-tab" data-bs-toggle="tab" data-bs-target="#mediaCoverageTechnology" type="button" role="tab" aria-controls="mediaCoverageTechnology" aria-selected="false"><strong>Media Coverage</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="vsCenter-tab" data-bs-toggle="tab" data-bs-target="#vsCenter" type="button" role="tab" aria-controls="vsCenter" aria-selected="false"><strong>V&S Center</strong></button>
				  </li>
				</ul>

				<div className="tab-content technologyTodayTabContent">
					<div className="tab-pane fade" id="generalTechnology" role="tabpanel" aria-labelledby="generalTechnology-tab">
						<div className='row'>
							{renderedGeneralOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="mediaCoverageTechnology" role="tabpanel" aria-labelledby="mediaCoverageTechnology-tab">
						<div className='row'>
							{renderedMediaCoverageOutput}
						</div>
					</div>
					<div className="tab-pane fade show active" id="biometrics" role="tabpanel" aria-labelledby="biometrics-tab">
						<div className='row'>
							{bioOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="caciDFL" role="tabpanel" aria-labelledby="caciDFL-tab">
						<div className='row'>
							{caciDFLOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="caciFellows" role="tabpanel" aria-labelledby="caciFellows-tab">
						<div className='row'>
							{caciFellowsOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="caciNetwork" role="tabpanel" aria-labelledby="caciNetwork-tab">
						<div className='row'>
							{caciNetworkOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="cmmiFindings" role="tabpanel" aria-labelledby="cmmiFindings-tab">
						<div className='row'>
							{cmmiFindingsOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="cmmiBanner" role="tabpanel" aria-labelledby="cmmiBanner-tab">
						<div className='row'>
							{cmmiBannerOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="cradle" role="tabpanel" aria-labelledby="cradle-tab">
						<div className='row'>
							{cradleOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="irad" role="tabpanel" aria-labelledby="irad-tab">
						<div className='row'>
							{iradOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="cmmiCelebration" role="tabpanel" aria-labelledby="cmmiCelebration-tab">
						<div className='row'>
							{cmmiCelebrationOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="isc" role="tabpanel" aria-labelledby="isc-tab">
						<div className='row'>
							{iscOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="investorDay" role="tabpanel" aria-labelledby="investorDay-tab">
						<div className='row'>
							{investorDayOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="vsCenter" role="tabpanel" aria-labelledby="vsCenter-tab">
						<div className='row'>
							{vscOutput}
						</div>
					</div>
				</div>
				<div className={className}>
					<div className='modalBackground'>
						<div className="modalContent">
							<button onTouchEnd={() => toggleModal() }  type="button" className="closeModalButton">X</button>
								<div className='modalBody' dangerouslySetInnerHTML={{__html: modalContent}}>
								</div>
						</div>
					</div>
				</div>
			</div>
		);

}

export default TechnologyToday