import React from 'react';

const images = [{
            title: "Bowen Island",
            url: "../../public/images/birdOnADock.jpeg",
        },{
            title: "An Appartment in Italy",
            url: "../../public/images/enjoyingTheView.jpeg",
        },{
            title: "Joffrey Lakes",
            url: "../../public/images/joffrey.jpg",
        }]


class Pane extends React.Component{
    constructor(props){
        super(props)

        this.title = props.title
        this.url = props.url
        this.active = props.active || false

        this.styles = {
           backgroundImage :`url(${props.url}) center no-repeat`
        }
    }

    render(){
        return (
            <div 
                className={"photos__pane"} 
                data-active={this.active}
                styles={this.styles}
                >
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
                url: "../../public/images/birdOnADock.jpeg",
            }, {
                title: "An Appartment in Italy",
                url: "../../public/images/enjoyingTheView.jpeg",
            }, {
                title: "Joffrey Lakes",
                url: "../../public/images/joffrey.jpg",
            }]
        }
    }

    render(){
        return( 
            <div className="photos__panes">
                {this.state.images.map((image, index) => (
                    <Pane 
                        key={index}
                        title={image.title}
                        url={image.url}
                        active={image === this.state.images[0]}
                        />
                    ))
                }
            </div>
        )

    }
}


export default Photos