"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardFour from '@/components/sections/metrics/MetricCardFour';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Zap, Sparkles, BarChart3, Radio, Users, Calendar, ShoppingCart, Crown, Gift, Star, TrendingUp, Trophy, Globe, MessageCircle, Handshake, Flag, Twitter, Instagram, Youtube, Facebook, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="small"
      sizing="large"
      background="none"
      cardStyle="layered-gradient"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Teams", id: "teams" },
            { name: "Features", id: "features" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="F1 Teams Hub"
          button={{
            text: "View All Teams",
            href: "teams"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="F1 Teams Universe"
          description="Discover comprehensive information about every Formula 1 team, their history, drivers, and performance with interactive features and real-time updates"
          tag="Ultimate F1 Hub"
          tagIcon={Zap}
          buttons={[
            { text: "Explore Teams", href: "teams" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763641728566-ei44125f.jpg"
          imageAlt="Formula 1 racing cars on track"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About F1 Teams Hub"
          description={[
            "We are passionate Formula 1 enthusiasts dedicated to bringing you the most comprehensive and up-to-date information about every team on the grid.",
            "Our platform combines detailed team profiles, real-time statistics, and engaging content to create the ultimate F1 teams experience for fans worldwide."
          ]}
          buttons={[
            { text: "View All Teams", href: "teams" }
          ]}
          showBorder={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Powerful Features"
          description="Everything you need to stay connected with your favorite F1 teams"
          tag="Features"
          tagIcon={Sparkles}
          features={[
            {
              title: "Team Analytics",
              description: "Deep dive into team performance with comprehensive statistics, race results, and historical data analysis",
              icon: BarChart3
            },
            {
              title: "Live Updates",
              description: "Get real-time updates on race weekends, driver changes, and team news as they happen",
              icon: Radio
            },
            {
              title: "Interactive Profiles",
              description: "Explore detailed team profiles with driver information, car specifications, and team history",
              icon: Users
            },
            {
              title: "Race Calendar",
              description: "Never miss a race with our comprehensive F1 calendar and schedule notifications",
              icon: Calendar
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Official Merchandise"
          description="Support your favorite teams with authentic F1 merchandise and collectibles"
          tag="Shop Now"
          tagIcon={ShoppingCart}
          products={[
            {
              id: "1",
              brand: "Red Bull Racing",
              name: "Team Cap 2024",
              price: "$35.00",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763641739174-1v077ywf.jpg",
              imageAlt: "Red Bull Racing team cap"
            },
            {
              id: "2",
              brand: "Ferrari",
              name: "1:43 Scale Model Car",
              price: "$89.99",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763641740062-q16xbypj.jpg",
              imageAlt: "Ferrari F1 model car"
            },
            {
              id: "3",
              brand: "Mercedes-AMG",
              name: "Team Racing Jacket",
              price: "$125.00",
              rating: 4,
              reviewCount: "956",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763641741011-vj6ge0u4.jpg",
              imageAlt: "Mercedes team racing jacket"
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Choose Your Plan"
          description="Access premium F1 content and features with our subscription plans"
          tag="Membership"
          tagIcon={Crown}
          plans={[
            {
              id: "free",
              badge: "Free Access",
              badgeIcon: Gift,
              price: "Free",
              subtitle: "Perfect for casual fans",
              features: [
                "Basic team information",
                "Race calendar access",
                "Limited statistics",
                "Community forum"
              ]
            },
            {
              id: "pro",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$9.99/month",
              subtitle: "Ideal for dedicated fans",
              features: [
                "All free features",
                "Advanced analytics",
                "Live race updates",
                "Exclusive content",
                "Mobile app access"
              ]
            },
            {
              id: "premium",
              badge: "Ultimate",
              badgeIcon: Crown,
              price: "$19.99/month",
              subtitle: "For the ultimate F1 enthusiast",
              features: [
                "All pro features",
                "VIP community access",
                "Early access to content",
                "Personal dashboard",
                "Premium support"
              ]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFour
          title="F1 by the Numbers"
          description="Discover the global impact and reach of Formula 1 racing"
          tag="Statistics"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              icon: Trophy,
              title: "Active Teams",
              value: "10",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763641741790-h8u8brlw.jpg",
              imageAlt: "F1 championship trophy"
            },
            {
              id: "2",
              icon: Users,
              title: "Global Viewers",
              value: "1.55B",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763641743090-xnyi1nt1.jpg",
              imageAlt: "F1 global audience"
            },
            {
              id: "3",
              icon: Globe,
              title: "Countries",
              value: "23",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763641743967-juaobrr5.jpg",
              imageAlt: "F1 worldwide presence"
            }
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="The passionate experts behind F1 Teams Hub"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Marcus Weber",
              role: "Lead F1 Analyst",
              description: "Former F1 data analyst with 10+ years experience covering Formula 1 statistics and performance analysis",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763641745014-fbe0lcca.jpg",
              imageAlt: "Marcus Weber portrait",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com/marcusf1" },
                { icon: Linkedin, url: "https://linkedin.com/in/marcusf1" }
              ]
            },
            {
              id: "2",
              name: "Sarah Mitchell",
              role: "Senior F1 Journalist",
              description: "Award-winning motorsport journalist covering Formula 1 for major publications and broadcasting networks",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763641746006-7fxjt62m.jpg",
              imageAlt: "Sarah Mitchell portrait",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com/sarahf1news" },
                { icon: Linkedin, url: "https://linkedin.com/in/sarahmitchell" }
              ]
            },
            {
              id: "3",
              name: "David Rodriguez",
              role: "F1 Technical Expert",
              description: "Former F1 engineer turned technical analyst, specializing in car performance and team strategies",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763641746865-vzmmpqbn.jpg",
              imageAlt: "David Rodriguez portrait",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com/davidf1tech" },
                { icon: Globe, url: "https://davidf1tech.com" }
              ]
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What F1 Fans Say"
          description="Hear from our community of Formula 1 enthusiasts"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Alex Thompson",
              role: "F1 Enthusiast",
              company: "Racing Fan Community",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763641747831-hgiiunsm.jpg",
              imageAlt: "Alex Thompson portrait"
            },
            {
              id: "2",
              name: "Lisa Chen",
              role: "Motorsport Blogger",
              company: "SpeedTalk Media",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763641749302-knsdtsbf.jpg",
              imageAlt: "Lisa Chen portrait"
            },
            {
              id: "3",
              name: "James Wilson",
              role: "F1 Analyst",
              company: "Racing Insights",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763641750405-yuwajdlq.jpg",
              imageAlt: "James Wilson portrait"
            },
            {
              id: "4",
              name: "Emma Davis",
              role: "Sports Journalist",
              company: "Motorsport Weekly",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763641751388-x186u8ns.jpg",
              imageAlt: "Emma Davis portrait"
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by F1 Teams"
          description="Official partnerships and collaborations with Formula 1 teams worldwide"
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763641752404-o5pofdwm.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763641753275-jxx45wi8.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763641754098-inp05u39.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763641755012-l6g5m8y4.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763641755844-0upbw9cd.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763641756830-npmkex44.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763641757713-bh21kqmy.jpg"
          ]}
          textboxLayout="default"
          speed={30}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about F1 Teams Hub"
          faqs={[
            {
              id: "1",
              title: "How often is team information updated?",
              content: "We update team information in real-time during race weekends and daily during the off-season to ensure you have the latest data and news."
            },
            {
              id: "2",
              title: "Can I access historical team data?",
              content: "Yes! Our database includes comprehensive historical data dating back to the modern F1 era, including past seasons, driver lineups, and performance statistics."
            },
            {
              id: "3",
              title: "Is the mobile app available?",
              content: "Our mobile app is available for Pro and Premium subscribers on both iOS and Android platforms with full feature access."
            },
            {
              id: "4",
              title: "How accurate are the statistics?",
              content: "All our statistics are sourced directly from official F1 data feeds and verified by our team of expert analysts to ensure 100% accuracy."
            },
            {
              id: "5",
              title: "Can I compare different teams?",
              content: "Absolutely! Our comparison tools allow you to analyze and compare team performance, statistics, and historical data side by side."
            }
          ]}
          textPosition="left"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Join the F1 Community"
          description="Stay updated with the latest F1 team news, exclusive content, and join thousands of passionate Formula 1 fans worldwide"
          tagIcon={Flag}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe Now"
          termsText="By subscribing you agree to receive F1 updates and can unsubscribe anytime."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763641758603-rey6p62s.jpg"
          imageAlt="F1 paddock behind the scenes"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="F1 Teams Hub"
          columns={[
            {
              title: "Teams",
              items: [
                { label: "All Teams", href: "teams" },
                { label: "Team Comparison", href: "compare" },
                { label: "Statistics", href: "stats" }
              ]
            },
            {
              title: "Features",
              items: [
                { label: "Live Updates", href: "live" },
                { label: "Analytics", href: "analytics" },
                { label: "Mobile App", href: "app" }
              ]
            },
            {
              title: "Community",
              items: [
                { label: "Forum", href: "forum" },
                { label: "Blog", href: "blog" },
                { label: "Newsletter", href: "newsletter" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Help Center", href: "help" },
                { label: "Contact Us", href: "contact" },
                { label: "Privacy Policy", href: "privacy" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Twitter, href: "https://twitter.com/f1teamshub", ariaLabel: "Follow us on Twitter" },
            { icon: Instagram, href: "https://instagram.com/f1teamshub", ariaLabel: "Follow us on Instagram" },
            { icon: Youtube, href: "https://youtube.com/f1teamshub", ariaLabel: "Subscribe on YouTube" },
            { icon: Facebook, href: "https://facebook.com/f1teamshub", ariaLabel: "Like us on Facebook" }
          ]}
          copyrightText="© 2025 F1 Teams Hub. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}