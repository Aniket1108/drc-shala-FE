// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { I24Support, MessageProgramming, ShieldCross } from 'iconsax-react';

const icons = {
  maintenance: MessageProgramming,
  contactus: I24Support,
  disabledMenu: ShieldCross,
};

// ==============================|| MENU ITEMS - products ||============================== //

const products = {
  id: 'group-products',
  type: 'group',
  children: [
    {
      id: 'test-series',
      title: <FormattedMessage id="Test Series" />,
      type: 'collapse',
      icon: icons.menuLevel,
      children: [
        {
          id: 'test-series-1.1',
          title: (
            <>
              <FormattedMessage id="All Test Series" />
            </>
          ),
          type: 'item',
          url: '#'
        },
        {
          id: 'test-series-1.1',
          title: (
            <>
              <FormattedMessage id="Create" />
            </>
          ),
          type: 'item',
          url: '#'
        },
        {
          id: 'test-series-1.1',
          title: (
            <>
              <FormattedMessage id="History" />
            </>
          ),
          type: 'item',
          url: '#'
        },
      ]
    },
    {
      id: 'courses',
      title: <FormattedMessage id="Courses" />,
      type: 'item',
      url: '#',
      icon: icons.disabledMenu,
      disabled: true
    },
    {
      id: 'study-material',
      title: <FormattedMessage id="Study Material" />,
      type: 'item',
      url: '/study-material',
      icon: icons.disabledMenu,
      disabled: true
    }
  ]
};

export default products;
