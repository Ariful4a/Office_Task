import img1 from '../assets/img.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

const Task_06 = () => {
  return (
    <section className='my-10 max-w-6xl mx-auto'>
      {/* main parent */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* left child */}
        <div>
            <div className='grid grid-cols-2'>
                <img className='w-[320px] h-[220px] rounded-l-2xl' src={img1} alt="" />
                <img className='w-[320px] h-[220px] rounded-r-2xl' src={img2} alt="" />
            </div>
            <div className='mt-5 flex justify-center items-center'>
                <img className='w-[320px] border-8 border-red-600 rounded-2xl' src={img3} alt="" />
            </div>
        </div>
        {/* right child  */}
        <div>
            <h1 className="text-4xl font-black focus:bg-amber-400">Who We Are</h1>
            <p className='mt-4 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae nulla fuga voluptatum blanditiis et soluta cum itaque in hic dolorum placeat nihil temporibus, id quae non! Minus, assumenda obcaecati! Neque soluta natus dolorem, autem magnam quaerat voluptates laudantium, dolore tempore aperiam assumenda voluptatem odio porro fuga reprehenderit nihil accusamus?</p>
            
            <br />
           <p className='text-gray-600'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ut harum dolore quas delectus ab nemo hic. Cum, minus accusamus! Enim omnis culpa facilis quod ab illum aut consequatur pariatur, a dolores in eum obcaecati officia beatae numquam! Libero laudantium odit quod pariatur incidunt nam aliquam qui cupiditate! Quam, dignissimos.</p>
            <div>
                 <button className="btn w-50 h-12 hover:bg-orange-600 font-black text-xl btn-outline border-0 border-b-6 mt-8 border-t-2 border-l-4 border-l-amber-400 border-r-4 border-r-amber-400 border-orange-700">Contact us</button>
            </div>
        </div>
       
      </div>
    </section>
  );
};

export default Task_06;
