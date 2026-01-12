import { Link } from "react-router-dom";

export function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg text-center bg-white p-8 rounded-lg border border-gray-200">
        <h1 className="mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-6">
          Your booking request has been received.  
          Our team will contact you within 24 hours.
        </p>

        <Link
          to="/"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
