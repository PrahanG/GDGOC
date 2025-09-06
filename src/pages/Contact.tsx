import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Contact Us
          </h1>

          <div className="bg-white shadow-xl rounded-xl p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions about GDGOC GRIET? Want to join us or collaborate? Reach out to us!
            </p>

            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl">
                  📧
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">contact@gdgocgriet.org</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl">
                  📱
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">+91 98765 43210</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">GRIET Campus, Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white py-6 text-center text-gray-500 text-sm">
        <p>© 2025 GDGOC GRIET. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
