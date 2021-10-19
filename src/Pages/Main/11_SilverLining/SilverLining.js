import React, { Component } from 'react';
import './SilverLining.scss'
import img1 from '../../../_asset/images/Main/11_Silver-lining/11-img-1.png'

class SilverLining extends Component {
    render() {
        return (
            <div className='SilverLiningWholeWrap'>
                <div className='SilverLiningWrapper'>
                    <div className='SilverLiningContainer'>

                        <div className='SilverLiningTextBox'>

                        </div>
                        <div className='SilverLiningImgBox'>
                            <img src={img1} alt='이미지'></img>
                        </div>
                        <div className='SilverLiningTextBox'>
                            <div className='SilverLiningName'>
                                Eunsol <br></br>
                                Shim
                            </div>
                            <div className='SilverLiningNumber'>
                                11
                                </div>
                            <div className='SilverLiningTitle'>
                                Silver-lining
                                </div>
                            <div className='SilverLiningLet'>
                                Every Cloud Has A Silver Lining
                                </div>
                            <div className='SilverLiningYear'>
                                2019<div>Year</div>
                            </div>
                            <div className='SilverLiningYear'>
                                410 x 410 x 410mm<div>Size</div>

                            </div>
                            <div className='SilverLiningForm'>
                               Acrylic board, reflective thread, 3M dichroic sheet paper
                                <div>Form</div>
                            </div>
                            <div className='SilverLiningTitleTextBox'>

                                <div className='SilverLiningSummary'>
                                    Summary
                                </div>
                                <div className='SilverLiningSummaryText'>
                                The white lines symbolize the hope of a weak yet strong artist. Points, lines and sides are utilized. Expressed geometrically.<br></br><br></br>

3M dichroic sheet paper is stuck in the middle. Depending on the light, the reflection chamber absorbs and reflects multiple colors.<br></br><br></br>

Beautiful hope is expressed.
This means hope, as the title of the work says.<br></br><br></br>

Hope necessarily exists. No matter how small the hope, we live and continue our lives because of that hope.<br></br><br></br>

I simply dismantled the world in the form of triangles and squares through points, lines, and planes.<br></br><br></br>

I wove them with straight white reflective threads to create a curvilinear pattern. 
I tried to weave them together to give them a graphical feel.<br></br><br></br>                                </div>
                            </div>


                        </div>
                    </div>

                    {/*Footer*/}
                    <div className='FooterBox'>
                        <div className='FooterTitle'>
                            11 Silver-lining
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

export default SilverLining;