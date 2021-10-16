import { shallow } from 'enzyme';
import Heading from '../Heading';

/** @test {Heading Component} */
describe('Heading Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Heading label="This is Heading" />);

    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
