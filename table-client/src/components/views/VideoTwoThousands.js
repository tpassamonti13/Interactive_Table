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
	var renderedvideoThumbnails = videoThumbnails.map(item => <div className="videoThumbnailInfoContainer"><div className="videoThumbnailContainer"><div className='videoThumbnail'><img src={item} data-src={item} width="100%" height="100%" /></div></div><div className="videoInfoContainer"><h1>{item}</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu lobortis elementum nibh tellus molestie nunc non blandit massa.</p></div></div>);

	return (
			<>
				<div className='videoPlaylistContainer'>
					{renderedvideoThumbnails}
				</div>
				<div className='largeVideoThumbnailContainer'>
				</div>
				<div className='videoTitleArea'>
				</div>
			</>
	);
}