import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions/top'

class Container extends Component {
    
    constructor(porps) {
        super(props)
    }

    render() {
        return(
            <div id="content">
            </div>
        )
    }
}

Container.propTypes = {
    dataList: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
