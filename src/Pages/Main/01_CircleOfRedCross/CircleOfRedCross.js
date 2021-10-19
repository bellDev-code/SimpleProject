import React, { Component } from 'react';
import './CircleOfRedCross.scss'
import CircleDesignImg1 from '../../../_asset/images/Main/01_Circle of Red Cross/01-img-5.jpg'
import CircleDesignImg2 from '../../../_asset/images/Main/01_Circle of Red Cross/01-img-6.jpg'
import CircleDesignImg3 from '../../../_asset/images/Main/01_Circle of Red Cross/01-img-7.jpg'
import CircleDesignImg4 from '../../../_asset/images/Main/01_Circle of Red Cross/01-img-8.jpg'
import VisualDesignImg from  '../../../_asset/images/Main/01_Circle of Red Cross/01-img-3.png'
import VisualDesignImg1 from  '../../../_asset/images/Main/01_Circle of Red Cross/01-img-4.png'
class CircleOfRedCross extends Component {

    render() {
        return (
            <div className='CircleOfRedCrossWholeWrap'>
                <div className='CircleOfRedCrossWrapper'>
                    <div className='CircleOfRedCrossContainer'>
                        <div className='CircleOfRedCrossFirstRow'>
                            <div className='CircleOfRedCrossContents'>
                                <div className='Number'>
                                    01
                            </div>
                                <div className='Title'>
                                    Circle of Red Cross
                            </div>
                                <div className='SubTitle'>
                                    Let me circle this! Or Let’s circle up
                            </div>
                                <div className='MiddleRow'>
                                    <div className='YearTitle'>
                                        Year<br></br>
                                    Form
                                </div>
                                    <div className='YearContents'>
                                        2019<br></br>
                                    Digital Image
                                </div>
                                </div>
                                <div className='SummaryTitle'>
                                    Summary
                            </div>
                                <div className='SummaryContents'>
                                    Introduce a circle type of stamps unlike usual rectangle stamps decorate with Korean traditional color and pattern.<br></br><br></br>
                                    Another reason for designing the stamp with an emphasis on the circle around the Red Cross is related to what the circle symbolizes visually.<br></br><br></br>
                                    In general, the circle symbolizes unity, hope and harmony. It represents best the meaning of the ICRC symbol.
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
                                        <img src={CircleDesignImg3} alt='CircleDesignImg2'></img>
                                    </div>
                                </div>
                                <div className='ExampleOfUseBox'>
                                    <div className='Img'>
                                        <img src={CircleDesignImg4} alt='CircleDesignImg2'></img>
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/*Footer*/}
                        <div className='FooterBox'>
                            <div className='FooterTitle'>
                                01 Circle of Red Cross
                        </div>
                            <div className='FooterCategoryTitle'>
                                Portfolio
                        </div>

                        </div>

                    </div>
                </div>


                {/*두번째 페이지 ///////////////////////////////////////////*/}


                <div className='CircleOfRedCrossWrapper1'>
                    <div className='CircleOfRedCrossContainerTop'>
                        <div className='CircleOfRedCrossContainer'>
                            <div className='CircleOfRedCrossFirstRow'>
                                <div className='CircleOfRedCrossContents'>
                                    <div>
                                        <div className='SummaryTitle'>
                                            Details
                                    </div>
                                        <div className='SummaryContents'>
                                        Everyone knows the sign of the Red Cross. However, few people know that there is a circle surrounding the Red Cross with respect to the symbol of the International Committee of the Red Cross (ICRC).<br></br><br></br>
                                        Moreover, looking at the history of the Red Cross stamps, most stamps were designed with a circled border on the Red Cross in the square frame. So, "round Red Cross stamp" will make people more clearly imprinted with the image of the Red Cross than the logo of the ICRC in a square frame.<br></br><br></br>
                                        In addition, stamps used to be designed in a square shape for efficiency in the past when selling stamps at counters, but it is not necessary now due to the development of current communication, the mail is not the primary means of communication.<br></br><br></br> 
                                        Therefore, the current way of sending stamped documents is more likely to convey "worthy" documents or content, 
                                    </div>
                                    </div>
                                    <div className='SummaryContents1'>
                                        rather than just the kind of texts we consume via email or smartphone.<br></br><br></br>
                                        As a result, I designed a round-shaped Red Cross stamp to increase the design specificity.<br></br><br></br>
                                        Another reason for designing the stamp with an emphasis on the circle around the Red Cross is related to what the circle symbolizes visually. In general, the circle symbolizes unity, hope and harmony. It represents best the meaning of the ICRC symbol.<br></br><br></br>
                                        Also, I expressed Korean identity by applying traditional Korean patterns into the Red Cross with the Korean traditional five colors.<br></br><br></br> 
                                        It is suitable for the year-end and the beginning of the year when Red Cross seals are distributed, have two positive meanings: social and cultural characteristics of Korean people sending happy new year greetings to seniors and spreading new year donations.
                                        </div>
                                </div>
                                {/*Visual Design*/}
                                <div>
                                    
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
                                
                                <div className='Img'>
                                    <img src={VisualDesignImg1} alt='VisualDesignImg3'></img>
                                </div>
                            </div>



                        </div>
                        {/*Footer*/}
                        <div className='FooterBox'>
                            <div className='FooterTitle'>
                                01 Circle of Red Cross
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

export default CircleOfRedCross;