import { render, screen } from '@testing-library/react';
import ItemHeader from 'components/ItemHeader/ItemHeader';

test('renders Details component', () => {
    render(
        <ItemHeader
            title="Details Title"
            subTitle={<>Details Subtitle</>}
            images={[]}
            starRating="3"
        />
    );
    expect(screen.getByText('Details Title')).toBeInTheDocument();
    expect(screen.getByText('Details Subtitle')).toBeInTheDocument();
    expect(screen.queryByLabelText('Number of images')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Star rating')).toBeInTheDocument();
});
