import { Bill, FolderOpen } from 'iconsax-react';

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
      url: '/products/courses',
      icon: FolderOpen,
      disabled: true,
      chip: {
        label: 'Coming soon',
        color: 'warning',
        size: 'small'
      }
    },
    {
      id: 'test-series',
      title: "Test Series",
      type: 'item',
      url: '/products/test-series',
      icon: Bill,
    }
  ]
};

export default products;
