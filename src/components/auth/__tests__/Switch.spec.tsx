import {render, screen} from '@testing-library/react';
import Switch from '../Switch';

describe('Switch Component', () => {
    it('render with correct text', () => {
        render(<Switch />);
        expect(screen.getByRole("switch")).toBeInTheDocument();
    });
});