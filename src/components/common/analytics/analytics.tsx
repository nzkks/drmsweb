import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const Analytics = () => {
  return (
    <>
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string}
      />
      <GoogleTagManager
        gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string}
      />
    </>
  );
};

export default Analytics;
