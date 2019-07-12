import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../components/Header'


test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}} />)
    expect(wrapper).toMatchSnapshot()
})

test('should call log out after button clicked', () => {
    const LogoutSpy = jest.fn()
    const wrapper = shallow(<Header startLogout={LogoutSpy}/>)
    wrapper.find('button').simulate('click')
    expect(LogoutSpy).toHaveBeenCalled()
})
