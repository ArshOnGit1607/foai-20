import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ShoppingCart, Heart, Star, Zap, Users, Award } from "lucide-react";

export default function Index() {
  const [addedToCart, setAddedToCart] = useState<string | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleAddToCart = (productId: string) => {
    setAddedToCart(productId);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-48 -mb-48"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-up">
              <div className="inline-block mb-4 px-3 py-1 bg-blue-100 rounded-full">
                <p className="text-sm font-semibold text-blue-700">
                  🎓 Official College Merchandise
                </p>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Wear Your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  College Pride
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover exclusive college hoodies, t-shirts, and accessories
                designed by students, for students. Limited editions drop
                weekly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={() => setIsAuthOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Sign In with College ID
                </button>
                <Link
                  to="/products"
                  className="px-8 py-4 border-2 border-gray-300 text-gray-900 font-bold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Browse Shop
                </Link>
              </div>

              <div className="flex items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>2000+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-purple-600" />
                  <span>Free Shipping</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden md:block">
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">👕</div>
                    <p className="text-2xl font-bold">Premium Merch</p>
                    <p className="text-blue-100">Designed by students</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-lg border border-gray-200 max-w-xs">
                <p className="text-sm font-semibold text-gray-900">
                  Limited Edition Drop
                </p>
                <p className="text-xs text-gray-500">New designs every week</p>
              </div>
              <div className="absolute -top-8 -right-8 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                <div className="flex gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  5/5 from 500+ reviews
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Auth Modal */}
        {isAuthOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-8 animate-slide-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign In</h2>
              <p className="text-gray-600 mb-6">
                Enter your college ID to access exclusive merchandise
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    College ID
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., CS2024001"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@college.edu"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300">
                Sign In
              </button>

              <button
                onClick={() => setIsAuthOpen(false)}
                className="w-full mt-3 px-6 py-3 border border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Only current students, alumni, and faculty can access
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked essentials for every college student. From classic
              hoodies to exclusive designs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-6xl relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  In Stock
                </div>
                🎓
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Classic College Hoodie
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Comfortable 100% cotton hoodie with embroidered college logo
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-2">(234)</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">$49.99</p>
                    <p className="text-xs text-gray-500">Multiple colors</p>
                  </div>
                  <button
                    onClick={() => handleAddToCart("hoodie")}
                    className="p-3 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
                {addedToCart === "hoodie" && (
                  <p className="text-xs text-green-600 font-semibold">
                    ✓ Added to cart!
                  </p>
                )}
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="h-64 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-6xl relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Limited
                </div>
                👕
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Premium T-Shirt
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Soft premium cotton tee with unique college-exclusive print
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-2">(189)</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">$24.99</p>
                    <p className="text-xs text-red-500">Only 45 left</p>
                  </div>
                  <button
                    onClick={() => handleAddToCart("tshirt")}
                    className="p-3 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
                {addedToCart === "tshirt" && (
                  <p className="text-xs text-green-600 font-semibold">
                    ✓ Added to cart!
                  </p>
                )}
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="h-64 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-6xl relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  New
                </div>
                🧢
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Branded Cap
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Classic adjustable cap perfect for any season or occasion
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-2">(567)</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">$19.99</p>
                    <p className="text-xs text-gray-500">Multiple colors</p>
                  </div>
                  <button
                    onClick={() => handleAddToCart("cap")}
                    className="p-3 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-600 hover:text-white transition-all"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
                {addedToCart === "cap" && (
                  <p className="text-xs text-green-600 font-semibold">
                    ✓ Added to cart!
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Releases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Limited Edition Releases
              </h2>
              <p className="text-xl text-gray-600">
                New designs drop every week. Don't miss out!
              </p>
            </div>
            <div className="hidden md:block text-5xl">⚡</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Release 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="h-56 bg-gradient-to-r from-indigo-500 to-indigo-700 flex items-center justify-center text-6xl">
                🎨
              </div>
              <div className="p-8">
                <div className="inline-block mb-4 px-3 py-1 bg-indigo-100 rounded-full">
                  <p className="text-xs font-bold text-indigo-700">
                    DROPPING MONDAY
                  </p>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Retro Campus Collection
                </h3>
                <p className="text-gray-600 mb-6">
                  Vintage-inspired designs celebrating campus life. Only 200
                  pieces available. First come, first served!
                </p>
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-indigo-600">
                    $54.99
                  </div>
                  <button className="flex-1 px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-all">
                    Notify Me
                  </button>
                </div>
              </div>
            </div>

            {/* Release 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="h-56 bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-6xl">
                💫
              </div>
              <div className="p-8">
                <div className="inline-block mb-4 px-3 py-1 bg-pink-100 rounded-full">
                  <p className="text-xs font-bold text-pink-700">
                    AVAILABLE NOW
                  </p>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Student Stories Collection
                </h3>
                <p className="text-gray-600 mb-6">
                  Featuring designs from student artists. Each purchase supports
                  the artist community. Limited stock!
                </p>
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-pink-600">$39.99</div>
                  <button
                    onClick={() => handleAddToCart("release")}
                    className="flex-1 px-6 py-3 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700 transition-all"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Donate Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  About CollegeHub
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-4">
                  We started CollegeHub with a simple mission: provide students
                  with access to high-quality, authentic college merchandise
                  without the markup.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Every design is created by our community of talented student
                  artists, and a portion of every sale goes directly back to
                  support college initiatives.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    2000+
                  </div>
                  <p className="text-gray-700 font-semibold">Happy Students</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    150+
                  </div>
                  <p className="text-gray-700 font-semibold">Unique Designs</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    $50K+
                  </div>
                  <p className="text-gray-700 font-semibold">Donated Back</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-6">
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    4.9★
                  </div>
                  <p className="text-gray-700 font-semibold">Rating</p>
                </div>
              </div>
            </div>

            {/* Right Content - Donate */}
            <div>
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-12 border-2 border-red-200">
                <div className="text-6xl mb-6">❤️</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Support Our College
                </h3>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Our mission extends beyond merchandise. We're committed to
                  making a positive impact on campus through scholarships,
                  wellness programs, and student initiatives.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">
                      Scholarship funds for deserving students
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">
                      Mental health & wellness programs
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">
                      Student club funding & events
                    </span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                  ❤️ Make a Donation
                </button>

                <p className="text-sm text-gray-600 text-center mt-4">
                  100% of donations go directly to college initiatives
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Represent Your College?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students already rockin' exclusive college merch.
            New designs every week!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:shadow-xl transition-all duration-300"
            >
              Shop Now
            </Link>
            <button
              onClick={() => setIsAuthOpen(true)}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Sign In with College ID
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
