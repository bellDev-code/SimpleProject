import React, { Component } from 'react';
import './Kite.scss'
import img1 from '../../../_asset/images/Main/10_Kite/10-img.png';

class Kite extends Component {
    render() {
        return (
            <div className='KiteWholeWrap'>
                <div className='KiteWrapper'>
                    <div className='KiteContainer'>

                        <div className='KiteTextBox'>
                            <div className='KiteTitleTextBox'>
                                <div className='KiteNumber'>
                                    10
                                </div>
                                <div className='KiteTitle'>
                                    Kite
                                </div>
                                <div className='KiteLet'>
                                Let's play together
                                </div>
                                <div className='KiteYear'>
                                    <span>Year</span>2019
                                </div>
                                <div className='KiteYear'>
                                    <span>Size</span>605 X 910mm

                                </div>
                                <div className='KiteForm'>
                                    <span>Form</span>thread, wood frame, nails, thread balls, acrylic balls

                                </div>
                                <div className='KiteTitleTextBox'>

                                    <div className='KiteSummary'>
                                        Summary
                                </div>
                                    <div className='KiteSummaryText'>
                                    Various solid lines, like a kite, represent all our emotions. Balls made of various materials and colors are works of art made for people to participate.<br></br><br></br> 

For the spectators to fill in the solid line and complete it. 
The kite-shaped work made by connecting various colors with a solid line represents all our emotions.<br></br> <br></br>

It is intended to see multiple colors according to the viewing angle by stacking the threads of various colors. 
Our emotions, which stretch out like threads, are all meaningful, individually, or as a whole. I made it possible for the audience to participate in the work.<br></br><br></br>

Depending on the audience's feelings, they can put silk balls and acrylic balls made of various materials and colors between the canvas and the solid line. <br></br><br></br>

As their balls enter, the colors of the work become richer, adding to the variety of emotions.


                                </div>
                                </div>

                            </div>
                        </div>

                        <div className='KiteTextBox'>
                            <div className='KiteName'>
                                Eunsol <br></br>
                                Shim
                            </div>
                            <div className='KiteImgBox'>
                                <img src={img1} alt='이미지'></img>
                            </div>

                        </div>
                    </div>

                    {/*Footer*/}
                    <div className='FooterBox'>
                        <div className='FooterTitle'>
                            10 Kite
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

export default Kite;