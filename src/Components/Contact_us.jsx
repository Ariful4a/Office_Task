

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 border-2 border-red-600">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-xl p-8 border-8 border-red-600">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Ariful islam</h2>
        <div className="h-1 w-24 mx-auto bg-green-600 mb-8 rounded"></div>
        <form className="space-y-6 border-2 border-t-sky-700 p-4 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">First Name:</label>
             <input type="text" placeholder="Success" className="input input-success" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">Last Name:</label>
              <input type="text" placeholder="Success" className="input input-success" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">Phone Number:</label>
             <input type="text" placeholder="Success" className="input input-success" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">Email:</label>
              <input type="text" placeholder="Success" className="input input-success" />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">Message</label>
            <textarea placeholder="Accent" className="textarea textarea-accent w-full"></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="bg-orange-600 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
