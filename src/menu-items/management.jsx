// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {  Fatrows, Bill, Profile2User } from 'iconsax-react';

const icons = {
  questions: Fatrows,
  users: Profile2User,
  invoice: Bill,
};

// ==============================|| MENU ITEMS - management ||============================== //

const management = {
  id: 'group-management',
  title: <FormattedMessage id="management" />,
  type: 'group',
  children: [
    {
      id: 'users',
      title: <FormattedMessage id="Users" />,
      type: 'item',
      url: '/users/list',
      icon: icons.users,
    },
    {
      id: 'institutes',
      title: <FormattedMessage id="Institutes" />,
      type: 'item',
      url: '/institutes/list',
      icon: icons.invoice,
    },
    {
      id: 'all-questions',
      title: <FormattedMessage id="All Questions" />,
      type: 'item',
      url: '/all-questions/list',
      icon: icons.questions,
    }
  ]
};

export default management;
