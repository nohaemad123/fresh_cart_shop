export default function NewsLetter() {
  return (
    <>
      <div className="bg-primary-100/50 py-20">
        <div className="container">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-semibold">
              Subscribe to our newsletter
            </h2>
            <p className="text-gray-400">
              Stay updated with our latest offers, recipes and health tips
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:w-50 m-auto mt-5 justify-center lg:space-y-0">
            <input
              type="text"
              className="form-control md:h-10 bg-white md:min-w-100 rounded-tr-none rounded-br-none"
            />
            <button className="bg-primary-600 px-4 md:h-10 text-white text-lg border-transparent rounded-tr-md rounded-br-md font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
