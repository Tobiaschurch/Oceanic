export const NavbarData = [
    {
        id: "1",
        display: "Home",
        path: "/",
        isSection: false,
    },
    {
        id: "2",
        display: "About Us",
        path: "/about-us",
        subMenu: [
            { display: "Our Team", path: "/about-us/team" },
            { display: "Our Story", path: "/about-us/story" },
            { display: "Careers", path: "/about-us/careers" },
        ],
    },
    {
        id: "3",
        display: "Plans",
        path: "/plans",
        subMenu: [
            { display: "Pricing", path: "/plans/pricing" },
            { display: "Features", path: "/plans/features" },
            { display: "FAQs", path: "/plans/faqs" },
        ],
    },
    {
        id: "5",
        display: "Contact Us",
        path: "/contact-us",
    },
    // {
    //     id: "4",
    //     display: "Gallery",
    //     path: "/gallery",
    // },
]