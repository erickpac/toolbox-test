import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import { Navbar } from 'react-bootstrap';

import TopBar from '../../../src/components/TopBar';

const renderComponent = () => mount(<TopBar />);

describe('<TopBar />', () => {
  it('should render the component structure', () => {
    const component = renderComponent();
    const navbar = component.find(Navbar);

    expect(navbar.exists()).to.be.equal(true);

    component.unmount();
  });
});
