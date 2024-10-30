import { Navbar } from "@components/custom/navbar";

export default function Home() {
  return (
    <div className="h-full min-h-screen w-full flex flex-col item-center  bg-black ">
      <Navbar />
      <img
        // src="/istockphoto-185835604-612x612.jpg"
        src="/Happy-Diwali-HD-Desktop-Wallpaper-25455.jpg"
        alt="Diwali celebration"
        className="w-screen max-h-screen  "
      />
    </div>
  );
}
