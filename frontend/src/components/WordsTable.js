import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const WordsTable = ({ items }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Word</th>
      </tr>
    </thead>
    <tbody>
      {
        items.map((item, index) => (
          <tr key={String(`${index}_${item}`)}>
            <td>{index}</td>
            <td>{item}</td>
          </tr>
        ))
      }
    </tbody>
  </Table>
);

WordsTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

WordsTable.defaultProps = {
  items: [],
};

export default WordsTable;
