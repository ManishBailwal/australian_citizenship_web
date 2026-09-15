import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Australian Citizenship Test FAQs: Questions & Answers',
  description:
    'Get answers to common Australian citizenship test questions about the test format, passing score, Australian values, booking, test day, retakes and preparation.',
    alternates: {
    canonical: "https://www.citizenshiptestau.com/citizenship-test-faq",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}