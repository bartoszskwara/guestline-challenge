import { render, screen, fireEvent } from '@testing-library/react';
import QuantityFilter from 'components/FilterPanel/QuantityFilter';

test('renders QuantityFilter component', () => {
    const incrementFunction = jest.fn();
    const decrementFunction = jest.fn();
    render(
        <QuantityFilter
            label="Adults Test"
            value={5}
            increment={incrementFunction}
            decrement={decrementFunction}
        />
    );
    expect(screen.getByText('Adults Test')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();

    const incrementButton = screen.getByLabelText('increment');
    fireEvent.click(incrementButton);
    expect(incrementFunction).toBeCalled();

    const decrementButton = screen.getByLabelText('decrement');
    fireEvent.click(decrementButton);
    expect(decrementFunction).toBeCalled();
});
