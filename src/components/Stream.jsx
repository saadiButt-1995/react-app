import React, { Component } from "react";
// import WebRTCPeerConnectionWithServer from "./WebRTCPeerConnectionWithServer";
import WebRTCPeerConnection from "../WebRTCPeerConnection";
import WebRTCDataChannel from "../WebRTCDataChannel";

class Stream extends Component {
    render() {
        return (
            <div>
                <h1 className="App-title"> Welcome to React </h1>
                <WebRTCPeerConnection />
                {/* <WebRTCPeerConnectionWithServer /> */}
                <WebRTCDataChannel />
            </div>
        );
    }
}

export default Stream;
