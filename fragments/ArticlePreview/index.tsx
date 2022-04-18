import { ArticlePreviewItem } from './types';

const ArticlePreviewFragment: React.FC = (): JSX.Element => {
  const data: ArticlePreviewItem = {
    image: '/article-preview/images/drawers.jpg',
    title:
      'Shift the overall look and feel by adding these wonderful touches to furniture in your home',
    description:
      'Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.',
    author: {
      avatar: '/article-preview/images/avatar-michelle.jpg',
      name: 'Michelle Appleton',
      date: '28 Jun 2020',
    },
    shareIcon: '/article-preview/images/icon-share.svg',
    facebookIcon: '/article-preview/images/icon-facebook.svg',
    twitterIcon: '/article-preview/images/icon-twitter.svg',
    pinteresIcon: '/article-preview/images/icon-pinterest.svg',
  };

  return (
    <div className="grid min-h-screen place-items-center bg-grayish-blue font-manrope">
      <div className="flex flex-col mx-8 shadow-2xl rounded-xl">
        <img
          src={data.image}
          alt="Drawer"
          className="object-cover object-top w-auto h-52 rounded-t-xl"
        />
        <div className="relative flex-1 p-8 bg-white rounded-b-xl">
          <h1 className="mb-4 text-base font-bold text-very-dark-grayish-blue">
            {data.title}
          </h1>
          <p className="text-13px text-grayish-blue">{data.description}</p>
          <div className="flex items-center justify-between mt-4">
            <div className="relative flex items-center space-x-4 top-3">
              <img
                src={data.author.avatar}
                alt="Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-bold text-13px text-very-dark-grayish-blue">
                  {data.author.name}
                </h4>
                <p className="text-13px text-grayish-blue">
                  {data.author.date}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => null}
              className="relative top-3 z-10 grid p-2.5 rounded-full place-items-center bg-light-grayish-blue cursor-pointer"
            >
              <img src={data.shareIcon} alt="Share" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 flex items-center h-20 px-8 py-2 space-x-4 rounded-b-lg share bg-very-dark-desaturated-blue">
              <p className="tracking-widest uppercase text-desaturated-dark-blue text-13px">share</p>
              <img src={data.facebookIcon} alt="Facebook" />
              <img src={data.twitterIcon} alt="Facebook" />
              <img src={data.pinteresIcon} alt="Facebook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreviewFragment;
