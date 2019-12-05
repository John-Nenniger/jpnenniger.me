import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// import dockImg from '../../images/birdOnADock.jpeg'
import joffreyImg from '../../images/joffrey.jpg'
// import lookoutImg from '../../images/lookout.jpeg'
// import cowichanImg from '../../images/cowichanLookout.jpeg'
import linesImg from '../../images/lines.jpeg'
import pantheonImg from '../../images/pantheon.jpeg'
import riverImg from '../../images/river.jpeg'
import rockImg from '../../images/whereWasThisRock.png'
import faceImg from '../../images/face.jpeg'

const l = console.log


const Pane = (props) => (
    <div 
        className={`photos__pane ${props.active ? "active" : "not-active"}`} 
        style={{backgroundImage:`url('${props.file}')`}}
    >
    
        {props.active && 
            <button 
                className="photos__button-left"
                onClick = {props.handleClickLeft}
            >  
                <FontAwesomeIcon
                    className="photos__arrow-left"
                    icon="arrow-circle-left"
                />
            </button>
        }
        {props.active && 
            <button 
                className="photos__button-right"
                onClick={props.handleClickRight}
                >
                <FontAwesomeIcon
                    className="photos__arrow-right"
                    icon="arrow-circle-right"
                />
            </button>
        }
    </div>
)


class Photos extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            images: [{
                title: "Sardinia",
                file: rockImg,
            }, {
                title: "Joffrey",
                file: joffreyImg,
            }, {
                title: "Pantheon",
                file: pantheonImg,
            }, {
                title: "Lines",
                file: linesImg,
            }, {
                title: "River",
                file: riverImg,
            }
        ],
            activeIndex: 2
        }
    }


    handleClickRight = (e) => {
        e.preventDefault()

        this.setState((state) => ({images: [...state.images.slice(1, state.images.length), state.images[0]]}))
    }

    handleClickLeft = (e) =>{
        e.preventDefault()

        this.setState((state) => ({images: [state.images[state.images.length - 1], ...state.images.slice(0, state.images.length - 2)]}))
    }

    render(){
        const activeImage = this.state.images[this.state.activeIndex]
        return ( 
            <div className="photos">
                <div className="photos__header">
                    <div className="photos__jack"
                        style={{backgroundImage:`url('${faceImg}')`}}
                    >
                    </div>
                    <Link to="/"> 
                        Writing  
                    </Link>
                </div>
                <Pane 
                    handleClickLeft={this.handleClickLeft}
                    handleClickRight={this.handleClickRight}
                    title={activeImage.title}
                    file={activeImage.file}
                    active={true}
                    />
            </div>
        )

    }
}


export default Photos