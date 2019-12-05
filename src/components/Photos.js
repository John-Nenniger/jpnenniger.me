import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import dockImg from '../../images/birdOnADock.jpeg'
import joffreyImg from '../../images/joffrey.jpg'
// import lookoutImg from '../../images/lookout.jpeg'
// import cowichanImg from '../../images/cowichanLookout.jpeg'
import linesImg from '../../images/lines.jpeg'
import pantheonImg from '../../images/pantheon.jpeg'
import riverImg from '../../images/river.jpeg'
import rockImg from '../../images/whereWasThisRock.png'

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
            activeIndex: 3
        }
    }


    handleClickRight = (e) => {
        e.preventDefault()
        l('click right')

        this.setState((state) => ({images: [...state.images.slice(1, 6), state.images[0]]}))
    }

    handleClickLeft = (e) =>{
        e.preventDefault()
        l("clicked left")

        this.setState((state) => ({images: [state.images[5], ...state.images.slice(0, 5)]}))
        l(this.state)
    }

    render(){
        const activeImage = this.state.images[this.state.activeIndex]
        l(activeImage)
        return ( 
            <div className="photos">
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