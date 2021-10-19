import React, { Component } from 'react';
import './NightLight.scss'

class NightLight extends Component {
    render() {
        return (
            <div className='NightLightWholeWrap'>
                <div className='NightLightWrapper'>
                    <div className='NightLightContainer'>
                        
                        <div className='NightLightTextBox'>
                            <div className='NightLightTitleTextBox'>
                                <div className='NightLightNumber'>
                                    12
                                </div>
                                <div className='NightLightTitle'>
                                Night light
                                </div>
                                <div className='NightLightLet'>
                                City light is shining
                                </div>
                                <div className='NightLightYear'>
                                    <div>Year</div>2019
                                </div>
                                <div className='NightLightYear'>
                                    <div>Size</div>605 x 480mm
                                </div>
                                <div className='NightLightForm'>
                                     <div>Form</div>Arcrylic
                                </div>
                                <div className='NightLightSummary'>
                                    Summary
                                </div>
                                <div className='NightLightSummaryText'>
                                I drew the night scene of New York in acrylic painting using contrasting primary colors just like the lights glittering in the dark on acrylic panel.


                                </div>
                            </div>
                        </div>
                        {/* <div className='NightLightImgBox'>
                            <img src={img1} alt='이미지'></img>
                        </div> */}
                        <div className='NightLightTextBox'>
                            <div className='NightLightName'>
                                Eunsol <br></br>
                                Shim
                            </div>
                            
                        </div>
                    </div>

                    {/*Footer*/}
                    <div className='FooterBox'>
                        <div className='FooterTitle'>
                            12 Night light
                    </div>
                        <div className='FooterCategoryTitle'>
                            Portfolio
                    </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default NightLight;