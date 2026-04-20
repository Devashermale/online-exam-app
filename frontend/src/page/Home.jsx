import Navbar from "../Components/Navbar";
 import Time from '../assets/time.png'
import Copy from '../assets/copy.png'
import Device from '../assets/device.png';
function Home() {
  return (
    <>
      <div className=" min-h-screen bg-amber-400">
        <div className="">
          <Navbar />
          <div className=" flex items-center justify-center ">
            <div className="pt-14">
              <h1 className=" font-bold text-4xl text-center">Master Your Future with Precision Testing.</h1>
              <h4 className=" text-3xl font-medium text-center ml-20 mr-20 mb-14">
                A seamless, secure, and stress-free environment for students and
                professionals to ace their certifications and exams
              </h4>
              <div  className=" flex flex-2 items-center justify-center">
                <button className=" m-2 border-2 p-2 rounded-md">Get Started for Free</button>
                <button  className=" m-2 border-2 p-2 rounded-md" >Take a Demo Exam</button>
              </div>
            </div>
          </div>
          <div className=" border-2 m-2">
            <h1 className=" text-3xl font-bold m-2">Why Use Us </h1>
            <div className=" grid grid-cols-3 m-8"> 
              <div className=" flex items-center justify-center flex-col size-70">
                <img src={Time} alt="" className="size-25"  />
                <h1 className=" text-2xl  font-bold">Real-time Analytics</h1>
                <p className="">Get instant feedback and detailed score breakdowns the second you submit</p>
              </div>
              <div className=" flex items-center justify-center flex-col size-70">
                <img src={Copy} alt="" className=""  />
                <h1 className=" text-2xl text-center font-bold">Anti-Cheat Proctored</h1>
                <p className=" ">Secure environment with browser locking and AI monitoring to ensure integrity.</p>
              </div>
              <div className=" flex items-center justify-center flex-col size-70">
                <img src={Device} alt="" />
                <h1 className=" text-2xl text-center font-bold">Any Device, Anywhere</h1>
                <p className=" ">Optimized for mobile,tablet,and desktop so you can study on the go.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
