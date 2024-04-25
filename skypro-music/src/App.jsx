
import './style.css'
import NavMenu from './components/NavMenu'
import TrackList from './components/Tracklist'
import SideBar from './components/Sidebar'
import AudioPlayer from './components/AudioPlayer'


function App() {
  return (

    <div className="wrapper">

      <div className="container">
        <main className="main">
					<NavMenu/>
					<TrackList/>
					<SideBar/>
					<AudioPlayer/>

					{/* sidebar */}

         
        </main>
				

				<footer className="footer"></footer>
				
      </div>
    </div>

  );
}

export default App;
