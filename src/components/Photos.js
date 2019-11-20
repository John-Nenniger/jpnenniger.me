import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dockImg from '../../public/images/birdOnADock.jpeg'
import joffreyImg from '../../public/images/joffrey.jpg'
import lookoutImg from '../../public/images/enjoyingTheView.jpeg'
import cowichanImg from '../../public/images/cowichanLookout.jpeg'
import linesImg from '../../public/images/lines.jpeg'
import pantheonImg from '../../public/images/pantheon.jpeg'


class Pane extends React.Component{
    constructor(props){
        super(props)

        this.title = props.title
        this.url = props.url
        this.active = props.active || false
        this.file = props.file
    }

    render(){
        return (
            <div 
                className={"photos__pane"} 
                data-active={this.active}
                style={{backgroundImage:`url('${this.file}')`}}
            >
            
                {this.active && 
                    <button className="photos__button-left">
                        <FontAwesomeIcon
                            className="photos__arrow-left"
                            icon="arrow-circle-left"
                        />
                    </button>
                }
                {this.active && 
                    <button className="photos__button-right">
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
        console.log(lookoutImg)
        this.state = {
            images: [{
                title: "Bowen Island",
                file: dockImg,
            }, {
                title: "An Appartment in Italy",
                file: joffreyImg,
            }, {
                title: "Joffrey Lakes",
                file: lookoutImg,
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
            activeIndex: 1
        }
    }

    render(){
        return( 
            <div className="photos">
                {this.state.images.map((image, index) => (
                    <Pane 
                        key={index}
                        title={image.title}
                        url={image.url}
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