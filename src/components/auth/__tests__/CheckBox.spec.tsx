import {render, screen} from '@testing-library/react';
import CheckBox from '../CheckBox';

describe('CheckBox Component', () => {
    it('render with correct text', () => {
        render(<CheckBox label="CheckBox Label" subTitle="CheckBox Subtitle" selectValues={[{title: "Recents", isChecked: false, isDisable: false}]}   />);
        expect(screen.getByText("CheckBox Label")).toBeInTheDocument();
        expect(screen.getByText("CheckBox Subtitle")).toBeInTheDocument();
        expect(screen.getByText("Recents")).toBeInTheDocument();
    });
});