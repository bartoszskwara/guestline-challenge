import { render, screen, fireEvent } from '@testing-library/react';
import Photos from 'components/ItemHeader/Photos';

test('renders Photos component and opens modal', () => {
    render(<Photos images={[{ url: 'image.url' }]} />);

    expect(screen.queryByLabelText('Number of images')).toBeInTheDocument();

    const thumbnail = screen.getByAltText('Images Thumbnail');
    fireEvent.click(thumbnail);
    expect(screen.queryByRole('presentation')).toBeInTheDocument();
});
