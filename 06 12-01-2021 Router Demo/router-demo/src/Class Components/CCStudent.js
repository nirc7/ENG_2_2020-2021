import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class CCStudent extends Component {
  render() {

    // let output = null;
    // if (this.props.location.state !== undefined) {
    //   output = (<div>
    //     <h2> userObj2Send</h2>
    //         user id =  {this.props.location.state.userObj2Send.userId} <br />
    //         user name = {this.props.location.state.userObj2Send.userName}
    //   </div>)
    // }     

    return (
      <div>
        <h2>Student</h2>
          user id  = {this.props.match.params.userId} <br />

        {/* {output} */}

        {this.props.location.state !== undefined &&
          <div>
            <h2> userObj2Send</h2>
            user id =  {this.props.location.state.userObj2Send.userId} <br />
            user name = {this.props.location.state.userObj2Send.userName}
          </div>
        }
      </div>
    )
  }
}

export default withRouter(CCStudent);