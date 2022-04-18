import { Proof } from './types';

function SocialProofSectionFragment(): JSX.Element {
  const data: Proof = {
    title: '10,000+ of our users love our products.',
    description: 'We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.',
    ratings: [
      { point: 5, label: 'Rated 5 Stars in Reviews' },
      { point: 5, label: 'Rated 5 Stars in Report Guru' },
      { point: 5, label: 'Rated 5 Stars in BestTech' },
    ],
    reviews: [
      {
        alias: 'Verified Buyer',
        avatar: '/social-proof-section/images/image-colton.jpg',
        comment: '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"',
        name: 'Colton Smith',
      },
      {
        alias: 'Verified Buyer',
        avatar: '/social-proof-section/images/image-irene.jpg',
        comment: '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
        name: 'Irene Roberts',
      },
      {
        alias: 'Verified Buyer',
        avatar: '/social-proof-section/images/image-anne.jpg',
        comment: '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"',
        name: 'Anne Wallace',
      },
    ],
  };

  return (
    <div className="relative min-h-screen font-spartan">
      <img
        src="/social-proof-section/images/bg-pattern-top-mobile.svg"
        alt="bg-pattern"
        className="absolute top-0 left-0 lg:hidden"
      />
      <img
        src="/social-proof-section/images/bg-pattern-top-desktop.svg"
        alt="bg-pattern"
        className="absolute top-0 left-0 hidden lg:block"
      />
      <img
        src="/social-proof-section/images/bg-pattern-bottom-desktop.svg"
        alt="bg-pattern"
        className="absolute bottom-0 right-0 hidden lg:block"
      />
      <div className="px-4 py-20 text-center lg:text-left lg:p-[8.5rem] lg:grid lg:grid-cols-2">
        <div className="lg:w-[30rem]">
          <h1 className="text-5xl font-semibold text-very-dark-magenta">{data.title}</h1>
          <p className="mt-4 text-15px text-dark-grayish-magenta">{data.description}</p>
        </div>
        <ul className="grid gap-4 mt-8 place-items-start">
          {data.ratings.map((item, index) => (
            <li
              key={index}
              className={`
                p-4 space-y-3 lg:space-y-0 rounded-lg bg-light-grayish-magenta lg:flex lg:items-center lg:py-4 lg:px-10
                ${index === 1 ? 'lg:ml-16 lg:pr-16' : 'lg:pr-24'}
                ${index === 2 ? 'lg:ml-32 lg:pr-20' : ''}
              `}
            >
              <div className="flex items-center justify-center space-x-3 lg:space-x-2">
                {[...Array(item.point)].map((point, indexPoint) => (
                  <img
                    src="/social-proof-section/images/icon-star.svg"
                    alt="star"
                    key={indexPoint}
                  />
                ))}
              </div>
              <p className="font-bold text-very-dark-magenta text-15px lg:ml-8">{item.label}</p>
            </li>
          ))}
        </ul>
        <ul className="grid gap-4 mt-8 text-left text-white text-15px lg:col-span-2 lg:grid-cols-3 lg:mt-20 lg:place-items-start lg:gap-0">
          {data.reviews.map((item, index) => (
            <li
              key={index}
              className={`
                px-6 py-8 rounded-lg bg-very-dark-magenta lg:w-96
                ${index === 1 ? 'lg:mt-8' : ''}
                ${index === 2 ? 'lg:mt-16' : ''}
              `}
            >
              <div className="flex items-center mb-6 space-x-4">
                <img src={item.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
                <div className="grid">
                  <span className="font-bold">{item.name}</span>
                  <span className="text-soft-pink">{item.alias}</span>
                </div>
              </div>
              <p>{item.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SocialProofSectionFragment;
