import AutoTyping from "./AutoTyping";
export default function Header() {
  return (
    <div class="h-1/2 lg:h-screen bg-gradient-to-t from-slate-500 relative overflow-hidden">
      {/* Start Header Section */}
      <div>
        <nav class="fixed w-full top-0 bg-white z-10">
          <div class="container mx-auto py-5 md:px-0 lg:px-16 flex items-center justify-between">
            <div class="logo ml-5 md:ml-0 sm:ml-5 flex items-center text-2xl font-bold">
              <img class="w-8" src="/logo.png" alt="logo" />
              about<span class="text-yellow-400">Me</span>
            </div>
            <ul class="hidden font-bold md:flex space-x-10">
              <li class="hover:text-yellow-400">
                <a alt="Home" href="#">
                  Home
                </a>
              </li>
              <li class="hover:text-yellow-400">
                <a alt="About" href="#about">
                  About
                </a>
              </li>
              <li class="hover:text-yellow-400">
                <a alt="Projects" href="#projects">
                  Projects
                </a>
              </li>
              <li class="hover:text-yellow-400">
                <a alt="Skills" href="#skills">
                  Skills
                </a>
              </li>
              <li class="hover:text-yellow-400">
                <a alt="Awards" href="#award">
                  Awards
                </a>
              </li>
            </ul>
            <ul class="hidden font-bold md:flex space-x-5">
              <li>
                <img
                  src="/facebook-icon.png"
                  alt="facebook"
                  class="w-6 animate__animated animate__bounceIn"
                />
              </li>
              <li>
                <img
                  src="/email.png"
                  alt="email"
                  class="w-6 animate__animated animate__bounceIn"
                />
              </li>
              <li>
                <img
                  src="/linkedin-icon.png"
                  alt="linkedin"
                  class="w-6 animate__animated animate__bounceIn"
                />
              </li>
              <li>
                <img
                  src="/twitter-icon.png"
                  alt="twitter"
                  class="w-6 animate__animated animate__bounceIn"
                />
              </li>
            </ul>
            <div
              id="hamburger"
              class="space-y-1 mr-5 md:hidden cursor-pointer z-20"
            >
              <div class="w-6 h-0.5 bg-black"></div>
              <div class="w-6 h-0.5 bg-black"></div>
              <div class="w-6 h-0.5 bg-black"></div>
            </div>
            <ul
              id="menu"
              class="hidden bg-indigo-400 w-full absolute left-0 top-0 p-10 space-y-10 text-white text-center"
            >
              <li>
                <a class="hLink" alt="Home" href="#">
                  Home
                </a>
              </li>
              <li>
                <a class="hLink" alt="About" href="#about">
                  About
                </a>
              </li>
              <li>
                <a class="hLink" alt="Projects" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a class="hLink" alt="Skills" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a class="hLink" alt="Awards" href="#award">
                  Awards
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* End Header Section */}
      {/* Start Banner Section */}
      <div class="mt-20">
        <img
          src="/women.png"
          alt="women"
          class="relative w-60 float-right lg:w-auto lg:absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover animate__animated animate__jackInTheBox"
        />
        <div class="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10"></div>
        <div class="absolute top-1/3 left-5 font-bold text-xl sm:left-10 sm:text-4xl md:left-20 md:text-6xl lg:left-5 xl:left-32 xl:text-6xl">
          <span class="text-red-400">Frontend</span>
          <AutoTyping/>
        </div>
        <div class="hidden lg:flex gap-5 rounded-md shadow-lg flex-col absolute top-0 bottom-0 m-auto right-10 bg-white p-6 h-fit w-1/3">
          <h1 class="text-3xl font-bold text-indigo-900">
            Hi, I'm Sangeeta Panwar
          </h1>
          <p class="to-gray-400">
            Frontend Developer with over 5 years of experience working with
            different Technologies to deliver exceptional customer
            experience.Adept at contributing to a highly collaborative work
            environment, finding solutions, and determining customer
            satisfaction.
          </p>
          <a
            class="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
            href="#"
            alt="Hire Button"
          >
            Hire Me
          </a>
        </div>
      </div>
      {/* End Banner Section */}
    </div>
  );
}
