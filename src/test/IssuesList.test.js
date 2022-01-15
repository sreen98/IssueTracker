import { shallow } from 'enzyme';
import React from 'react';
import IssuesList from '../components/IssueList';
import Issue from '../components/Issue';
import toJson from 'enzyme-to-json';

describe('When a Sample Issue array is passed as props to IssuesList Component', () => {

    let wrapper;
    let props;
    beforeEach(() => {
        props = {

            "type": "Angular",
            "counter": 1,
            "issuedesc": "On Clicking delete, the application crashes.",
            "severity": "Critical",
            "status": "Open",
            "createdDate": "2021-01-13",
            "resolvedDate": "",
            "views": 81,

            toDisplay: {
                "isIssueDesc": true,
                "isSeverity": true,
                "isStatus": true,
                "isCreatedDate": true,
                "isResolvedDate": true
            },
        }

        wrapper = shallow(<Issue.WrappedComponent {...props} />)
    })

    it('should display Type correctly', () => {
        
        let typeItem = wrapper.find('ListGroupItem').at(0).render().text();
        expect(typeItem).toEqual('Type: Angular');
    })
    it('should display Issue Description correctly', () => {
        let typeItem = wrapper.find('ListGroupItem').at(1).render().text();
        expect(typeItem).toEqual('Description: On Clicking delete, the application crashes.');
    })
    it('should display Severity correctly', () => {
        let typeItem = wrapper.find('ListGroupItem').at(2).render().text();
        expect(typeItem).toEqual('Severity: Critical');
    })
    it('should display Status correctly', () => {
        let typeItem = wrapper.find('ListGroupItem').at(3).render().text();
        expect(typeItem).toEqual('Status: Open');
    })
    it('should display Created Date correctly', () => {
        let typeItem = wrapper.find('ListGroupItem').at(4).render().text();
        expect(typeItem).toEqual('Created Date: 2021-01-13');
    })
    it('should display Created Date correctly', () => {
        let typeItem = wrapper.find('ListGroupItem').at(5).render().text();
        expect(typeItem).toEqual('Resolved Date: ');
    })


})
