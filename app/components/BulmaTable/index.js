/**
 *
 * Table
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import _map from 'lodash/map';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function Header({ columns }) {
  return (
    <thead>
      <tr>
        {_map(columns, (column, i) => (
          <td key={i}>{column.caption}</td>
        ))}
      </tr>
    </thead>
  );
}

Header.propTypes = {
  columns: PropTypes.array,
};

function Body({ rows, columns }) {
  return (
    <tbody>
      {_map(rows, (row, ir) => (
        <tr key={ir}>
          {_map(columns, (column, ic) => (
            <td key={ic}>{column.render(row)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

Body.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
};

function Footer({ columns }) {
  return (
    <tfoot>
      <tr>
        <th colSpan={columns.length}>
          <Pagination />
        </th>
      </tr>
    </tfoot>
  );
}
Footer.propTypes = {
  columns: PropTypes.array,
};

function Pagination() {
  return (
    <div
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <button type="button" className="pagination-previous">
        Previous
      </button>
      <button type="button" className="pagination-next">
        Next page
      </button>
      <ul className="pagination-list">
        <li>
          <button
            type="button"
            className="pagination-link"
            aria-label="Goto page 1"
          >
            1
          </button>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <button
            type="button"
            className="pagination-link"
            aria-label="Goto page 45"
          >
            45
          </button>
        </li>
        <li>
          <button
            type="button"
            className="pagination-link is-current"
            aria-label="Page 46"
            aria-current="page"
          >
            46
          </button>
        </li>
        <li>
          <button
            type="button"
            className="pagination-link"
            aria-label="Goto page 47"
          >
            47
          </button>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <button
            type="button"
            className="pagination-link"
            aria-label="Goto page 86"
          >
            86
          </button>
        </li>
      </ul>
    </div>
  );
}

function Table({ rows, columns }) {
  return (
    <div className="box">
      <table className="table">
        <Header columns={columns} />
        <Body columns={columns} rows={rows} />
        <Footer columns={columns} />
      </table>
    </div>
  );
}

Table.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
};

export default Table;
