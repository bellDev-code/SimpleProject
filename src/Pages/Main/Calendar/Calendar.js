import React, { Component } from 'react';
import './Calendar.scss'
import calenderimg from '../../../_asset/images/Main/Calendar/03-img.png'

class Calendar extends Component {
    render() {
        return (
            <div className='CalendarContaner'>
                <div className='CalendarWrapper'>
                    <div className='CalendarBox'>
                        <div className='CalendarImgBox'>
                            <img src={calenderimg} alt='이미지'></img>
                        </div>
                        <div className='CalendarTextBox'>
                            <div className='CalendarName'>
                                Eunsol <br></br>
                                Shim
                            </div>
                            <div className='CalendarTitleTextBox'>
                                <div className='CalendarNumber'>
                                    03
                                </div>
                                <div className='CalendarTitle'>
                                    Iris Calendar
                                </div>
                                <div className='CalendarLet'>
                                    Let's see what is gonna<br></br>
                                    come this year
                                </div>
                                <div className='CalendarYear'>
                                    2019 <div>Year</div>
                                </div>
                                <div className='CalendarForm'>
                                    Digital Image <div>Form</div>
                                </div>
                                <div className='CalendarSummary'>
                                    Summary
                                </div>
                                <div className='CalendarSummaryText'>
                                Use the image of the pupils of the eyes to envision the calendar to implicitly express the cyclical meaning of each year. The space-time we can see in the human eye is shaped into a calendar.<br></br><br></br>

I expressed each month and season in the calendar in different colors.<br></br><br></br>
 
Also, I decorated the pupil image with a calligraphy effect using words that I consider essential. I focused on making the calendar visible at a glance.

                                </div>
                            </div>
                        </div>


                    </div>

                    {/*Footer*/}
                    <div className='FooterBox'>
                        <div className='FooterTitle'>
                            03 Iris Calendar
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

export default Calendar;