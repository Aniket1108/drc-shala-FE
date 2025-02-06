import {  Fatrows, Bill, Profile2User } from 'iconsax-react';

const icons = {
  questions: Fatrows,
  users: Profile2User,
  invoice: Bill,
};

// ==============================|| MENU ITEMS - management ||============================== //

const management = {
  id: 'group-management',
  title: "management",
  type: 'group',
  children: [
    {
      id: 'users',
      title: "Users",
      type: 'item',
      url: '/management/all-users',
      icon: icons.users,
    },
    {
      id: 'institutes',
      title: "Institutes",
      type: 'item',
      url: '/management/institutes',
      icon: icons.invoice,
    },
    {
      id: 'all-questions',
      title: "All Questions",
      type: 'item',
      url: '/management/all-questions',
      icon: icons.questions,
    }
  ]
};

export default management;