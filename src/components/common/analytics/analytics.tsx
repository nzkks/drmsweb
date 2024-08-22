import conf from '@/lib/config';
import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';

const Analytics = () => {
  const isProd = conf.environment === 'production';

  return !isProd ? null : (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${conf.googleAnalyticsId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-js">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${conf.googleAnalyticsId}');
          `}
      </Script>
      <GoogleTagManager gtmId={conf.googleTagManagerId} />
    </>
  );
};

export default Analytics;
