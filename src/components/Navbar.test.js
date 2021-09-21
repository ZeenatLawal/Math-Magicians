import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const navbar = renderer
    .create(
      <Router>
        <NavLink to="/">Home</NavLink>
      </Router>
    )
    .toJSON();
  expect(navbar).toMatchSnapshot();
});

it('renders correctly', () => {
  const navbar = renderer
    .create(
      <Router>
        <NavLink to="/calculator">Calculator</NavLink>
      </Router>
    )
    .toJSON();
  expect(navbar).toMatchSnapshot();
});
