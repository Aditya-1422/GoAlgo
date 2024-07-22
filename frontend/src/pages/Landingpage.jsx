import img from '../assests/images/Analysis.jpg'
import Contract from '../assests/images/Contract.png'
import AlgoTrading from '../assests/images/AlgoTrading.png'

  const Landingpage = () => {
    return (
      <>
        {/* Background Section with Curve */}
        <div className="relative bg-[#004AAD] h-[500px] w-full flex flex-col justify-center items-center p-4">
          <div className="text-center">
              <h1 className="text-white text-5xl font-poppins font-bold mb-4">Trading with GoAlgo means</h1>
              <div className="flex items-baseline justify-center mb-4">
                  <h1 className="text-white text-5xl font-poppins font-bold">Trading with </h1>
                  <h1 className="text-black text-5xl font-poppins font-bold ml-2">Precision</h1>
              </div>
              <h4 className="text-white mb-4">Make your life simple with our fully automated & configurable Algorithms</h4>
              <div className='flex flex-col justify-center items-center'>
              <button
                  type="button"
                  className="flex items-center text-xl gap-2 px-6 py-3.5 text-base font-medium text-[#004AAD] bg-white border-2 border-[#004AAD] hover:bg-[#004AAD] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg transition duration-300 ease-in-out hover:shadow-lg">
                  Sign Up now
              </button>
              </div>
          </div>
          <div className="relative h-[250px] w-full bottom-0 curved-container">
        </div>
        </div>

  
        {/* Features */}
        <div className='flex flex-col justify-center items-center text-center mt-[100px]'>
          <h1 className='text-black text-[50px] font-bold font-poppins'>
            Our Features
          </h1>
          <h3 className='text-black text-[35px] font-semibold font-poppins'>
            Solutions of multiple problems in a single platform
          </h3>
        </div>
  
        <div className='flex justify-around mt-10'>
          <div className="flex flex-col items-center relative h-[340px] w-[470px] p-4">
            <img src={img} className='w-32 h-32 object-cover mb-4' alt="Trade Analytics" />
            <h1 className='text-black text-3xl font-poppins font-semibold mb-4'>
              Trade Analytics
            </h1>
            <div className="flex flex-col justify-center items-center flex-grow text-center">
              <h3 className="text-black font-poppins text-xl">
                Providing insightful analytics to help traders make informed decisions and optimize their trading performance
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-center relative h-[340px] w-[470px] p-4">
            <img src={Contract} className='w-32 h-32 object-cover mb-4' alt="Smart Order Execution" />
            <h1 className='text-black font-poppins font-semibold mb-4'>
              Smart Order Execution
            </h1>
            <div className="flex flex-col justify-center items-center flex-grow text-center">
              <h3 className="text-black font-poppins text-xl">
                Minimizing delays and optimizing trade execution speed on multi-leg order execution
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-center relative h-[340px] w-[470px] p-4">
            <img src={AlgoTrading} className='w-32 h-32 object-cover mb-4' alt="Algo Trading" />
            <h1 className='text-black font-poppins font-semibold mb-4'>
              Algo Trading
            </h1>
            <div className="flex flex-col justify-center items-center flex-grow text-center">
              <h3 className="text-black font-poppins text-xl">
                Empowering traders to implement sophisticated trading strategies through our platform
              </h3>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Landingpage;