const HeroSection = () => (
  <section
    className="bg-gray-900 text-white w-screen h-screen flex flex-col  items-center justify-center px-4"
    id="home"
  >
    <div className="text-start h-auto flex flex-col items-center md:flex-row md:items-between md:justify-between px-40 w-full">
      <div className="flex flex-col space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Hello, I'm Ahmad Hamsa Pattuneri
        </h1>
        <p className="text-base sm:text-lg">
          Fullstack developer. I create
          seamless web experiences for end-users.
        </p>
        <div className="flex space-x-4">
          <button className="px-4 sm:px-6 py-2 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition">
            About me
          </button>
          <button className="px-4 sm:px-6 py-2 border border-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition">
            Projects
          </button>
        </div>
      </div>
      <div className="relative w-auto h-auto flex items-center justify-center md:justify-center mt-[60px] md:mt-0">
        <div className="absolute w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-purple-600 rounded-full flex items-center justify-center"></div>
        <img
          src="/hero.png"
          alt="Profile"
          className="relative w-auto h-[270px] md:w-auto md:h-[320px] object-cover "
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
