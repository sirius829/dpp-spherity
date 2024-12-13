
const Header = () => {
  return (
    <header className="bg-transparent mb-16">
      <div
        className="absolute w-1/3 md:h-1/2 h-1/3 rounded-br-[80px] top-0"
        style={{
          backgroundColor: 'rgb(151, 167, 182)'
        }}
      ></div>
      <div className="flex md:flex-row flex-col px-5 gap-8 items-center">
        <div className="relative flex-1 items-center">
          <div className="relative z-10 max-h-[1/2] sm:mb-0 flex rounded-xl w-auto max-w-[900px]">
            <img
              src="https://acme.dpp.spherity.com/_next/static/media/EV-battery2.e7184af4.png"
              className="w-full h-full rounded-xl"
              loading="lazy"
            >
            </img>
          </div>
        </div>
        <div className="relative flex-1 mt-4 sm:pl-4 flex flex-col gap-y-[10px]">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/acme-1-logo-png-transparent.png"
            className="h-16 w-fit"
            style={{
              color: "transparent"
            }}
          />
          <h1 className="col-span-full font-extrabold text-3xl text-slate-900 sm:text-3xl xs:text-2xl leading-9 font-inter">
            ACME PowerDrive X1000
          </h1>
          <p className="mt-1 text-lg text-slate-600 font-inter xs:text-md">
            Introducing the ACME PowerDrive X1000: the pinnacle of electric vehicle battery technology.
            Engineered for superior performance, it offers unrivaled energy density for longer drives and rapid recharging.
            Our thermal management system ensures reliability in any weather, and with a life expectancy above the norm, it's built to last.
            Committed to sustainability, it's made with eco-friendly practices. Choose the PowerDrive X1000 for a greener, more efficient drive.
          </p>
          <h2 className="italic font-semibold font-inter text-lg">
            Powering Tomorrow, Driving Sustainability Today
          </h2>
          <div className="bg-transparent">
            <div className="mx-auto">
              <div className="mt-0">
                <p className="text-xs font-inter">Powered by</p>
                <div className="flex flex-row">
                  <img
                    className="md:h-28 h-16"
                    alt=""
                    src="https://vera-staging.dpp.spherity.dev/_next/static/media/spherity-logo.8fb53ba2.png"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;