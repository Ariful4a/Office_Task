import './Banner.css';

const Banner = () => {
  return (
    <div className="relative h-[90vh] flex items-center justify-center text-white background">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-md px-4">
        <h1 className="mb-5 text-5xl font-bold leading-15">Welcome to my <span className='text-red-600 font-black'>Office Task</span></h1>
        <p className="mb-5">
         Thaks for everything
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  );
};

export default Banner;
