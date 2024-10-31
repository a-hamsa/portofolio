const HeroSection = () => (
  <section
    className="bg-gray-900 text-white h-screen flex items-center justify-center px-4"
    id="home"
  >
    <div className="text-start h-auto flex flex-col items-start sm:flex-row sm:items-center sm:justify-between space-y-8 sm:space-y-0 sm:space-x-8 w-full max-w-5xl">
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
      <div className="relative h-[200px] flex items-center justify-center sm:justify-center">
        <div className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] bg-purple-600 rounded-full flex items-center justify-center"></div>
        <img
          src="/hero.png"
          alt="Profile"
          className="relative w-40 h-65 sm:w-60 sm:h-80 object-cover "
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
