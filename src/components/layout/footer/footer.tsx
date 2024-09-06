import { Link } from '@nextui-org/react';
import { IoMdStar } from 'react-icons/io';

const Footer = () => {
  return (
    <footer
      id="footer"
      aria-label="footer section"
      className="relative border-t border-[#25213b]"
    >
      <div className="flex -translate-y-px justify-center">
        <div className="w-3/4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
      </div>
      <div className="mx-auto p-3 sm:px-12 lg:max-w-[70rem] lg:py-6 xl:max-w-[76rem] 2xl:max-w-[92rem]">
        <div className="-z-40 flex justify-center">
          <div className="h-1px absolute top-0 w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="text-center text-sm md:text-left">
            <p>
              Made with <span className="text-red-100">❤️</span> by{' '}
              <Link
                href="https://www.linkedin.com/in/shanthoshk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-heading hover:text-accent"
                aria-label="go to Shanthosh Krishnakumar's LinkedIn profile"
              >
                Shanthosh Krishnakumar
              </Link>
              . {new Date().getFullYear()}
            </p>
          </div>
          <div className="mt-2 flex items-center gap-5 md:mt-0">
            <Link
              target="_blank"
              href="https://github.com/nzkks/drmsweb"
              rel="noopener noreferrer"
              className="flex items-center gap-2 uppercase hover:text-accent"
              aria-label="give a star for this project on GitHub website"
            >
              <IoMdStar aria-hidden={true} />
              <span>Star</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
