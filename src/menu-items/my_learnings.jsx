import { PenAdd, Award } from 'iconsax-react';

// ==============================|| MENU ITEMS - myLearnings ||============================== //

const myLearnings = {
    id: 'group-my-learnings',
    title: "My Learnings",
    type: 'group',
    children: [
        // {
        //     id: 'my-courses',
        //     title: "My Courses",
        //     type: 'item',
        //     url: '/learnings/courses',
        //     icon: Award,
        //     disabled: true,
        //     chip: {
        //         label: 'Coming soon',
        //         color: 'warning',
        //         size: 'small'
        //     }
        // },
        {
            id: 'test-series',
            title: "My Test Series",
            type: 'item',
            url: '/learnings/test-series',
            icon: PenAdd,
        }
    ]
};

export default myLearnings;
