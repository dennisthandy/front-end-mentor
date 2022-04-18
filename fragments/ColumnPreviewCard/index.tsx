import { ColumnPreviewCardItem } from './types';

function ColumnPreviewCardFragment(): JSX.Element {
  const items: ColumnPreviewCardItem[] = [
    {
      icon: '/column-preview-card/images/icon-sedans.svg',
      title: 'Sedans',
      description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
      colors: {
        text: 'text-bright-orange',
        background: 'bg-bright-orange',
      },
      rounded: {
        mobile: 'rounded-t-lg',
        desktop: 'lg:rounded-t-none lg:rounded-l-lg lg:rounded-tl-lg',
      },
    },
    {
      icon: '/column-preview-card/images/icon-suvs.svg',
      title: 'Suvs',
      description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
      colors: {
        text: 'text-dark-cyan',
        background: 'bg-dark-cyan',
      },
    },
    {
      icon: '/column-preview-card/images/icon-luxury.svg',
      title: 'Luxury',
      description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
      colors: {
        text: 'text-very-dark-cyan',
        background: 'bg-very-dark-cyan',
      },
      rounded: {
        mobile: 'rounded-b-lg',
        desktop: 'lg:rounded-b-none lg:rounded-r-lg lg:rounded-br-lg',
      },
    },
  ];

  return (
    <div className="grid min-h-screen px-6 py-20 bg-very-light-gray text-transparent-white place-items-center">
      <div className="text-15px lg:flex lg:mx-auto">
        {items.map((item, index) => {
          const { text, background } = item.colors;
          return (
            <div
              key={index}
              className={`${background} p-9 ${item.rounded?.mobile} ${item.rounded?.desktop} space-y-4 lg:w-72 lg:space-y-6`}
            >
              <img src={item.icon} alt="car" />
              <h4
                className="text-4xl uppercase text-very-light-gray font-big-shoulders-display"
              >
                {item.title}
              </h4>
              <p
                className="font-lexend-deca lg:pb-14"
              >
                {item.description}
              </p>
              <button
                type="button"
                className={`${text} bg-very-light-gray font-lexend-deca rounded-full py-3 px-7`}
              >
                Learn More
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ColumnPreviewCardFragment;
