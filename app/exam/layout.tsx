import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Australian Citizenship Practice Test: Free Mock Exam',
  description:
    'Take a free Australian citizenship practice test with realistic questions covering Australian values, government, law, history and citizenship topics.',
  alternates: {
    canonical: 'https://www.citizenshiptestau.com/exam',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}