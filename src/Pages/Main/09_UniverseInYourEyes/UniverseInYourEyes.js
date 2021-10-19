import React, { Component } from 'react';
import './UniverseInYourEyes.scss'
import img1 from '../../../_asset/images/Main/09_UniverseInYourEyes/09-img.png'

class UniverseInYourEyes extends Component {
    render() {
        return (
            <div className='UniverseInYourEyesWholeWrap'>
                <div className='UniverseInYourEyesWrapper'>
                    <div className='UniverseInYourEyesContainer'>

                        <div className='UniverseInYourEyesTextBox'>

                        </div>
                        <div className='UniverseInYourEyesImgBox'>
                            <img src={img1} alt='이미지'></img>
                        </div>
                        <div className='UniverseInYourEyesTextBox'>
                            <div className='UniverseInYourEyesName'>
                                Eunsol <br></br>
                                Shim
                            </div>
                            <div className='UniverseInYourEyesNumber'>
                                09
                                </div>
                            <div className='UniverseInYourEyesTitle'>
                                Universe in your eyes
                                </div>
                            <div className='UniverseInYourEyesLet'>
                                What can you see from my eyes?
                                </div>
                            <div className='UniverseInYourEyesYear'>
                                2019<div>Year</div>
                            </div>
                            <div className='UniverseInYourEyesYear'>
                                381 X 381mm<div>Size</div>

                            </div>
                            <div className='UniverseInYourEyesForm'>
                                Acrylic, watercolor, glue gun, beads
                                <div>Form</div>
                            </div>
                            <div className='UniverseInYourEyesTitleTextBox'>

                                <div className='UniverseInYourEyesSummary'>
                                    Summary
                                </div>
                                <div className='UniverseInYourEyesSummaryText'>
                                When we look at a person's pupil, it's the easiest to notice that person's thoughts, feelings, desires, beliefs.<br></br><br></br>

If we look closely at the pupil of a person, we can see that it looks similar to the image of the universe. This work expresses such an image of the universe with the eyes.<br></br><br></br>
 
Also, the universe is the world in his or her eyes, so I gave it the title “Universe in Your Eyes”.<br></br><br></br>
 
I used acrylics and glue guns in different layers to express the complexity of the eyes, the universe, and the world.<br></br><br></br>
 
The different colors and atypical glue gun lines in each layer are also intended to capture the depth of the human eye. <br></br><br></br>

Finally, the small beads in the middle feel like stars. It also means the light within the person that can be seen with human eyes. <br></br><br></br>


                                </div>
                            </div>


                        </div>
                    </div>

                    {/*Footer*/}
                    <div className='FooterBox'>
                        <div className='FooterTitle'>
                            09 Universe In Your Eyes
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

export default UniverseInYourEyes;