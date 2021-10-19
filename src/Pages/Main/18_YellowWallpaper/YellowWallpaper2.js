import React, { Component } from 'react';
import './YellowWallpaper2.scss'
import img1 from '../../../_asset/images/Main/18_YellowWallpaper/18-img-2.png';
import img2 from '../../../_asset/images/Main/18_YellowWallpaper/18-img-3.png';

class YellowWallpaper2 extends Component {
    render() {
        return (
            <div className='YellowWallpaperWrapper1'>
                <div className='YellowWallpaperContainerTop'>
                    <div className='YellowWallpaperContainer'>
                        <div className='YellowWallpaperFirstRow'>
                            <div className='YellowWallpaperContents'>
                                <div>
                                    <div className='SummaryTitle'>
                                        Details
                                    </div>
                                    <div className='SummaryContents'>
                                        The story of The Yellow Wallpaper, the first
                                        feminist novel, is also in line with the recent
                                        trends in movies and novels. For example, in
                                        the case of disaster or fantasy film stories, an
                                        "adult man" symbolizes the establishment,
                                        power, and is depicted in the frame of "reason"
                                        and "experts." A "little girl" is defined as a
                                        "father" or "adult man" in the established
                                        system. But the conflict is resolved
                                        dramatically. And this saves the "world" in the
                                        face of destruction or war.<br></br><br></br>
                                        
                                        The Yellow Wallpaper may be the first work to
                                        describe such a part. The protagonist "I" can do
                                        nothing, but she emphasizes to her husband,
                                        John, that imagination and story are bad. <br></br><br></br>

                                        And since her husband is a "doctor," she cannot tell
                                        him that her bad health is not attributed to it.
                                        She only writes her story in her diary. She is
                                        getting crazy.<br></br><br></br>
                                        
                                         She can't do anything and get
                                        stuck in the room and think "If I do what I
                                        want to do and meet people, it will be better
                                        for my health," but she can't do it.
                                    </div>
                                </div>
                                <div className='SummaryContents1'>
                                    The scene in which she sees a woman
                                    trapped in a yellow wallpaper - according to
                                    her, not just one, but several women -
                                    suggests that her situation is not just a matter
                                    of an individual but a matter of all women.<br></br><br></br>

                                    She begins to pull off the wallpaper and free
                                    the girls trapped in the wallpaper. The women 
                                    then change to "I."<br></br><br></br>
                                    
                                     She pulls off the wallpaper
                                    completely and crawls out of the room and
                                    tells her husband, John. "I've got out at last,"
                                    "And I've pulled off most of the paper, so you
                                    can't put me back!”<br></br><br></br>

                                    The hands in the painting embody the
                                    moment she first faces the woman in the
                                    wallpaper and finds her identity.<br></br><br></br>
                                                                        
                                    Also, the image of hands reflected in the broken debris
                                    means different identities of "I." <br></br><br></br>
                                    
                                    It also represents the encounter between the
                                    internal "I" and the external "self".<br></br><br></br>
                                </div>
                            </div>
                            {/*Visual Design*/}
                            <div>

                                <div className='VisualDesignImg'>
                                    <img src={img1} alt='VisualDesignImg2'></img>
                                </div>
                            </div>
                        </div>
                        <div className='ExampleOfUseBox'>
                            <div className='Name'>
                                Eunsol<br></br>
                                Shim
                            </div>

                            <div className='Img'>
                                <img src={img2} alt='VisualDesignImg3'></img>
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

export default YellowWallpaper2;