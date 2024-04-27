
import './style.css'
import NavMenu from './components/NavMenu'
import TrackListSearch from './components/TracklistSearch'
import SideBar from './components/Sidebar'
import AudioPlayer from './components/AudioPlayer'


function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
					<NavMenu/>
					<TrackListSearch/>
					<SideBar/>
					<AudioPlayer/>
        </main>
				<footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
