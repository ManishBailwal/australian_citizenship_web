import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Australian Values for the Citizenship Test: Complete Guide",
  description:
    "Learn the Australian values covered in the citizenship test, including freedom, respect, equality, the rule of law, parliamentary democracy and a fair go.",
  alternates: {
    canonical: "https://www.citizenshiptestau.com/australian-values",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}