import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// const phoneSized = useMediaQuery({ query: '(max-width: 600px)'})

class SidePane extends React.Component {
    constructor(props){
        super(props)
        this.onMouseOver = this.onMouseOver.bind(this)
        this.onMouseLeave = this.onMouseLeave.bind(this)

        this.state = {
            display: false
        }
    }

    onMouseOver() {
        console.log("onHover")
        this.setState(() => ({ display: true }))
    }

    onMouseLeave(){
        console.log("onMouseLeave")
        this.setState(() =>({ display: false }))
    }

    render() {
        return (
            <div 
                className="side-pane vh-100 br b--blue shadow-2"
                onMouseOver={this.onMouseOver}
                onMouseLeave = {this.onMouseLeave}
            >
                <FontAwesomeIcon 
                    icon="glasses"
                    className="glasses"
                />
                {this.state.display && <div className="about-me">
                    <div className="headshot"> </div>
                </div>}
                {this.state.display && <h1>Sidepanel</h1> }
            </div>
        )
    }
}


export default SidePane