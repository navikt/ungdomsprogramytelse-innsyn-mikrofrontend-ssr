import { getAnalyticsInstance } from '@navikt/nav-dekoratoren-moduler';

export const logCardClick = async (url: string) => {
    const logger = getAnalyticsInstance('dekoratoren');
    logger('navigere', { lenketekst: 'Ungdomsprogramytelsen', destinasjon: url });
};
