import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export function ThankYou() {
  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#F8F5F0]
        px-6
        py-24
      "
    >

      {/* CONTENT CARD */}
      <div
        className="
          max-w-2xl
          w-full
          bg-white
          border border-[#D8CEC2]
          rounded-[32px]
          p-12
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          text-center
        "
      >

        {/* ICON */}
        <div className="flex justify-center mb-8">

          <CheckCircle
            size={72}
            className="text-[#213A5C]"
          />

        </div>

        {/* TITLE */}
        <h1
          className="
            text-5xl
            md:text-6xl
            font-semibold
            leading-tight
            mb-6
            text-[#2B2B2B]
          "
        >
          Thank You For

          <span className="block text-[#213A5C]">
            Your Enquiry
          </span>

        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            text-[#5E564F]
            text-lg
            leading-relaxed
            max-w-xl
            mx-auto
            mb-10
          "
        >
          We've received your project details and a member
          of our team will be in touch shortly to discuss
          your renovation goals, budget and timeline.
        </p>

        {/* WHAT HAPPENS NEXT */}
        <div
          className="
            bg-[#F8F5F0]
            border border-[#D8CEC2]
            rounded-[24px]
            p-8
            mb-10
            text-left
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-[#74695E]
              mb-5
            "
          >
            What Happens Next
          </p>

          <div
            className="
              space-y-4
              text-[#5E564F]
            "
          >

            <p>✓ We review your enquiry</p>

            <p>✓ A team member contacts you</p>

            <p>✓ We discuss project requirements</p>

            <p>✓ We prepare your consultation</p>

          </div>

        </div>

        {/* BUTTONS */}
        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >

          <Link
            to="/"
            className="
              bg-[#213A5C]
              text-white
              px-8
              py-4
              rounded-xl
              hover:opacity-90
              transition
            "
          >
            Return Home
          </Link>

          <Link
            to="/gallery"
            className="
              border border-[#D8CEC2]
              text-[#213A5C]
              px-8
              py-4
              rounded-xl
              hover:bg-[#213A5C]
              hover:text-white
              transition
            "
          >
            Explore Projects
          </Link>

        </div>

      </div>

    </div>
  );
}