import { Facility } from 'types/Facility';
import { Image } from 'types/Image';
import { Occupancy } from 'types/Occupancy';

export type Room = {
    id: string;
    name: string;
    shortDescription?: string;
    longDescription: string;
    occupancy: Occupancy;
    disabledAccess: boolean;
    bedConfiguration: string;
    images: Image[];
    facilities: Facility[];
};
