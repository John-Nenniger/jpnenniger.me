import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dockImg from '../../public/images/birdOnADock.jpeg'
import joffreyImg from '../../public/images/joffrey.jpg'
import lookoutImg from '../../public/images/enjoyingTheView.jpeg'
import cowichanImg from '../../public/images/cowichanLookout.jpeg'
import linesImg from '../../public/images/lines.jpeg'
import pantheonImg from '../../public/images/pantheon.jpeg'

const l = console.log


class Pane extends React.Component{
    constructor(props){
        super(props)

        this.title = props.title
        this.url = props.url
        this.active = props.active || false
        this.file = props.file
        this.onClickLeft = props.onClickLeft
        this.onClickRight = props.onClickRight
    }

    render(){
        return (
            <div 
                className={"photos__pane"} 
                data-active={this.active}
                style={{backgroundImage:`url('${this.file}')`}}
            >
            
                {this.active && 
                    <button 
                        className="photos__button-left"
                        onClick = {this.onClickLeft}
                    >  
                        <FontAwesomeIcon
                            className="photos__arrow-left"
                            icon="arrow-circle-left"
                        />
                    </button>
                }
                {this.active && 
                    <button 
                        className="photos__button-right"
                        onClick={this.onClickRight}
                        >
                        <FontAwesomeIcon
                            className="photos__arrow-right"
                            icon="arrow-circle-right"
                        />
                    </button>
                }
            </div>
        )
    }
}


class Photos extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            images: [{
                title: "Bowen Island",
                file: dockImg,
            }, {
                title: "An Appartment in Italy",
                file: lookoutImg,
            }, {
                title: "Joffrey Lakes",
                file: joffreyImg,
            }, {
                title: "Lake Cowichan",
                file: cowichanImg,
            }, {
                title: "Power Lines",
                file: linesImg,
            }, {
                title: "Pantheon",
                file: pantheonImg,
            }],
            activeIndex: 2
        }
    }

    onClickRight(e){
        e.preventDefault()

        l('clicked right')
    }

    onClickLeft(e){
        e.preventDefault()

        l("clicked left")
    }

    render(){
        return( 
            <div className="photos">
                {this.state.images.slice(this.state.activeIndex - 1, this.state.activeIndex + 1).map((image, index) => (
                    <Pane 
                        onClickLeft={this.onClickLeft}
                        onClickRight={this.onClickRight}
                        key={index}
                        title={image.title}
                        file={image.file}
                        active={image === this.state.images[this.state.activeIndex]}
                        />
                    ))
                }
            </div>
        )

    }
}


export default Photos