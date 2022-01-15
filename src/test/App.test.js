import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import App from '../App';
const store = configureStore();
describe("App Page Snapshot", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            <Router>
                <Provider store={store}>  <App /></Provider>

            </Router>);
    })
    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();

    });
})
describe("NavBar Renders correctly", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            <Router>
                <Provider store={store}>  <App /></Provider>

            </Router>);
    });
    test('should render Nav Bar', () => {
        let nvbar = wrapper.find('Navbar').length;
        expect(nvbar).toBe(1);
    
    });

})


