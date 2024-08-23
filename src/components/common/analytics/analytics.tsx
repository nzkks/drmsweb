import conf from '@/lib/config';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const Analytics = () => {
  return process.env.NODE_ENV === 'production' ? (
    <>
      <GoogleAnalytics gaId={conf.googleAnalyticsId} />
      <GoogleTagManager gtmId={conf.googleTagManagerId} />
    </>
  ) : null;
};

export default Analytics;
