import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Australian Citizenship Test: Format, Questions & Passing Score',
  description:
    'Learn how the Australian citizenship test works, including the test format, number of questions, time limit, passing score, Australian values and what to expect on test day.',
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}