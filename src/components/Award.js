export default function Award() {
  return (
    <>
      {/* Start Award & Recognitions Section */}
      <div id="award" class="container my-16 mx-auto px-4 md:px-12">
        <div class="flex flex-col gap-3 items-center">
          <h1 class="text-indigo-600 font-bold">Badge</h1>
          <h1
            data-text="Award & Recognitions"
            class="text-3xl dark:text-white relative overflow-hidden pb-8 before:content-[attr(data-text)attr(data-text)] before:underline before:underline-offset-8 before:decoration-wavy before:decoration-yellow-400 before:absolute before:whitespace-nowrap before:text-transparent before:animate-wave"
          >
            Award & Recognitions
          </h1>
          <p class="w-1/2 text-center text-gray-400">
            Winning an award at work or during your Hard Work seem like a
            pleasant pat on the back at the time.I have received lot of Awards
            in this Quarter
          </p>
        </div>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          {/* Column */}
          <div class="my-1 px-1 w-full md:w-1/2 sm:mt-10 sm:px-4 lg:mt-10 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Award"
                  class="block h-auto w-full"
                  src="/highfive-award.png"
                />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a
                    alt="Award"
                    class="no-underline hover:underline text-black"
                    href="#"
                  >
                    Star of the Month Award
                  </a>
                </h1>
              </header>
            </article>
          </div>
          {/* END Column */}

          {/* Column */}
          <div class="my-1 px-1 w-full md:w-1/2 sm:mt-10 sm:px-4 lg:mt-10 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Award"
                  class="block h-auto w-full"
                  src="/highfive-award.png"
                />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a
                    class="no-underline hover:underline text-black"
                    alt="Award"
                    href="#"
                  >
                    Spotlight Award
                  </a>
                </h1>
              </header>
            </article>
          </div>
          {/* END Column */}

          {/* Column */}
          <div class="my-1 px-1 w-full md:w-1/2 sm:mt-10 sm:px-4 lg:mt-10 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Award"
                  class="block h-auto w-full"
                  src="/highfive-award.png"
                />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a
                    class="no-underline hover:underline text-black"
                    alt="Award"
                    href="#"
                  >
                    High Five Award
                  </a>
                </h1>
              </header>
            </article>
          </div>
          {/* END Column */}
        </div>
      </div>
      {/* End Award & Recognitions Section */}
    </>
  );
}
