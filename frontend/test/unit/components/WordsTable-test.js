import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import { Table } from 'react-bootstrap';

import WordsTable from '../../../src/components/WordsTable';

const renderComponent = (props) => mount(<WordsTable {...props} />);

describe('<WordsTable />', () => {
  it('should render the component structure', () => {
    const component = renderComponent({ items: [] });
    const table = component.find(Table);

    expect(table.exists()).to.be.equal(true);

    component.unmount();
  });

  it('should render the component with items', () => {
    const component = renderComponent({ items: ['abc', 'bda'] });
    const table = component.find(Table);
    const rows = table.find('tbody').find('tr');

    expect(table.exists()).to.be.equal(true);
    expect(rows).to.have.length(2);

    component.unmount();
  });
});
