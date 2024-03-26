import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      className={`relative bg-[url('/images/banner1.svg')] bg-cover bg-center h-[39.875rem] z-30`}
    >
      <div className="absolute inset-0">
        {/* Linear gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-dark -z-10">
          <div className="flex flex-col justify-center gap-6  h-full w-full lg:w-[70%] px-4 sm:px-[3rem] lg:px-[7.5rem] z-[99999999] ">
            <div className="">
              <p className="font-header font-medium text-white text-base uppercase text-opacity-90">
                we are the best cargo & logistic company
              </p>
              <h1 className="font-header text-[2rem] mt-3 lg:text-[4rem] font-bold leading-normal lg:leading-[5.2rem] uppercase text-white">
                explore the world with our cargo services.
              </h1>
            </div>
            <div className="">
              <p className="font-body text-lg text-white w-full lg:w-[68%] text-opacity-90">
                Simplify your shipping process and make it more efficient with
                our cargo services. From start to finish, we’ll handle
                everything to ensure your cargo arrives safely.
              </p>
            </div>
            <div className="z-[9999]">
              <Link href={"#"}>
                <button className="button">EXPLORE OUR SERVICES</button>
              </Link>
            </div>
          </div>
        </div>
        {/* Content */}
      </div>
    </div>
  );
};

export default HeroSection;
