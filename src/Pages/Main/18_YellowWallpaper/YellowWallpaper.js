import React, { Component } from 'react';
import './YellowWallpaper.scss'
import YellowWallpaperimg from '../../../_asset/images/Main/18_YellowWallpaper/18-img-1.png';

class YellowWallpaper extends Component {
    render() {
        return (
            <div className='YellowWallpaperContaner'>
                <div className='YellowWallpaperWrapper'>
                    <div className='YellowWallpaperBox'>
                        <div className='YellowWallpaperImgBox'>
                            <img src={YellowWallpaperimg} alt='이미지'></img>
                        </div>
                        <div className='YellowWallpaperTextBox'>
                            <div className='YellowWallpaperName'>
                                Eunsol <br></br>
                                Shim
                            </div>
                            <div className='YellowWallpaperTitleTextBox'>
                                <div className='YellowWallpaperNumber'>
                                    18
                                </div>
                                <div className='YellowWallpaperTitle'>
                                    The Yellow Wallpaper
                                </div>
                                <div className='YellowWallpaperLet'>
                                    I've got out at last
                                </div>
                                <div className='YellowWallpaperYear'>
                                    2019 <div>Year</div>
                                </div>
                                <div className='YellowWallpaperSize'>
                                    381 X 508mm <div>Size</div>
                                </div>
                                <div className='YellowWallpaperForm'>
                                    Pencil, watercolor <div>Form</div>
                                </div>
                                <div className='YellowWallpaperSummary'>
                                    Summary
                                </div>
                                <div className='YellowWallpaperSummaryText'>
                                    This is a work symbolizing the content of the
                                    American novel Yellow Wallpaper.<br></br><br></br>
                                    
                                    The broken mirror image symbolizes the
                                    encounter between the inner self and the
                                    outer self. <br></br><br></br>

                                     It is also a scene in which a human
                                    being finds her identity.<br></br><br></br>

                                    The title is Yellow
                                    Wallpaper, but here's why I described it in
                                    black and white instead of yellow: The words,
                                    concepts, and colors used by humans only
                                    mean symbols for our communication.
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Footer*/}
                    <div className='FooterBox'>
                        <div className='FooterTitle'>
                            18 The Yellow Wallpaper
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

export default YellowWallpaper;