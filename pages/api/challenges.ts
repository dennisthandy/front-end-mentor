// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Challenge } from '../../utils/types';

type Data = { data: Challenge[] };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({
    data: [
      {
        title: 'Faq Accordion Card',
        thumbnail: '/faq-accordion/design/desktop-preview.jpg',
        category: 'Newbie',
        path: '/faq-accordion',
        url: 'https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam',
      },
      {
        title: '3 Column Preview Card',
        thumbnail: '/column-preview-card/design/desktop-preview.jpg',
        category: 'Newbie',
        path: '/column-preview-card',
        url: 'https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-',
      },
      {
        title: 'Profile Card',
        thumbnail: '/profile-card/design/desktop-preview.jpg',
        category: 'Newbie',
        path: '/profile-card',
        url: 'https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ',
      },
      {
        title: 'Social Proof Section',
        thumbnail: '/social-proof-section/design/desktop-preview.jpg',
        category: 'Newbie',
        path: '/social-proof-section',
        url: 'https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA',
      },
    ],
  });
}
