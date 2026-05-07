import { LandingHero } from '@/components/landing-hero';
import { PreviewImages } from '@/components/preview-images';
import { Features } from '@/components/features';
import { Testimonials } from '@/components/testimonials';
import { Contributors } from '@/components/contributors';

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Mix Space',
            description:
              '基于 Next.js 的 AI 驱动型内容管理系统，为个人博客、创作者主页和内容网站打造。',
            url: 'https://mx-space.js.org',
            applicationCategory: 'ContentManagementSystem',
            operatingSystem: 'Any',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            author: {
              '@type': 'Organization',
              name: 'Mix Space Team',
              url: 'https://github.com/mx-space',
            },
          }),
        }}
      />
      <LandingHero />
      <PreviewImages />
      <Features />
      <Testimonials />
      <Contributors />
    </>
  );
}
