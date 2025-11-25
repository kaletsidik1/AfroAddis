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
          { label: "Company profile", href: "#about" },
          { label: "Governance & board", href: "/governance" },
          { label: "Achievements & awards", href: "/achievements" },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "Corporate timeline", href: "/about#timeline" },
          { label: "News & updates", href: "/resources#news" },
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
        { label: "Trading", href: "/trading" },
        { label: "Import & Sourcing", href: "/import" },
        { label: "Export & Distribution", href: "/export" },
        { label: "Manufacturing & Production", href: "/manufacturing" },
      ],
    },
    {
      title: "Retail & Consumer Solutions",
      items: [
        { label: "Household Retail & Credit", href: "/retail" },
        { label: "Strategic Partnership Programs", href: "/partners" },
        { label: "After-Sales Support Services", href: "/service" },
      ],
    },
    {
      title: "Strategic Growth Services",
      items: [
        { label: "Mining Industry Solutions", href: "/mining" },
        { label: "Vehicle Assembly Operations", href: "/assembly" },
        { label: "Joint Venture Partnerships", href: "/partnerships" },
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
        { label: "Home Appliances", href: "/products#appliances" },
        { label: "Furniture & Decor", href: "/products#furniture" },
        { label: "Kitchenware", href: "/products#kitchen" },
      ],
    },
    {
      title: "Electronics & Tech",
      items: [
        { label: "Smartphones & Tablets", href: "/products#mobile" },
        { label: "Computers & Accessories", href: "/products#computers" },
        { label: "Audio & Video Equipment", href: "/products#av" },
      ],
    },
    {
      title: "Automotive & Industrial",
      items: [
        { label: "Vehicle Parts & Accessories", href: "/products#automotive" },
        { label: "Machinery & Tools", href: "/products#machinery" },
        { label: "Building Materials", href: "/products#construction" },
      ],
    },
  ],
},
  {
    label: "Partners & Resources",
    href: "/partners",
    columns: [],
  },
];

export const primaryLinks = [
  { label: "Contact", href: "/contact" },
];

