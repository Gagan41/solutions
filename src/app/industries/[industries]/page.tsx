import { notFound } from "next/navigation";
import { Metadata } from "next";
import IndustryLandingPage from "@/components/IndustryLandingPage";

interface IndustryData {
  name: string;
  title: string;
  description: string;
  hero: {
    headline: string;
    subheadline: string;
    painPoints: string[];
  };
  services: {
    title: string;
    description: string;
    benefits: string[];
  }[];
  caseStudy: {
    client: string;
    challenge: string;
    solution: string;
    results: string[];
  };
  testimonial: {
    text: string;
    author: string;
    position: string;
    company: string;
  };
}

const industryData: Record<string, IndustryData> = {
  healthcare: {
    name: "Healthcare",
    title: "Digital Marketing for Healthcare Providers",
    description:
      "Specialized digital marketing solutions for hospitals, clinics, and healthcare practices to attract more patients and build trust.",
    hero: {
      headline:
        "Grow Your Healthcare Practice with Compliant Digital Marketing",
      subheadline:
        "HIPAA-compliant strategies that attract more patients while building trust and authority in your community.",
      painPoints: [
        "Struggling to attract new patients online?",
        "Concerned about HIPAA compliance in marketing?",
        "Competing with larger healthcare systems?",
      ],
    },
    services: [
      {
        title: "Medical SEO",
        description:
          "Rank higher for medical conditions and treatments in your area",
        benefits: [
          "Local search optimization",
          "Medical content creation",
          "Google My Business management",
        ],
      },
      {
        title: "Healthcare Web Design",
        description:
          "Professional, mobile-friendly websites that convert visitors to patients",
        benefits: [
          "HIPAA-compliant design",
          "Online appointment booking",
          "Patient portal integration",
        ],
      },
      {
        title: "Medical Content Marketing",
        description:
          "Educational content that builds trust and demonstrates expertise",
        benefits: [
          "Health blog articles",
          "Video testimonials",
          "Social media management",
        ],
      },
    ],
    caseStudy: {
      client: "Regional Medical Center",
      challenge:
        "Low online visibility and difficulty attracting patients for specialized services",
      solution:
        "Comprehensive SEO strategy, content marketing, and local search optimization",
      results: [
        "+180% increase in organic traffic",
        "+65% more appointment bookings",
        "#1 ranking for 15+ medical keywords",
      ],
    },
    testimonial: {
      text: "Courtinex helped us double our patient inquiries while ensuring all our marketing stayed HIPAA compliant. Their understanding of healthcare marketing is exceptional.",
      author: "Dr. Sarah Mitchell",
      position: "Chief Medical Officer",
      company: "Regional Medical Center",
    },
  },
  ecommerce: {
    name: "E-commerce",
    title: "E-commerce Digital Marketing Solutions",
    description:
      "Comprehensive digital marketing strategies for online stores to increase sales, reduce cart abandonment, and maximize customer lifetime value.",
    hero: {
      headline: "Scale Your E-commerce Business with Data-Driven Marketing",
      subheadline:
        "Proven strategies to increase conversions, reduce cart abandonment, and maximize your customer lifetime value.",
      painPoints: [
        "High cart abandonment rates killing your profits?",
        "Struggling to compete with Amazon and big retailers?",
        "Low customer lifetime value and repeat purchases?",
      ],
    },
    services: [
      {
        title: "E-commerce SEO",
        description:
          "Product and category page optimization to rank higher in search results",
        benefits: [
          "Product schema markup",
          "Category page optimization",
          "Technical SEO audits",
        ],
      },
      {
        title: "Conversion Rate Optimization",
        description:
          "Optimize your store to convert more visitors into paying customers",
        benefits: [
          "A/B testing",
          "Checkout optimization",
          "Product page improvements",
        ],
      },
      {
        title: "Email Marketing Automation",
        description:
          "Automated email sequences to recover abandoned carts and increase repeat purchases",
        benefits: [
          "Cart abandonment emails",
          "Post-purchase sequences",
          "Customer segmentation",
        ],
      },
    ],
    caseStudy: {
      client: "EcoHome Products",
      challenge: "78% cart abandonment rate and low customer retention",
      solution:
        "Conversion optimization, email automation, and retargeting campaigns",
      results: [
        "-42% cart abandonment",
        "+182% customer lifetime value",
        "+460% email revenue",
      ],
    },
    testimonial: {
      text: "Our online sales tripled in 6 months. The email automation alone pays for their entire service. Courtinex truly understands e-commerce.",
      author: "Jennifer Walsh",
      position: "Marketing Director",
      company: "EcoHome Products",
    },
  },
  restaurants: {
    name: "Restaurants",
    title: "Restaurant Digital Marketing Services",
    description:
      "Local marketing solutions for restaurants to increase foot traffic, online orders, and customer loyalty.",
    hero: {
      headline: "Fill Your Restaurant with Hungry Customers Every Night",
      subheadline:
        "Local marketing strategies that increase reservations, boost online orders, and build a loyal customer base.",
      painPoints: [
        "Empty tables during slow periods?",
        "Competing with delivery apps taking huge commissions?",
        "Struggling to build customer loyalty?",
      ],
    },
    services: [
      {
        title: "Local Restaurant SEO",
        description:
          "Dominate local search results when people look for restaurants in your area",
        benefits: [
          "Google My Business optimization",
          "Local keyword targeting",
          "Review management",
        ],
      },
      {
        title: "Social Media Marketing",
        description: "Showcase your food and atmosphere to attract more diners",
        benefits: [
          "Food photography",
          "Instagram marketing",
          "Facebook advertising",
        ],
      },
      {
        title: "Online Ordering Integration",
        description:
          "Direct online ordering system to avoid third-party commissions",
        benefits: [
          "Custom ordering website",
          "Mobile optimization",
          "Payment processing",
        ],
      },
    ],
    caseStudy: {
      client: "Urban Eats Restaurant Group",
      challenge:
        "Inconsistent online presence across multiple locations and low local visibility",
      solution:
        "Local SEO optimization, Google My Business management, and social media strategy",
      results: [
        "+200% online orders",
        "Top 3 local search rankings",
        "4.7-star average rating",
      ],
    },
    testimonial: {
      text: "Our online orders tripled and we're now the top-rated restaurant group in our area. The ROI has been incredible.",
      author: "Marcus Rodriguez",
      position: "Owner",
      company: "Urban Eats Restaurant Group",
    },
  },
};

interface Props {
  params: {
    industry: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = industryData[params.industry];

  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }

  return {
    title: `${industry.title} | Courtinex Webstudio`,
    description: industry.description,
    keywords: `${industry.name.toLowerCase()} digital marketing, ${industry.name.toLowerCase()} web design, ${industry.name.toLowerCase()} SEO`,
  };
}

export default function IndustryPage({ params }: Props) {
  const industry = industryData[params.industry];

  if (!industry) {
    notFound();
  }

  return <IndustryLandingPage industry={industry} />;
}

export async function generateStaticParams() {
  return Object.keys(industryData).map((industry) => ({
    industry,
  }));
}
