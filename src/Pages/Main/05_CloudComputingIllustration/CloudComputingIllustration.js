import React, { Component } from 'react';
import './CloudComputingIllustration.scss'
import img1 from '../../../_asset/images/Main/05_CloudComputingIllustration/05-img.png'

class CloudComputingIllustration extends Component {
    render() {
        return (
            <div className='CloudComputingIllustrationWholeWrap'>
                <div className='CloudComputingIllustrationWrapper'>
                    <div className='CloudComputingIllustrationContainer'>
                        
                        <div className='CloudComputingIllustrationTextBox'>
                            <div className='CloudComputingIllustrationTitleTextBox'>
                                <div className='CloudComputingIllustrationNumber'>
                                    05
                                </div>
                                <div className='CloudComputingIllustrationTitle'>
                                    Cloud Computing<br></br>
                                    Illustration
                                </div>
                                <div className='CloudComputingIllustrationLet'>
                                    What is cloud computing?
                                </div>
                                <div className='CloudComputingIllustrationYear'>
                                    <span>Year</span>2019 
                                </div>
                                <div className='CloudComputingIllustrationForm'>
                                    <span>Form</span>Digital Image 
                                </div>
                                
                            </div>
                        </div>
                        <div className='CloudComputingIllustrationImgBox'>
                            <img src={img1} alt='이미지'></img>
                        </div>
                        <div className='CloudComputingIllustrationTextBox'>
                            <div className='CloudComputingIllustrationName'>
                                Eunsol <br></br>
                                Shim
                            </div>
                            <div className='CloudComputingIllustrationTitleTextBox'>
                                
                                <div className='CloudComputingIllustrationSummary'>
                                    Summary
                                </div>
                                <div className='CloudComputingIllustrationSummaryText'>
                                I visually expressed four critical elements of
                                cloud computing: 1) server virtualization, 2)
                                network virtualization, 3) decentralized
                                storage, and 4) cloud operations
                                management.<br></br><br></br>

                                Also, to represent the IoT, I visualized how a
                                lot of data were connected by using neural
                                network patterns.
                                All network patterns are connected to the
                                cloud shape to make cloud shape as whole
                                data in the world.<br></br><br></br>

                                In addition, I designed the neural network
                                image to look similar to a computer chip
                                design, bringing a sense of technology to life.<br></br><br></br>

                                In addition, I put the image of human brain
                                into the cloud shape because the symbol of
                                “cloud” plays the role of “brain” in the cloud
                                computing by collecting all data, analyzing,
                                and forecasting future with AI.<br></br><br></br>

                                So, the cloud image has different patterns
                                divided by areas of human brain. This
                                illustration is for educational purpose to
                                understand the basic principle of cloud

                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Footer*/}
                    <div className='FooterBox'>
                        <div className='FooterTitle'>
                            05 Cloud Computing Illustration
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

export default CloudComputingIllustration;