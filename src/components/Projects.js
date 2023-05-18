export default function Projects() {
    return (
      <>
       {/* Start Work & Project Section  */}
    <div id="projects" class="pt-0 pb-16 px-16 dark:bg-slate-900">
      <div class="container mx-auto">
        <div class="flex flex-col gap-3 items-center">
          <h1 class="text-indigo-600 font-bold">Services</h1>
          <h1 data-text="Works & Projects" class="text-3xl dark:text-white relative overflow-hidden pb-8 before:content-[attr(data-text)attr(data-text)] before:underline before:underline-offset-8 before:decoration-wavy before:decoration-yellow-400 before:absolute before:whitespace-nowrap before:text-transparent before:animate-wave">Works & Projects</h1>
          <p class="w-1/2 text-center text-gray-400">
            My approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.
          </p>
        </div>
        <div class="p-5 sm:p-0 flex flex-wrap justify-between">
          <div
            class="w-full md:w-5/12 lg:w-1/4 shadow-xl rounded-lg my-3 md:mt-10 m-1 transition-all hover:scale-110"
          >
            <img src="/wpcarey.png" alt="wpcarey" class="h-full" />
          </div>
          {/* card  */}
          <div
            class="w-full md:w-5/12 lg:w-1/4 shadow-xl rounded-lg my-3 md:mt-10 m-1 transition-all hover:scale-110"
          >
            <img src="/chexsystem.png" alt="chexsystems" class="h-full" />
          </div>
          {/* card  */}
          <div
            class="w-full md:w-5/12 lg:w-1/4 shadow-xl rounded-lg my-3 md:mt-10 m-1 transition-all hover:scale-110"
          >
            <img src="/hogan.png" alt="Hogan Lovells" class="h-full" />
          </div>
          {/* card  */}
          <div
            class="w-full md:w-5/12 lg:w-1/4 shadow-xl rounded-lg my-3 md:mt-10 m-1 transition-all hover:scale-110"
          >
            <img src="/hogan.png" alt="Hogan Lovells" class="h-full" />
          </div>
          {/* card  */}
          <div
            class="w-full md:w-5/12 lg:w-1/4 shadow-xl rounded-lg my-3 md:mt-10 m-1 transition-all hover:scale-110"
          >
            <img src="/wpcarey.png" alt="wpcarey" class="h-full" />
          </div>
          {/* card  */}
          <div
            class="w-full md:w-5/12 lg:w-1/4 shadow-xl rounded-lg my-3 md:mt-10 m-1 transition-all hover:scale-110"
          >
            <img src="/chexsystem.png" alt="chexsystems" class="h-full" />
          </div>
          {/* card  */}
          </div>
      </div>
    </div>
    {/* End Work & Project Section  */}
      </>
    )
}