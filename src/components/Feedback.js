export default function Feedback() {
    return (
      <>
        {/* Start Client's Feedback Section */}
    <div class="container mx-auto w-full overflow-hidden relative">
      <div class="flex flex-col gap-3 items-center">
        <h1 class="text-indigo-600 font-bold">Commentary</h1>
        <h1 data-text="Client's feedback" class="text-3xl dark:text-white relative overflow-hidden pb-8 before:content-[attr(data-text)attr(data-text)] before:underline before:underline-offset-8 before:decoration-wavy before:decoration-yellow-400 before:absolute before:whitespace-nowrap before:text-transparent before:animate-wave">Client's feedback</h1>
        <p class="w-1/2 text-center text-gray-400">
          Client always appreciates my efforts and my work speaks when client appreciates with excellent feedback and mentions.         </p>
      </div>
      <div class="carousel-items flex items-center justify-center animate-carousel w-fit">
          <div class="carousel-focus hover:transition-all hover:duration-800 hover:transform-hover:scale-110 flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg w-72">
              <span class="text-yellow-400 font-bold text-xl mb-3">MSSP</span>
              <img class="h-16 w-16 rounded-full shadow-2xl" src="/user.png" alt="MSSP"/>
              <p class="mt-3 text-gray-600 text-center">"Received fantastic feedback from MSSP Client..
                Sangeeta – "Sangeeta did a great job working with Matt to make MSSP brand compliant and making it “sparkle.” She has been crucial in making MSSP as usable as it is.
                !"</p>
          </div>

          <div class="carousel-focus hover:transition-all hover:duration-800 hover:transform-hover:scale-110 flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg w-72">
              <p class="text-yellow-400 font-bold text-xl mb-3">chexsystems</p>
              <img class="h-16 w-16 rounded-full shadow-2xl" src="/user.png" alt="ChexSystem"/>
              <p class="mt-3 text-gray-600 text-center">"Got Pat on the back Award For working on MSSP and ChexSystem and playing different roles as per project requirement.Got High Five award for extending valuable support in FIS ChexSystem project.!"</p>
          </div>

          <div class="carousel-focus hover:transition-all hover:duration-800 hover:transform-hover:scale-110 flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg w-72">
              <p class="text-yellow-400 font-bold text-xl mb-3">WP carey</p>
              <img class="h-16 w-16 rounded-full shadow-2xl" src="/user.png" alt="wpcarey"/>
              <p class="mt-3 text-gray-600 text-center">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!"</p>
          </div>

          <div class="carousel-focus hover:transition-all hover:duration-800 hover:transform-hover:scale-110 flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg w-72">
              <p class="text-yellow-400 font-bold text-xl mb-3">Hogan Lovells</p>
              <img class="h-16 w-16 rounded-full shadow-2xl" src="/user.png" alt="Hogan Lovells"/>
              <p class="mt-3 text-gray-600 text-center">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!"</p>
          </div>

          <div class="carousel-focus hover:transition-all hover:duration-800 hover:transform-hover:scale-110 flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg w-72">
              <p class="text-yellow-400 font-bold text-xl mb-3">MSSP</p>
              <img class="h-16 w-16 rounded-full shadow-2xl" src="/user.png" alt="MSSP"/>
              <p class="mt-3 text-gray-600 text-center">"Received Star of the Month Award For making MSSP Applications' interface look more beautiful. Client always appreciates my efforts and my work speaks when client appreciates with excellent feedback and mentions!"</p>
          </div>
          
          <div class="carousel-focus hover:transition-all hover:duration-800 hover:transform-hover:scale-110 flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg w-72">
              <p class="text-yellow-400 font-bold text-xl mb-3">chexsystems</p>
              <img class="h-16  w-16 rounded-full shadow-2xl" src="/user.png" alt="chexsystems"/>
              <p class="mt-3 text-gray-600 text-center">"Got Pat on the back Award For working on MSSP and ChexSystem and playing different roles as per project requirement.Got High Five award for extending valuable support in FIS ChexSystem project.!"</p>
          </div>

          <div class="carousel-focus hover:transition-all hover:duration-800 hover:transform-hover:scale-110 flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg w-72">
              <p class="text-yellow-400 font-bold text-xl mb-3">WP Carey </p>
              <img class="h-16 w-16 rounded-full shadow-2xl" src="/user.png" alt="wpcarey"/>
              <p class="mt-3 text-gray-600 text-center">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!"</p>
          </div>

          <div class="carousel-focus hover:transition-all hover:duration-800 hover:transform-hover:scale-110 flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg w-72">
              <p class="text-yellow-400 font-bold text-xl mb-3">Hogan Lovells</p>
              <img class="h-16 w-16 rounded-full shadow-2xl" src="/user.png" alt="Hogan Lovells"/>
              <p class="mt-3 text-gray-600 text-center">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!"</p>
          </div>
      </div>
  </div>
  {/* End Client's Feedback Section */}
      </>
    )
}