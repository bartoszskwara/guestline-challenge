import { fireEvent } from '@testing-library/react';
import FilterPanel from 'components/FilterPanel/FilterPanel';
import { customRender } from 'utilities/test-utils';

test('marks Rating stars after click', () => {
    const { container } = customRender(<FilterPanel />);

    const stars = container.getElementsByClassName('MuiRating-iconEmpty');
    expect(stars.length).toBe(5);
    fireEvent.click(stars[2]);
    const filledStars = container.getElementsByClassName(
        'MuiRating-iconFilled'
    );
    const emptyStars = container.getElementsByClassName('MuiRating-iconEmpty');
    expect(filledStars.length).toBe(3);
    expect(emptyStars.length).toBe(2);
});
