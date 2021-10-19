import React, { Component } from 'react';
import './Heartbeat.scss';
import heartbeat from '../../../_asset/images/Main/Heartbeat/02-img.png';


class Heartbeat extends Component {

    render() {
        return (
            <div className = 'HeartbeatWraper'>            
                <div className = 'HeartbeatContainer'>
                    <div className = 'HeartbeatBox'>
                        <div className = 'HeartbeatTextTopText'>
                            <div className = 'HeartbeatTextTopLeft'>
                                02
                            </div>
                            <div className = 'HeartbeatTextTopRight'>
                                Eunsol <br></br>
                                Shim
                            </div>
                        </div>
                        <div className = 'HeartbeatCotentsBox'>
                            <div className = 'HeartbeatTextContainer'>
                                
                                <div className = 'HeartbeatTittleTextBox'>
                                    <div className = 'HeartbeatTitlleText'>
                                        Design Concept - CS 
                                    </div>
                                    <div className = 'HeartbeatSubTitlleText'>
                                        Heartbeat
                                    </div>
                                    <div className = 'HeartbeatMiddleTextBox'>
                                        <div className = 'HeartbeatMiddleTittle'>
                                            Year <br></br>
                                            From
                                        </div>
                                        <div className = 'HeartbeatMiddleText'>
                                            2019 <br></br>
                                            Digital Image 
                                        </div>
                                    </div>
                                    <div className = 'HeartbeatBottomTittle'>
                                        Summary
                                    </div>
                                    <div className = 'HeartbeatBottomText'>
                                    Heartbeat symbolizes "alive", Also the pattern of a heartbeat gives vital and adventurous feelings. Another reason why I chose the pattern of heartbeat is to put the concept of living organism to a company. Especially, I think about a medical design company when I worked on this project.                                     </div>
                                </div>
                            </div>
                            <div className = 'HeartbeatBottomBox'>
                                <div className = 'HeartbeatImgBox'>
                                <img src ={heartbeat} alt = 'heartbeat'></img>
                                </div>            
                            </div>                        
                        </div>
                    </div>
                    <div className = 'HeartbeatFooterBox'>
                        <div className = 'HeartbeatFooterLeft'>
                            02 Design Concept - CS 

                        </div>
                        <div className = 'HeartbeatFooterRight'>
                            Portfolio

                        </div>

                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Heartbeat;