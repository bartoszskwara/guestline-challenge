import { render, screen } from '@testing-library/react';
import Details from 'components/ItemHeader/Details';

test('renders Details component', () => {
    render(<Details title="Details Title" subTitle={<>Details Subtitle</>} />);
    expect(screen.getByText('Details Title')).toBeInTheDocument();
    expect(screen.getByText('Details Subtitle')).toBeInTheDocument();
});
