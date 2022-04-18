import { NextPage } from 'next';
import Head from 'next/head';
import ColumnPreviewCardFragment from '../fragments/ColumnPreviewCard';

const ColumnPreviewCard: NextPage = (): JSX.Element => (
  <>
    <Head>
      <title>3 Column Preview Card</title>
      <link rel="shortcut icon" href="/column-preview-card/images/favicon-32x32.png" type="image/x-icon" />
    </Head>
    <ColumnPreviewCardFragment />
  </>
);

export default ColumnPreviewCard;
