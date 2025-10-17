
export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="grid grid-cols-5 grid-rows-1 md:flex-row md:justify-between md:items-start gap-8"> 
          {/* Logo */}
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <span className="text-2xl font-bold tracking-tight">RIKKEI EDU BLOG</span>
          </div>

          {/* About */}
          <div className="max-w-xs mb-6 md:mb-0">
            <div className="font-semibold mb-1">About</div>
            <div className="font-bold mb-1">Rareblocks</div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>
          </div>

          {/* Company */}
          <div className="mb-6 md:mb-0">
            <div className="font-semibold mb-2">Company</div>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Works</a></li>
              <li><a href="#" className="hover:underline">Career</a></li>
            </ul>
          </div>

          {/* Help */}
          <div className="mb-6 md:mb-0">
            <div className="font-semibold mb-2">Help</div>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Customer Support</a></li>
              <li><a href="#" className="hover:underline">Delivery Details</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="font-semibold mb-2">Resources</div>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Free eBooks</a></li>
              <li><a href="#" className="hover:underline">Development Tutorial</a></li>
              <li><a href="#" className="hover:underline">How to - Blog</a></li>
              <li><a href="#" className="hover:underline">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-6">
          <a href="#" className="text-gray-700 hover:text-black text-xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-black text-xl">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-black text-xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-black text-xl">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}