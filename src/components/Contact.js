const Contact = () => {
  return (
    <div className="flex flex-col m-10 gap-10 items-center md:mt-20 w-full max-w-md md:max-w-[70vw] rounded-xl mx-auto py-10 bg-[#e2e8f0] shadow-2xl">
      <h1 className="text-4xl md:text-5xl font-[470] text-[#0c4a6e]">
        Contact us
      </h1>
      <div className="flex flex-col gap-5 w-full max-w-md mt-16 px-4 md:px-0">
        <input
          className="bg-emerald-50 py-3 px-4 font-medium placeholder-custom rounded-full outline-none"
          type="text"
          placeholder="Name"
        />
        <input
          className="bg-emerald-50 py-3 px-4 placeholder-custom rounded-full outline-none"
          type="email"
          placeholder="Email"
        />
        <input
          className="bg-emerald-50 py-3 px-4 placeholder-custom rounded-3xl pb-32 outline-none text-wrap max-w-full"
          type="text"
          placeholder="Message"
        />
        <button className="bg-[#06b6d4] text-white py-3 rounded-full font-poppins font-medium transition-all transform hover:scale-[0.98]">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
