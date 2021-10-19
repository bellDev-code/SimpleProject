import React, { Component } from 'react';
import './Calligraphy.scss'
import img1 from '../../../_asset/images/Main/07_Calligraphy/07-img.png'

class Calligraphy extends Component {
    render() {
        return (
            <div className='CalligraphyWholeWrap'>
                <div className='CalligraphyWrapper'>
                    <div className='CalligraphyContainer'>

                        <div className='CalligraphyTextBox'>
                            <div className='CalligraphyTitleTextBox'>
                                <div className='CalligraphyNumber'>
                                    07
                                </div>
                                <div className='CalligraphyTitle'>
                                    Calligraphy portrait
                                </div>
                                <div className='CalligraphyLet'>
                                    What consists of me
                                </div>
                                <div className='CalligraphyYear'>
                                    <span>Year</span>2019
                                </div>
                                <div className='CalligraphyForm'>
                                    <span>Form</span>Digital Image
                                </div>

                            </div>
                        </div>
                        <div className='CalligraphyBox'>
                            <div className='CalligraphyImgBox'>
                                <img src={img1} alt='이미지'></img>
                            </div>
                            <div className='CalligraphyTextBox'>
                                <div className='CalligraphyName'>
                                    Eunsol <br></br>
                                Shim
                            </div>
                                <div className='CalligraphyTitleTextBox'>

                                    <div className='CalligraphySummary'>
                                        Summary
                                </div>
                                    <div className='CalligraphySummaryText'>
                                    The self-portrait is expressed through words that describe who I am. I composed a self-portrait with calligraphy.<br></br><br></br>

I have gathered the words that make up the person "I," and have portrayed me.<br></br><br></br>
 
I made the self-portrait seem to be talking about me as well as the "image" of me.<br></br><br></br>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Footer*/}
                    <div className='FooterBox'>
                        <div className='FooterTitle'>
                            07 Calligraphy portrait
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

export default Calligraphy;