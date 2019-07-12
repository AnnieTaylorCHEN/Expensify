import React from 'react'
import {shallow} from 'enzyme'
import { LoginPage } from '../../components/LoginPage'

test('should correctly render login page', () => {
    const wrapper = shallow(<LoginPage />)
    expect(wrapper).toMatchSnapshot()
})

test('should call log in after button clicked', () => {
    const LoginSpy = jest.fn()
    const wrapper = shallow(<LoginPage startLogin={LoginSpy}/>)
    wrapper.find('button').simulate('click')
    expect(LoginSpy).toHaveBeenCalled() 
})