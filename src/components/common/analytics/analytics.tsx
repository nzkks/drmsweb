import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const Analytics = () => {
  return process.env.NODE_ENV === 'production' ? (
    <>
      <GoogleAnalytics
        gaId={String(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID)}
      />
      <GoogleTagManager
        gtmId={String(process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID)}
      />
    </>
  ) : null;
};

export default Analytics;
