import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-purple-950 text-white py-10 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {/* Logo and About */}
    <div>
      <h2 className="text-2xl font-bold text-white"><span className='text-orange-400'>e</span>comm</h2>
      <p className="mt-2 text-sm text-gray-300">
        Your one-stop shop for the latest fashion, gadgets, and more.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="font-semibold mb-2">Quick Links</h3>
      <ul className="space-y-1 text-sm text-gray-300">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Women</a></li>
        <li><a href="#">Electronics</a></li>
      </ul>
    </div>

    {/* Customer Service */}
    <div>
      <h3 className="font-semibold mb-2">Customer Service</h3>
      <ul className="space-y-1 text-sm text-gray-300">
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Returns</a></li>
        <li><a href="#">Shipping Info</a></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>

    {/* Newsletter and Social */}
    <div>
      <h3 className="font-semibold mb-2">Stay in the loop</h3>
      <form className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <input
          type="email"
          placeholder="Your email"
          className="px-3 py-1 bg-amber-50 rounded-md text-black w-full sm:w-auto"
        />
        <button className="bg-orange-400 hover:bg-orange-500 px-3 py-1 rounded-md text-white transition">
          Subscribe
        </button>
      </form>
      <div className="mt-4 flex gap-4">
        <a href="#" className="hover:text-orange-300">Facebook</a>
        <a href="#" className="hover:text-orange-300">Instagram</a>
        <a href="#" className="hover:text-orange-300">Twitter</a>
      </div>
    </div>
  </div>

  {/* Bottom Line */}
  <div className="mt-8 border-t border-purple-600 pt-4 text-center text-sm text-gray-400">
    &copy; {new Date().getFullYear()} ecomm. All rights reserved.
  </div>
</footer>

  )
}

export default Footer
