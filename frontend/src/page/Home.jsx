import Navbar from "../Components/Navbar";
 import Time from '../assets/time.png'
import Copy from '../assets/copy.png'
import Device from '../assets/device.png';
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <>   
    <Navbar/>
     <section class="py-24 px-6 text-center max-w-4xl mx-auto">
   
    <h1 class="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
      Master Your Future with <span class="text-yellow-500">Precision Testing.</span>
    </h1>
    <p class="text-xl text-slate-500 mb-10 leading-relaxed">
      A seamless, secure, and stress-free environment for students and professionals to ace their certifications and exams.
    </p>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <button class="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
        Get Started for Free
      </button>
      <button class="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-yellow-400 transition-all">
        Take a Demo Exam
      </button>
    </div>
  </section>

  <section class="bg-slate-50 py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-16">Why professionals choose us</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform">
          <div class="w-14 h-14 bg-yellow-100 flex items-center justify-center rounded-xl mb-6">
            <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Real-time Analytics</h3>
          <p class="text-slate-500 leading-relaxed">Get instant feedback and detailed score breakdowns the second you submit your exam.</p>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform">
          <div class="w-14 h-14 bg-yellow-100 flex items-center justify-center rounded-xl mb-6">
            <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Anti-Cheat Proctored</h3>
          <p class="text-slate-500 leading-relaxed">Secure environment with browser locking and AI monitoring to ensure total integrity.</p>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform">
          <div class="w-14 h-14 bg-yellow-100 flex items-center justify-center rounded-xl mb-6">
            <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Any Device, Anywhere</h3>
          <p class="text-slate-500 leading-relaxed">Fully optimized for mobile, tablet, and desktop so you can study on the go.</p>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}

export default Home;
