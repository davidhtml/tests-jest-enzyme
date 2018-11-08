import React from 'react';
// react-test-renderer
// import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json'
import { Header } from '../../components/Header'

test('should render Header correctly', () => {
    const wrapper = shallow(<Header logOut={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
    //TODO enzyme example
    // expect(wrapper.find('p').text()).toBe("Short description");
    //TODO react-shallow-renderer example
    // const renderer = new ShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});


test('should call start logout on logOut', () => {
    const startLogOut = jest.fn();
    const wrapper = shallow(<Header logOut={startLogOut}/>);
    wrapper.find('button').simulate('click');
    expect(startLogOut).toHaveBeenCalled();
});
