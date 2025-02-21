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
      id: 'products',
      title: "Products Configure",
      type: 'item',
      url: '/management/products',
      icon: icons.disabledMenu,
    },
    {
      id: 'test-series',
      title: "Test Series",
      type: 'item',
      url: '/management/test-series',
      icon: icons.disabledMenu,
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