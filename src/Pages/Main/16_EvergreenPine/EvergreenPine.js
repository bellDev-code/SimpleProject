import React, { Component } from 'react';
import './EvergreenPine.scss'
import img1 from '../../../_asset/images/Main/16_Evergreen pine/16-img-1.png';

class EvergreenPine extends Component {
    render() {
        return (
            <div className='EvergreenPineWholeWrap'>
                <div className='EvergreenPineWrapper'>
                    <div className='EvergreenPineContainer'>

                        <div className='EvergreenPineTextBox'>
                            <div className='EvergreenPineTitleTextBox'>
                                <div className='EvergreenPineNumber'>
                                    16
                                </div>
                                <div className='EvergreenPineTitle'>
                                    Evergreen Pine
                                </div>
                                <div className='EvergreenPineLet'>
                                    Yes, I will not change no matter<br></br>
                                what happens in my life
                                </div>
                                <div className='EvergreenPineYear'>
                                    <span>Year</span>2019
                                </div>
                                <div className='EvergreenPineYear'>
                                    <span>Size</span>431 X 900mm

                                </div>
                                <div className='EvergreenPineForm'>
                                    <span>Form</span>pencil, beads

                                </div>
                                <div className='EvergreenPineTitleTextBox'>

                                    <div className='EvergreenPineSummary'>
                                        Summary
                                </div>
                                    <div className='EvergreenPineSummaryText'>
                                    In fact, this work is also a self-portrait of the artist. The name Shim Eun-sol means "Pine tree always green.<br></br><br></br>

" The pine tree, which is Korea's representative tree, also grows in harsh environments such as cracks in rocks. <br></br><br></br>

It is known to endure snowy seasons and show a young spirit, symbolizing "straight volition and firm will."<br></br><br></br>
                                </div>
                                </div>

                            </div>
                        </div>
                        <div className ='EvergreenPineImgBox'>
                            <img src={img1} alt='이미지'></img>
                        </div>
                        

                        <div className='EvergreenPineTextBox'>
                            <div className='EvergreenPineName'>
                                Eunsol <br></br>
                                Shim
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
        );
    }
}

export default EvergreenPine;