import React, { useState, useEffect } from "react";
import { StartVideo } from '../../components/Video';
import '../views/BLevelContent.css';
import loadingSpinner from '../../images/4a19ba78-a694-45b4-8697-d192cbd73f67.gif';

//Function to import all images
function importAll(r) 
{
  return r.keys().map(r);
}

const videoThumbnails = importAll(require.context('../../images/Video_Thumbnails/00s', false, /\.(PNG|png|jpe?g|svg)$/));

export default function VideoTwoThousands()
{
	const [video, setVideo] = useState(
	{
		thumbnail: <img alt="" src = "" width="100%" height="100%" />, 
		title: <h1>2000-2009 Overview Video</h1>,
		loadingDivShowing: false,
		videoPlaying: true
	});

	const playVideo = (thumbnail, listNumber) => 
	{
		var videoString = thumbnail.item.replace('.jpg','').replace('/static/media/', '').slice(0, -9);

		var nowPlayingClassList = document.getElementsByClassName('nowPlayingOverlay');

		console.log(listNumber.index)

		for(var i = 0; i < nowPlayingClassList.length; i++)
		{
		  nowPlayingClassList[i].classList.remove('active');
		}

		StartVideo(videoString);

		setVideo(
		{
			thumbnail: video.thumbnail,
			title: video.title,
			loadingDivShowing: true,
			videoPlaying: true
		});

		const videoLoadingTimeout = setTimeout(() => 
  		{
  			nowPlayingClassList[listNumber.index].classList.add('active');

  			setVideo(
			{
				thumbnail: <><img alt="" src={thumbnail.item} width="100%" height="100%" /><button className='playPauseButton pause'></button></>,
				title: <h1>{thumbnail.item.replace('.jpg','').replace('/static/media/', '').replaceAll('_', ' ').slice(0, -9)}</h1>,
				loadingDivShowing: false
			});

			 clearTimeout(videoLoadingTimeout);

  		}, 10000);
	}

	var renderedVideoThumbnails = videoThumbnails.map((item, index) => <div className="videoThumbnailInfoContainer"><div data-src={index} className='nowPlayingOverlay'><h1>Now Playing</h1></div><div className="videoThumbnailContainer"><div className='videoThumbnail' onClick={() => playVideo({item}, {index})}><img loading="lazy" alt="" src={item} data-src={item} width="100%" height="100%" /></div></div><div className="videoInfoContainer"><h1>{item.replace('.jpg','').replace('/static/media/', '').replaceAll('_', ' ').slice(0, -9)}</h1></div></div>);

	return (
			<>
				<div style={{display: video.loadingDivShowing ? 'block' : 'none'}} className='videoLoadingDiv'>
					<h1>Loading Video</h1>
					<img src={loadingSpinner} alt="" width="10%" />
				</div>
				<div className='videoPlaylistContainer'>
					{renderedVideoThumbnails}
				</div>
				<div className='largeVideoThumbnailContainer'>
					{video.thumbnail}
				</div>
				<div className='videoTitleArea'>
					{video.title}
				</div>
			</>
	);
}