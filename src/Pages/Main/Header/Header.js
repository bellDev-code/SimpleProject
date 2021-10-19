import React, { Component } from 'react';
import './Header.scss'



class Header extends Component {
    render() {
        return (
            <div className='HeaderWrapper'>
                <div className='HeaderContainer'>
                    <div className='HeaderFristRow'>
                        <div className ='HeaderTitle'>
                            Portfolio
                        </div>
                        
                    </div>
                    <div className='HeaderSecondRow'>
                        <div className = 'HeaderName'>
                            Eunsol<br></br>
                            Shim    
                        </div>
                        <div className = 'HeaderDesignIsTopTextRight'>
                            <div className = 'HeaderDesignIsTopText'>
                                Design is
                            </div>
                            <div className = 'HeaderDesignIsBottomText'>
                                Logic will get you from A to Z,<br></br>
                                imagination will take you<br></br>
                                everywhere.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;