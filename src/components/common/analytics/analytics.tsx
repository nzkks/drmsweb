import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string;
const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string;

const Analytics = () => {
  return process.env.NODE_ENV === 'production' ? (
    <>
      <GoogleAnalytics gaId={GA_ID} />
      <GoogleTagManager gtmId={GTM_ID} />
    </>
  ) : null;
};

export default Analytics;
