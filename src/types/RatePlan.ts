import { CancellationPolicy } from 'types/CancellationPolicy';

export type RatePlan = {
    id: string;
    shortDescription: string;
    longDescription: string;
    prePayment: string;
    cancellationPolicy: CancellationPolicy;
};
