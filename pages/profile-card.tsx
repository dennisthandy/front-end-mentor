import type { NextPage } from 'next';
import Head from 'next/head';
import ProfileCardFragment from '../fragments/ProfileCard';

const ProfileCard: NextPage = (): JSX.Element => (
  <>
    <Head>
      <title>Profile Card</title>
      <link rel="shortcut icon" href="/profile-card/images/favicon-32x32.png" type="image/x-icon" />
    </Head>
    <ProfileCardFragment />
  </>
);

export default ProfileCard;
