import conf from '@/lib/config';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const Analytics = () => {
  const isProd = conf.environment === 'production';

  return !isProd ? null : (
    <>
      <GoogleAnalytics gaId={conf.googleAnalyticsId} />
      <GoogleTagManager gtmId={conf.googleTagManagerId} />
    </>
  );
};

export default Analytics;
