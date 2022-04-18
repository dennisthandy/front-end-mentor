import { Profile } from './types';

function ProfileCardFragment(): JSX.Element {
  const data: Profile = {
    name: 'Victor Crest',
    age: 26,
    location: 'London',
    social: [
      {
        value: '80K',
        label: 'Followers',
      },
      {
        value: '803K',
        label: 'Likes',
      },
      {
        value: '1.4K',
        label: 'Photos',
      },
    ],
  };

  return (
    <div className="relative grid min-h-screen overflow-hidden place-items-center bg-dark-cyan-2">
      <img
        src="/profile-card/images/bg-pattern-top.svg"
        alt="bg-pattern-top"
        className="absolute transform scale-125 -top-40 -left-1/2 lg:-left-32 lg:-top-1/2"
      />
      <img
        src="/profile-card/images/bg-pattern-bottom.svg"
        alt="bg-pattern-bottom"
        className="absolute transform scale-125 -bottom-40 -right-1/2 lg:-right-32 lg:-bottom-1/2"
      />
      <div className="relative z-20 mx-4 bg-white shadow-xl rounded-2xl lg:w-96">
        <div className="relative">
          <img
            src="/profile-card/images/bg-pattern-card.svg"
            alt="bg-pattern-card"
            className="z-10 object-cover rounded-t-2xl h-44"
          />
          <img
            src="/profile-card/images/image-victor.jpg"
            alt="avatar"
            className="absolute z-20 transform -translate-x-1/2 border-4 border-white rounded-full translate-y-1/4 left-1/2 top-1/2"
          />
        </div>
        <div className="mx-auto mt-16 text-center">
          <h4 className="text-lg font-bold text-very-dark-desaturated-blue">{data.name}
            <span className="font-normal text-dark-gray">&nbsp;&nbsp;&nbsp;{data.age}</span>
          </h4>
          <p className="text-dark-gray">{data.location}</p>
        </div>
        <ul className="flex items-center justify-between px-8 py-6 mt-8 border-t lg:px-12">
          {data.social.map((item, key) => (
            <li key={key} className="grid place-items-center">
              <span className="text-lg font-bold text-very-dark-desaturated-blue">{item.value}</span>
              <span className="text-xs text-dark-gray">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfileCardFragment;
