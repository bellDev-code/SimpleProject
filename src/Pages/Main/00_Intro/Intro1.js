import React, { Component } from 'react';
import './Intro1.scss';

class Intro1 extends Component {
    render() {
        return (
            <div className = 'Intro1Container2'>
                <div className = 'Intro1Box'>
                <div className='TopNumNameBox'>
                        <div className='TopNum'>
                            00
                        </div>
                        <div className='TopName'>
                            Eunsol<br></br>
                            Shim
                        </div>
                    </div>
                    <div className='TitleBox'>
                        <div className='Title'>
                            Intro
                        </div>
                        <div className='SubTitle'>
                        Text Be Imbued With Eunsol
                        </div>
                        <div className='YearBox'>
                            <div className='Year'>
                                Year
                            </div>
                            <div className='Year2'>
                                2020
                            </div>
                        </div>
                        <div className='FormBox'>
                            <div className='Form'>
                                Form
                            </div>
                            <div className='Form2'>
                                Web site Design / UIUX
                            </div>
                        </div>
                    </div>
                    <div className ='BottomBox'>
                        <div className ='BottomText1'>
                            00 Intro
                        </div>
                        <div className = 'BottomText2'>
                            Portfolio
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro1;