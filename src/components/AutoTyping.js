import Typewriter from "typewriter-effect";

export default function AutoTyping() {
  return (
    <div class="text-pink-900">
      <Typewriter
        options={{
          strings: [
            "Developer",
            "Designer",
            "Tester",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 100,
          typeSpeed: 100,
        }}
      />
    </div>
  );
}
