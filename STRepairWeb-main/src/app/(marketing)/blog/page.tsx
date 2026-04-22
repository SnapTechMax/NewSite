import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Container, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "IT tips, tech news, and business technology insights from Snap Tech Repair. Stay informed about cybersecurity, productivity tools, and more.",
};

// Placeholder blog posts for demo
const blogPosts = [
  {
    slug: "5-signs-your-business-needs-managed-it",
    title: "5 Signs Your Small Business Needs Managed IT Services",
    excerpt:
      "Still handling IT yourself? Here are five signs it's time to bring in the professionals and focus on what you do best.",
    category: "Managed IT",
    date: "January 15, 2024",
    readTime: "5 min read",
  },
  {
    slug: "protect-business-from-ransomware",
    title: "How to Protect Your Business from Ransomware in 2024",
    excerpt:
      "Ransomware attacks are on the rise. Learn the essential steps to protect your business data and what to do if you're targeted.",
    category: "Security",
    date: "January 8, 2024",
    readTime: "7 min read",
  },
  {
    slug: "when-to-repair-vs-replace-computer",
    title: "When to Repair vs. Replace Your Business Computer",
    excerpt:
      "Is it worth fixing that aging workstation, or is it time for an upgrade? Here's how to make the right decision for your business.",
    category: "Device Repair",
    date: "December 28, 2023",
    readTime: "4 min read",
  },
  {
    slug: "small-business-backup-strategy",
    title: "The Ultimate Backup Strategy for Small Businesses",
    excerpt:
      "Don't wait for disaster to strike. Learn how to implement a reliable backup strategy that protects your business data.",
    category: "Data Protection",
    date: "December 15, 2023",
    readTime: "6 min read",
  },
  {
    slug: "choosing-right-it-support-provider",
    title: "How to Choose the Right IT Support Provider for Your Business",
    excerpt:
      "Not all IT companies are created equal. Here's what to look for when selecting a technology partner for your business.",
    category: "Business Tips",
    date: "December 5, 2023",
    readTime: "5 min read",
  },
  {
    slug: "cybersecurity-training-employees",
    title: "Why Cybersecurity Training for Employees Matters",
    excerpt:
      "Your team is your first line of defense against cyber threats. Learn why training is essential and how to get started.",
    category: "Security",
    date: "November 20, 2023",
    readTime: "4 min read",
  },
];

const categories = [
  "All",
  "Managed IT",
  "Security",
  "Device Repair",
  "Data Protection",
  "Business Tips",
];

export default function BlogPage() {
  return (
    <>
      <Hero
        variant="page"
        subtitle="Snap Tech Blog"
        title="IT Tips & Insights"
        description="Practical technology advice for small businesses. Stay informed about cybersecurity, productivity, and making the most of your IT investments."
      />

      <section className="py-16 lg:py-24">
        <Container>
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} hover className="flex flex-col">
                {/* Placeholder Image */}
                <div className="h-48 bg-gray-100 rounded-t-xl flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-primary/30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow" />
                <CardFooter className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Button variant="ghost" size="sm" href={`/blog/${post.slug}`}>
                    Read More →
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay in the Loop
            </h2>
            <p className="text-gray-600 mb-8">
              Get monthly IT tips and insights delivered to your inbox. No spam,
              just practical advice for your business.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to receive marketing emails. Unsubscribe
              anytime.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="Have IT Questions?"
        description="Our team is ready to help with your technology challenges."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        variant="dark"
      />
    </>
  );
}
