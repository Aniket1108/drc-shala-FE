// Normalized data structure
export const streams = {
    1: 'NEET',
    2: 'JEE',
    3: 'MHT-CET'
};

export const standards = {
    1: '11th Science',
    2: '12th Science',
    3: 'Dropper'
};

export const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        streamId: 1, // NEET
        standardId: 2, // 12th Science
        status: 'active',
        joinDate: '2024-01-15',
        details: {
            phone: '+1 (555) 123-4567',
            department: 'Science',
            location: 'Mumbai',
            lastLogin: '2024-02-20',
            projects: ['Physics', 'Chemistry'],
        }
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        streamId: 2, // JEE
        standardId: 1, // 11th Science
        status: 'active',
        joinDate: '2024-02-01',
        details: {
            phone: '+1 (555) 234-5678',
            department: 'Science',
            location: 'Delhi',
            lastLogin: '2024-02-19',
            projects: ['Mathematics'],
        }
    },
    {
        id: 3,
        name: 'Bob Johnson',
        email: 'bob@example.com',
        streamId: 3, // MHT-CET
        standardId: 2, // 12th Science
        status: 'inactive',
        joinDate: '2024-01-20',
        details: {
            phone: '+1 (555) 345-6789',
            department: 'Science',
            location: 'Pune',
            lastLogin: '2024-02-15',
            projects: ['Biology', 'Chemistry'],
        }
    },
];