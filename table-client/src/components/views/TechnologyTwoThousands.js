import React, { useState } from "react";
import './BLevelContent.css';
import '../../components/Modal.css';

//Function to import all images & documents
function importAll(r) 
{
  return r.keys().map(r);
}

// General Category
const generalImages = importAll(require.context('../../images/00s/Technology/General', false, /\.(PNG|png|jpe?g|svg)$/));
const generalDocuments = importAll(require.context('../../documents/00s/Technology/General', false, /\.(pdf)$/));

// Media Coverage Category
const mediaCoverageImages = importAll(require.context('../../images/00s/Technology/Media_Coverage', false, /\.(PNG|png|jpe?g|svg)$/));

function TechnologyTwoThousands()
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

		renderedGeneralOutput[0] = <div onTouchEnd={toggleModal} className="col-md-2 document"><div className="imgPane"><img alt="" loading="lazy" src={generalImages[0]} data-src={generalDocuments[0]} /></div></div>;

		var renderedMediaCoveragelOutput = mediaCoverageImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img alt="" src={item} data-src={item}/></div></div>);

		return (
			<div>
				<ul className="nav nav-pills nav-fill" role="tablist">
				  <li className="nav-item" role="presentation">
					<button className="nav-link active" id="generalTechnology-tab" data-bs-toggle="tab" data-bs-target="#generalTechnology" type="button" role="tab" aria-controls="generalTechnology" aria-selected="true"><strong>General</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="mediaCoverageTechnology-tab" data-bs-toggle="tab" data-bs-target="#mediaCoverageTechnology" type="button" role="tab" aria-controls="mediaCoverageTechnology" aria-selected="false"><strong>Media Coverage</strong></button>
				  </li>
				</ul>

				<div className="tab-content">
					<div className="tab-pane fade show active" id="generalTechnology" role="tabpanel" aria-labelledby="generalTechnology-tab">
						<div className='row'>
							{renderedGeneralOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="mediaCoverageTechnology" role="tabpanel" aria-labelledby="mediaCoverageTechnology-tab">
						<div className='row'>
							{renderedMediaCoveragelOutput}
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

export default TechnologyTwoThousands