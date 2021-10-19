import React, { Component } from 'react';
import './UniverseInCloud.scss'
import VisualDesignImg1 from '../../../_asset/images/Main/04_Universe In Cloud/04-img.png'
class UniverseInCloud extends Component {
    render() {
        return (
            <div className='UniverseInCloudWrapper'>
                <div className='UniverseInCloudContainer'>
                    <div className='UniverseInCloudFirstRow'>
                        <div className='UniverseInCloudContents'>
                            <div className='Number'>
                                04
                            </div>
                            <div className='Title'>
                                Universe in Cloud
                            </div>
                            <div className='SubTitle'>
                                Everything is connected 
                            </div>
                            <div className='MiddleRow'>
                                <div className='YearTitle'>
                                    Year<br></br>
                                    Form
                                </div>
                                <div className='YearContents'>
                                    2019<br></br>
                                    Digital Image
                                </div>
                            </div>
                            <div className='SummaryTitle'>
                                Summary
                            </div>
                            <div className='SummaryContents'>
                            I visually expressed four critical elements of cloud computing: 1) server virtualization, 2) network virtualization, 3) decentralized storage, and 4) cloud operations management. And to represent the IoT,<br></br><br></br>

I visualized how a lot of data were connected by using neural network patterns. All network patterns are connected to the cloud shape to make cloud shape as whole data in the world. <br></br><br></br>

In addition, I designed the neural network image to look similar to a computer chip design, bringing a sense of technology to life. I made this work in a 3D digital image and used colors bringing up the image of space to emphasize the title meaning, “universe in cloud”.<br></br><br></br>

                            </div>
                        </div>
                        <div className='ExampleOfUseBox'>
                            <div className='Name'>
                                Eunsol<br></br>
                                Shim
                            </div>
                            {/* <div className='Title'>
                                Example of use
                            </div> */}
                            <div className='Img'>
                                <img src={VisualDesignImg1} alt='ExampleOfUseImg'></img>
                            </div>
                        </div>
                    </div>

                    {/*Footer*/}
                    <div className='FooterBox'>
                        <div className='FooterTitle'>
                            04 Universe in Cloud
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

export default UniverseInCloud;