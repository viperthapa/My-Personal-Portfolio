export type ToolCategory = "Developer" | "Calculators" | "Nepal";

export type ToolDefinition = {
  slug: string;
  name: string;
  category: ToolCategory;
  description: string;
  keywords: string[];
  badge?: string;
};

export const tools: ToolDefinition[] = [
  // Developer — 6
  {
    slug: "json-viewer",
    name: "JSON Viewer & Formatter",
    category: "Developer",
    description: "Validate, prettify, minify and inspect JSON instantly in your browser.",
    keywords: ["json", "formatter", "validator", "viewer"],
    badge: "Popular",
  },
  {
    slug: "diff-checker",
    name: "Diff Checker",
    category: "Developer",
    description: "Compare two blocks of text and see additions, removals and changed lines.",
    keywords: ["diff", "compare", "text", "code"],
  },
  {
    slug: "readme-builder",
    name: "GitHub README Builder",
    category: "Developer",
    description: "Generate a clean README.md from a guided project form with live Markdown output.",
    keywords: ["github", "readme", "markdown", "builder"],
    badge: "Featured",
  },
  {
    slug: "base64",
    name: "Base64 Encoder / Decoder",
    category: "Developer",
    description: "Encode plain text to Base64 or decode Base64 back to readable text.",
    keywords: ["base64", "encode", "decode"],
  },
  {
    slug: "url-encoder",
    name: "URL Encoder / Decoder",
    category: "Developer",
    description: "Safely encode or decode URL components without sending data to a server.",
    keywords: ["url", "encode", "decode", "uri"],
  },
  {
    slug: "uuid-generator",
    name: "UUID Generator",
    category: "Developer",
    description: "Generate one or multiple browser-native UUID v4 identifiers with one click.",
    keywords: ["uuid", "guid", "identifier", "generator"],
  },

  // Calculators — 3
  {
    slug: "emi-calculator",
    name: "EMI Calculator",
    category: "Calculators",
    description: "Estimate monthly EMI, total interest and total repayment for a reducing-balance loan.",
    keywords: ["emi", "loan", "interest", "finance"],
    badge: "Popular",
  },
  {
    slug: "percentage-calculator",
    name: "Percentage Calculator",
    category: "Calculators",
    description: "Calculate percentages, percentage change and reverse percentage values quickly.",
    keywords: ["percentage", "percent", "change"],
  },
  {
    slug: "age-calculator",
    name: "Age Calculator",
    category: "Calculators",
    description: "Calculate age in years, months and days from a date of birth.",
    keywords: ["age", "birthday", "date"],
  },

  // Nepal — 6
  {
    slug: "bs-ad-converter",
    name: "BS ↔ AD Date Converter",
    category: "Nepal",
    description: "Convert Bikram Sambat and Gregorian dates in one place with two-way date conversion.",
    keywords: ["bs", "ad", "bikram sambat", "nepali date", "converter"],
    badge: "Nepal",
  },
  {
    slug: "nepali-today",
    name: "Today's Nepali Date",
    category: "Nepal",
    description: "See today’s date in both Gregorian AD and Bikram Sambat formats.",
    keywords: ["today", "nepali date", "bs date"],
  },
  {
    slug: "bs-date-difference",
    name: "BS Date Difference",
    category: "Nepal",
    description: "Compare two Bikram Sambat dates and calculate the total days between them.",
    keywords: ["bs", "difference", "days", "nepali date"],
  },
  {
    slug: "nepali-age",
    name: "Nepali Age Calculator",
    category: "Nepal",
    description: "Enter a BS birth date and calculate age after conversion to its Gregorian date.",
    keywords: ["age", "bs", "birthday", "nepal"],
  },
  {
    slug: "nepali-calendar",
    name: "Nepali Calendar Viewer",
    category: "Nepal",
    description: "View a simple monthly Bikram Sambat calendar generated from verified BS↔AD conversion data.",
    keywords: ["calendar", "bs", "nepali month"],
  },
];

export const toolCategories: ToolCategory[] = ["Developer", "Calculators", "Nepal"];

export function getTool(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}
