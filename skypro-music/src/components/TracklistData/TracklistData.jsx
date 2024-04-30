
import TrackList from '../Tracklist/Tracklist';


const TracklistData = () => {
  const Tracks = [
		{
			id: 1,
      title: "Guilt",
      author: "Nero",
      album: "Welcome Reality",
      time: "4:44",
			iconTime: "img/icon/sprite.svg#icon-like",
			icon: "img/icon/sprite.svg#icon-note",
			trackSpan: ''
    },
		{
			id: 2,
      title: "Elektro",
      author: "Dynoro, Outwork, Mr. Gee",
      album: "Elektro",
      time: "2:22",
			iconTime: "img/icon/sprite.svg#icon-like",
			icon: "img/icon/sprite.svg#icon-note",
			trackSpan: ''
    },
		{
			id: 3,
      title: "I’m Fire",
      author: "Ali Bakgor",
      album: "I’m Fire",
      time: "2:22",
			iconTime: "img/icon/sprite.svg#icon-like",
			icon: "img/icon/sprite.svg#icon-note",
			trackSpan: ''
    },
		{
			id: 4,
      title: "Non Stop",
      author: "Стоункат, Psychopath",
      album: "Non Stop",
      time: "4:12",
			iconTime: "img/icon/sprite.svg#icon-like",
			icon: "img/icon/sprite.svg#icon-note",
			trackSpan: '(Remix)'
    },
		{
			id: 5,
      title: "Run Run",
      author: "Jaded, Will Clarke, AR/CO",
      album: "Run Run",
      time: "2:54",
			iconTime: "img/icon/sprite.svg#icon-like",
			icon: "img/icon/sprite.svg#icon-note",
			trackSpan: '(feat. AR/CO)'
    },
		{
			id: 6,
      title: "Eyes on Fire",
      author: "Blue Foundation, Zeds Dead",
      album: "Eyes on Fire",
      time: "5:20",
			iconTime: "img/icon/sprite.svg#icon-like",
			icon: "img/icon/sprite.svg#icon-note",
			trackSpan: '(Zeds Dead Remix)'
    },
			{
			id: 7,
      title: "Mucho Bien",
      author: "HYBIT, Mr. Black, Offer Nissim, Hi Profile",
      album: "Mucho Bien",
      time: "3:41",
			iconTime: "img/icon/sprite.svg#icon-like",
			icon: "img/icon/sprite.svg#icon-note",
			trackSpan: '(Hi Profile Remix)'
    },
    {
			id: 8,
      title: "Knives n Cherries",
      author: "minthaze",
      album: "Captivating",
      time: "1:48",
			iconTime: "img/icon/sprite.svg#icon-like",
			icon: "img/icon/sprite.svg#icon-note",
			trackSpan: ''
    },
		{
			id: 9,
      title: "How Deep Is Your Love",
      author: "Calvin Harris, Disciples",
      album: "How Deep Is Your Love",
      time: "3:32",
			iconTime: "img/icon/sprite.svg#icon-like",
			icon: "img/icon/sprite.svg#icon-note",
			trackSpan: ''
    },
		{
			id: 10,
      title: "Morena",
      author: "Tom Boxer",
      album: "Soundz Made in Romania",
      time: "3:36",
			iconTime: "img/icon/sprite.svg#icon-like",
			icon: "img/icon/sprite.svg#icon-note",
			trackSpan: ''
    }
  ];

  return <TrackList Tracks={Tracks} />
}

export default TracklistData;