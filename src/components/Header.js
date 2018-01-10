import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Popover, PopoverInteractionKind, Position, NavBarDivider } from '@blueprintjs/core'
import NewSongForm from './NewSongForm'

class Header extends Component {
  constructor(props) {
    super(props)
    this.closePopover = this.closePopover.bind(this)
    this.state = {
      popoverOpen: false
    }
    this.admin = 'Not Checked'
  }

  closePopover() {
    this.setState({ popoverOpen: false })
  }

  render() {
    return (
      <nav className="pt-navbar pt-elevation-3" style={{backgroundColor:'#ecf0f1'}}>
        <div className="pt-navbar-group pt-align-left">
          <Link className="pt-navbar-heading" to="/#" aria-label="Home">AggieDefenders</Link>
          {this.props.authenticated
              ? <Link className="pt-button pt-minimal pt-icon-document" to="/files" aria-label="Files">Files</Link>
              : null
          }
             <span className="pt-navbar-divider"></span>
        </div>
     
        {
       
          this.props.authenticated
          ? (
            <div className="pt-navbar-group pt-align-right">
              <Link className="pt-button pt-minimal pt-icon-projects" to="/news">News</Link>
              <Popover
                content={(<NewSongForm addSong={this.props.addSong} postSubmitHandler={this.closePopover} />)}
                interactionKind={PopoverInteractionKind.CLICK}
                isOpen={this.state.popoverOpen}
                onInteraction={(state) => this.setState({ popoverOpen: state })}
                position={Position.BOTTOM}>
                <button className="pt-button pt-minimal pt-icon-add" aria-label="add new song"></button>
              </Popover>
              <Link className="pt-button pt-minimal pt-icon-chat" to="/chat" aria-label="Account">chat</Link>
              <Link className="pt-button pt-minimal pt-icon-user" to="/account" aria-label="Account"></Link>
              <Link className="pt-button pt-minimal pt-icon-cog" to="/settings" aria-label="Settings"></Link>
              <Link className="pt-button pt-minimal pt-icon-log-out" to="/logout" aria-label="Log Out"></Link>
            </div>
          )
            : (
              <div className="pt-navbar-group pt-align-right">
                <Link className="pt-button pt-intent-primary" to="/login">Register/Log In</Link>
              </div>
            )
        }
      </nav>
    );
  }
}

export default Header;
