import { Component, ReactNode } from 'react';
import { Box } from '@mui/material';

interface Props {
    children?: ReactNode;
}
interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public render() {
        if (this.state.hasError) {
            return (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flex: 1,
                        marginY: 10,
                    }}
                >
                    Something went wrong. Please refresh the page and try again.
                </Box>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
