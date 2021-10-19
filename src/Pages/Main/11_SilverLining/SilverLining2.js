import React, { Component } from 'react';
import './SilverLining2.scss'
import CircleDesignImg1 from '../../../_asset/images/Main/11_Silver-lining/11-img-2.png'
import CircleDesignImg2 from '../../../_asset/images/Main/11_Silver-lining/11-img-3.png'
import CircleDesignImg3 from '../../../_asset/images/Main/11_Silver-lining/11-img-4.png'
import CircleDesignImg4 from '../../../_asset/images/Main/11_Silver-lining/11-img-5.png'

class SilverLining2 extends Component {

    render() {
        return (
            <div className='SilverLining2WholeWrap'>
                <div className='SilverLining2Wrapper'>
                    <div className='SilverLining2Container'>
                        <div className='SilverLining2FirstRow'>
                            <div className='SilverLining2Contents'>
                               
                                <div className='SummaryTitle'>
                                    Details
                                </div>
                                <div className='SummaryContents'>
                                The white reflective thread I'm trying to mean here is silver-lining. In addition, the triangle and square with dichroic film in the middle symbolize the potential of our "hope." <br></br><br></br>

The squares or triangles inside the dichroic film show a spectrum of light with varying degrees of light. And the reflective chamber strongly absorbs it. <br></br><br></br>

This shows that our hope is thin, diverse, and infinite. I intended for the light to change continuously, depending on where and how the audience sees the work.<br></br><br></br>

I placed squares and triangles of dichroic film inside so that the white reflective chamber reflects the dichroic film, according to the height, light, and viewing angle, to create a constantly changing appearance. <br></br><br></br>

In other words, I wanted people to accept the object differently, depending on the experience they had when they looked at it.
                                </div>
                                <div className='SummaryTitle'>
                                    My last piece in my portfolio

                                </div>
                                <div className='SummaryContents1'>
                                Silver Lining, the last piece in my portfolio, reflects my desire to communicate with the audience and create a work like a living organism. <br></br><br></br>

And my obsession with a light that changes with time and the position of the audience was influenced by Jean Nouvel's way of thinking.<br></br><br></br>

In addition, the emphasis on the role of dots, lines, and planes in triangles and squares resembles Kandinsky's way of thinking. 
Finally, Da Vinci's theory of microcosm is also contained in my work.<br></br><br></br>

 According to microcosms, a square means this world, and a circle indicates the universe.<br></br><br></br>
 
I modeled the traditional way of expressing human beings in them.<br></br><br></br>

                                </div>
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
                                11 Silver-lining
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

export default SilverLining2;