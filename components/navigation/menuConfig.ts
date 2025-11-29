export type MegaMenuItem = {
  label: string;
  description?: string;
  href: string;
};

export type MegaMenuColumn = {
  title: string;
  items: MegaMenuItem[];
};

export type MegaMenuGroup = {
  label: string;
  href?: string;
  badge?: string;
  columns: MegaMenuColumn[];
  highlight?: {
    title: string;
    description: string;
    href: string;
  };
};

export const megaMenuGroups: MegaMenuGroup[] = [
  {
    label: "About",
    href: "/about",
    columns: [
      {
        title: "Company",
        items: [
          { label: "Company profile", href: "/about#company" },
          { label: "Governance & board", href: "/about#governance" },
          { label: "Achievements & awards", href: "/about#achievements" },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "Corporate timeline", href: "/about#timeline" },
          { label: "News & updates", href: "/about#news" },
        ],
      },
    ],
  },
 {
  label: "Services",
  columns: [
    {
      title: "Core Business Services",
      items: [
        { label: "Trading", href: "/services#trading" },
        { label: "Import & Sourcing", href: "/services#import" },
        { label: "Export & Distribution", href: "/services#export" },
        { label: "Manufacturing & Production", href: "/services#manufacturing" },
      ],
    },
    {
      title: "Retail & Consumer Solutions",
      items: [
        { label: "Household Retail & Credit", href: "/services#retail" },
        { label: "Strategic Partnership Programs", href: "/services#partnerships" },
        { label: "After-Sales Support Services", href: "/services#support" },
        { label: "Strategic Partnership Programs", href: "/services#import" },
        { label: "After-Sales Support Services", href: "/services#manufacturing" },
      ],
    },
    {
      title: "Strategic Growth Services",
      items: [
        { label: "Mining Industry Solutions", href: "/services#export" },
        { label: "Vehicle Assembly Operations", href: "/services#manufacturing" },
        { label: "Joint Venture Partnerships", href: "/services#trading" },
      ],
    },
  ],
},
  {
  label: "Products",
  href: "/products", 
  columns: [
    {
      title: "Household Goods",
      items: [
        { label: "Home Appliances", href: "/products#household" },
        { label: "Furniture & Decor", href: "/products#household" },
        { label: "Kitchenware", href: "/products#household" },
      ],
    },
    {
      title: "Electronics & Tech",
      items: [
        { label: "Smartphones & Tablets", href: "/products#electronics" },
        { label: "Computers & Accessories", href: "/products#electronics" },
        { label: "Audio & Video Equipment", href: "/products#electronics" },
      ],
    },
    {
      title: "Automotive & Industrial",
      items: [
        { label: "Vehicle Parts & Accessories", href: "/products#automotive" },
        { label: "Machinery & Tools", href: "/products#automotive" },
        { label: "Building Materials", href: "/products#automotive" },
      ],
    },
  ],
},
  {
    label: "Working With",
    href: "/#working-with",
    columns: [],
  },
];

export const primaryLinks = [
  { label: "Contact", href: "/contact" },
];

