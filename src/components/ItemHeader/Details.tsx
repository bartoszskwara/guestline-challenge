import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

interface Props {
    title: string;
    subTitle: React.ReactNode;
}

const Details = ({ title, subTitle }: Props) => (
    <Box>
        <Typography variant="large" component="p">
            {title}
        </Typography>
        {subTitle}
    </Box>
);

Details.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.node.isRequired,
};

export default Details;
