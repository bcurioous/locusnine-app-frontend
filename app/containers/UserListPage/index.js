/**
 *
 * UserListPage
 *
 */

import React from 'react';
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

  return (
    <div>
      <Helmet>
        <title>Users</title>
        <meta name="description" content="Locusnine Users" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <BulmaTable />
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
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(UserListPage);
