import React, { Component } from 'react';
import sensed from '../../../_asset/images/Main/17_Sensed/17-img.png';
import './Sensed.scss'

class Sensed extends Component {
    render() {
        return (
            <div className='SensedWholeWrap'>
                <div className='SensedWrapper'>
                    <div className='SensedContainer'>

                        <div className='SensedTextBox'>
                            <div className='SensedTitleTextBox'>
                                <div className='SensedNumber'>
                                    17
                                </div>
                                <div className='SensedTitle'>
                                    Sensed
                                </div>
                                <div className='SensedLet'>
                                What do you feel?
                                </div>
                                <div className='SensedYear'>
                                    <span>Year</span>2019
                                </div>
                                <div className='SensedYear'>
                                    <span>Size</span>650 X 540mm

                                </div>
                                <div className='SensedForm'>
                                    <span>Form</span>Acrylic paints, pencils, colored pencils.

                                </div>
                                <div className='SensedTitleTextBox'>

                                    <div className='SensedSummary'>
                                        Summary
                                </div>
                                    <div className='SensedSummaryText'>
                                    I wanted to show the human senses. The 
                                    tree-like image in colorful acrylic is a neural 
                                    network seen when a human brain is 3D 
                                    scanned.<br></br><br></br>
                                     I wanted to show how humans feel 
                                    and think through various 3D scan images of 
                                    the brain. The enlarged image of the human 
                                    earhole symbolizes the sense of human 
                                    hearing.<br></br><br></br>
                                    A picture of an apple in black and white and 
                                    color represents our sense of touch and 
                                    sight. The image of someone with a pill in the 
                                    mouth refers to the human taste and sense 
                                    of smell. And the dissection of the arm refers 
                                    to the human peripheral nerve.<br></br><br></br>
                                    The image of 
                                    the electric lines connecting from the center 
                                    circle to all the outside directions is a 
                                    reinterpretation of our eyes, symbolizing 
                                    human vision.<br></br><br></br>
                                    The size of each image 
                                    represents the order of importance of each 
                                    sense or that of the sense organs that we are 
                                    most affected.

                                </div>
                                </div>

                            </div>
                        </div>
                        <div className='SensedImgBox'>
                                <img src={sensed} alt='sensed'></img>
                            </div>

                        <div className='SensedTextBox'>
                            <div className='SensedName'>
                                Eunsol <br></br>
                                Shim
                            </div>
                            

                        </div>
                    </div>

                    {/*Footer*/}
                    <div className='FooterBox'>
                        <div className='FooterTitle'>
                            17 Sensed
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

export default Sensed;