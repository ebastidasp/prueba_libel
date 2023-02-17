import React, { useState } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';

function App() {
  const carouselButtonNames = ['Today', 'This week', 'Last 30 days'];

  const [isLeftSelected, setIsLeftSelected] = useState(true);

  const [currentSelectedCarouselButtonName, setCurrentSelectedCarouselButtonName] = React.useState(0);

  const secondCarouselButtonNames = ['Today', 'This week', 'Last 30 days'];

  const [currentSelectedSecondCarouselButtonName, setCurrentSelectedSecondCarouselButtonName] = React.useState(0);

  return (
    <div className="App" style={{display:'flex', flexDirection:'column'}}>
      <div style={{backgroundColor:'#262b3a', height:'auto', width:'100vw', position:'relative', top:'0px', marginBottom: 10, textAlign: 'left'}}>
        <div style={{display:'flex', flexDirection:'row', marginLeft: '10vw', marginTop: '5vh'}}>
          <div style={{display:'flex', flexDirection:'column'}}>
            <h1 style={{color:'white', fontSize:50}}>
              Big Comeback
            </h1>
            <p style={{color:'white', marginTop: '5vh'}}>
              Nullam porta, eros id aliquam pulvinar, uma ex mattis eros, quis ves- <br/>
              tibulum urna turpis et risus Mauris portitor risus faucibus auctor <br/>
              arcu a, tincidunt nibh... <br/> 
            </p>
          </div>
          <PlayCircleFilledWhiteOutlinedIcon sx={{fontSize:250, marginLeft:'15vw', borderColor:'#888a92', fill:'#2582a9'}}/>
        </div>
        <div style={{marginLeft: '10vw', marginTop: '5vh', marginBottom: '5vh'}}>
          <button style={{backgroundColor: '#2091bc', color: 'white', outline: 'none', border: 'none', borderRadius: '1px', height:'45px', width: '240px'}}>
            Watch Now
          </button>
          <button style={{background: '#262b3a', borderColor: 'white', color: 'white', marginLeft: '30px', borderRadius: '1px', height:'45px', width: '240px'}}>
            Playlist
          </button>
        </div>
      </div>
        <div onClick={() => setIsLeftSelected(false)}>
          <div style={{display:'flex', flexDirection:'row', marginLeft: '10vw', marginTop: '10vh'}}>
            {carouselButtonNames.map((buttonName, index) => {
              return (
                <p style={{color:index === currentSelectedCarouselButtonName ? '#2091bc' : 'white', marginRight: 30}} onClick={() => setCurrentSelectedCarouselButtonName(index)}>
                  {buttonName}
                </p>)
            })}
          </div>
          <Carousel isLeftSelected={isLeftSelected} positionOfButtons="right" titleLine1={"Action &"} titleLine2={"Drama Movies"} itemsToShow={6}
            items={[{name: 'Den of Thieves', genre:'Action', year:' 2016'}, {name: 'Laby Bird', genre:'Action, Thriller', year:' 2018'},
            {name: 'Laby Bird', genre:'Action, Drama', year:'2017'}, {name: 'Spiderman 3', genre:'Action, Mistery', year:'2016'},
            {name: 'American Made', genre:'Action', year:'2018'}, {name: 'Begin Again', genre:'Action', year:'2011'},
            {name: 'Den of Thieves', genre:'Action', year:' 2016'}, {name: 'Laby Bird', genre:'Action, Thriller', year:' 2018'},
            {name: 'Laby Bird', genre:'Action, Drama', year:'2017'}, {name: 'Spiderman 3', genre:'Action, Mistery', year:'2016'},
            {name: 'American Made', genre:'Action', year:'2018'}, {name: 'Begin Again', genre:'Action', year:'2011'}]}/>
        </div>
        <div onClick={() => setIsLeftSelected(true)}>
          <div style={{display:'flex', flexDirection:'row', marginLeft: '25vw', marginTop: '10vh'}}>
            {secondCarouselButtonNames.map((buttonName, index) => {
              return (
                <p style={{color:index === currentSelectedSecondCarouselButtonName ? '#2091bc' : 'white', marginRight: 30}} onClick={() => setCurrentSelectedSecondCarouselButtonName(index)}>
                  {buttonName}
                </p>)
            })}
          </div>
          <Carousel isLeftSelected={isLeftSelected} positionOfButtons="left"  titleLine1={"Funniest Comedies"} titleLine2={"of 2018"} itemsToShow={6}
            items={[{name: 'Midnight Sun', genre:'Comedy', year:' 2018'}, {name: 'Chapter & Verse', genre:'Action, Comedy', year:' 2018'},
            {name: 'Bad Genius', genre:'Comedy', year:'2018'}, {name: 'My Generation', genre:'Comedy, Thriller', year:'2018'},
            {name: 'Have a Nice Day', genre:'Comedy', year:'2018'}, {name: 'Gnome Alone', genre:'Comedy', year:'2018'},
            {name: 'Midnight Sun', genre:'Comedy', year:' 2018'}, {name: 'Chapter & Verse', genre:'Action, Comedy', year:' 2018'},
            {name: 'Bad Genius', genre:'Comedy', year:'2018'}, {name: 'My Generation', genre:'Comedy, Thriller', year:'2018'},
            {name: 'Have a Nice Day', genre:'Comedy', year:'2018'}, {name: 'Gnome Alone', genre:'Comedy', year:'2018'},]}/>
        </div>
    </div>
  );
}

export default App;
