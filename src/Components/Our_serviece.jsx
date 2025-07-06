import img1 from '../assets/img5.jpg'
import img2 from '../assets/img6.jpg'

const Our_serviece = () => {
  return (
    <section className='max-w-6xl mx-auto my-10'>
      {/* main perent  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* left side  */}
        <div>
          <div>
            <img className='rounded-2xl' src={img1} alt="" />
          </div>
          <div>
            <h2 className="text-4xl font-black mt-8 mb-5">UPHOLSTERY CLEANING</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              laudantium in perspiciatis obcaecati cumque, libero culpa ipsa
              tempore quis quod architecto voluptatum, ex facere odit magnam.
              Illo voluptates laboriosam ut perspiciatis, <br /> rem aut
              consequuntur blanditiis beatae mollitia fugiat aspernatur est
              voluptas cum distinctio quia minus, sint quibusdam neque ab quasi.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              laudantium in perspiciatis obcaecati cumque, libero culpa ipsa
              tempore quis quod architecto voluptatum, ex facere odit magnam.
              Illo voluptates laboriosam ut perspiciatis, <br /> rem aut
              consequuntur blanditiis beatae mollitia fugiat aspernatur est
              voluptas cum distinctio quia minus, sint quibusdam neque ab quasi.
            </p>
            <div>
              <button className="btn w-50 h-12 font-black text-xl btn-outline border-0 border-b-6 mt-8 border-t-2 border-l-4 border-l-amber-400 border-r-4 border-r-amber-400 border-orange-700">
                Book  now
              </button>
            </div>
          </div>
        </div>
        {/* right side  */}
         <div className='flex flex-col-reverse'>
          <div>
            <img className='rounded-2xl' src={img2} alt="" />
          </div>
          <div className='mb-8'>
            <h2 className="text-4xl font-black mt-8 mb-5">UPHOLSTERY CLEANING</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              laudantium in perspiciatis obcaecati cumque, libero culpa ipsa
              tempore quis quod architecto voluptatum, ex facere odit magnam.
              Illo voluptates laboriosam ut perspiciatis, <br /> rem aut
              consequuntur blanditiis beatae mollitia fugiat aspernatur est
              voluptas cum distinctio quia minus, sint quibusdam neque ab quasi.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              laudantium in perspiciatis obcaecati cumque, libero culpa ipsa
              tempore quis quod architecto voluptatum, ex facere odit magnam.
              Illo voluptates laboriosam ut perspiciatis, <br /> rem aut
              consequuntur blanditiis beatae mollitia fugiat aspernatur est
              voluptas cum distinctio quia minus, sint quibusdam neque ab quasi.
            </p>
            <div>
              <button className="btn w-50 h-12 font-black text-xl btn-outline border-0 border-b-6 mt-8 border-t-2 border-l-4 border-l-amber-400 border-r-4 border-r-amber-400 border-orange-700">
                Book  now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Our_serviece;
