import Link from 'next/link';

type Props = {
  title: string;
  category: string;
  thumbnail?: string;
  path: string;
  url: string;
}

function Card({ title, category, thumbnail, path, url }: Props): JSX.Element {
  return (
    <div className="relative hover:relative group">
      <Link href={path}>
        <a>
          <div className="w-full h-56 transition-all cursor-pointer lg:h-64 xl:h-72">
            <img src={thumbnail} alt="Thumbnail" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div
            className="absolute left-0 right-0 grid items-center transition-all rounded-b opacity-0 bg-gradient-to-t from-very-dark-grayish-blue to-transparent top-32 lg:top-52 bottom-8 group-hover:opacity-75"
            style={{ content: '' }}
          >
            <span className="px-6 text-white">{title}</span>
          </div>
        </a>
      </Link>
      <div className="flex justify-between mt-2 text-sm lg:text-base">
        <a href={url} className="font-bold text-blue-400">Challege Hub</a>
        <span className="px-1 bg-gray-200 rounded">{category}</span>
      </div>
    </div>

  );
}

Card.defaultProps = {
  thumbnail: 'default.webp',
};

export default Card;
