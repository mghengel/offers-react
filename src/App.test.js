import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from 'enzyme';
import './setupTests.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('The main app', () => {
    it('the app should have text', () => {
        const app  = mount(<App/>);
        expect(app.contains(<div>...Loading</div>)).toBe(true);
    })
})