import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// const phoneSized = useMediaQuery({ query: '(max-width: 600px)'})

class SidePane extends React.Component {
    constructor(props){
        super(props)
        this.onMouseOver = this.onMouseOver.bind(this)
        this.onMouseLeave = this.onMouseLeave.bind(this)
        this.onClick = this.onClick.bind(this)

        this.state = {
            hover: false,
            clicked: false
        }
    }

    onClick(){
        console.log("onClick")
        if (this.state.clicked === true){
            this.setState(() => ({ clicked: false }))
        } else {
            this.setState(() => ({ clicked: true }))
        }
    }

    onMouseOver() {
        console.log("onHover", this.state)
        this.setState(() => ({ hover: true }))
    }

    onMouseLeave(){
        console.log("onMouseLeave")
        this.setState(() =>({ hover: false }))
    }

    render() {
        return (
            <div 
                className="side-pane"
                onMouseOver={this.onMouseOver}
                onMouseLeave = {this.onMouseLeave}
                onClick = {this.onClick}
            >
                <FontAwesomeIcon 
                    icon="glasses"
                    className="side-pane__icon"
                />
                {(this.state.hover || this.state.clicked) && <div className="about-me">
                    <div className="side-pane__headshot"> </div>
                </div>}
                {(this.state.hover || this.state.clicked) && <h1>Sidepanel</h1> }
            </div>
        )
    }
}


export default SidePane