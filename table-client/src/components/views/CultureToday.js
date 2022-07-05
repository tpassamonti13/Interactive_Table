import React, { useState } from "react";
import './BLevelContent.css';
import '../../components/Modal.css';

//Function to import all images & documents
function importAll(r) 
{
  return r.keys().map(r);
}

// General Category
const generalDocuments = importAll(require.context('../../documents/Now/Culture/General', false, /\.(pdf)$/));
const generalImages = importAll(require.context('../../images/Now/Culture/General', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

// 50th Anniversary Category
const anniversaryImages = importAll(require.context('../../images/Now/Culture/50th_Anniversary', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

// 2018 Battle Of THe Bands Category
const band2018Images = importAll(require.context('../../images/Now/Culture/2018_Battle_Of_The_Bands', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

// 2019 Battle Of THe Bands Category
const band2019Images = importAll(require.context('../../images/Now/Culture/2019_Battle_Of_The_Bands', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

// 2021 Admiral Moore Awards Category
const admiral2021Images = importAll(require.context('../../images/Now/Culture/Admiral_Awards_2021', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

// 2022 Champion Awards Category
const championAwardsImages = importAll(require.context('../../images/Now/Culture/Champion_Awards', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

// HQ Ribbon Cutting Category
const ribbonCuttingImages = importAll(require.context('../../images/Now/Culture/HQ_Ribbon_Cutting', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

// Ken Asbury Wash100 Award Category
const kenAsburyImages = importAll(require.context('../../images/Now/Culture/Ken_Asbury_Wash100', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

// Media Coverage Category
const mediaCoverageImages = importAll(require.context('../../images/Now/Culture/Media_Coverage', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

// VERG Operation Care Package 2021 Category
const vergImages = importAll(require.context('../../images/Now/Culture/VERG', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

// COVID CACI Cares Category
const covidImages = importAll(require.context('../../images/Now/Culture/COVID', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

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

			console.log('test');

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

		var renderedGeneralOutput = generalImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img loading="lazy" src={item} data-src={item} alt=''/></div></div>);

		renderedGeneralOutput[5] = <div onTouchEnd={toggleModal} className="col-md-2 document"><div className="imgPane"><img loading="lazy" src={generalImages[5]} data-src={generalDocuments[0]} alt=''/></div></div>;
		renderedGeneralOutput[10] = <div onTouchEnd={toggleModal} className="col-md-2 document"><div className="imgPane"><img loading="lazy" src={generalImages[10]} data-src={generalDocuments[1]} alt=''/></div></div>;
		renderedGeneralOutput[20] = <div onTouchEnd={toggleModal} className="col-md-2 document"><div className="imgPane"><img loading="lazy" src={generalImages[20]} data-src={generalDocuments[1]} alt=''/></div></div>;

		var anniversaryOutput = anniversaryImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img loading="lazy" src={item} data-src={item} alt=''/></div></div>);

		var renderedBand2018Output = band2018Images.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img loading="lazy" src={item} data-src={item} alt=''/></div></div>);

		var renderedBand2019Output = band2019Images.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img loading="lazy" src={item} data-src={item} alt=''/></div></div>);

		var renderedAdmiral2021Output = admiral2021Images.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img loading="lazy" src={item} data-src={item} alt=''/></div></div>);

		var renderedChampionAwardsOutput = championAwardsImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img loading="lazy" src={item} data-src={item} alt=''/></div></div>);

		var ribbonCuttingOutput = ribbonCuttingImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img loading="lazy" src={item} data-src={item} alt=''/></div></div>);

		var kenAsburyOutput = kenAsburyImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img loading="lazy" src={item} data-src={item} alt=''/></div></div>);

		var mediaCoverageOutput = mediaCoverageImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img loading="lazy" src={item} data-src={item} alt=''/></div></div>);

		var vergOutput = vergImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img loading="lazy" src={item} data-src={item} alt=''/></div></div>);

		var covidOutput = covidImages.map(item => <div onTouchEnd={toggleModal} className="col-md-2"><div className="imgPane"><img loading="lazy" src={item} data-src={item} alt=''/></div></div>);


		return (
			<div>
				<ul className="nav nav-pills nav-fill" role="tablist">
				  <li className="nav-item" role="presentation">
					<button className="nav-link active" id="anniversary-tab" data-bs-toggle="tab" data-bs-target="#anniversary" type="button" role="tab" aria-controls="anniversary" aria-selected="false"><strong>50th Anniversary</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="admiralAwards-tab" data-bs-toggle="tab" data-bs-target="#admiralAwards" type="button" role="tab" aria-controls="admiralAwards" aria-selected="true"><strong>Admiral Moorer Awards 2021</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="bands2018-tab" data-bs-toggle="tab" data-bs-target="#bands2018" type="button" role="tab" aria-controls="bands2018" aria-selected="false"><strong>Battle of the Bands 2018</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="bands2019-tab" data-bs-toggle="tab" data-bs-target="#bands2019" type="button" role="tab" aria-controls="bands2019" aria-selected="false"><strong>Battle of the Bands 2019</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="champion2022-tab" data-bs-toggle="tab" data-bs-target="#champion2022" type="button" role="tab" aria-controls="champion2022" aria-selected="false"><strong>Champion Awards 2022</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="covidCACI-tab" data-bs-toggle="tab" data-bs-target="#covidCACI" type="button" role="tab" aria-controls="covidCACI" aria-selected="false"><strong>COVID CACI Cares</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="general-tab" data-bs-toggle="tab" data-bs-target="#generalCulture" type="button" role="tab" aria-controls="generalCulture" aria-selected="true"><strong>General</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="ribbonCutting-tab" data-bs-toggle="tab" data-bs-target="#ribbonCutting" type="button" role="tab" aria-controls="ribbonCutting" aria-selected="false"><strong>HQ Ribbon Cutting</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="wash100-tab" data-bs-toggle="tab" data-bs-target="#wash100" type="button" role="tab" aria-controls="wash100" aria-selected="false"><strong>Ken Asbury Wash100 Award</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="mediaCoverageCulture-tab" data-bs-toggle="tab" data-bs-target="#mediaCoverageCulture" type="button" role="tab" aria-controls="mediaCoverageCulture" aria-selected="false"><strong>Media Coverage</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="verg-tab" data-bs-toggle="tab" data-bs-target="#verg" type="button" role="tab" aria-controls="verg" aria-selected="false"><strong>VERG Operation Care Package 2021</strong></button>
				  </li>
				</ul>

				<div className="tab-content cultureTodayTabContent">
					<div className="tab-pane fade" id="generalCulture" role="tabpanel" aria-labelledby="generalCulture-tab">
						<div className='row'>
							{renderedGeneralOutput}
						</div>
					</div>
					<div className="tab-pane fade show active" id="anniversary" role="tabpanel" aria-labelledby="anniversary-tab">
						<div className='row'>
							{anniversaryOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="bands2018" role="tabpanel" aria-labelledby="bands2018-tab">
						<div className='row'>
							{renderedBand2018Output}
						</div>
					</div>
					<div className="tab-pane fade" id="bands2019" role="tabpanel" aria-labelledby="bands2019-tab">
						<div className='row'>
							{renderedBand2019Output}
						</div>
					</div>
					<div className="tab-pane fade" id="mediaCoverageCulture" role="tabpanel" aria-labelledby="mediaCoverageCulture-tab">
						<div className='row'>
							{mediaCoverageOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="wash100" role="tabpanel" aria-labelledby="wash100-tab">
						<div className='row'>
							{kenAsburyOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="admiralAwards" role="tabpanel" aria-labelledby="admiralAwards-tab">
						<div className='row'>
							{renderedAdmiral2021Output}
						</div>
					</div>
					<div className="tab-pane fade" id="champion2022" role="tabpanel" aria-labelledby="champion2022-tab">
						<div className='row'>
							{renderedChampionAwardsOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="ribbonCutting" role="tabpanel" aria-labelledby="ribbonCutting-tab">
						<div className='row'>
							{ribbonCuttingOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="covidCACI" role="tabpanel" aria-labelledby="covidCACI-tab">
						<div className='row'>
							{covidOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="verg" role="tabpanel" aria-labelledby="verg-tab">
						<div className='row'>
							{vergOutput}
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

export default CultureTwoThousands