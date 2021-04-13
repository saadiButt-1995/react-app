import React from 'react'
import ReactLivestream from 'react-livestream'
 
// Optional component to be rendered
// when you're not streaming

class Live extends React.Component {
    render() {
        return (
            <div>
                <ReactLivestream platform="mixer" mixerChannelId={102402534} />
            </div>
        );
    }
}

export default Live;