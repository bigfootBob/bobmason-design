import { Helmet } from 'react-helmet-async';

const GoogleAnalytics = () => {
  const trackingId = import.meta.env.VITE_GA_TRACKING_ID;
  
  if (!trackingId) return null;
  return (
    <Helmet>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`} />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${trackingId}');
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;