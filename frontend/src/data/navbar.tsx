interface NavbarDataItem {
    link: string;
    titel: string;
  }

interface NavbarDataItemSidebar {
    link: string;
    titel: string;
    delay: number;
  }
  
export const navbarData: NavbarDataItem[] = [
  {link: "/", titel: "Home"},
  {link: "/work", titel: "Arbeit"},
  {link: "/blog", titel: "Blog"},
  {link: "/about", titel: "Über mich"},
  {link: "/contact", titel: "Kontakt"},
]

export const navbarDataSidebar: NavbarDataItemSidebar[] = [
    { link: "/", titel: "Home", delay: 0.5 },
    { link: "/work", titel: "Arbeit", delay: 0.6 },
    { link: "/blog", titel: "Blog", delay: 0.7 },
    { link: "/about", titel: "Über mich", delay: 0.8 },
    { link: "/contact", titel: "Kontakt", delay: 0.9 },
  ];