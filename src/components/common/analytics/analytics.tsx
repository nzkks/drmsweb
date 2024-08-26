import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const Analytics = () => {
  return (
    <>
      <GoogleAnalytics gaId="G-VHLPLLSSD8" />
      <GoogleTagManager gtmId="GTM-PHKV9P3P" />
    </>
  );
};

export default Analytics;
