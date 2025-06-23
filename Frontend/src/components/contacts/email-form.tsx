import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useState } from 'react';

function ContactForm() {
  const [state, handleSubmit] = useForm("myzjdrwd");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);

      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 4000); // show message for 4 seconds

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <div className="flex flex-col items-center justify-center bg-[#0f172a] border border-black rounded-xl p-6 w-[90vw] max-w-md shadow-md">
      {showSuccess ? (
        <p className="text-green-400 text-lg mt-4 text-center xl:text-2xl">Thanks for your message!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 xl:gap-9 w-full">
          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-300 mb-1 xl:text-2xl">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="bg-[#0f172a] text-white px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-300 mb-1 xl:text-2xl">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="bg-[#0f172a] text-white px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-blue-500 text-white py-2 px-6 rounded-md transition-all duration-1000 hover:bg-blue-600 lg:hover:shadow-[0_0_15px_#00f2ff] lg:hover:cursor-pointer font-semibold disabled:opacity-50"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;