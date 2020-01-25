/**
 *
 * SideBar
 *
 */

import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function SideBar() {
  return (
    <div className="column is-3 ">
      <aside className="menu is-hidden-mobile">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to="/home" activeClassName="is-active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/" activeClassName="is-active">
              Users
            </NavLink>
          </li>
        </ul>
        {/* <p className="menu-label">Administration</p>
        <ul className="menu-list">
          <li>
            <a>Team Settings</a>
          </li>
          <li>
            <a>Manage Your Team</a>
            <ul>
              <li>
                <a>Members</a>
              </li>
              <li>
                <a>Plugins</a>
              </li>
              <li>
                <a>Add a member</a>
              </li>
              <li>
                <a>Remove a member</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Invitations</a>
          </li>
          <li>
            <a>Cloud Storage Environment Settings</a>
          </li>
          <li>
            <a>Authentication</a>
          </li>
          <li>
            <a>Payments</a>
          </li>
        </ul>
        <p className="menu-label">Transactions</p>
        <ul className="menu-list">
          <li>
            <a>Payments</a>
          </li>
          <li>
            <a>Transfers</a>
          </li>
          <li>
            <a>Balance</a>
          </li>
          <li>
            <a>Reports</a>
          </li>
        </ul> */}
      </aside>
    </div>
  );
}

SideBar.propTypes = {};

export default memo(SideBar);
