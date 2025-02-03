import { Fatrows, Bill, Profile2User } from 'iconsax-react';

const icons = {
    questions: Fatrows,
    users: Profile2User,
    invoice: Bill,
};

// ==============================|| MENU ITEMS - profile ||============================== //

const profile = {
    id: 'group-profile',
    title: "profile",
    type: 'group',
    children: [
        {
            id: 'profile',
            title: "Profile",
            type: 'item',
            url: '/users/list',
            icon: icons.users,
        },
        {
            id: 'settings',
            title: "Settings",
            type: 'item',
            url: '/test-series/list',
            icon: icons.invoice,
        }
    ]
};

export default profile;
