import React, { Component } from 'react';
import './GreenEyedMonster.scss';
import img1 from '../../../_asset/images/Main/19_GreenEyedMonster/19-img-1.png';

class GreenEyedMonster extends Component {
    render() {
        return (
            <div className='GreenEyedWholeWrap'>
                <div className='GreenEyedWrapper'>
                    <div className='GreenEyedContainer'>

                        <div className='GreenEyedTextBox'>
                            <div className='GreenEyedTitleTextBox'>
                                <div className='GreenEyedNumber'>
                                    19
                                </div>
                                <div className='GreenEyedTitle'>
                                    Green Eyed Monster
                                </div>
                                <div className='GreenEyedLet'>
                                Our bodies are our gardens,<br></br>
                                to the which our wills are gardeners.
                                </div>
                                <div className='GreenEyedYear'>
                                    <span>Year</span>2020
                                </div>
                                <div className='GreenEyedForm'>
                                    <span>Form</span>Digital Image
                                </div>
                                <div className='GreenEyedSummary'>
                                    Summary
                                </div>
                                <div className='GreenEyedSummaryText1'>
                                Our bodies are our gardens, to the which our wills are gardeners.<br></br><br></br> 

I wanted to put Othello, one of Shakespeare's four plays, on the poster. I think Othello's plot is the "Green-eyed monster" because the tragic element of this play is: Othello falls into Iago's scheme, doubts his wife's fidelity, and becomes a "Green-eyed monster" due to jealousy. Eventually, he kills his wife and commits suicide. The expression "The green-eyed monster" is still widely used today. <br></br><br></br> 

Also, Othello symbolizes human beings who are continually being tested through Iago's schemes. In reality, all the characters in the play fell, indicating human imperfection. In particular, Othello most vividly portrays human weakness. Because of Iago, he becomes "suspicious" and blinded by jealousy, losing his honor and everything.<br></br><br></br> 

In particular, I think that Othello is a work that shows the essence of man by persistently digging through weaknesses such as "desire" and "doubt." Moreover, the imperfect society that emerges as the overall social background of Othello is the same as our reality today. A recent adaptation of Othello has also been performed, expressing the desires and competitions of modern society, endless doubts, and dissonances arising from such feelings. <br></br><br></br> 

                                </div>
                            </div>
                        </div>
                        <div className='GreenEyedImgBox'>
                            <img src={img1} alt='이미지'></img>
                        </div>
                        <div className='GreenEyedTextBox'>
                            <div className='GreenEyedName'>
                                Eunsol <br></br>
                                Shim
                            </div>
                            <div className='GreenEyedTitleTextBox'>

                                <div className='GreenEyedSummaryText'>
                                The reasons I decided to put Othello on the poster are as follows: The core of Othello is "human imperfection," and "the importance of trust." Human beings easily collapsed by feelings of doubt. I think these elements represent part of modern society very well. On a green background that symbolizes the "Green-eyed monster," the posture of a human curled up in a corner symbolizes human weakness. Also, it means the human figure that has been tested and atrophied by "doubt" or "desire."<br></br><br></br> 

Also, I tried to express the human being trapped in self-doubt by placing the human in another small square. And the gradual black gradation appearing in the whole green is intended to represent the darkness and uncertainty of the inner human being. In other words, the thin, dark green patterns in the small square symbolize the darkness and uncertainty of the human and show the human being bound by these negative emotions. <br></br><br></br> 

"Our bodies are our gardens, to the which our wills are gardeners" is another famous remark by Othello, which literally means that our bodies are gardens of the mind, so what we plant there depends on our will. And, what ideas are put in the garden (i.e., in the spirit of each character) is a matter of our will. Humans are like a scale. When the balance between reason and desire breaks down, humans are captured by a mean instinct and face a tragedy. This is Iago's remark. I thought this was a good fit for Othello's subtitle, and I placed it as a typographic work on the poster that followed. <br></br><br></br> 

                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Footer*/}
                    <div className='FooterBox'>
                        <div className='FooterTitle'>
                            19 Green Eyed Monster
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

export default GreenEyedMonster;