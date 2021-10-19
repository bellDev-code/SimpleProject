import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { Link, Element } from 'react-scroll'
import ScrollWrapper from './Components/ScrollingWrapper/ScrollingWrapper '
import Heartbeat from './Pages/Main/Heartbeat/Heartbeat'
import Header from './Pages/Main/Header/Header.js'
import DesignIs from './Pages/Main/DesignIs/DesignIs'
import Index from './Pages/Main/Index/Index'
import Intro from './Pages/Main/00_Intro/Intro'
import CircleOfRedCross from './Pages/Main/01_CircleOfRedCross/CircleOfRedCross'
import Calendar from './Pages/Main/Calendar/Calendar';
import IveGotOutAtLast from './Pages/Main/06_IveGotOutAtLast/IveGotOutAtLast'
import IveGotOutAtLast2 from './Pages/Main/06_IveGotOutAtLast/IveGotOutAtLast2'
import UniverseInCloud from './Pages/Main/04_UniverseInCloud/UniverseInCloud'
import CloudComputingIllustration from './Pages/Main/05_CloudComputingIllustration/CloudComputingIllustration'
import Calligraphy from './Pages/Main/07_Calligraphy/Calligraphy'
import Portrait from './Pages/Main/08_Portrait/Portrait'
import UniverseInYourEyes from './Pages/Main/09_UniverseInYourEyes/UniverseInYourEyes'
import Kite from './Pages/Main/10_Kite/Kite'
import SilverLining from './Pages/Main/11_SilverLining/SilverLining';
import SilverLining2 from './Pages/Main/11_SilverLining/SilverLining2';
import NightLight from './Pages/Main/12_NightLight/NightLight';
import BurnOut from './Pages/Main/13_BurnOut/BurnOut';
import Reborn from './Pages/Main/14_Reborn/Reborn';
import WalkOnIce from './Pages/Main/15_WalkOnIce/WalkOnIce';
import WalkOnIce2 from './Pages/Main/15_WalkOnIce/WalkOnIce2';
import EvergreenPine from './Pages/Main/16_EvergreenPine/EvergreenPine';
import EvergreenPine2 from './Pages/Main/16_EvergreenPine/EvergreenPine2';
import Sensed from './Pages/Main/17_Sensed/Sensed';
import GreenEyedMonster from './Pages/Main/19_GreenEyedMonster/GreenEyedMonster';
import GreenEyedMonster2 from './Pages/Main/19_GreenEyedMonster/GreenEyedMonster2';
import YellowWallpaper from './Pages/Main/18_YellowWallpaper/YellowWallpaper';
import YellowWallpaper2 from './Pages/Main/18_YellowWallpaper/YellowWallpaper2';
import Intro1 from './Pages/Main/00_Intro/Intro1';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <ScrollWrapper></ScrollWrapper>
        <Header></Header>
        <Element name='DesignIs' className='element'>
          <DesignIs></DesignIs>
        </Element>
        <Index></Index>
        <Element name='Intro' className='element'>
          <Intro></Intro>
        </Element>
        <Element name='Intro1' className='element'>
          <Intro1></Intro1>
        </Element>
        <Element name='CircleOfRedCross' className='element'>
          <CircleOfRedCross></CircleOfRedCross>
        </Element>
        <Element name='Heartbeat' className='element'>
          <Heartbeat></Heartbeat>
        </Element>
        <Element name='Calendar' className='element'>
          <Calendar></Calendar>
        </Element>
        <Element name='UniverseInCloud' className='element'>
          <UniverseInCloud></UniverseInCloud>
        </Element>
        <Element name='CloudComputingIllustration' className='element'>
          <CloudComputingIllustration></CloudComputingIllustration>
        </Element>
        <Element name='IveGotOutAtLast' className='element'>
          <IveGotOutAtLast></IveGotOutAtLast>
        </Element>
        <Element name='IveGotOutAtLast2' className='element'>
          <IveGotOutAtLast2></IveGotOutAtLast2>
        </Element>
        <Element name='Calligraphy' className='element'>
          <Calligraphy></Calligraphy>
        </Element>
        <Element name='Portrait' className='element'>
          <Portrait></Portrait>
        </Element>
        <Element name='UniverseInYourEyes' className='element'>
          <UniverseInYourEyes></UniverseInYourEyes>
        </Element>
        <Element name='Kite' className='element'>
          <Kite></Kite>
        </Element>
        <Element name='SilverLining' className='element'>
          <SilverLining></SilverLining>
        </Element>
        <Element name='SilverLining2' className='element'>
          <SilverLining2></SilverLining2>
        </Element>
        <Element name='NightLight' className='element'>
          <NightLight></NightLight>
        </Element>
        <Element name='BurnOut' className='element'>
          <BurnOut></BurnOut>
        </Element>
        <Element name='Reborn' className='element'>
          <Reborn></Reborn>
        </Element>
        <Element name='WalkOnIce' className='element'>
          <WalkOnIce></WalkOnIce>
        </Element>
        <Element name='WalkOnIce2' className='element'>
          <WalkOnIce2></WalkOnIce2>
        </Element>
        <Element name='EvergreenPine' className='element'>
          <EvergreenPine></EvergreenPine>
        </Element>
        <Element name='EvergreenPine2' className='element'>
          <EvergreenPine2></EvergreenPine2>
        </Element>
        <Element name='Sensed' className='element'>
          <Sensed></Sensed>
        </Element>
        <Element name='YellowWallpaper' className='element'>
          <YellowWallpaper></YellowWallpaper>
        </Element>
        <Element name='YellowWallpaper2' className='element'>
          <YellowWallpaper2></YellowWallpaper2>
        </Element>
        <Element name='GreenEyedMonster' className='element'>
          <GreenEyedMonster></GreenEyedMonster>
        </Element>
        <Element name='GreenEyedMonster2' className='element'>
          <GreenEyedMonster2></GreenEyedMonster2>
        </Element>

      </div>
    );
  }
}
export default App;