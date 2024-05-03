

import NavMenu from './components/NavMenu/NavMenu'
import TrackListSearch from './components/TracklistSearch/TracklistSearch'
import SideBar from './components/Sidebar/Sidebar'
import AudioPlayer from './components/AudioPlayer/AudioPlayer'
import * as S from './App.styles'
import React, { useState, useEffect } from "react";
import { GlobalStyle } from './GlobalStyles';





function App() {
	const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
		<>
		<GlobalStyle />
    <S.Wrapper>
      <S.Container>
        <S.Main>

					<NavMenu/>
					<TrackListSearch/>
					
					<>
					<SideBar isLoading={isLoading} />
      <AudioPlayer isLoading={isLoading} />
    </>
					
        </S.Main>
				<footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
		</>
  );
}

export default App;
