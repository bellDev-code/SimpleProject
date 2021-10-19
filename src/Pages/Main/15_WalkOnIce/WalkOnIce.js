import React, { Component } from 'react';
import './WalkOnIce.scss'
import img1 from '../../../_asset/images/Main/15_WalkOnICe/15-img-1.png'

class WalkOnIce extends Component {
    render() {
        return (
            <div className='WalkOnIceWholeWrap'>
                <div className='WalkOnIceWrapper'>
                    <div className='WalkOnIceContainer'>
                        
                        <div className='WalkOnIceImgBox'>
                            <img src={img1} alt='이미지'></img>
                        </div>
                        <div className='WalkOnIceTextBox'>
                            <div className='WalkOnIceName'>
                                Eunsol <br></br>
                                Shim
                            </div>
                            <div className='WalkOnIceTitleTextBox'>
                            <div className='WalkOnIceNumber'>
                                    15
                                </div>
                                <div className='WalkOnIceTitle'>
                                    Walk On Ice
                                </div>
                                <div className='WalkOnIceLet'>
                                Do I look fabulous?

                                </div>
                                <div className='WalkOnIceYear'>
                                2019<div>Year</div>
                                </div>
                                <div className='WalkOnIceYear'>
                                381 x 508mm<div>Size</div>
                                </div>
                                <div className='WalkOnIceForm'>
                                Collage work, Conte<div>Form</div>
                                </div>
                                <div className='WalkOnIceSummary'>
                                    Summary
                                </div>
                                <div className='WalkOnIceSummaryText'>
                                Peacocks are always gorgeous and colorful. However, I have shown the peacock in black and white. The reason why I show the beautiful peacock in the black and white color is to induce a shift of thinking in people and to focus their attention.<br></br><br></br>

In addition, I used several people's eyes as collages for all the patterns of the peacock. It is because we can read each person's emotions, desires, and much more in the eyes of countless people.<br></br><br></br> 

It also symbolizes the life of the modern man who stands in his place. Peacock also means a modern person who lives in the eyes of others, even in virtual space connected to the Internet. <br></br><br></br>

They always try to embellish themselves splendor or close to perfection.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Footer*/}
                    <div className='FooterBox'>
                        <div className='FooterTitle'>
                            15 Walk on ice
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

export default WalkOnIce;