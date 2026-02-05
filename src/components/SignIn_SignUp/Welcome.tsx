import Image from "../../assets/background.jpg";
function Welcome() {
  function singUp() {
    const url = "/sign/up";
    window.location.assign(url);
  }
  return (
    <div className="bg-blue-700 h-screen w-screen">
      <img
        src={Image}
        className="w-full h-[410px] image-background"
        alt="image"
      ></img>
      <div className="flex flex-col gap-10 bg-blue-700">
        <span className="ml-5 mr-5 mt-10 block">
          <h2 className="text-5xl font-bold text-white">
            Stay connected with your friends and family
          </h2>
        </span>
        <span className="flex ml-5 mr-5">
          <i className="fa fa-shield text-green-500 text-4xl"></i>
          <h5 className="text-white text-[20px] font-bold">
            Fast and Secure Conversion
          </h5>
        </span>
        <span className="block ml-5 mr-5 pb-7">
          <button
            className="get-started w-full h-16 bg-white rounded-full  text-[20px] font-bold text-gray-700"
            onClick={singUp}
          >
            Get Started
          </button>
        </span>
      </div>
    </div>
  );
}
export default Welcome;
