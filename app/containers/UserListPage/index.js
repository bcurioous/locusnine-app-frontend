/**
 *
 * UserListPage
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import BulmaTable from 'components/BulmaTable';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUserListPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function UserListPage() {
  useInjectReducer({ key: 'userListPage', reducer });
  useInjectSaga({ key: 'userListPage', saga });

  const [currentUser, setCurrentUser] = useState(null);

  const [userFormDialog, setUserFormDialog] = useState(false);
  const [users, setUsers] = useState([]);

  const [userName, setUserName] = useState(null);
  const [userPhone, setUserPhone] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userRole, setUserRole] = useState(null);
  // const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // props.getUsers();
    fetch('/api/users')
      .then(response => response.json())
      .then(usersJson => {
        setUsers(usersJson.data);
      });
  }, []);

  function createNewUser() {
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        role: userRole,
        active: true,
        phone: userPhone,
      }),
    })
      .then(response => response.json())
      .then(usersJson => {
        setUsers(usersJson.data);
      });
  }

  function saveUser() {
    if (operation === 'new') {
      createNewUser();
    }
    if (operation === 'update') {
      updateUser();
    }
  }

  return (
    <div>
      <Helmet>
        <title>Users</title>
        <meta name="description" content="Locusnine Users" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <button
        type="button"
        className="button is-primary"
        onClick={() => setUserFormDialog(true)}
      >
        New User
      </button>
      <BulmaTable
        columns={[
          {
            caption: 'Name',
            render: value => <React.Fragment>{value.name}</React.Fragment>,
          },
          {
            caption: 'Email',
            render: value => <React.Fragment>{value.email}</React.Fragment>,
          },
          {
            caption: 'Phone #',
            render: value => <React.Fragment>{value.phone}</React.Fragment>,
          },
          {
            caption: 'Role',
            render: value => <React.Fragment>{value.role}</React.Fragment>,
          },
          {
            caption: 'Status',
            render: value => <React.Fragment>{value.status}</React.Fragment>,
          },
          {
            caption: 'Edit',
            render: value => (
              // const person = value.toJSON();
              <div className="buttons">
                <button
                  type="button"
                  onClick={() => {
                    setCurrentUser(value);
                    setUserFormDialog(true);
                  }}
                  className="button is-primary"
                >
                  Edit
                </button>
                <button type="button" className="button is-danger">
                  Delete
                </button>
              </div>
            ),
          },
        ]}
        rows={users}
        count={100}
      />

      <div className={`modal ${userFormDialog && 'is-active'}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">User</p>
            <button
              type="button"
              className="delete"
              onClick={() => setUserFormDialog(false)}
              aria-label="close"
            />
          </header>
          <section className="modal-card-body">
            <form>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="User's Name"
                    defaultValue={currentUser && currentUser.name}
                    onChange={e => setUserName(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="User's Email"
                    defaultValue={currentUser && currentUser.email}
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      defaultChecked={
                        currentUser && currentUser.role === 'ADMIN'
                      }
                      name="role"
                    />
                    ADMIN
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      defaultChecked={
                        currentUser && currentUser.role === 'CUSTOMER EXECUTIVE'
                      }
                      name="role"
                    />
                    CUSTOMER EXECUTIVE
                  </label>
                </div>
              </div>
              <div className="field">
                <label className="label">Phone</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="User's Phone (Optional)"
                    defaultValue={currentUser && currentUser.phone}
                  />
                </div>
              </div>
            </form>
          </section>
          <footer className="modal-card-foot">
            <button
              type="button"
              className="button is-success"
              onClick={saveUser}
            >
              Save changes
            </button>
            <button
              type="button"
              className="button"
              onClick={() => setUserFormDialog(false)}
            >
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

UserListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userListPage: makeSelectUserListPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    // getUsers: () => dispatch(getUsers()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(UserListPage);
