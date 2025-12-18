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
          { label: "Company profile", href: "/about/company#company" },
          { label: "Governance & board", href: "/about/company#governance" },
          {
            label: "Achievements & awards",
            href: "/about/company#achievements",
          },
          { label: "Resources", href: "/about/company#resources" },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "Corporate timeline", href: "/about/resources#timeline" },
          { label: "News & updates", href: "/about/resources#news" },
          { label: "Resources", href: "/about/resources#resources" },
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
          { label: "Trading", href: "/services/core#trading" },
          { label: "Import & Sourcing", href: "/services/core#import" },
          { label: "Export & Distribution", href: "/services/core#export" },
          {
            label: "Manufacturing & Production",
            href: "/services/core#manufacturing",
          },
        ],
      },
      {
        title: "Retail & Consumer Solutions",
        items: [
          {
            label: "Household Retail & Credit",
            href: "/services/retail#retail",
          },
          {
            label: "Strategic Partnership Programs",
            href: "/services/retail#partnerships",
          },
          {
            label: "After-Sales Support Services",
            href: "/services/retail#support",
          },
        ],
      },
      {
        title: "Strategic Growth Services",
        items: [
          {
            label: "Mining Industry Solutions",
            href: "/services/growth#mining",
          },
          {
            label: "Vehicle Assembly Operations",
            href: "/services/growth#assembly",
          },
          {
            label: "Joint Venture Partnerships",
            href: "/services/growth#joint-venture",
          },
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
          {
            label: "Home Appliances",
            href: "/products/household#home-appliances",
          },
          {
            label: "Furniture & Decor",
            href: "/products/household#furniture-decor",
          },
          { label: "Kitchenware", href: "/products/household#kitchenware" },
        ],
      },
      {
        title: "Electronics & Tech",
        items: [
          {
            label: "Smartphones & Tablets",
            href: "/products/electronics#smartphones-tablets",
          },
          {
            label: "Computers & Accessories",
            href: "/products/electronics#computers-accessories",
          },
          {
            label: "Audio & Video Equipment",
            href: "/products/electronics#audio-video",
          },
        ],
      },
      {
        title: "Automotive & Industrial",
        items: [
          {
            label: "Vehicle Parts & Accessories",
            href: "/products/automotive#vehicle-parts",
          },
          {
            label: "Machinery & Tools",
            href: "/products/automotive#machinery-tools",
          },
          {
            label: "Building Materials",
            href: "/products/automotive#building-materials",
          },
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
  { label: "Magazines", href: "/magazines" },
  { label: "Contact", href: "/contact" },
];
