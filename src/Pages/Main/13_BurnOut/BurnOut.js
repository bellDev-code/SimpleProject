import React, { Component } from 'react';
import './BurnOut.scss'
import img1 from '../../../_asset/images/Main/13_BurnOut/13-img.png'

class BurnOut extends Component {
    render() {
        return (
            <div className='BurnOutWholeWrap'>
                <div className='BurnOutWrapper'>
                    <div className='BurnOutContainer'>

                        <div className='BurnOutTextBox'>

                        </div>
                        <div className='BurnOutImgBox'>
                            <img src={img1} alt='이미지'></img>
                        </div>
                        <div className='BurnOutTextBox'>
                            <div className='BurnOutName'>
                                Eunsol <br></br>
                                Shim
                            </div>
                            <div className='BurnOutNumber'>
                                13
                                </div>
                            <div className='BurnOutTitle'>
                                Burn out
                                </div>
                            <div className='BurnOutLet'>
                            HTTP ERROR 404
                                </div>
                            <div className='BurnOutYear'>
                                2019<div>Year</div>
                            </div>
                            <div className='BurnOutYear'>
                                380 x 508mm<div>Size</div>

                            </div>
                            <div className='BurnOutForm'>
                                Collage work, Acrylic, Conte
                                <div>Form</div>
                            </div>
                            <div className='BurnOutTitleTextBox'>

                                <div className='BurnOutSummary'>
                                    Summary
                                </div>
                                <div className='BurnOutSummaryText'>
                                Using the various error messages that appear on a computer window, I tried to depict the anguish, anxiety, and pain that people typically have.<br></br><br></br>
 
 By causing several error messages to overlap, I decided to express the complexity of modern people's brains, "anxiety," "floods of information," and "thoughts that constantly haunt us," just as computer circuits failed.<br></br><br></br>
  
 Also, I added an exploding image to visualize people experiencing burnout.
 
                                </div>
                            </div>


                        </div>
                    </div>

                    {/*Footer*/}
                    <div className='FooterBox'>
                        <div className='FooterTitle'>
                            13 Burn out
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

export default BurnOut;