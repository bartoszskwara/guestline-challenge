import { render, screen } from '@testing-library/react';
import Loader from 'components/Loader/Loader';

test('renders Loader component', () => {
    render(<Loader />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
});
