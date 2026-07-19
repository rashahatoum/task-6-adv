export interface ContentList {
    id: string;
    type: "ordered" | "unordered";
    items: string[];
    linkText?: string;
    url?: string;
}

export interface ContentLine {
    id: string;
    boldPrefix?: string;
    text?: string;
    sectionTitle?: string;
    linkText?: string;
    url?: string;
    lists?: ContentList[];
}

export interface BlogSection {
    id: string;
    sectionImage?: string;
    imageCaption?: string;
    paragraphs: ContentLine[];
}

export interface BlogCategory {
    name: string;
    color: string;
}

export interface BlogPost {
    id: string;
    title: string;
    description: string;
    author?: string;
    date: string;
    mainImage: string;
    categories: BlogCategory[];
    sections?: BlogSection[];
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "UX review presentations",
        description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        author: "Olivia Rhye",
        date: "1 Jan 2023",
        mainImage: "/assets/imgs/blog1.png",
        categories: [
            { name: "Design", color: "bg-purple-50 text-purple-700" },
            { name: "Research", color: "bg-indigo-50 text-indigo-700" },
            { name: "Presentation", color: "bg-pink-50 text-pink-700" }
        ],
    },
    {
        id: "2",
        title: "Migrating to Linear 101",
        description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
        author: "Phoenix Baker",
        date: "1 Jan 2023",
        mainImage: "/assets/imgs/blog2.png",
        categories: [
            { name: "Design", color: "bg-sky-50 text-sky-700" },
            { name: "Research", color: "bg-pink-50 text-pink-700" }
        ],
    },
    {
        id: "3",
        title: "Building your API Stack",
        description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
        author: "Lana Steiner",
        date: "1 Jan 2023",
        mainImage: "/assets/imgs/blog3.png",
        categories: [
            { name: "Design", color: "bg-emerald-50 text-emerald-700" },
            { name: "Research", color: "bg-pink-50 text-pink-700" }
        ],
    },
    {
        id: "4",
        title: "Grid system for better Design User Interface",
        description: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
        author: "Olivia Rhye",
        date: "1 Jan 2023",
        mainImage: "/assets/imgs/blog4.png",
        categories: [
            { name: "Design", color: "bg-purple-50 text-purple-700" },
            { name: "Interface", color: "bg-pink-50 text-pink-700" }
        ],
        sections: [
            {
                id: "sec-4-1",
                paragraphs: [
                    {
                        id: "p-1",
                        text: "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
                    }
                ],
                imageCaption: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."
            },
            {
                id: "sec-4-2",
                sectionImage: "/assets/imgs/blog4-1.png",
                imageCaption: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                paragraphs: [
                    {
                        id: "p-2-1",
                        text: "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid."
                    },
                    {
                        id: "p-2-2",
                        text: "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns."
                    },
                    {
                        id: "p-2-3",
                        text: "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
                    },
                    {
                        id: "p-2-4",
                        sectionTitle: "Breaking Down the Grid",
                    },
                    {
                        id: "p-2-5",
                        text: "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins."
                    },
                    {
                        id: "p-2-6",
                        boldPrefix: "Columns:",
                        text: " Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values."
                    },
                    {
                        id: "p-2-7",
                        boldPrefix: "Gutters:",
                        text: " The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints."
                    }
                ]
            },
            {
                id: "sec-4-3",
                sectionImage: "/assets/imgs/blog4-2.png",
                imageCaption: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                paragraphs: [
                    {
                        id: "p-3-1",
                        sectionTitle: "Examples of Grids in Use"
                    },
                    {
                        id: "p-3-2",
                        boldPrefix: "Example 1: Hierarchical Grid"
                    },
                    {
                        id: "p-3-3",
                        text: "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
                        linkText: "The New York Times",
                        url: "https://www.nytimes.com/"
                    },
                ]
            },
            {
                id: "sec-4-4",
                sectionImage: "/assets/imgs/blog4-3.png",
                imageCaption: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        id: "p-4-1",
                        boldPrefix: "Example 2: Column Grid"
                    },
                    {
                        id: "p-4-2",
                        text: "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
                        linkText: "Ritual.com",
                        url: "https://ritual.com/"
                    },
                ]
            },
            {
                id: "sec-4-5",
                sectionImage: "/assets/imgs/blog4-4.png",
                imageCaption: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        id: "p-5-1",
                        boldPrefix: "Example 3: Modular Grid"
                    },
                    {
                        id: "p-5-2",
                        text: "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
                        linkText: "Behance",
                        url: "https://www.behance.net/"
                    },
                ]
            },
            {
                id: "sec-4-6",
                sectionImage: "/assets/imgs/blog4-5.png",
                imageCaption: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        id: "p-6-1",
                        boldPrefix: "Example 4: Breaking the Grid"
                    },
                    {
                        id: "p-6-2",
                        text: "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
                        linkText: "Shrine from Google’s Material Studies",
                        url: "https://m2.material.io/design/material-studies/shrine.html#product-architecture"
                    },
                ]
            },
            {
                id: "sec-4-7",
                sectionImage: "/assets/imgs/blog4-6.png",
                imageCaption: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                paragraphs: [
                    {
                        id: "p-7-1",
                        boldPrefix: "Benefits of the Grid"
                    },
                    {
                        id: "p-7-2",
                        text: "Using a grid benefits both end users and the designers alike:",
                        lists: [
                            {
                                "id": "list-7-2-1",
                                "type": "unordered",
                                "items": [
                                    "Designers can quickly put together well-aligned interfaces.",
                                    "Users can easily scan predictable grid-based interfaces.",
                                    "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
                                ],
                                linkText: "responsive web design",
                                url: "https://www.nngroup.com/articles/responsive-web-design-definition/"
                            }
                        ]
                    },
                ]
            },
            {
                id: "sec-4-8",
                sectionImage: "/assets/imgs/blog4-7.png",
                imageCaption: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                paragraphs: [
                    {
                        id: "p-8-1",
                        boldPrefix: "Choosing and Setting Up Your Grid"
                    },
                    {
                        id: "p-8-2",
                        text: "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
                    },
                    {
                        id: "p-8-3",
                        boldPrefix: "Choose the right grid for your needs.",
                        text: " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs."
                    },
                    {
                        id: "p-8-4",
                        boldPrefix: "Spend time setting up your grid.",
                        text: " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing."
                    },
                ]
            },
            {
                id: "sec-4-9",
                sectionImage: "/assets/imgs/blog4-8.png",
                imageCaption: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                paragraphs: [
                    {
                        id: "p-9-1",
                        boldPrefix: "Always place content within columns, not gutters.",
                        text: " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements."
                    },
                ]
            },
            {
                id: "sec-4-10",
                sectionImage: "/assets/imgs/blog4-9.png",
                imageCaption: "Content or elements should be placed within and across columns, not gutters.",
                paragraphs: [
                    {
                        id: "p-10-1",
                        boldPrefix: "Consider using an 8px grid system.",
                        text: " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid."
                    },
                    {
                        id: "p-10-2",
                        sectionTitle: "Conclusion",
                        text: "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."
                    },
                ]
            },
        ]
    },
    {
        id: "5",
        title: "Bill Walsh leadership lessons",
        description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        date: "1 Jan 2023",
        author: "Alec Whitten",
        mainImage: "/assets/imgs/blog5.png",
        categories: [
            { name: "Leadership", color: "bg-purple-50 text-purple-700" },
            { name: "Management", color: "bg-slate-50 text-slate-700" }
        ],
    },
    {
        id: "6",
        title: "PM mental models",
        description: "Mental models are simple expressions of complex processes or relationships.",
        date: "1 Jan 2023",
        author: "Demi WIlkinson",
        mainImage: "/assets/imgs/blog6.png",
        categories: [
            { name: "Product", color: "bg-sky-50 text-sky-700" },
            { name: "Research", color: "bg-indigo-50 text-indigo-700" },
            { name: "Frameworks", color: "bg-orange-50 text-orange-700" }
        ],
    },
    {
        id: "7",
        title: "What is Wireframing?",
        description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        date: "1 Jan 2023",
        author: "Candice Wu",
        mainImage: "/assets/imgs/blog7.png",
        categories: [
            { name: "Design", color: "bg-purple-50 text-purple-700" },
            { name: "Research", color: "bg-indigo-50 text-indigo-700" },
        ],
    },
    {
        id: "8",
        title: "How collaboration makes us better designers",
        description: "Collaboration can make our teams stronger, and our individual designs better.",
        date: "1 Jan 2023",
        author: "Natali Craig",
        mainImage: "/assets/imgs/blog8.png",
        categories: [
            { name: "Design", color: "bg-purple-50 text-purple-700" },
            { name: "Research", color: "bg-indigo-50 text-indigo-700" },
        ],
    },
    {
        id: "9",
        title: "Our top 10 Javascript frameworks to use",
        description: "JavaScript frameworks make development easy with extensive features and functionalities.",
        date: "1 Jan 2023",
        author: "Drew Cano",
        mainImage: "/assets/imgs/blog9.png",
        categories: [
            { name: "Software Development", color: "bg-emerald-50 text-emerald-700" },
            { name: "Tools", color: "bg-pink-50 text-pink-700" },
            { name: "SaaS", color: "bg-rose-50 text-rose-700" },
        ],
    },
    {
        id: "10",
        title: "Podcast: Creating a better CX Community",
        description: "Starting a community doesn’t need to be complicated, but how do you get started?",
        date: "1 Jan 2023",
        author: "Orlando Diggs",
        mainImage: "/assets/imgs/blog10.png",
        categories: [
            { name: "Podcasts", color: "bg-purple-50 text-purple-700" },
            { name: "Customer Success", color: "bg-slate-50 text-slate-700" },
        ],
    },
    {
        id: "11",
        title: "UX review presentations",
        description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        author: "Olivia Rhye",
        date: "1 Jan 2023",
        mainImage: "/assets/imgs/blog1.png",
        categories: [
            { name: "Design", color: "bg-purple-50 text-purple-700" },
            { name: "Research", color: "bg-indigo-50 text-indigo-700" },
            { name: "Presentation", color: "bg-pink-50 text-pink-700" }
        ],
    },
    {
        id: "12",
        title: "Migrating to Linear 101",
        description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
        author: "Phoenix Baker",
        date: "1 Jan 2023",
        mainImage: "/assets/imgs/blog2.png",
        categories: [
            { name: "Design", color: "bg-sky-50 text-sky-700" },
            { name: "Research", color: "bg-pink-50 text-pink-700" }
        ],
    },
    {
        id: "13",
        title: "Building your API Stack",
        description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
        author: "Lana Steiner",
        date: "1 Jan 2023",
        mainImage: "/assets/imgs/blog3.png",
        categories: [
            { name: "Design", color: "bg-emerald-50 text-emerald-700" },
            { name: "Research", color: "bg-pink-50 text-pink-700" }
        ],
    },
    {
        id: "14",
        title: "Bill Walsh leadership lessons",
        description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        date: "1 Jan 2023",
        author: "Alec Whitten",
        mainImage: "/assets/imgs/blog5.png",
        categories: [
            { name: "Leadership", color: "bg-purple-50 text-purple-700" },
            { name: "Management", color: "bg-slate-50 text-slate-700" }
        ],
    },
    {
        id: "15",
        title: "PM mental models",
        description: "Mental models are simple expressions of complex processes or relationships.",
        date: "1 Jan 2023",
        author: "Demi WIlkinson",
        mainImage: "/assets/imgs/blog6.png",
        categories: [
            { name: "Product", color: "bg-sky-50 text-sky-700" },
            { name: "Research", color: "bg-indigo-50 text-indigo-700" },
            { name: "Frameworks", color: "bg-orange-50 text-orange-700" }
        ],
    },
    {
        id: "16",
        title: "What is Wireframing?",
        description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        date: "1 Jan 2023",
        author: "Candice Wu",
        mainImage: "/assets/imgs/blog7.png",
        categories: [
            { name: "Design", color: "bg-purple-50 text-purple-700" },
            { name: "Research", color: "bg-indigo-50 text-indigo-700" },
        ],
    },
    {
        id: "17",
        title: "How collaboration makes us better designers",
        description: "Collaboration can make our teams stronger, and our individual designs better.",
        date: "1 Jan 2023",
        author: "Natali Craig",
        mainImage: "/assets/imgs/blog8.png",
        categories: [
            { name: "Design", color: "bg-purple-50 text-purple-700" },
            { name: "Research", color: "bg-indigo-50 text-indigo-700" },
        ],
    },
    {
        id: "18",
        title: "Our top 10 Javascript frameworks to use",
        description: "JavaScript frameworks make development easy with extensive features and functionalities.",
        date: "1 Jan 2023",
        author: "Drew Cano",
        mainImage: "/assets/imgs/blog9.png",
        categories: [
            { name: "Software Development", color: "bg-emerald-50 text-emerald-700" },
            { name: "Tools", color: "bg-pink-50 text-pink-700" },
            { name: "SaaS", color: "bg-rose-50 text-rose-700" },
        ],
    },
    {
        id: "19",
        title: "Podcast: Creating a better CX Community",
        description: "Starting a community doesn’t need to be complicated, but how do you get started?",
        date: "1 Jan 2023",
        author: "Orlando Diggs",
        mainImage: "/assets/imgs/blog10.png",
        categories: [
            { name: "Podcasts", color: "bg-purple-50 text-purple-700" },
            { name: "Customer Success", color: "bg-slate-50 text-slate-700" },
        ],
    },
    {
        id: "20",
        title: "Grid system for better Design User Interface",
        description: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points",
        author: "Olivia Rhye",
        date: "1 Jan 2023",
        mainImage: "/assets/imgs/blog4-1.png",
        categories: [
            { name: "Design", color: "bg-purple-50 text-purple-700" },
            { name: "Interface", color: "bg-pink-50 text-pink-700" }
        ],
    }

];