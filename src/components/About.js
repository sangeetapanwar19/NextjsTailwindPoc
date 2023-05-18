
export default function About() {
    return (
      <>
        {/* Start About Section */}
    <div id="about">
      <div
        class="container mx-auto px-16 py-20 flex flex-col-reverse lg:flex-row items-center gap-20"
      >
        <div class="left-side">
          <img
            class="w-96"
            src="/about.png"
            alt="about image"
          />
        </div>
        <div
          class="my-auto flex flex-col gap-3 animate__animated animate__lightSpeedInRight animate__delay-2s"
        >
          <h1 class="text-indigo-600 font-bold">ABOUT ME</h1>
          <h1 class="text-3xl font-medium dark:text-white">Better Design</h1>
          <h1 class="text-3xl font-medium dark:text-white">
            Better Experience
          </h1>
          <p class="text-gray-400">
            I design and build Responsive Websites. I'm also a multi-disciplinary
            maker with over 5 years of experiences in wide range of design
            disciplines.
          </p>
          <h2 class="text-gray-400 font-medium">HTML,CSS,Javascript</h2>
          <div class="w-full bg-gray-200 h-1.5 rounded-md">
            <div class="w-full bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 class="text-gray-400 font-medium">React,Nextjs,Angular</h2>
          <div class="w-full bg-gray-200 h-1.5 rounded-md">
            <div class="w-4/6 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 class="text-gray-400 font-medium">Tailwind,Bootstrap,Material UI</h2>
          <div class="w-full bg-gray-200 h-1.5 rounded-md">
            <div class="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
    {/* End About Section */}
      </>
    )
}