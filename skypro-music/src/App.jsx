
import './style.css'
import NavMenu from './components/NavMenu'
import TrackListSearch from './components/TracklistSearch'
import SideBar from './components/Sidebar'
import AudioPlayer from './components/AudioPlayer'
import React, { useState, useEffect } from "react";


function App() {
	const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
					<NavMenu/>
					<TrackListSearch/>
					<SideBar/>
					<>
      <AudioPlayer isLoading={isLoading} />
    </>
        </main>
				<footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
