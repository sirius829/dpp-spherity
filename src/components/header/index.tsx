
const Header = () => {
  return (
    <header className="bg-transparent mb-16 pt-[96px]">
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 pr-[32px] xs:pl-[24px] sm:pl-[20px] gap-x-16">
        <div className="relative flx items-center">
          <div
            className="absolute -top-24 left-10 right-1/2 z-10 xs:-top-30 rounded-br-6xl xs:bottom-4 xs:mt-0 xs:right-full xs:-mr-64  xs:left-[-100vw] sm:bottom-16 md:bottom-8 lg:left-[-100vw] md:left-[-100vw] lg:right-full lg:-mr-64"
            style={{
              backgroundColor: 'rgb(151, 167, 182)'
            }}
          ></div>
          <div className="relative z-10 mx-auto -top-20  max-h-[1/2] mb-24 sm:mb-0 flex w-[900px] rounded-xl md:w-[900px] lg:w-auto ">
            <img
              src="https://acme.dpp.spherity.com/_next/static/media/EV-battery2.e7184af4.png"
              className="w-full h-full rounded-xl"
              loading="lazy"
            >
            </img>
          </div>
        </div>
        <div className="relative items-left justify-left mt-4 sm:pl-4 flex flex-col gap-y-[10px]">
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
                    alt=""
                    src="https://vera-staging.dpp.spherity.dev/_next/static/media/spherity-logo.8fb53ba2.png"
                    width='377'
                    height='50'
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