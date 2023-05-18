export default function Footer() {
  return (
    <>
      {/* Start footer */}
      <div class="w-full bg-gray-800">
        <div class="container mx-auto px-16 py-5 flex items-center justify-between">
          <div class="flex items-center text-2xl font-bold">
            <img class="w-8" src="/logo.png" alt="logo" />
            about<span class="text-yellow-400">Me</span>
          </div>
          <span class="hidden md:block font-medium text-white">
            © 2023 aboutMe. Design with ♥️ by Sangeeta Panwar.
          </span>
          <div class="flex gap-2">
            <img class="w-4 cursor-pointer" src="/facebook.png" alt="" />
            <img class="w-4 cursor-pointer" src="/instagram.png" alt="" />
            <img class="w-4 cursor-pointer" src="/twitter.png" alt="" />
            <img class="w-4 cursor-pointer" src="/linkedin.png" alt="" />
          </div>
        </div>
      </div>
      {/* End footer */}
    </>
  );
}
