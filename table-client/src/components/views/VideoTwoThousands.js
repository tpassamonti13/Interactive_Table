import React, { useState } from "react";
import '../views/BLevelContent.css';

//Function to import all images
function importAll(r) 
{
  return r.keys().map(r);
}

const videoThumbnails = importAll(require.context('../../images/Video_Thumbnails/00s', false, /\.(PNG|png|jpe?g|svg)$/));

export default function VideoTwoThousands()
{
	const [mainThumbnail, setMainThumbnail] = useState(<img alt="" src = "" width="100%" height="100%" />);

	function changeThumbnail(thumbnail)
	{
		setMainThumbnail(<img alt="" src={thumbnail}  width="100%" height="100%" />);

		console.log(thumbnail);
	}

	var renderedVideoThumbnails = videoThumbnails.map(item => <div className="videoThumbnailInfoContainer" onClick={() => changeThumbnail({item})}><div className="videoThumbnailContainer"><div className='videoThumbnail'><img loading="lazy" alt="" src={item} data-src={item} width="100%" height="100%" /></div></div><div className="videoInfoContainer"><h1>{item}</h1></div></div>);

	return (
			<>
				<div className='videoPlaylistContainer'>
					{renderedVideoThumbnails}
				</div>
				<div className='largeVideoThumbnailContainer' dangerouslySetInnerHTML={{__html: mainThumbnail}}>
				</div>
				<div className='videoTitleArea'>
				</div>
			</>
	);
}