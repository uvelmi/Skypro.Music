

import NavMenu from './components/NavMenu/NavMenu'
import TrackListSearch from './components/TracklistSearch/TracklistSearch'
import SideBar from './components/Sidebar/Sidebar'
import AudioPlayer from './components/AudioPlayer/AudioPlayer'
import * as S from './App.styles'

import { GlobalStyle } from './GlobalStyles';




function App() {
  return (
		<>
		<GlobalStyle />
    <S.Wrapper>
      <S.Container>
        <S.Main>

					<NavMenu/>
					<TrackListSearch/>
					<SideBar/>
					<AudioPlayer/>
					
        </S.Main>
				<footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
		</>
  );
}

export default App;
