import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Navbar extends Component {

    static defaultProps = {
        title: 'Github Finder',
        icons: 'fab fa-github'
    }
    static propTypes = {
        title: PropTypes.string.isRequired,
        icons: PropTypes.string.isRequired
    }
    render() {
        return (
            <nav className = 'navbar bg-primary'>
                <h1><i className = { this.props.icons } />{ this.props.title }</h1>
            </nav>
        )
    }
}

export default Navbar
