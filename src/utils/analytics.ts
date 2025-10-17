import type { AnalyticsEvent } from '@navikt/nav-dekoratoren-moduler';
import { getAnalyticsInstance } from '@navikt/nav-dekoratoren-moduler';

type NavigereAnalyticsEvent = AnalyticsEvent<'navigere', { lenketekst: string; destinasjon: string }>;

const analyticsLogger = getAnalyticsInstance<NavigereAnalyticsEvent>('ungdomsprogramytelse-innsyn-mikrofrontend-ssr');

export const logCardClick = async (url: string) => {
    await analyticsLogger('navigere', { lenketekst: 'Ungdomsprogramytelsen', destinasjon: url });
};
