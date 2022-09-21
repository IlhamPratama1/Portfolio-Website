const Navbar = () => {
  return (
    <div className="fixed z-10 mix-blend-difference w-full flex font-roboto-mono text-gray-m justify-between px-8 2xl:px-[11rem] pt-10 2xl:pt-28">
      <h1 className="uppercase text-md lg:text-2xl">
        expect a <span className="underline font-bold">logo</span> here
      </h1>
      <h1 className="text-sm lg:text-xl">not a menu.</h1>
    </div>
  );
};

export default Navbar;
