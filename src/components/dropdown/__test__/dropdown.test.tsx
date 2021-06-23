
import { cleanup} from '@testing-library/react'
import '@testing-library/jest-dom';
import renderer from "react-test-renderer";
import DropDownMenu from '../index';

afterEach(cleanup)
const onClick = jest.fn()

it("matches snapshot", () => {
    const tree = renderer.create(<DropDownMenu onClick={onClick}/>).toJSON();
    expect(tree).toMatchSnapshot()
})
