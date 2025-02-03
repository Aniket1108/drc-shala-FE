import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import useConfig from 'hooks/useConfig';

// load locales files
const loadLocaleData = (locale) => {
  switch (locale) {
    case 'en':
    default:
      return import('utils/locales/en.json');
  }
};

// ==============================|| LOCALIZATION ||============================== //

export default function Locales({ children }) {
  const { i18n } = useConfig();

  const [messages, setMessages] = useState();

  useEffect(() => {
    loadLocaleData(i18n).then((d) => {
      setMessages(d.default);
    });
  }, [i18n]);

  return (
    <>
      {messages && (<>
        {children}
      </>
      )}
    </>
  );
}

Locales.propTypes = { children: PropTypes.node };
