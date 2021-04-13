import React from 'react'
import * as Cookies from 'js-cookie'

import '../../assets/fonts/css/icons.css'
import Validator from '../../utils/Validator'
import { RESOLUTION_ARR } from '../../utils/Settings'
import './index.css'

class Index extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
          joinBtn: false,
          channel: '',
          baseMode: 'avc',
          transcode: 'interop',
          attendeeMode: 'video',
          videoProfile: '480p_4',
    
        }
      }

    componentDidMount() {
    window.addEventListener('keypress', (e) => {
        e.keyCode === 13 && this.handleJoin()
    })
    }

    handleChannel = (val, state) => {
        this.setState({
          channel: val,
          joinBtn: state
        })
      }

    handleJoin = () => {
    if (!this.state.joinBtn) {
        return
    }
    console.log(this.state)
    Cookies.set('channel', this.state.channel)
    Cookies.set('baseMode', this.state.baseMode)
    Cookies.set('transcode', this.state.transcode)
    Cookies.set('attendeeMode', this.state.attendeeMode)
    Cookies.set('videoProfile', this.state.videoProfile)
    window.location.hash = "meeting"
    }

    render() {
        return (
          <div className="wrapper index">
            <div className="ag-header"></div>
            <div className="ag-main">
              <section className="login-wrapper">
              
              ...
            
              </section>
            </div>
            <div className="ag-footer">
              <a className="ag-href" href="https://www.agora.io">
                <span>Powered By Agora</span>
              </a>
              <div>
                <span>Interested in Agora video call SDK? Contact </span>
                <span className="ag-contact">sales@agora.io</span>
              </div>
            </div>
          </div>
        )
      }
}
class InputChannel extends React.Component {
	...
}
class BaseOptions extends React.Component {
	...
}
class AdvancedOptions extends React.Component {
	...
}

...

export default Index