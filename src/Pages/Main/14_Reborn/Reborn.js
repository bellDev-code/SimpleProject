import React, { Component } from 'react';
import './Reborn.scss'
import img1 from '../../../_asset/images/Main/14_Reborn/14-img.png'

class Reborn extends Component {
    render() {
        return (
            <div className='RebornWholeWrap'>
                <div className='RebornWrapper'>
                    <div className='RebornContainer'>
                        
                        <div className='RebornTextBox'>
                            <div className='RebornTitleTextBox'>
                                <div className='RebornNumber'>
                                    14
                                </div>
                                <div className='RebornTitle'>
                                    Reborn
                                </div>
                                <div className='RebornLet'>
                                We are the stars in the night
                                </div>
                                <div className='RebornYear'>
                                    <div>Year</div>2019
                                </div>
                                <div className='RebornYear'>
                                    <div>Size</div>381 x 508mm
                                </div>
                                <div className='RebornForm'>
                                     <div>Form</div>Watercolor, Acrylic, Color pencil
                                </div>
                                
                            </div>
                        </div>
                        <div className='RebornImgBox'>
                            <img src={img1} alt='이미지'></img>
                        </div>
                        <div className='RebornTextBox'>
                            <div className='RebornName'>
                                Eunsol <br></br>
                                Shim
                            </div>
                            <div className='RebornTitleTextBox'>
                                
                                <div className='RebornSummary'>
                                    Summary
                                </div>
                                <div className='RebornSummaryText'>
                                I wanted to maximize the 'fire-like effect' by placing a phoenix in the dark night sky above the skyline.<br></br><br></br>
 
 The phoenix is reborn from the ashes and burns itself. It is also a symbolic representation of a person who overcomes in spite of any difficulties or hardships.<br></br><br></br>
  
 After all, that is another lexical meaning of "phoenix". Every night working in a building in the city, I shared a joke with a co-worker that the lights in the buildings outside the windows are reminiscent of people who burn themselves.<br></br><br></br>
 
  It is not the starlight that makes the night shine, but the hardships and passions that people live through.<br></br><br></br>
  
 It is also a facet of modern society.
 

                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Footer*/}
                    <div className='FooterBox'>
                        <div className='FooterTitle'>
                            14 Reborn
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

export default Reborn;