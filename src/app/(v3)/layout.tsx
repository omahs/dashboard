/* eslint-disable @next/next/inline-script-id */
import type { Metadata } from 'next';

import Providers from './providers';

export const metadata: Metadata = {
  title: 'Gateway Network',
  description: 'Gateway Network - A new concept about web3',
  openGraph: {
    images: ['/social.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
