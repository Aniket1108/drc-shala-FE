const data = {
    course: {
        neet: {
            title: "NEET Complete Course",
            description: "Prepare for NEET with our comprehensive course offering recorded lectures, test series, and study materials tailored for grades 11, 12, and repeaters.",
            standards: ["Grade 11", "Grade 12", "Repeaters"],
            offerings: [
                { title: "Comprehensive recorded lectures", description: "Expert faculty delivering lectures covering the entire NEET syllabus." },
                { title: "Chapter-wise and full-length test series", description: "Assess your knowledge with regular tests and improve your performance." },
                { title: "Detailed study materials", description: "Structured notes for Physics, Chemistry, and Biology." },
                { title: "Performance analytics and detailed reports", description: "Track your progress with in-depth analytics and reports." },
                { title: "Doubt resolution sessions", description: "Get your queries resolved through dedicated discussion forums." },
            ],
            subjects: ["Physics", "Chemistry", "Biology"],
            price: 1299,
            discountedPrice: 899,
        },
        jee: {
            title: "JEE Complete Course",
            description: "Comprehensive preparation for JEE with recorded lectures, test series, and study materials for grades 11, 12, and repeaters.",
            standards: ["Grade 11", "Grade 12", "Repeaters"],
            offerings: [
                { title: "In-depth recorded lectures", description: "Top educators cover Physics, Chemistry, and Mathematics in detail." },
                { title: "Mock test series", description: "Regular tests to assess and improve your performance." },
                { title: "Study materials", description: "Well-structured notes for effective preparation." },
                { title: "Performance tracking", description: "Detailed analytics and reports to identify strengths and weaknesses." },
                { title: "Doubt-clearing sessions", description: "Resolve your doubts with the help of expert forums." },
            ],
            subjects: ["Physics", "Chemistry", "Mathematics"],
            price: 1299,
            discountedPrice: 899,
        },
        "mht-cet": {
            title: "MHT-CET Complete Course",
            description: "Tailored preparation for MHT-CET with recorded lectures, test series, and comprehensive study materials.",
            standards: ["Grade 11", "Grade 12", "Repeaters"],
            offerings: [
                { title: "Comprehensive recorded lectures", description: "Detailed coverage of MHT-CET syllabus by experienced faculty." },
                { title: "Full-length test series", description: "Simulate real exam scenarios to build confidence." },
                { title: "Study materials", description: "Concise and effective notes for quick learning." },
                { title: "Performance insights", description: "Analytics to track progress and improve scores." },
                { title: "Interactive doubt sessions", description: "Get solutions to your questions from experts." },
            ],
            subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
            price: 1099,
            discountedPrice: 799,
        },
    },
    "test-series": {
        neet: {
            title: "NEET Test Series",
            description: "Evaluate your NEET preparation with chapter-wise, subject-wise, and full-length test series along with detailed study materials.",
            standards: ["Grade 11", "Grade 12", "Repeaters"],
            offerings: [
                { title: "Chapter-wise test series", description: "Regular tests to ensure thorough preparation for each topic." },
                { title: "Full-length mock tests", description: "Simulate real NEET exam scenarios to build confidence." },
                { title: "Study materials", description: "Well-structured notes for quick revision and learning." },
                { title: "Performance tracking", description: "Analytics to identify strengths and weaknesses." },
            ],
            subjects: ["Physics", "Chemistry", "Biology"],
            price: 1299,
            discountedPrice: 899,
        },
        jee: {
            title: "JEE Test Series",
            description: "Boost your JEE preparation with comprehensive test series and supporting study materials.",
            standards: ["Grade 11", "Grade 12", "Repeaters"],
            offerings: [
                { title: "Subject-wise and chapter-wise tests", description: "Focused assessments to strengthen your concepts." },
                { title: "Full-length mock tests", description: "Real exam simulation to improve your time management." },
                { title: "Study materials", description: "Effective notes for quick learning and revision." },
                { title: "Performance reports", description: "Track your progress and work on weak areas." },
            ],
            subjects: ["Physics", "Chemistry", "Mathematics"],
            price: 1299,
            discountedPrice: 899,
        },
        "mht-cet": {
            title: "MHT-CET Test Series",
            description: "Prepare effectively for MHT-CET with our structured test series and materials.",
            standards: ["Grade 11", "Grade 12", "Repeaters"],
            offerings: [
                { title: "Subject-wise tests", description: "Assess your understanding of each subject comprehensively." },
                { title: "Full mock tests", description: "Practice full-length papers for real exam experience." },
                { title: "Study materials", description: "Concise notes for focused learning." },
                { title: "Performance analysis", description: "Detailed reports to help you improve." },
            ],
            subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
            price: 1099,
            discountedPrice: 799,
        },
    },
};

const getData = (type, course) => {
    return data?.[type]?.[course] || {}
}

export default getData