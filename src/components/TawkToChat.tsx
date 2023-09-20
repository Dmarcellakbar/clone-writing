// components/TawkToChat.js
import { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    // Embed Tawk.to widget code here
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/64f93c36b2d3e13950ee6688/1h9mp6dm3';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.head.appendChild(script);

    return () => {
      // Cleanup when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkToChat;
