import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export function ThankYou() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-neutral-950 text-white px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full"></div>

      {/* Content Card */}
      <div className="relative max-w-lg text-center bg-neutral-900 p-12 rounded-2xl border border-neutral-800 shadow-2xl backdrop-blur">

        {/* Animated Check Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle
            size={70}
            className="text-green-400 animate-[bounce_1.5s_ease-in-out_infinite]"
          />
        </div>

        <h1 className="text-4xl font-semibold mb-4 tracking-tight">
          Thank You!
        </h1>

        <p className="text-neutral-400 mb-10 text-lg">
          Your booking request has been received.  
          Our team will contact you within <span className="text-white">24 hours</span>.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">

          <Link
            to="/"
            className="bg-white text-black px-8 py-4 rounded-xl hover:scale-[1.03] transition"
          >
            Back to Home
          </Link>

          <Link
            to="/gallery"
            className="border border-neutral-700 px-8 py-4 rounded-xl hover:border-white hover:text-white transition"
          >
            View Our Work
          </Link>

        </div>

      </div>

      {/* Floating decoration dots */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-24 right-24 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>

    </div>
  );
}