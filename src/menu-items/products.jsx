import { Fatrows, Bill, Profile2User } from 'iconsax-react';

const icons = {
  questions: Fatrows,
  users: Profile2User,
  invoice: Bill,
};

// ==============================|| MENU ITEMS - products ||============================== //

const products = {
  id: 'group-products',
  title: "products",
  type: 'group',
  children: [
    {
      id: 'courses',
      title: "Courses",
      type: 'item',
      url: '/courses',
      icon: icons.users,
    },
    {
      id: 'test-series',
      title: "Test Series",
      type: 'item',
      url: '/test-series',
      icon: icons.invoice,
    }
  ]
};

export default products;
