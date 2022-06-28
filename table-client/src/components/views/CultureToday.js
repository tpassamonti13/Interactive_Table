import React, { useState } from "react";
import './BLevelContent.css';
import '../../components/Modal.css';

//Function to import all images & documents
function importAll(r) 
{
  return r.keys().map(r);
}

// General Category
//const generalDocuments = importAll(require.context('../../documents/Now/Culture/General', false, /\.(pdf)$/));
const generalImages = importAll(require.context('../../images/Now/Culture/General', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

// 50th Anniversary Category
const anniversaryImages = importAll(require.context('../../images/Now/Culture/50th_Anniversary', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

function CultureTwoThousands()
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

		var renderedGeneralOutput = generalImages.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img loading="lazy" src={item} data-src={item} alt=''/></div></div>);

		return (
			<div>
				<ul className="nav nav-pills nav-fill" role="tablist">
				  <li className="nav-item" role="presentation">
					<button className="nav-link active" id="general-tab" data-bs-toggle="tab" data-bs-target="#generalCulture" type="button" role="tab" aria-controls="generalCulture" aria-selected="true"><strong>General</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="anniversary-tab" data-bs-toggle="tab" data-bs-target="#anniversary" type="button" role="tab" aria-controls="anniversary" aria-selected="false"><strong>50th Anniversary</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="bands2018-tab" data-bs-toggle="tab" data-bs-target="#bands2018" type="button" role="tab" aria-controls="bands2018" aria-selected="false"><strong>2018 Battle of the Bands</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="bands2019-tab" data-bs-toggle="tab" data-bs-target="#bands2019" type="button" role="tab" aria-controls="bands2019" aria-selected="false"><strong>2019 Battle of the Bands</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="mediaCoverageCulture-tab" data-bs-toggle="tab" data-bs-target="#mediaCoverageCulture" type="button" role="tab" aria-controls="mediaCoverageCulture" aria-selected="false"><strong>Media Coverage</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="wash100-tab" data-bs-toggle="tab" data-bs-target="#wash100" type="button" role="tab" aria-controls="wash100" aria-selected="false"><strong>Ken Asbury Wash100 Award</strong></button>
				  </li>
				</ul>

				<div className="tab-content">
					<div className="tab-pane fade show active" id="generalCulture" role="tabpanel" aria-labelledby="generalCulture-tab">
						<div className='row'>
							{renderedGeneralOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="anniversary" role="tabpanel" aria-labelledby="anniversary-tab">
						<div className='row'>
						</div>
					</div>
					<div className="tab-pane fade" id="bands2018" role="tabpanel" aria-labelledby="bands2018-tab">
						<div className='row'>
						</div>
					</div>
					<div className="tab-pane fade" id="bands2019" role="tabpanel" aria-labelledby="bands2019-tab">
						<div className='row'>
						</div>
					</div>
					<div className="tab-pane fade" id="mediaCoverageCulture" role="tabpanel" aria-labelledby="mediaCoverageCulture-tab">
						<div className='row'>
						</div>
					</div>
					<div className="tab-pane fade" id="wash100" role="tabpanel" aria-labelledby="wash100-tab">
						<div className='row'>
						</div>
					</div>
				</div>
				<div className={className}>
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

export default CultureTwoThousands