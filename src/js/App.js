import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { children, location } = this.props;
        const key = location.pathname;
        return(
            <div key={key}>
              {children}
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}


export default connect()(App)
