import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Badge, Box, Modal } from '@mui/material';
import { Image } from 'types';

interface Props {
    images: Image[];
}

const Photos = ({ images }: Props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const galleryItems = useMemo(
        () =>
            images.map((i) => ({
                original: i.url,
                thumbnail: i.url,
                originalAlt: i.alt,
            })),
        [images]
    );
    return (
        <>
            <Badge
                aria-label="Number of images"
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                badgeContent={images.length}
                sx={{
                    '& .MuiBadge-badge': {
                        right: 25,
                        top: 6,
                        padding: '0 4px',
                        background: (theme) => theme.palette.background.primary,
                    },
                }}
            >
                <Box
                    component="img"
                    sx={{
                        width: 100,
                        height: 100,
                        objectFit: 'cover',
                        marginRight: (theme) => theme.spacing(2),
                        cursor: 'pointer',
                    }}
                    src={images[0]?.url}
                    alt="Images Thumbnail"
                    onClick={handleOpen}
                />
            </Badge>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="Images Modal"
                aria-describedby="Images Gallery"
            >
                <Box
                    sx={(theme) => ({
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: theme.palette.background.primary,
                        padding: theme.spacing(3),
                        [theme.breakpoints.down('md')]: {
                            width: '80%',
                        },
                    })}
                >
                    <ImageGallery items={galleryItems} />
                </Box>
            </Modal>
        </>
    );
};

Photos.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            alt: PropTypes.string,
        })
    ),
};

export default Photos;
