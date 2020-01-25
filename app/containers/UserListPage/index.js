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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // props.getUsers();
    fetch('/api/users')
      .then(response => response.json())
      .then(usersJson => {
        setUsers(usersJson.data);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Users</title>
        <meta name="description" content="Locusnine Users" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <BulmaTable
        columns={[
          {
            caption: 'Name',
            render: value => <React.Fragment>{value}</React.Fragment>,
          },
          {
            caption: 'Email',
            render: value => <React.Fragment>{value}</React.Fragment>,
          },
          {
            caption: 'Phone #',
            render: value => <React.Fragment>{value}</React.Fragment>,
          },
          {
            caption: 'Role',
            render: value => <React.Fragment>{value}</React.Fragment>,
          },
          {
            caption: 'Edit',
            render: value => (
              // const person = value.toJSON();
              <div className="buttons">
                <button
                  type="button"
                  onClick={() => setCurrentUser(value)}
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
