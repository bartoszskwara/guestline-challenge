import React from 'react';
import PropTypes from 'prop-types';
import { Box, Rating } from '@mui/material';
import { Image } from 'types';
import Details from './Details';
import Photos from './Photos';

interface Props {
    title: string;
    subTitle: React.ReactNode;
    images: Image[];
    starRating?: string;
}

const ItemHeader = ({ title, subTitle, images, starRating }: Props) => (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' }}>
            {images && !!images.length && <Photos images={images} />}
            <Details title={title} subTitle={subTitle} />
        </Box>
        {starRating && (
            <Rating
                aria-label="Star rating"
                value={Number(starRating)}
                readOnly
            />
        )}
    </Box>
);

ItemHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.node.isRequired,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            alt: PropTypes.string,
        })
    ),
    starRating: PropTypes.string,
};

export default ItemHeader;
