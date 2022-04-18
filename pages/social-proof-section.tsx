import type { NextPage } from 'next';
import Head from 'next/head';
import SocialProofSectionFragment from '../fragments/SocialProofSection';

const SocialProofSection: NextPage = (): JSX.Element => (
  <>
    <Head>
      <title>Social Proof Section</title>
      <link rel="shortcut icon" href="/social-proof-section/images/favicon-32x32.png" type="image/x-icon" />
    </Head>
    <SocialProofSectionFragment />
  </>
);

export default SocialProofSection;
