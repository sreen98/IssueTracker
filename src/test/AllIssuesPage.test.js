import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import AllIssuesPage from '../components/AllIssuesPage';
import IssueList from '../components/IssueList'
const store = configureStore();
describe("All Issues Page Snapshot", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            <Router>
                <Provider store={store}>  <AllIssuesPage /></Provider>

            </Router>);
    });

    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})
describe("All Issues Page rendering of elements ", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
                <AllIssuesPage.WrappedComponent />  
        );
    });

    it('should display Issues List heading', () => {
        expect(wrapper.find('h1').render().text()).toEqual("Issue List");
    })
    it('should check if one IssueList Component is rendered', () => {
        expect(wrapper.find(IssueList).length).toEqual(1);

    })
})