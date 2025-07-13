function Addr_card({num}) {
  return (
    <>
      <div className="p-4 m-4 max-w-sm mx-auto bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl border border-blue-300">
        <div className="md:flex">
          <div className="p-4 flex-grow">
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 text-gray-700 mr-3" />
              <h2 className="text-xl font-bold text-gray-800">name</h2>
            </div>

            <p className="text-gray-600 text-sm mb-2">distance</p>
            <p> {num} </p>

            <div className="text-gray-700 text-base mb-2">
              <p>Seven heights, 4 floor, Buttibori, Nagpur, India</p>
              <p>+919302585476</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addr_card;
