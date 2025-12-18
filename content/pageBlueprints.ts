export type PageBlueprint = {
  title: string;
  kicker: string;
  description: string;
  stats?: { label: string; value: string }[];
  sections: {
    id?: string;
    title: string;
    description: string;
    items: { title: string; body: string }[];
  }[];
};

export const pageBlueprints: Record<string, PageBlueprint> = {
  about: {
    title: "About Afro Addis Group",
    kicker: "Company profile",
    description:
      "A diversified Ethiopian group scaling trading, manufacturing, import, and export services with governance structures designed for long-term partnerships.",
    stats: [
      { label: "Years operating", value: "10+" },
      { label: "Employees", value: "400+" },
      { label: "Divisions", value: "5" },
    ],
    sections: [
      {
        id: "company",
        title: "Company profile",
        description: "Who we are, what we do, and where we operate.",
        items: [
          {
            title: "Registered in Ethiopia",
            body: "KYT Trading PLC (AFROADDIS) established in 2015, headquartered in Addis Ababa.",
          },
          {
            title: "Multi-division group",
            body: "Trading, export, import & retail, manufacturing, and new ventures like mining and assembly.",
          },
          {
            title: "Markets served",
            body: "Domestic retail/wholesale plus global buyers across Africa, EU, Middle East, and North America.",
          },
        ],
      },
      {
        id: "governance",
        title: "Governance & board",
        description:
          "Oversight to keep the group compliant, transparent, and partner-ready.",
        items: [
          {
            title: "Board & advisors",
            body: "Strategic oversight on capital allocation, growth bets, and risk.",
          },
          {
            title: "Audit & risk",
            body: "Policies for procurement, FX, logistics, and operational controls with periodic audits.",
          },
          {
            title: "Compliance",
            body: "Aligned to Ethiopian regulations and international trade standards; SOPs for QC and documentation.",
          },
        ],
      },
      {
        id: "achievements",
        title: "Achievements & awards",
        description:
          "Recognition that validates our operational discipline and partner confidence.",
        items: [
          {
            title: "Best Taxpayer Award",
            body: "Recognized for transparent reporting and compliant trade operations.",
          },
          {
            title: "Chamber membership",
            body: "Active member of Addis Ababa Chamber of Commerce and sector associations.",
          },
          {
            title: "Bank partnerships",
            body: "Structured trade finance with leading Ethiopian banks.",
          },
        ],
      },
      {
        id: "timeline",
        title: "Corporate timeline",
        description: "Key milestones since founding.",
        items: [
          {
            title: "2015",
            body: "Founded KYT Trading PLC (AFROADDIS) with a focus on import and trading.",
          },
          {
            title: "2018-2020",
            body: "Expanded into export of coffee, sesame, and pulses; secured ECX seat.",
          },
          {
            title: "2021-2024",
            body: "Launched manufacturing lines, strengthened retail credit programs, and initiated mining/assembly pilots.",
          },
        ],
      },
      {
        id: "news",
        title: "News & updates",
        description: "Recent highlights from the group.",
        items: [
          {
            title: "New coffee processing line",
            body: "Commissioned additional wet mills to expand specialty capacity.",
          },
          {
            title: "Retail footprint",
            body: "Added partner showrooms in Addis Ababa and regional hubs.",
          },
          {
            title: "Sustainability brief",
            body: "Rolling out traceability and farmer support programs in coffee origins.",
          },
        ],
      },
      {
        id: "resources",
        title: "Resources",
        description: "Useful downloads and reference material.",
        items: [
          {
            title: "Corporate profile PDF",
            body: "One-pager overview for partners and investors.",
          },
          {
            title: "Division brochures",
            body: "Import/export catalogs, manufacturing capabilities, and service menus.",
          },
          {
            title: "Compliance kit",
            body: "Licenses, registrations, and certificates available on request.",
          },
        ],
      },
    ],
  },
  governance: {
    title: "Governance & Advisory Board",
    kicker: "Corporate structure",
    description:
      "Formal governance ensures Afro Addis meets international standards, manages risk, and delivers for stakeholders.",
    stats: [
      { label: "Advisors", value: "7" },
      { label: "Risk committees", value: "3" },
      { label: "Annual audits", value: "100%" },
    ],
    sections: [
      {
        id: "structure",
        title: "Governance layers",
        description:
          "Oversight designed for regulated industries and cross-border trade.",
        items: [
          {
            title: "Board of directors",
            body: "Sets strategy, approves budgets, and oversees performance.",
          },
          {
            title: "Advisory council",
            body: "Industry experts guiding expansion, compliance, and partnerships.",
          },
          {
            title: "Audit & risk",
            body: "Ensures financial transparency and operational resilience.",
          },
        ],
      },
      {
        id: "compliance",
        title: "Compliance playbook",
        description:
          "Aligned with Ethiopian regulations and international trade standards.",
        items: [
          {
            title: "Policy framework",
            body: "Documented SOPs for procurement, quality control, and ESG.",
          },
          {
            title: "Training",
            body: "Quarterly training cycles for leadership and frontline teams.",
          },
          {
            title: "Reporting",
            body: "Structured reporting back to shareholders and government bodies.",
          },
        ],
      },
    ],
  },
  achievements: {
    title: "Achievements & Certifications",
    kicker: "Recognition",
    description:
      "Afro Addis pairs operational excellence with national recognition, keeping pace with regulatory programs.",
    stats: [
      { label: "Customs rating", value: "Level II" },
      { label: "Awards", value: "3 national" },
      { label: "AEO status", value: "In progress" },
    ],
    sections: [
      {
        id: "milestones",
        title: "Major achievements",
        description:
          "Milestones that strengthen Afro Addis’ authority with partners and regulators.",
        items: [
          {
            title: "Best Taxpayer Award",
            body: "Recognized for transparency and compliance with ERCA.",
          },
          {
            title: "Chamber of Commerce member",
            body: "Active participant in trade and advocacy programs.",
          },
          {
            title: "Bank partnerships",
            body: "Structured trade finance with leading financial institutions.",
          },
        ],
      },
      {
        id: "certifications",
        title: "Certifications & programs",
        description:
          "Ongoing work to maintain high standing in customs and export ecosystems.",
        items: [
          {
            title: "Customs Level II",
            body: "Demonstrates risk-managed supply chain operations.",
          },
          {
            title: "AEO Accreditation",
            body: "Authorized Economic Operator status underway with customs.",
          },
          {
            title: "ISO roadmap",
            body: "Roadmap for quality and environmental certifications.",
          },
        ],
      },
    ],
  },
  import: {
    title: "Import Division",
    kicker: "Divisions",
    description:
      "A portfolio of international brands spanning appliances, electronics, and premium household goods for Ethiopia.",
    stats: [
      { label: "Brands", value: "25+" },
      { label: "Retailers served", value: "1,200+" },
      { label: "Warehouses", value: "4" },
    ],
    sections: [
      {
        id: "categories",
        title: "Product categories",
        description:
          "Balanced assortment to serve modern Ethiopian households and institutions.",
        items: [
          {
            title: "Electronics",
            body: "TVs, audio systems, smart devices from global brands.",
          },
          {
            title: "Appliances",
            body: "Refrigeration, laundry, cooking, and small domestic appliances.",
          },
          {
            title: "Commercial",
            body: "Hospitality-grade equipment and industrial kitchen solutions.",
          },
        ],
      },
      {
        id: "go-to-market",
        title: "Go-to-market",
        description:
          "Distribution strategies supporting rapid nationwide rollout.",
        items: [
          {
            title: "Retail network",
            body: "Partner stores across Addis Ababa and regional capitals.",
          },
          {
            title: "Credit programs",
            body: "Household financing to drive adoption and loyalty.",
          },
          {
            title: "After-sales",
            body: "Warranty servicing and spare parts distribution.",
          },
        ],
      },
    ],
  },
  export: {
    title: "Export Division",
    kicker: "Divisions",
    description:
      "Coffee, pulses, oilseeds, sesame, soya, and mung beans delivered through controlled supply chains.",
    stats: [
      { label: "Origins", value: "8 regions" },
      { label: "Processing sites", value: "6" },
      { label: "Global buyers", value: "40+" },
    ],
    sections: [
      {
        id: "commodities",
        title: "Commodities",
        description: "Export catalog backed by traceability and on-site QC.",
        items: [
          {
            title: "Coffee",
            body: "Natural, washed, honey, and wet-hulled profiles.",
          },
          {
            title: "Pulses & beans",
            body: "Chickpeas, mung beans, lentils, and soybeans.",
          },
          {
            title: "Oilseeds",
            body: "Humera sesame, Wollega sesame, and specialty seeds.",
          },
        ],
      },
      {
        id: "services",
        title: "Export services",
        description: "Full-stack support from sampling to documentation.",
        items: [
          {
            title: "Quality control",
            body: "Dedicated cupping labs and grading facilities.",
          },
          {
            title: "Logistics",
            body: "Multi-modal transportation with secure warehousing.",
          },
          {
            title: "Compliance",
            body: "Customs documentation, certifications, and insurance.",
          },
        ],
      },
    ],
  },
  manufacturing: {
    title: "Manufacturing Division",
    kicker: "Divisions",
    description:
      "Furniture and woodwork manufacturing serving residential, hospitality, and corporate projects across Ethiopia.",
    stats: [
      { label: "Factories", value: "2" },
      { label: "Sqm capacity", value: "12k+" },
      { label: "Annual projects", value: "150+" },
    ],
    sections: [
      {
        id: "products",
        title: "Product streams",
        description:
          "Custom and catalog products built for durability and aesthetics.",
        items: [
          {
            title: "Residential lines",
            body: "Living room, bedroom, and kitchen systems.",
          },
          {
            title: "Commercial",
            body: "Office fit-outs, hospitality furniture, and institutional seating.",
          },
          {
            title: "Custom woodwork",
            body: "Tailored paneling, cabinetry, and interior solutions.",
          },
        ],
      },
      {
        id: "edge",
        title: "Manufacturing edge",
        description: "Why partners choose Afro Addis’ manufacturing services.",
        items: [
          {
            title: "Material sourcing",
            body: "Premium local timber and imported finishes.",
          },
          {
            title: "Design lab",
            body: "In-house designers supporting architects and developers.",
          },
          {
            title: "Project management",
            body: "End-to-end execution with on-site installation.",
          },
        ],
      },
    ],
  },
  retail: {
    title: "Household Retail & Credit",
    kicker: "Divisions",
    description:
      "A consumer-focused channel distributing top brands with flexible credit and servicing options.",
    stats: [
      { label: "Retail partners", value: "250+" },
      { label: "Credit customers", value: "18k+" },
      { label: "Service hubs", value: "5" },
    ],
    sections: [
      {
        id: "programs",
        title: "Retail programs",
        description:
          "Capabilities built for modern trade, independent retailers, and B2B buyers.",
        items: [
          {
            title: "Brand showrooms",
            body: "Flagship retail concepts for anchor brands.",
          },
          {
            title: "Dealer network",
            body: "Training, merchandising, and performance incentives.",
          },
          {
            title: "Corporate procurement",
            body: "Solutions for developers, NGOs, and hospitality groups.",
          },
        ],
      },
      {
        id: "service",
        title: "Credit & service",
        description: "Financial inclusion and reliable support.",
        items: [
          {
            title: "Consumer finance",
            body: "Installment plans underwritten with partner banks.",
          },
          {
            title: "Warranty servicing",
            body: "Certified technicians and spare parts management.",
          },
          {
            title: "Customer success",
            body: "Call centers and on-site assistance teams.",
          },
        ],
      },
    ],
  },
  mining: {
    title: "Mining & Future Expansion",
    kicker: "Growth",
    description:
      "Investments into mining, agriculture estates, and vehicle assembly highlight Afro Addis’ next decade.",
    stats: [
      { label: "Pilot projects", value: "4" },
      { label: "Capital deployed", value: "$12M" },
      { label: "Partners", value: "10+" },
    ],
    sections: [
      {
        id: "initiatives",
        title: "Current initiatives",
        description: "Pipeline projects under feasibility or early execution.",
        items: [
          {
            title: "Mining concessions",
            body: "Precious metals and industrial mineral exploration.",
          },
          {
            title: "Agriculture estates",
            body: "Large-scale farming for export crops.",
          },
          {
            title: "Assembly lines",
            body: "Vehicle and equipment assembly concepts with OEM partners.",
          },
        ],
      },
      {
        id: "partnerships",
        title: "Partnership formats",
        description: "Collaboration models for investors and governments.",
        items: [
          {
            title: "Equity JV",
            body: "Joint ventures with technology and capital partners.",
          },
          {
            title: "Offtake agreements",
            body: "Long-term offtake for mined or farmed products.",
          },
          {
            title: "Public-private",
            body: "Structured PPPs with regional administrations.",
          },
        ],
      },
    ],
  },
  coffee: {
    title: "Coffee Export",
    kicker: "Export focus",
    description:
      "High-grown Ethiopian coffees from signature regions, processed and prepared for global specialty buyers.",
    stats: [
      { label: "Regions sourced", value: "7" },
      { label: "Processing styles", value: "4" },
      { label: "Lots annually", value: "300+" },
    ],
    sections: [
      {
        id: "origins",
        title: "Origins",
        description: "Traceable lots from storied Ethiopian coffee zones.",
        items: [
          {
            title: "Sidama & Yirgacheffe",
            body: "Floral, tea-like profiles with citrus notes.",
          },
          {
            title: "Guji & Gedeb",
            body: "Berry-forward naturals with complex sweetness.",
          },
          {
            title: "Jimma & Limu",
            body: "Balanced cups ideal for blends and espresso.",
          },
        ],
      },
      {
        id: "processing",
        title: "Processing & QC",
        description:
          "Multiple processing styles supported by lab-grade quality control.",
        items: [
          {
            title: "Natural & honey",
            body: "Sun-dried naturals and honey lots with fruit-forward clarity.",
          },
          {
            title: "Washed & wet-hulled",
            body: "Consistent washed preparations with clean cup scores.",
          },
          {
            title: "QC & cupping lab",
            body: "Sample roasting, grading, and green analysis for buyers.",
          },
        ],
      },
      {
        id: "buyer-services",
        title: "Buyer services",
        description:
          "Support for roasters, importers, and green coffee traders.",
        items: [
          {
            title: "Documentation & compliance",
            body: "Full export paperwork, IC certificates, and insurance.",
          },
          {
            title: "Logistics & shipping",
            body: "Container management, consolidation, and tracking.",
          },
          {
            title: "Origin visits",
            body: "Farm tours and relationship programs for strategic partners.",
          },
        ],
      },
    ],
  },
  partners: {
    title: "Strategic Partners",
    kicker: "Alliances",
    description:
      "A portfolio of international manufacturers, financiers, and logistics providers powering Afro Addis’ growth.",
    stats: [
      { label: "Electronics OEMs", value: "10+" },
      { label: "Furniture brands", value: "6" },
      { label: "Logistics partners", value: "8" },
    ],
    sections: [
      {
        id: "alliances",
        title: "Brand alliances",
        description: "Household names represented across Ethiopia.",
        items: [
          { title: "Appliances", body: "Samsung, LG, Hisense, Kumtel, Sony." },
          {
            title: "Furniture & materials",
            body: "Premium suppliers for interiors and fixtures.",
          },
          {
            title: "Industrial",
            body: "Machinery partners supporting factories and assembly lines.",
          },
        ],
      },
      {
        id: "enablement",
        title: "Enablement partners",
        description:
          "Beyond brands, Afro Addis collaborates with service providers.",
        items: [
          {
            title: "Finance",
            body: "Banks and credit institutions underwriting trade flows.",
          },
          {
            title: "Logistics",
            body: "Shipping lines, freight forwarders, and customs brokers.",
          },
          {
            title: "Government programs",
            body: "Agencies recognizing Afro Addis as strategic partner.",
          },
        ],
      },
    ],
  },
  resources: {
    title: "Resources & Downloads",
    kicker: "Knowledge base",
    description:
      "Stay updated with Afro Addis insights, sustainability initiatives, and downloadable documentation.",
    stats: [
      { label: "Case studies", value: "12" },
      { label: "Sustainability briefs", value: "6" },
      { label: "Spec sheets", value: "25" },
    ],
    sections: [
      {
        id: "news",
        title: "Latest coverage",
        description: "News, press releases, and project highlights.",
        items: [
          {
            title: "Press releases",
            body: "Announcements on new partnerships and milestones.",
          },
          {
            title: "Project features",
            body: "Deep dives into manufacturing and export wins.",
          },
          {
            title: "Leadership commentary",
            body: "Interviews, opinion pieces, and market outlooks.",
          },
        ],
      },
      {
        id: "downloads",
        title: "Download center",
        description: "Documentation for partners and buyers.",
        items: [
          {
            title: "Product sheets",
            body: "Coffee profiles, furniture catalogs, import brochures.",
          },
          {
            title: "Certifications",
            body: "Trade licenses, compliance letters, quality certificates.",
          },
          { title: "ESG reports", body: "Sustainability and CSR summaries." },
        ],
      },
    ],
  },
};
