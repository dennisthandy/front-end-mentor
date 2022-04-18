import type { NextPage } from 'next';
import Head from 'next/head';
import FaqAccordionFragment from '../fragments/FaqAccordion';

const FaqAccordion: NextPage = (): JSX.Element => (
  <>
    <Head>
      <title>FAQ Accordion</title>
      <link rel="shortcut icon" href="/faq-accordion/images/favicon-32x32.png" type="image/x-icon" />
    </Head>
    <FaqAccordionFragment />
  </>
);

export default FaqAccordion;
