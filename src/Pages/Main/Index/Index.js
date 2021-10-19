import React, { Component } from 'react';
import { Link, Element } from 'react-scroll'
import './Index.scss'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {}

    }
    list = [
        { number: '00', title: 'Intro', body: ["Text Be Imbued With Eunsol"], link : 'Intro' },
        { number: '01', title: 'Circle of Red Cross', body: ["Let me circle this! Or Let's circle up"], link : 'CircleOfRedCross' },
        { number: '02', title: 'Design Concept - CS', body: ["Heartbeat"], link : 'Heartbeat' },
        { number: '03', title: 'Iris Calendar', body: ["Let's see what is gonna come this year"] , link : 'Calendar'},
        { number: '04', title: 'Universe in Cloud', body: ["Everything is connected"], link : 'UniverseInCloud' },
        { number: '05', title: 'Cloud Computing Illustration', body: ["What is cloud computing?"] , link : 'CloudComputingIllustration'},
        { number: '06', title: "I've got out at last", body: ["Yellow Yellow Yellow"], link : 'IveGotOutAtLast' },
        { number: '07', title: 'Calligraphy portrait', body: ["What consists of me"], link : 'Calligraphy' },
        { number: '08', title: 'Portrait', body: ["What can you see from me?"], link : 'Portrait' },
        { number: '09', title: 'Universe in your eyes', body: ["What can you see from my eyes?"], link : 'UniverseInYourEyes' },
        { number: '10', title: 'Kite', body: ["Let's Play together"], link : 'Kite' },
        { number: '11', title: 'Silver-lining', body: ["Every Cloud Has A silver Lining"] , link : 'SilverLining'},
        { number: '12', title: 'Night light', body: ["City light is shining"], link : 'NightLight' },
        { number: '13', title: 'Burn out', body: ["HTTP ERROR 404"], link : 'BurnOut' },
        { number: '14', title: 'Reborn', body: ["We are the starts in the night"], link : 'Reborn' },
        { number: '15', title: 'Walk On Ice', body: ["Do I look fabulous?"], link : 'WalkOnIce' },
        { number: '16', title: 'Evergreen pine', body: ["Yes, I will not change no matter what happens in my life"], link : 'EvergreenPine' },
        { number: '17', title: 'Sensed', body: ["The five senses are freely expressed with various materials"], link : 'Sensed' },
        { number: '18', title: 'The Yellow Wallpaper', body: ["I've got out a last"], link : 'YellowWallpaper' },
        { number: '19', title: 'Green Eyed Monster', body: ["Our bodies are gardens, to the which our wills are gardenes"], link : 'GreenEyedMonster'}

    ]
    render() {
        return (

            <div className='IndexWrapper'>
                <div className='IndexWrapperContainer'>
                    <div className='IndexTitle'>
                        Index
                    </div>
                    <div className='IndexColumContainer'>
                        {this.list.map((item, index) => {
                            return (
                                <Link activeClass="active" to={item.link} spy={true} smooth={true}
                                    offset={50} duration={500} onSetActive={this.handleSetActive}>
                                    <div className='IndexColum' key={index}>
                                        <div className='ItemNumber'>
                                            {item.number}
                                        </div>
                                        <div className='ContentsLists'>
                                            <div className='title'>
                                                {item.title}
                                            </div>
                                            <div className='body'>
                                                {item.body}
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>

            </div>
        );
    }
}

export default Index;