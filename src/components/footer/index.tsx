const Footer = () => {
  return (
    <footer className="relative pb-20 pt-5 sm:pb-32 sm:pt-14 mt-8">
      <div
        className="absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]"
        aria-hidden="true"
      >
        <svg className="absolute inset-0 h-full w-full">
          <defs>
            <pattern
              id="footer-pattern"
              width="128"
              height="128"
              patternUnits="userSpaceOnUse"
              x="50%"
            >
              <path d="M0 128V.5H128" fill="none" stroke="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>
      <div className="relative text-center text-sm text-slate-600">
        <p>Copyright &copy; 2024 Spherity</p>
        <p>
          Powered by
          <a
            href="https://spherity.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Spherity GmbH
          </a>
        </p>
        <p>All rights reserved.</p>
        <p>
          <a
            href="https://www.spherity.com/imprint"
            className="text-blue-500 hover:underline"
          >
            Imprint
          </a>
        </p>
        <p className="mx-2 mt-3 max-w-xl font-gm text-xs sm:mx-auto">
          <strong>Disclaimer: This is a Demo Page</strong>
        </p>
        <p className="mx-2 mt-3 max-w-xl font-gm text-xs sm:mx-auto">
          The content, product passport, and data on this webpage are simulated and
          for demonstration purposes only. None of the information represents
          real products or services by any other entities. Any resemblance to
          actual data is coincidental. For accurate information, refer to
          official sources.
        </p>
        <p>Version 1.2.1 - build 41cc4fc</p>
      </div>
    </footer>
  );
};

export default Footer;
