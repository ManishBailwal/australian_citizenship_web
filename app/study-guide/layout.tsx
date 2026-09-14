import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Australian Citizenship Test Study Guide: Topics & Preparation',
  description:
    'Prepare for the Australian citizenship test with a study guide covering Australian values, democracy, government, history, geography, citizenship responsibilities and practice strategies.',
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}