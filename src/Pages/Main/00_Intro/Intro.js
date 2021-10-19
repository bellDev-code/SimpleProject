import React, { Component } from 'react';
import './Intro.scss'
import CircleDesignImg1 from '../../../_asset/images/Main/00_Intro/00-img-01.png'
import CircleDesignImg2 from '../../../_asset/images/Main/00_Intro/00-img-02.png'
import CircleDesignImg3 from '../../../_asset/images/Main/00_Intro/00-img-03.png'
import CircleDesignImg4 from '../../../_asset/images/Main/00_Intro/00-img-04.png'
import CircleDesignImg5 from '../../../_asset/images/Main/00_Intro/00-img-05.png'
import CircleDesignImg6 from '../../../_asset/images/Main/00_Intro/00-img-06.png'
import VisualDesignImg from '../../../_asset/images/Main/01_Circle of Red Cross/01-img-3.png'
import VisualDesignImg1 from '../../../_asset/images/Main/01_Circle of Red Cross/01-img-4.png'
class Intro extends Component {

    render() {
        return (
            <div className='IntroWholeWrap'>
                <div className='IntroWrapper'>
                    <div className='IntroContainer'>
                        <div className='IntroFirstRow'>
                            <div className='IntroContents'>
                                <div className='Number'>
                                    00
                            </div>
                                <div className='Title'>
                                    Intro
                            </div>
                                <div className='SubTitle'>
                                Text Be Imbued With Eunsol
                            </div>
                                <div className='MiddleRow'>
                                    <div className='YearTitle'>
                                        Year<br></br>
                                    Form
                                </div>
                                    <div className='YearContents'>
                                        2019<br></br>
                                    Web site Design / UIUX
                                </div>
                                </div>
                                <div className='SummaryTitle'>
                                    Summary
                            </div>
                                <div className='SummaryContents'>
                                    This is a portfolio site based on layout and R&D of grid systems. It was a short period of time, but I wanted to make sure that designer thought could be absorbed into the site.<br></br><br></br>
                                    The placement of writings and images in the eyes of aesthetic and editorial exploration.<br></br><br></br> 
                                    I've changed it a lot, experimented with it, applied it. While you are at this site, you will get to know Eunsol Shim as a designer. I hope you will have a great time and experience to share my view of the world.<br></br><br></br>
                            </div>
                            </div>
                            <div className='ExampleOfUseContainer'>
                                <div className='ExampleOfUseBox'>
                                    <div className='Img'>
                                        <img src={CircleDesignImg1} alt='CircleDesignImg2'></img>
                                    </div>
                                </div>
                                <div className='ExampleOfUseBox'>
                                    <div className='Name'>
                                        Eunsol<br></br>
                                        Shim
                                    </div>
                                    <div className='Img'>
                                        <img src={CircleDesignImg2} alt='CircleDesignImg2'></img>
                                    </div>
                                </div>
                                <div className='ExampleOfUseBox'>
                                    <div className='Img'>
                                        <img src={CircleDesignImg3} alt='CircleDesignImg3'></img>
                                    </div>
                                </div>
                                <div className='ExampleOfUseBox'>
                                    <div className='Img'>
                                        <img src={CircleDesignImg4} alt='CircleDesignImg4'></img>
                                    </div>
                                </div>
                                <div className='ExampleOfUseBox'>
                                    <div className='Img'>
                                        <img src={CircleDesignImg5} alt='CircleDesignImg5'></img>
                                    </div>
                                </div>
                                <div className='ExampleOfUseBox'>
                                    <div className='Img'>
                                        <img src={CircleDesignImg6} alt='CircleDesignImg6'></img>
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/*Footer*/}
                        <div className='FooterBox'>
                            <div className='FooterTitle'>
                                00 Intro
                        </div>
                            <div className='FooterCategoryTitle'>
                                Portfolio
                        </div>

                        </div>

                    </div>
                </div>



            </div>
        );
    }
}

export default Intro;