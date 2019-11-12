import React from 'react';
import { useMediaQuery } from 'react-responsive';

// const phoneSized = useMediaQuery({query: '(max-width: 600px)'})

class SidePane extends React.Component {
    constructor(props){
        super(props)
        this.onMouseOver = this.onMouseOver.bind(this)
        this.onMouseLeave = this.onMouseLeave.bind(this)

        this.state = {
            hover: false
        }
    }

    onMouseOver() {
        console.log("onHover")
        this.setState(() => ({ hover: true }))
    }

    onMouseLeave(){
        console.log("onMouseLeave")
        this.setState(() =>({ hover: false }))
    }

    render() {
        return (
            <div 
                className = "bg-silver side-pane vh-100-ns"
                onMouseOver={this.onMouseOver}
                onMouseLeave = {this.onMouseLeave}
                > 
                <i className="fab fa-github"></i>
                <h1>S</h1> 
            </div>
        )
    }
}


export default SidePane