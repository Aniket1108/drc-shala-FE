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
      title: "Test Series",
      type: 'collapse',
      icon: icons.menuLevel,
      children: [
        {
          id: 'test-series-1.1',
          title: "All Test Series",
          type: 'item',
          url: '#'
        },
        {
          id: 'test-series-1.1',
          title: "Create",
          type: 'item',
          url: '#'
        },
        {
          id: 'test-series-1.1',
          title: "History",
          type: 'item',
          url: '#'
        },
      ]
    },
    {
      id: 'courses',
      title: "Courses",
      type: 'item',
      url: '#',
      icon: icons.disabledMenu,
      disabled: true
    },
    {
      id: 'study-material',
      title: "Study Material",
      type: 'item',
      url: '/study-material',
      icon: icons.disabledMenu,
      disabled: true
    }
  ]
};

export default products;