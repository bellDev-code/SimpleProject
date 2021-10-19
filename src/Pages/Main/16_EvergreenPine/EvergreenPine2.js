import React, { Component } from 'react';
import './EvergreenPine2.scss'
import VisualDesignImg from  '../../../_asset/images/Main/16_Evergreen pine/16-img-2.png'
import VisualDesignImg1 from  '../../../_asset/images/Main/16_Evergreen pine/16-img-3.png'
class EvergreenPine2 extends Component {

    render() {
        return (
            <div className='EvergreenPine2WholeWrap'>
                {/*두번째 페이지 ///////////////////////////////////////////*/}


                <div className='EvergreenPine2Wrapper1'>
                    <div className='EvergreenPine2ContainerTop'>
                        <div className='EvergreenPine2Container'>
                            <div className='EvergreenPine2FirstRow'>
                                <div className='EvergreenPine2Contents'>
                                    <div>
                                        <div className='SummaryTitle'>
                                            Details
                                    </div>
                                        <div className='SummaryContents'>
                                        The color of the pine remains the same in all seasons, so it should be called "always the same color" rather than "green." Therefore, I tried to highlight the green color paradoxically by showing the green pine tree in black and white.<br></br><br></br>
Here the pine tree did not grow upright and thus looks unusually winding like a bonsai pine tree. For it suffered adversity and suffering. The pine tree resembles the pose of a human trying to get up on a rock with two legs. The pine tree grows around the rocks floating in the air.<br></br><br></br>
The gigantic rock represents adversity and suffering in life. I dismantled the middle of the rock and put the beads there, which means the path of the pine tree's life. The beads in the middle represent the small happiness, rewarding, and valuable experiences of life found in the path of adversity and suffering.                                    </div>
                                    </div>
                                    <div className='SummaryContents1'>
                                    I tried to express the various branches and entanglements of life – like threads - through the pattern of the background of this work. It envelops the pines wildly, which means "wind" and "frost" on which the pine tree faces.<br></br><br></br>
The pine tree, expressed in sharp contrast, emphasizes the green color, which has been kept unchanged by wind and frost, which means firm will, integrity, and a symbol itself.<br></br><br></br>
I split all the pictures into pieces. In the past, pine trees were considered one of the ten traditional symbols of longevity, and they had a pine screen hanging in the house, symbolizing a spirit. In order to achieve this effect, the picture was cut and connected like a blind.
                                    </div>
                                </div>
                                {/*Visual Design*/}
                                <div>
                                    {/* <div className='VisualDesignTitle'>
                                        Visual design
                                </div> */}
                                    <div className='VisualDesignImg'>
                                        <img src={VisualDesignImg} alt='VisualDesignImg2'></img>
                                    </div>
                                </div>
                            </div>



                            <div className='ExampleOfUseBox'>
                                <div className='Name'>
                                    Eunsol<br></br>
                                Shim
                            </div>
                                {/* <div className='Title'>
                                    Example of use
                            </div> */}
                                <div className='Img'>
                                    <img src={VisualDesignImg1} alt='VisualDesignImg3'></img>
                                </div>
                            </div>



                        </div>
                        {/*Footer*/}
                        <div className='FooterBox'>
                            <div className='FooterTitle'>
                                16 Evergreen Pine
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

export default EvergreenPine2;