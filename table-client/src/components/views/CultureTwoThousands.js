import React, { useState } from "react";
import './BLevelContent.css';
import '../../components/Modal.css';

//Function to import all images & documents
function importAll(r) 
{
  return r.keys().map(r);
}

// General Category
const generalDocuments = importAll(require.context('../../documents/00s/Culture/General', false, /\.(pdf)$/));
const generalImages = importAll(require.context('../../images/00s/Culture/General', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

// CACI Times Category
const caciTimesCompleteIssuesDocuments = importAll(require.context('../../documents/00s/Culture/CACI_Times', false, /\.(pdf)$/));
const caciTimesCompleteIssuesImages = importAll(require.context('../../images/00s/Culture/CACI_Times/Complete_Issues', false, /\.(PNG|png|JPG|jpe?g|svg)$/));
const caciTimesCultureStoriesImages = importAll(require.context('../../images/00s/Culture/CACI_Times/Culture_Stories_of_Interest', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

// Employee Recognition Categoru
const employeeRecognitionAdmiralMoorerAwards2005Images = importAll(require.context('../../images/00s/Culture/Employee_Recognition_Ceremony/Admiral_Moorer_Awards_2005', false, /\.(PNG|png|JPG|jpe?g|svg)$/));
const employeeRecognitionAdmiralMoorerAwards2009Images = importAll(require.context('../../images/00s/Culture/Employee_Recognition_Ceremony/Admiral_Moorer_Awards_2009', false, /\.(PNG|png|JPG|jpe?g|svg)$/));
const employeeRecognitionAwardsCeremonyJune2008Images = importAll(require.context('../../images/00s/Culture/Employee_Recognition_Ceremony/Awards_Ceremony_June_2008', false, /\.(PNG|png|JPG|jpe?g|svg)$/));
const employeeRecognitionAwardsCeremonyOct2009Images = importAll(require.context('../../images/00s/Culture/Employee_Recognition_Ceremony/Awards_Ceremony_Oct_2009', false, /\.(PNG|png|JPG|jpe?g|svg)$/));
const employeeRecognitionAwardsProgramFeb2009Images = importAll(require.context('../../images/00s/Culture/Employee_Recognition_Ceremony/Awards_Program_Feb_2009', false, /\.(PNG|png|JPG|jpe?g|svg)$/));
const employeeRecognitionCelebrationofDistinction2003Images = importAll(require.context('../../images/00s/Culture/Employee_Recognition_Ceremony/Celebration_of_Distinction_2003', false, /\.(PNG|png|JPG|jpe?g|svg)$/));
const employeeRecognitionCelebrationofDistinction2005Images = importAll(require.context('../../images/00s/Culture/Employee_Recognition_Ceremony/Celebration_of_Distinction_2005', false, /\.(PNG|png|JPG|jpe?g|svg)$/));
const employeeRecognitionCelebrationofDistinction2005Documents = importAll(require.context('../../documents/00s/Culture/Employee_Recoginition_Ceremony', false, /\.(pdf)$/));
const employeeRecognitionCelebrationofDistinction2006Images = importAll(require.context('../../images/00s/Culture/Employee_Recognition_Ceremony/Celebration_of_Distinction_2006', false, /\.(PNG|png|JPG|jpe?g|svg)$/));
const employeeRecognitionCelebrationofDistinction2007Images = importAll(require.context('../../images/00s/Culture/Employee_Recognition_Ceremony/Celebration_of_Distinction_2007', false, /\.(PNG|png|JPG|jpe?g|svg)$/));
const employeeRecognitionCelebrationofDistinction2008Images = importAll(require.context('../../images/00s/Culture/Employee_Recognition_Ceremony/Celebration_of_Distinction_2008', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

// Media Coverage Category
const mediaCoverageImages = importAll(require.context('../../images/00s/Culture/Media_Coverage', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

// Philanthropy Categoru
const philanthropyAmericanHeartApril2009Images = importAll(require.context('../../images/00s/Culture/Philanthropy/American Heart Association Heart Walk 2009', false, /\.(PNG|png|JPG|jpe?g|svg)$/));
const philanthropyAmericanHeartJuly2009Images = importAll(require.context('../../images/00s/Culture/Philanthropy/American_Heart_Association_Fair_April_2009', false, /\.(PNG|png|JPG|jpe?g|svg)$/));
const philanthropyAmericanHeartWalkImages = importAll(require.context('../../images/00s/Culture/Philanthropy/American_Heart_Association_Golf_Tournament_July_2009', false, /\.(PNG|png|JPG|jpe?g|svg)$/));
const philanthropyAngelTreeImages = importAll(require.context('../../images/00s/Culture/Philanthropy/Angel_Tree_December_2005', false, /\.(PNG|png|JPG|jpe?g|svg)$/));
const philanthropyUSOCarePackageMay2009Images = importAll(require.context('../../images/00s/Culture/Philanthropy/USO_Care_Package_Project_May 2009', false, /\.(PNG|png|JPG|jpe?g|svg)$/));
const philanthropyUSOOperationMay2009Images = importAll(require.context('../../images/00s/Culture/Philanthropy/USO_Operation_Care_Package_May_2009', false, /\.(PNG|png|JPG|jpe?g|svg)$/));
const philanthropyJuniorBowlImages = importAll(require.context('../../images/00s/Culture/Philanthropy/Junior_Bowl-A-Thon_March_2009', false, /\.(PNG|png|JPG|jpe?g|svg)$/));
const philanthropyToysForTotsImages = importAll(require.context('../../images/00s/Culture/Philanthropy/Toys_for_Tots_December 2008', false, /\.(PNG|png|JPG|jpe?g|svg)$/));

function CultureTwoThousands()
{
	const [isVisible, setIsVisible] = useState(false);
	const [modalContent, setModalContent] = useState();

	const toggleModal = (e) =>
	{
		if (isVisible === false)
		{
			setIsVisible(!isVisible);

			if (e.currentTarget.classList.contains('document'))
			{
				setModalContent('<embed type="application/pdf" width="1800" height="1000" src=' + e.target.getAttribute('data-src') + '?toolbar=0></embed>');
			}
			else
			{
				setModalContent('<img src=' + e.target.getAttribute('data-src') + '/>');
			}
		}
		else
		{
			setIsVisible(!isVisible);
		}
	}

		var renderedGeneralOutput = generalImages.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item} alt=''/></div></div>);

		renderedGeneralOutput[2] = <div onClick={toggleModal} className="col-md-2 document"><div className="imgPane"><img src={generalImages[2]} data-src={generalDocuments[0]} alt=''/></div></div>;

		var renderedCACITimesCompleteIssuesOutput = caciTimesCompleteIssuesImages.map((item, index) => <div onClick={toggleModal} className="col-md-2 document"><div className="imgPane"><img src={item} data-src={caciTimesCompleteIssuesDocuments[index]} alt=''/></div></div>);
		var renderedCACITimesCultureStoriesOutput = caciTimesCultureStoriesImages.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item} alt=''/></div></div>);

		var renderedEmployeeRecognitionAdmiralMoorerAwards2005 = employeeRecognitionAdmiralMoorerAwards2005Images.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item} alt=''/></div></div>);
		var renderedEmployeeRecognitionAdmiralMoorerAwards2009 = employeeRecognitionAdmiralMoorerAwards2009Images.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item} alt=''/></div></div>);
		var renderedEmployeeRecognitionAwardsCeremonyJune2008 = employeeRecognitionAwardsCeremonyJune2008Images.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item} alt=''/></div></div>);
		var renderedEmployeeRecognitionAwardsCeremonyOct2009 = employeeRecognitionAwardsCeremonyOct2009Images.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item} alt=''/></div></div>);
		var renderedEmployeeRecognitionAwardsProgramFeb2009 = employeeRecognitionAwardsProgramFeb2009Images.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item} alt=''/></div></div>);
		var renderedEmployeeRecognitionCelebrationofDistinction2003 = employeeRecognitionCelebrationofDistinction2003Images.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item} alt=''/></div></div>);
		var renderedEmployeeRecognitionCelebrationofDistinction2005 = employeeRecognitionCelebrationofDistinction2005Images.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item} alt=''/></div></div>);

		renderedEmployeeRecognitionCelebrationofDistinction2005[46] = <div onClick={toggleModal} className="col-md-2 document"><div className="imgPane"><img src={employeeRecognitionCelebrationofDistinction2005Images[46]} data-src={employeeRecognitionCelebrationofDistinction2005Documents[0]} alt=''/></div></div>;

		var renderedEmployeeRecognitionCelebrationofDistinction2006 = employeeRecognitionCelebrationofDistinction2006Images.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item} alt=''/></div></div>);
		var renderedEmployeeRecognitionCelebrationofDistinction2007 = employeeRecognitionCelebrationofDistinction2007Images.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item} alt=''/></div></div>);
		var renderedEmployeeRecognitionCelebrationofDistinction2008 = employeeRecognitionCelebrationofDistinction2008Images.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item} alt=''/></div></div>);

		var renderedMediaCoverage = mediaCoverageImages.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item} alt=''/></div></div>);

		var renderedPhilanthropyAmericanHeartApril2009Images = philanthropyAmericanHeartApril2009Images.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item} alt=''/></div></div>);
		var renderedPhilanthropyAmericanHeartJuly2009Images = philanthropyAmericanHeartJuly2009Images.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item} alt=''/></div></div>);
		var renderedPhilanthropyAmericanHeartWalkImages = philanthropyAmericanHeartWalkImages.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item} alt=''/></div></div>);
		var renderedPhilanthropyAngelTreeImages = philanthropyAngelTreeImages.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item} alt=''/></div></div>);
		var renderedPhilanthropyUSOCarePackageMay2009Images = philanthropyUSOCarePackageMay2009Images.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item} alt=''/></div></div>);
		var renderedPhilanthropyUSOOperationMay2009Images = philanthropyUSOOperationMay2009Images.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item} alt=''/></div></div>);
		var renderedPhilanthropyJuniorBowlImages = philanthropyJuniorBowlImages.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item} alt=''/></div></div>);
		var renderedPhilanthropyToysForTotsImages = philanthropyToysForTotsImages.map(item => <div onClick={toggleModal} className="col-md-2"><div className="imgPane"><img src={item} data-src={item} alt=''/></div></div>);

		return (
			<div>
				<ul className="nav nav-pills nav-fill" role="tablist">
				  <li className="nav-item" role="presentation">
					<button className="nav-link active" id="general-tab" data-bs-toggle="tab" data-bs-target="#general" type="button" role="tab" aria-controls="general" aria-selected="true"><strong>General</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="caciTimes-tab" data-bs-toggle="tab" data-bs-target="#caciTimes" type="button" role="tab" aria-controls="caciTimes" aria-selected="false"><strong>CACI Times</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="employeeRecognition-tab" data-bs-toggle="tab" data-bs-target="#employeeRecognition" type="button" role="tab" aria-controls="employeeRecognition" aria-selected="false"><strong>Employee Recognition Ceremony Images</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="mediaCoverage-tab" data-bs-toggle="tab" data-bs-target="#mediaCoverage" type="button" role="tab" aria-controls="mediaCoverage" aria-selected="false"><strong>Media Coverage</strong></button>
				  </li>
				  <li className="nav-item" role="presentation">
					<button className="nav-link" id="philantropy-tab" data-bs-toggle="tab" data-bs-target="#philantropy" type="button" role="tab" aria-controls="philantropy" aria-selected="false"><strong>Philantropy Images</strong></button>
				  </li>
				</ul>

				<div className="tab-content">
					<div className="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
						<div className='row'>
							{renderedGeneralOutput}
						</div>
					</div>
					<div className="tab-pane fade" id="caciTimes" role="tabpanel" aria-labelledby="caciTimes-tab">
						<ul className="nav nav-pills nav-fill" role="tablist">
							  <li className="nav-item" role="presentation">
								<a className="nav-link active" id="completeIssues-tab" data-bs-toggle="tab" data-bs-target="#completeIssues" type="button" role="tab" aria-controls="completeIssues" aria-selected="true"><strong>Complete Issues</strong></a>
							  </li>
							  <li className="nav-item" role="presentation">
								<a className="nav-link" id="cultureStories-tab" data-bs-toggle="tab" data-bs-target="#cultureStories" type="button" role="tab" aria-controls="cultureStories" aria-selected="false"><strong>Culture Stories of Interest</strong></a>
							  </li>
						</ul>
						<div className="tab-content">
							<div className="tab-pane fade show active" id="completeIssues" role="tabpanel" aria-labelledby="completeIssues-tab">
								<div className='row'>
									{renderedCACITimesCompleteIssuesOutput}
								</div>
							</div>
							<div className="tab-pane fade" id="cultureStories" role="tabpanel" aria-labelledby="cultureStories-tab">
								<div className='row'>
									{renderedCACITimesCultureStoriesOutput}
								</div>
							</div>
						</div>
					</div>
					<div className="tab-pane fade" id="employeeRecognition" role="tabpanel" aria-labelledby="employeeRecognition-tab">
						<ul className="nav nav-pills nav-fill" role="tablist">
							  <li className="nav-item" role="presentation">
								<a className="nav-link active" id="admiralMoorer2005-tab" data-bs-toggle="tab" data-bs-target="#admiralMoorer2005" type="button" role="tab" aria-controls="admiralMoorer2005" aria-selected="true"><strong>Admiral Moorer Awards 2005</strong></a>
							  </li>
							  <li className="nav-item" role="presentation">
								<a className="nav-link" id="admiralMoorer2009-tab" data-bs-toggle="tab" data-bs-target="#admiralMoorer2009" type="button" role="tab" aria-controls="admiralMoorer2009" aria-selected="false"><strong>Admiral Moorer Awards 2009</strong></a>
							  </li>
							  <li className="nav-item" role="presentation">
								<a className="nav-link" id="awardsCeremony2008-tab" data-bs-toggle="tab" data-bs-target="#awardsCeremony2008" type="button" role="tab" aria-controls="awardsCeremony2008" aria-selected="false"><strong>Awards Ceremony June 2008</strong></a>
							  </li>
							  <li className="nav-item" role="presentation">
								<a className="nav-link" id="awardsCeremony2009-tab" data-bs-toggle="tab" data-bs-target="#awardsCeremony2009" type="button" role="tab" aria-controls="awardsCeremony2009" aria-selected="false"><strong>Awards Ceremony October 2009</strong></a>
							  </li>
							  <li className="nav-item" role="presentation">
								<a className="nav-link" id="awardsProgram2009-tab" data-bs-toggle="tab" data-bs-target="#awardsProgram2009" type="button" role="tab" aria-controls="awardsProgram2009" aria-selected="false"><strong>Awards Program February 2009</strong></a>
							  </li>
							  <li className="nav-item" role="presentation">
								<a className="nav-link" id="celebrationDistinction2003-tab" data-bs-toggle="tab" data-bs-target="#celebrationDistinction2003" type="button" role="tab" aria-controls="celebrationDistinction2003" aria-selected="false"><strong>Celebration of Distinction 2003</strong></a>
							  </li>
							  <li className="nav-item" role="presentation">
								<a className="nav-link" id="celebrationDistinction2005-tab" data-bs-toggle="tab" data-bs-target="#celebrationDistinction2005" type="button" role="tab" aria-controls="celebrationDistinction2005" aria-selected="false"><strong>Celebration of Distinction 2005</strong></a>
							  </li>
							  <li className="nav-item" role="presentation">
								<a className="nav-link" id="celebrationDistinction2006-tab" data-bs-toggle="tab" data-bs-target="#celebrationDistinction2006" type="button" role="tab" aria-controls="celebrationDistinction2006" aria-selected="false"><strong>Celebration of Distinction 2006</strong></a>
							  </li>
							  <li className="nav-item" role="presentation">
								<a className="nav-link" id="celebrationDistinction2007-tab" data-bs-toggle="tab" data-bs-target="#celebrationDistinction2007" type="button" role="tab" aria-controls="celebrationDistinction2007" aria-selected="false"><strong>Celebration of Distinction 2007</strong></a>
							  </li>
							  <li className="nav-item" role="presentation">
								<a className="nav-link" id="celebrationDistinction2008-tab" data-bs-toggle="tab" data-bs-target="#celebrationDistinction2008" type="button" role="tab" aria-controls="celebrationDistinction2008" aria-selected="false"><strong>Celebration of Distinction 2008</strong></a>
							  </li>
							  <li className="nav-item" role="presentation">
								<a className="nav-link" id="sailingAheadDistinction2007-tab" data-bs-toggle="tab" data-bs-target="#sailingAheadDistinction2007" type="button" role="tab" aria-controls="sailingAheadDistinction2007" aria-selected="false"><strong>Sailing Ahead Distinction Awards 2007</strong></a>
							  </li>
						</ul>
						<div className="tab-content">
							<div className="tab-pane fade show active" id="admiralMoorer2005" role="tabpanel" aria-labelledby="admiralMoorer2009-tab">
								<div className='row'>
									{renderedEmployeeRecognitionAdmiralMoorerAwards2005}
								</div>
							</div>
							<div className="tab-pane fade" id="admiralMoorer2009" role="tabpanel" aria-labelledby="admiralMoorer2009-tab">
								<div className='row'>
									{renderedEmployeeRecognitionAdmiralMoorerAwards2009}
								</div>
							</div>
							<div className="tab-pane fade" id="awardsCeremony2008" role="tabpanel" aria-labelledby="awardsCeremony2008-tab">
								<div className='row'>
									{renderedEmployeeRecognitionAwardsCeremonyJune2008}
								</div>
							</div>
							<div className="tab-pane fade" id="awardsCeremony2009" role="tabpanel" aria-labelledby="awardsCeremony2009-tab">
								<div className='row'>
									{renderedEmployeeRecognitionAwardsCeremonyOct2009}
								</div>
							</div>
							<div className="tab-pane fade" id="awardsProgram2009" role="tabpanel" aria-labelledby="awardsProgram2009-tab">
								<div className='row'>
									{renderedEmployeeRecognitionAwardsProgramFeb2009}
								</div>
							</div>
							<div className="tab-pane fade" id="celebrationDistinction2003" role="tabpanel" aria-labelledby="celebrationDistinction2003-tab">
								<div className='row'>
									{renderedEmployeeRecognitionCelebrationofDistinction2003}
								</div>
							</div>
							<div className="tab-pane fade" id="celebrationDistinction2005" role="tabpanel" aria-labelledby="celebrationDistinction2005-tab">
								<div className='row'>
									{renderedEmployeeRecognitionCelebrationofDistinction2005}
								</div>
							</div>
							<div className="tab-pane fade" id="celebrationDistinction2006" role="tabpanel" aria-labelledby="celebrationDistinction2006-tab">
								<div className='row'>
									{renderedEmployeeRecognitionCelebrationofDistinction2006}
								</div>
							</div>
							<div className="tab-pane fade" id="celebrationDistinction2007" role="tabpanel" aria-labelledby="celebrationDistinction2007-tab">
								<div className='row'>
									{renderedEmployeeRecognitionCelebrationofDistinction2007}
								</div>
							</div>
							<div className="tab-pane fade" id="celebrationDistinction2008" role="tabpanel" aria-labelledby="celebrationDistinction2008-tab">
								<div className='row'>
									{renderedEmployeeRecognitionCelebrationofDistinction2008}
								</div>
							</div>
							<div className="tab-pane fade" id="sailingAheadDistinction2007" role="tabpanel" aria-labelledby="sailingAheadDistinction2007-tab">
								<div className='row'>
									{renderedEmployeeRecognitionCelebrationofDistinction2008}
								</div>
							</div>
						</div>
					</div>
					<div className="tab-pane fade" id="mediaCoverage" role="tabpanel" aria-labelledby="mediaCoverage-tab">
						<div className='row'>
							{renderedMediaCoverage}
						</div>
					</div>
					<div className="tab-pane fade" id="philantropy" role="tabpanel" aria-labelledby="philantropy-tab">
						<ul className="nav nav-pills nav-fill" role="tablist">
							  <li className="nav-item" role="presentation">
								<a className="nav-link active" id="americanHeartApril2009-tab" data-bs-toggle="tab" data-bs-target="#americanHeartApril2009" type="button" role="tab" aria-controls="americanHeartApril2009" aria-selected="false"><strong>American Heart Association Fair April 2009</strong></a>
							  </li>
							  <li className="nav-item" role="presentation">
								<a className="nav-link" id="americanHeartJuly2009-tab" data-bs-toggle="tab" data-bs-target="#americanHeartJuly2009" type="button" role="tab" aria-controls="americanHeartJuly2009" aria-selected="false"><strong>American Heart Association Golf Tournament July 2009</strong></a>
							  </li>
							  <li className="nav-item" role="presentation">
								<a className="nav-link" id="americanHeartWalk-tab" data-bs-toggle="tab" data-bs-target="#americanHeartWalk" type="button" role="tab" aria-controls="americanHeartWalk" aria-selected="false"><strong>American Heart Association Heart Walk 2009</strong></a>
							  </li>
							  <li className="nav-item" role="presentation">
								<a className="nav-link" id="angelTree-tab" data-bs-toggle="tab" data-bs-target="#angelTree" type="button" role="tab" aria-controls="angelTree" aria-selected="false"><strong>Angel Tree December 2005</strong></a>
							  </li>
							  <li className="nav-item" role="presentation">
								<a className="nav-link" id="usoCarePackage-tab" data-bs-toggle="tab" data-bs-target="#usoCarePackage" type="button" role="tab" aria-controls="usoCarePackage" aria-selected="false"><strong>USO Care Package Project May 2009</strong></a>
							  </li>
							  <li className="nav-item" role="presentation">
								<a className="nav-link" id="usoCarePackage2-tab" data-bs-toggle="tab" data-bs-target="#usoCarePackage2" type="button" role="tab" aria-controls="usoCarePackage2" aria-selected="false"><strong>USO Operation Care Package May 2009</strong></a>
							  </li>
							  <li className="nav-item" role="presentation">
								<a className="nav-link" id="juniorBowl-tab" data-bs-toggle="tab" data-bs-target="#juniorBowl" type="button" role="tab" aria-controls="juniorBowl" aria-selected="false"><strong>Junior Bowl-A-Thon March 2009</strong></a>
							  </li>
							  <li className="nav-item" role="presentation">
								<a className="nav-link" id="toysForTots-tab" data-bs-toggle="tab" data-bs-target="#toysForTots" type="button" role="tab" aria-controls="toysForTots" aria-selected="false"><strong>Toys For Tots December 2008</strong></a>
							  </li>
						</ul>
						<div className="tab-content">
							<div className="tab-pane fade show active" id="americanHeartApril2009" role="tabpanel" aria-labelledby="americanHeartApril2009-tab">
								<div className='row'>
									{renderedPhilanthropyAmericanHeartApril2009Images}
								</div>
							</div>
							<div className="tab-pane fade" id="americanHeartJuly2009" role="tabpanel" aria-labelledby="americanHeartJuly2009-tab">
								<div className='row'>
									{renderedPhilanthropyAmericanHeartJuly2009Images}
								</div>
							</div>
							<div className="tab-pane fade" id="americanHeartWalk" role="tabpanel" aria-labelledby="americanHeartWalk-tab">
								<div className='row'>
									{renderedPhilanthropyAmericanHeartWalkImages}
								</div>
							</div>
							<div className="tab-pane fade" id="angelTree" role="tabpanel" aria-labelledby="angelTree-tab">
								<div className='row'>
									{renderedPhilanthropyAngelTreeImages}
								</div>
							</div>
							<div className="tab-pane fade" id="usoCarePackage" role="tabpanel" aria-labelledby="usoCarePackage-tab">
								<div className='row'>
									{renderedPhilanthropyUSOCarePackageMay2009Images}
								</div>
							</div>
							<div className="tab-pane fade" id="usoCarePackage2" role="tabpanel" aria-labelledby="usoCarePackage2-tab">
								<div className='row'>
									{renderedPhilanthropyUSOOperationMay2009Images}
								</div>
							</div>
							<div className="tab-pane fade" id="juniorBowl" role="tabpanel" aria-labelledby="juniorBowl-tab">
								<div className='row'>
									{renderedPhilanthropyJuniorBowlImages}
								</div>
							</div>
							<div className="tab-pane fade" id="toysForTots" role="tabpanel" aria-labelledby="toysForTots-tab">
								<div className='row'>
									{renderedPhilanthropyToysForTotsImages}
								</div>
							</div>
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

export default CultureTwoThousands