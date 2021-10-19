import React, { Component } from 'react';
import './Portrait.scss'
import img1 from '../../../_asset/images/Main/08_Portrait/08-img.png'

class Portrait extends Component {
    render() {
        return (
            <div className='PortraitWholeWrap'>
                <div className='PortraitWrapper'>
                    <div className='PortraitContainer'>

                        <div className='PortraitTextBox'>
                            <div className='PortraitTitleTextBox'>
                                <div className='PortraitNumber'>
                                    08
                                </div>
                                <div className='PortraitTitle'>
                                    Portrait
                                </div>
                                <div className='PortraitLet'>
                                    What can you see from me? 
                                </div>
                                <div className='PortraitYear'>
                                    <span>Year</span>2019
                                </div>
                                <div className='PortraitYear'>
                                    <span>Size</span>381 X 508mm

                                </div>
                                <div className='PortraitForm'>
                                    <span>Form</span>Pencil
                                </div>
                                <div className='PortraitTitleTextBox'>

                                    <div className='PortraitSummary'>
                                        Summary
                                </div>
                                    <div className='PortraitSummaryText'>
                                    The self-portrait was made by drawing with a pencil. I visualized in the background a chain of entangled thoughts, reminiscent of a computer circuit.<br></br><br></br>

The self-portrait image was intended to give a strong impression by providing the most extreme shade difference.
                                </div>
                                </div>

                            </div>
                        </div>

                        <div className='PortraitTextBox'>
                            <div className='PortraitName'>
                                Eunsol <br></br>
                                Shim
                            </div>
                            <div className='PortraitImgBox'>
                                <img src={img1} alt='이미지'></img>
                            </div>

                        </div>
                    </div>

                    {/*Footer*/}
                    <div className='FooterBox'>
                        <div className='FooterTitle'>
                            08 Portrait
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

export default Portrait;