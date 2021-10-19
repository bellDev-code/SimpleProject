import React, { Component } from 'react';
import './WalkOnIce2.scss'
import CircleDesignImg1 from '../../../_asset/images/Main/15_WalkOnICe/15-img-2.png'
import CircleDesignImg2 from '../../../_asset/images/Main/15_WalkOnICe/15-img-3.png'
import CircleDesignImg3 from '../../../_asset/images/Main/15_WalkOnICe/15-img-4.png'
import CircleDesignImg4 from '../../../_asset/images/Main/15_WalkOnICe/15-img-5.png'

class WalkOnIce2 extends Component {

    render() {
        return (
            <div className='WalkOnIce2WholeWrap'>
                <div className='WalkOnIce2Wrapper'>
                    <div className='WalkOnIce2Container'>
                        <div className='WalkOnIce2FirstRow'>
                            <div className='WalkOnIce2Contents'>
                               
                                <div className='SummaryTitle'>
                                    Details
                                </div>
                                <div className='SummaryContents'>
                                Peacock stands on the cracked frozen ground on the hourglass. Peacock can stand on the frozen ground, but it is insecure because it is cracked and can be melt down to water at some point. <br></br><br></br>

The top of hourglass consists of water, and turns into the sand at the bottom. The bottom of the hourglass is broken, and sand is leaking out.<br></br><br></br>

The background turns into a desert overflowing with sand. The peacock standing on the frozen ground reminds us of our reality.<br></br><br></br>

Living in our competitive world feels like always walking on thin ice. I wanted to visualize that situation.<br></br><br></br>

In addition, I applied the inspiration of "Jesus on the water" to man. As humans, we must be frozen before we can stand on water. <br></br><br></br>

But the ice can be broken at any time. So it always makes us feel anxious and tense. <br></br><br></br>

The hourglass on which the peacock rests is slightly tilted. So no matter how hard the peacock is to stand firm on its feet, it is difficult to maintain balance.<br></br><br></br> 

I wanted to convey the tension and anxiety that the peacock felt in such a situation.<br></br><br></br>

I placed a human skull and a jewelry box in the desert below the hourglass. <br></br><br></br>

This means, in the end, the cruel reality that leads to death when the bird falls off the hourglass. The jewel box finally shines meaninglessly in the desert where nothing exists.<br></br><br></br> 

It symbolizes that even though we managed to survive in reality, after we die, it means nothing.                                </div>
                                
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
                                15 Walk on ice
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

export default WalkOnIce2;