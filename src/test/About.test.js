import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter as Router } from 'react-router-dom';
import About from '../components/About';



describe(" About Page Snapshot", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            <Router>
                <About />
            </Router>
        );
    });
    
    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();

    });

})

describe('About Page rendering of elements', () => {
    let wrapper = shallow(<About.WrappedComponent />)
    it('should display heading', () => {
        expect(wrapper.find('h1').render().text()).toEqual("About");
    })
    it('should display content', () => {
        expect(wrapper.find('p').render().text())
            .toEqual("This Application is used to track the status of the issues raised");
    })
})