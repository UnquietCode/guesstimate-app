import '../../../../node_modules/flexboxgrid/css/flexboxgrid.min.css'
import '../../../styles/theme.css'
import '../../../../semantic/dist/semantic.css'
//semantic js is dependent on jquery, which has trouble now
import '../../../../semantic/dist/semantic.js'

import React, {Component, PropTypes} from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import { connect } from 'react-redux';
import * as spaceActions from 'gModules/spaces/actions.js';
import * as Space from 'gEngine/space';
import Header from '../header'
import NavHelper from './nav-helper'
import './style.css';

function mapStateToProps(state) {
  return {
    spaces: state.spaces
  }
}

@connect(mapStateToProps)
export default class extends Component{
  displayName: 'Layout'
  componentDidMount() {
    this.props.dispatch(spaceActions.fetch())
  }
  render () {
    let body = this.props.children
    if (!this.props.isFluid) {
      body = <div className="ui container"> {body} </div>
    }
    return (
      <NavHelper>
        <Header isFluid={this.props.isFluid} spaces={this.props.spaces}/>
        {body}
      </NavHelper>
    )
  }
}
