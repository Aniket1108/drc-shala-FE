import { Fatrows, Bill, Profile2User } from 'iconsax-react';

const icons = {
    questions: Fatrows,
    users: Profile2User,
    invoice: Bill,
};

// ==============================|| MENU ITEMS - myLearnings ||============================== //

const myLearnings = {
    id: 'group-my-learnings',
    title: "My Learnings",
    type: 'group',
    children: [
        {
            id: 'my-courses',
            title: "My Courses",
            type: 'item',
            url: '/users/list',
            icon: icons.users,
        },
        {
            id: 'test-series',
            title: "My Test Series",
            type: 'item',
            url: '/test-series/list',
            icon: icons.invoice,
        }
    ]
};

export default myLearnings;
