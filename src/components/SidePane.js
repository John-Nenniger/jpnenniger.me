import React from 'react';
import { useMediaQuery } from 'react-responsive';

// const phoneSized = useMediaQuery({query: '(max-width: 600px)'})

class SidePane extends React.Component {
    state = {
        hover: false
    }

    onHover(){
        this.setState(() => {{hover: true}})
    }

    render() {
        return (
            <div className="bg-silver side-pane"> 
                <h1> SidePane </h1> 
            </div>
        )
    }
}


export default SidePane