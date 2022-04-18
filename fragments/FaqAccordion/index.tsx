import { useState } from 'react';
import { FaqItem } from './types';

function FaqAccordionFragment(): JSX.Element {
  // State and Variables
  const [openItem, setOpenItem] = useState<number>(0);

  const items: FaqItem[] = [
    {
      id: 1,
      question: 'How many team members can I invite?',
      answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
    },
    {
      id: 2,
      question: 'What is the maximum file upload size?',
      answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
    },
    {
      id: 3,
      question: 'How do I reset my password?',
      answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
    },
    {
      id: 4,
      question: 'Can I cancel my subscription?',
      answer: 'Yes! Send us a message and we’ll process your request no questions asked.',
    },
    {
      id: 5,
      question: 'Do you provide additional support?',
      answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
    },
  ];

  // Functions
  function isOpenItem(id:number): boolean {
    return openItem === id;
  }

  return (
    <div className="grid min-h-screen px-6 text-very-dark-grayish-blue font-kumbh-sans text-12px bg-gradient-to-b from-soft-violet to-soft-blue place-items-center">
      <div className="relative z-10 px-6 pt-32 pb-8 bg-white lg:py-0 lg:pr-20 lg:pl-0 rounded-3xl drop-shadow-2xl lg:flex">
        <img
          className="absolute z-20 hidden transform scale-75 -translate-y-1/4 left-[-5.75rem] top-1/2 lg:block"
          src="/faq-accordion/images/illustration-box-desktop.svg"
          alt="decoration"
        />
        <div className="lg:relative lg:overflow-hidden lg:w-96">
          <img
            className="absolute z-20 -top-28 right-11 lg:hidden"
            src="/faq-accordion/images/illustration-woman-online-mobile.svg"
            alt="decoration"
          />
          <img
            className="absolute top-0 transform translate-x-1/2 right-1/2 lg:hidden"
            src="/faq-accordion/images/bg-pattern-mobile.svg"
            alt="pattern mobile"
          />
          {/* Desktop */}
          <img
            className="absolute hidden left-[-65%] top-[-8%] transform scale-[2] lg:block"
            src="/faq-accordion/images/bg-pattern-desktop.svg"
            alt="pattern desktop"
          />
          <img
            className="absolute hidden -translate-y-1/2 -left-14 top-1/2 lg:block"
            src="/faq-accordion/images/illustration-woman-online-desktop.svg"
            alt="decoration"
          />
        </div>
        <div className="lg:py-14 lg:pl-8">
          <h1 className="mb-5 text-xl font-bold text-center lg:text-left lg:text-3xl">FAQ</h1>
          <ul>
            {items.map((item) => (
              <li
                className="w-[17rem] py-4 border-b border-light-grayish-blue"
                key={item.id}
              >
                <button
                  type="button"
                  onClick={() => setOpenItem(item.id)}
                  className="flex items-center justify-between w-[inherit] disabled:pointer-events-none"
                  disabled={isOpenItem(item.id)}
                >
                  <p className={isOpenItem(item.id) ? 'font-bold text-dark-desaturated-blue' : ''}>{item.question}</p>
                  <img
                    className={isOpenItem(item.id) ? 'rotate-180' : ''}
                    src="/faq-accordion/images/icon-arrow-down.svg"
                    alt="arrow down"
                  />
                </button>
                <p className={isOpenItem(item.id) ? 'mt-2 w-11/12 text-dark-grayish-blue' : 'hidden'}>{item.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FaqAccordionFragment;
