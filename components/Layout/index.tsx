import Head from 'next/head';

type Props = {
  title?: string
  children: JSX.Element,
}

function Layout({ children, title }: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <section className="relative min-h-screen">
        {/* Header */}
        <header>
          <nav className="p-6 border-b">
            <ul className="flex items-start justify-between">
              <li>Home</li>
              <li>Github</li>
            </ul>
          </nav>
          <section className="mx-auto bg-gray-200 p-14 lg:p-28 xl:p-40">
            <h1 className="text-xl font-bold text-center lg:text-3xl xl:text-4xl">
              <span>Discover My Front-End Mentor Challenges</span>
            </h1>
          </section>
        </header>
        {/* Content */}
        <main className="container px-6 mx-auto lg:px-0">
          <ul className="flex w-full py-6 mb-6 space-x-6 overflow-y-hidden lg:items-center lg:justify-center">
            <li className="px-2 py-1 bg-gray-100 rounded">
              <button type="button">All</button>
            </li>
            <li className="px-2 py-1 bg-gray-100 rounded">
              <button type="button">Newbie</button>
            </li>
            <li className="px-2 py-1 bg-gray-100 rounded">
              <button type="button">Junior</button>
            </li>
            <li className="px-2 py-1 bg-gray-100 rounded">
              <button type="button">Intermediate</button>
            </li>
            <li className="px-2 py-1 bg-gray-100 rounded">
              <button type="button">Advanced</button>
            </li>
            <li className="px-2 py-1 bg-gray-100 rounded">
              <button type="button">Guru</button>
            </li>
          </ul>
          {children}
        </main>
        {/* Footer */}
        <footer className="relative bottom-0 left-0 right-0 p-6 mx-auto text-center">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made with 🔥 by dennisthandy
          </a>
        </footer>
      </section>
    </>
  );
}

Layout.defaultProps = {
  title: 'Home',
};

export default Layout;
