import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Australian Citizenship Test Eligibility, Fees & Process',
  description:
    'Learn about Australian citizenship test eligibility criteria, fees, application process, passing score, Australian values, retakes and test-day rules.',
    alternates: {
  canonical: 'https://www.citizenshiptestau.com/citizenship-test-guide',
},
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}