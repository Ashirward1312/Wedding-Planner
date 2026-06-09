import React, { useState } from "react";

// 👑 100% WORKING IMAGES (Only your requested links + Ultra-Safe links)
const eventsData = [
  {
    id: 1,
    name: "Haldi Ceremony",
    // Aapki di hui TheKnot ki image
    image: "https://www.theknot.com/tk-media/images/b0e84a56-db35-4752-acdd-c8d39c2743cc",
    items: [
      { name: "Haldi Decor Setup", price: 15000, img: "https://partyone.com/img/category_landing/decorations/haldi_decorations.webp" }, // Aapka link
      { name: "Floral Backdrop", price: 18000, img: "https://cdn.togetherv.com/dreamy-floral-white-themed-decor-main_1701332692.webp" }, // Aapka link
      { name: "Seating Arrangement", price: 12000, img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=150&q=80" },
      { name: "Candid Photography", price: 25000, img: "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?auto=format&fit=crop&w=150&q=80" },
    ],
  },
  {
    id: 2,
    name: "Sangeet Night",
    image: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Stage Lighting", price: 30000, img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=150&q=80" },
      { name: "DJ & Sound System", price: 40000, img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=150&q=80" },
      { name: "LED Lighting", price: 20000, img: "https://i.pinimg.com/564x/a1/b9/56/a1b956479f2293613455a26b55289391.jpg" }, // Aapka link
      { name: "LED Dance Floor", price: 25000, img: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=150&q=80" },
    ],
  },
  {
    id: 3,
    name: "Royal Baraat",
    // Aapki di hui Google Encrypted Baraat image
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTStqmPg9P9XUI8Tqal1DkH2TWY7cCewQq2bg&s",
    items: [
      { name: "Premium Band Baja", price: 35000, img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=150&q=80" },
      { name: "White Horse / Chariot", price: 15000, img: "https://maduraievents.in/wp-content/uploads/2017/06/chariot-madurai-7.jpg" }, // Aapka link
      { name: "Cold Pyros & Fireworks", price: 20000, img: "https://i.pinimg.com/236x/20/b3/5d/20b35d17202b273954474a4181b79388.jpg" }, // Aapka link
      { name: "Groom Entry Decor", price: 18000, img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=150&q=80" },
    ],
  },
  {
    id: 4,
    name: "Wedding Ceremony",
    // Aapki di hui Bodycraft Wedding image
    image: "https://www.bodycraft.co.in/hubfs/unnamed%20-%202025-12-25T152552.860.webp",
    items: [
      { name: "Luxury Mandap Setup", price: 50000, img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=150&q=80" },
      { name: "Fresh Flower Decoration", price: 45000, img: "https://cdn.togetherv.com/dreamy-floral-white-themed-decor-main_1701332692.webp" }, // Aapka link
      { name: "Pandit Ji & Samagri", price: 11000, img: "https://www.aryasamajpanditji.com/wp-content/uploads/2018/10/Arya-Samaj-Pandit-Ji-Noida.webp" }, // Aapka link
      { name: "Cinematic Video/Photo", price: 75000, img: "https://lifestyleasia.com/ind/wp-content/uploads/2019/12/56786340_166425301032922_2593018590135917383_n-1024x1024.jpg" }, // Aapka link
    ],
  },
  {
    id: 5,
    name: "Grand Reception",
    // Replaced with Freepik image (used for reception and stage)
    image: "https://img.freepik.com/free-photo/romantic-big-table-special-moments_8353-9903.jpg?semt=ais_hybrid&w=740&q=80",
    items: [
      { name: "Grand Stage Setup", price: 60000, img: "https://img.freepik.com/free-photo/romantic-big-table-special-moments_8353-9903.jpg?semt=ais_hybrid&w=740&q=80" }, // now uses same Freepik image
      { name: "Premium Catering", price: 120000, img: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=150&q=80" },
      { name: "Live Music Band", price: 50000, img: "https://artistsimages.b-cdn.net/mitraas/mitraas-1.jpg?width=3840&quality=75&format=webp&flop=false" }, // Aapka link
      { name: "Luxury Ambience Light", price: 35000, img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=150&q=80" },
    ],
  },
  {
    id: 6,
    name: "Management & Extras",
    // Aapki di hui Management image
    image: "https://thevelvetweddings.com/wp-content/uploads/2019/02/artist-management1.jpg",
    items: [
      { name: "Premium Invitations", price: 20000, img: "https://www.vivahcards.com/wp-content/uploads/2024/07/Indian-Wedding-Card-20250-Super-Gloss-Premium-Invitation-Cards.jpg" }, // Aapka link
      { name: "Bridal Makeup", price: 25000, img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=150&q=80" },
      { name: "Guest Hospitality", price: 40000, img: "https://buytea.com/cdn/shop/articles/web_banner_12.webp?v=1727693952" }, // Aapka link
      { name: "Custom Return Gifts", price: 15000, img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=150&q=80" },
    ],
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState("shop");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [cart, setCart] = useState([]);
  
  // Custom Toast Notification State
  const [toastMsg, setToastMsg] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [formData, setFormData] = useState({ name: "", phone: "", address: "" });
  const [orderDetails, setOrderDetails] = useState(null);

  const getPackageTotal = (items) => items.reduce((total, item) => total + item.price, 0);
  const getCartTotal = () => cart.reduce((total, event) => total + getPackageTotal(event.items), 0);

  // Helper function to show notification without blocking the page
  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 3000);
  };

  const handleAddToCart = (event, e) => {
    e.stopPropagation();
    if (!cart.find(item => item.id === event.id)) {
      setCart([...cart, event]);
      showToast(`${event.name} Added to Cart! 🛒`);
    } else {
      showToast(`${event.name} is already in the Cart!`);
    }
  };

  const handleBuyNow = (event, e) => {
    e.stopPropagation();
    if (!cart.find(item => item.id === event.id)) {
      setCart([...cart, event]);
    }
    setSelectedEvent(null);
    setCurrentPage("checkout");
    // (Jumping fix): No window.scrollTo() here, so the page stays smooth
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      showToast("Cart is empty!");
      return;
    }
    const newOrder = {
      orderId: "INV-" + Math.floor(10000 + Math.random() * 90000),
      date: new Date().toLocaleDateString(),
      customer: formData,
      method: paymentMethod.toUpperCase(),
      items: cart,
      total: getCartTotal(),
      status: paymentMethod === "cash" ? "Pending" : "Paid Successfully"
    };
    setOrderDetails(newOrder);
    setCart([]); 
    setCurrentPage("invoice");
  };

  return (
    <div className="bg-[#FCF9F9] min-h-screen font-sans text-[#3B0B0B] pb-10 relative">
      
      {/* 🟢 NOTIFICATION TOAST (Smooth, No Page Jumping) */}
      {toastMsg && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-[#6B1414] text-white px-6 py-3 rounded-full shadow-2xl font-bold tracking-wide transition-all duration-300 print:hidden">
          {toastMsg}
        </div>
      )}

      {/* 🟢 TOP NAVBAR */}
      <nav className="bg-white border-b border-[#F2E6E6] sticky top-0 z-40 print:hidden shadow-sm">
        
      </nav>

      {/* 🟢 PROGRESS BAR (Only shows in Checkout & Invoice) */}
      {currentPage !== "shop" && (
        <div className="max-w-4xl mx-auto px-4 py-6 print:hidden">
          <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className={`flex flex-col items-center ${currentPage === "checkout" || currentPage === "invoice" ? "text-[#6B1414]" : "text-gray-400"}`}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold bg-current text-white mb-1">1</div>
              <span className="text-xs font-bold uppercase">Cart</span>
            </div>
            <div className="flex-1 border-t-2 border-dashed mx-2 border-gray-300"></div>
            <div className={`flex flex-col items-center ${currentPage === "checkout" || currentPage === "invoice" ? "text-[#6B1414]" : "text-gray-400"}`}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold bg-current text-white mb-1">2</div>
              <span className="text-xs font-bold uppercase">Payment</span>
            </div>
            <div className="flex-1 border-t-2 border-dashed mx-2 border-gray-300"></div>
            <div className={`flex flex-col items-center ${currentPage === "invoice" ? "text-green-600" : "text-gray-400"}`}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold bg-current text-white mb-1">3</div>
              <span className="text-xs font-bold uppercase">Invoice</span>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">

        {/* =========================================
            PAGE 1: SHOPPING PAGE
            ========================================= */}
        {currentPage === "shop" && (
          <>
            <div className="text-center mb-10 mt-4">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#6B1414] mb-4">Book Your Dream Wedding</h1>
              <p className="text-gray-500 text-lg">Explore premium packages, add to cart, and checkout seamlessly.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventsData.map(event => (
                <div key={event.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all overflow-hidden cursor-pointer flex flex-col" onClick={() => setSelectedEvent(event)}>
                  <div className="h-56 w-full overflow-hidden relative">
                    <img src={event.image} alt={event.name} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h2 className="text-2xl font-serif font-bold text-[#3B0B0B] mb-1">{event.name}</h2>
                    <p className="text-sm text-gray-500 mb-4">{event.items.length} Premium Services Included</p>
                    <div className="flex justify-between items-end mb-5 mt-auto">
                      <span className="text-xs font-bold uppercase text-gray-400">Total Price</span>
                      <span className="text-2xl font-extrabold text-[#6B1414]">₹{getPackageTotal(event.items).toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button type="button" className="flex-1 border-2 border-[#6B1414] text-[#6B1414] font-bold py-2.5 rounded-xl hover:bg-[#F9F0F0] transition-colors" onClick={(e) => handleAddToCart(event, e)}>Add to Cart</button>
                      <button type="button" className="flex-1 bg-[#6B1414] text-[#D4AF37] font-bold py-2.5 rounded-xl hover:bg-[#4A0E0E] transition-colors shadow-md" onClick={(e) => handleBuyNow(event, e)}>Buy Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick View Modal */}
            {selectedEvent && (
              <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
                <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[85vh]">
                  <div className="h-48 relative">
                    <img src={selectedEvent.image} alt="Header" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <button type="button" className="absolute top-4 right-4 bg-white/20 text-white rounded-full p-2 hover:bg-white hover:text-black transition-colors" onClick={() => setSelectedEvent(null)}>✕</button>
                    <h2 className="absolute bottom-4 left-6 text-3xl font-serif font-bold text-white">{selectedEvent.name}</h2>
                  </div>
                  <div className="p-6 overflow-y-auto bg-gray-50 flex-1">
                    <div className="space-y-3">
                      {selectedEvent.items.map((item, i) => (
                        <div key={i} className="flex items-center bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                          <img src={item.img} alt="item" className="w-16 h-16 rounded-xl object-cover mr-4" />
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-800">{item.name}</h4>
                            <span className="text-[#6B1414] font-bold">₹{item.price.toLocaleString("en-IN")}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-5 bg-white border-t flex justify-between items-center">
                    <div>
                      <span className="text-xs text-gray-500 uppercase font-bold block">Grand Total</span>
                      <div className="text-3xl font-extrabold text-[#6B1414]">₹{getPackageTotal(selectedEvent.items).toLocaleString("en-IN")}</div>
                    </div>
                    <button type="button" className="px-8 py-3 bg-[#6B1414] text-[#D4AF37] font-bold rounded-xl shadow-lg hover:bg-[#4A0E0E]" onClick={(e) => { handleBuyNow(selectedEvent, e); setSelectedEvent(null); }}>Proceed to Buy</button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* =========================================
            PAGE 2: PAYMENT & CHECKOUT PAGE
            ========================================= */}
        {currentPage === "checkout" && (
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 pb-20">
            {/* Form */}
            <div className="lg:w-2/3 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif font-bold mb-6 border-b pb-4">Secure Checkout</h2>
              <form onSubmit={handlePlaceOrder}>
                <h3 className="font-bold text-gray-700 mb-3">1. Contact & Venue Details</h3>
                <div className="space-y-4 mb-8">
                  <input required type="text" placeholder="Full Name" className="w-full p-3 border rounded-xl bg-gray-50 focus:bg-white outline-none focus:border-[#6B1414]" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  <input required type="tel" placeholder="Mobile Number" className="w-full p-3 border rounded-xl bg-gray-50 focus:bg-white outline-none focus:border-[#6B1414]" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  <textarea required placeholder="Full Venue Address" rows="3" className="w-full p-3 border rounded-xl bg-gray-50 focus:bg-white outline-none focus:border-[#6B1414]" onChange={(e) => setFormData({...formData, address: e.target.value})}></textarea>
                </div>

                <h3 className="font-bold text-gray-700 mb-3">2. Select Payment Method</h3>
                <div className="space-y-3 mb-8">
                  <label className={`block p-4 border rounded-2xl cursor-pointer transition-colors ${paymentMethod === "upi" ? "border-[#6B1414] bg-[#F9F0F0]" : ""}`}>
                    <div className="flex items-center">
                      <input type="radio" name="pay" checked={paymentMethod === "upi"} onChange={() => setPaymentMethod("upi")} className="w-5 h-5 accent-[#6B1414] mr-3" />
                      <span className="font-bold text-lg">UPI (GPay, PhonePe, Paytm)</span>
                    </div>
                    {paymentMethod === "upi" && <input required type="text" placeholder="Enter UPI ID (e.g. 9999999999@ybl)" className="mt-3 w-full p-3 border rounded-xl outline-none" />}
                  </label>
                  
                  <label className={`block p-4 border rounded-2xl cursor-pointer transition-colors ${paymentMethod === "card" ? "border-[#6B1414] bg-[#F9F0F0]" : ""}`}>
                    <div className="flex items-center">
                      <input type="radio" name="pay" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} className="w-5 h-5 accent-[#6B1414] mr-3" />
                      <span className="font-bold text-lg">Credit / Debit Card</span>
                    </div>
                    {paymentMethod === "card" && (
                      <div className="mt-3 flex gap-2">
                        <input required type="text" placeholder="Card Number" maxLength="16" className="w-1/2 p-3 border rounded-xl outline-none" />
                        <input required type="text" placeholder="MM/YY" className="w-1/4 p-3 border rounded-xl outline-none" />
                        <input required type="password" placeholder="CVV" maxLength="3" className="w-1/4 p-3 border rounded-xl outline-none" />
                      </div>
                    )}
                  </label>
                  
                  <label className={`block p-4 border rounded-2xl cursor-pointer transition-colors ${paymentMethod === "cash" ? "border-[#6B1414] bg-[#F9F0F0]" : ""}`}>
                    <div className="flex items-center">
                      <input type="radio" name="pay" checked={paymentMethod === "cash"} onChange={() => setPaymentMethod("cash")} className="w-5 h-5 accent-[#6B1414] mr-3" />
                      <span className="font-bold text-lg">Pay on Event (Cash)</span>
                    </div>
                  </label>
                </div>
                
                <button type="submit" className="w-full bg-[#6B1414] text-[#D4AF37] text-xl font-bold py-4 rounded-xl shadow-lg hover:bg-[#4A0E0E] transition-colors">
                  Pay ₹{getCartTotal().toLocaleString("en-IN")} & Confirm
                </button>
              </form>
            </div>

            {/* Cart Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 sticky top-24">
                <h3 className="font-bold text-lg mb-4 pb-2 border-b">Order Summary</h3>
                {cart.map((c, i) => (
                  <div key={i} className="flex justify-between mb-3 text-sm font-semibold text-gray-700">
                    <span>{c.name}</span>
                    <span>₹{getPackageTotal(c.items).toLocaleString("en-IN")}</span>
                  </div>
                ))}
                <div className="mt-6 pt-4 border-t-2 border-dashed border-gray-300">
                  <div className="flex justify-between items-center text-xl font-bold text-[#6B1414]">
                    <span>Total Amount</span>
                    <span>₹{getCartTotal().toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================
            PAGE 3: INVOICE / SUCCESS PAGE
            ========================================= */}
        {currentPage === "invoice" && orderDetails && (
          <div className="max-w-3xl mx-auto pb-20">
            <div className="text-center mb-8 print:hidden">
              <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-4xl font-bold">✓</div>
              <h1 className="text-4xl font-serif font-bold text-gray-800">Booking Confirmed!</h1>
              <div className="mt-6 flex justify-center space-x-4">
                <button type="button" onClick={() => window.print()} className="bg-[#6B1414] text-[#D4AF37] px-6 py-3 rounded-xl font-bold shadow-md hover:bg-[#4A0E0E]">Download Bill PDF</button>
                <button type="button" onClick={() => setCurrentPage("shop")} className="border-2 border-gray-400 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-100">Back to Home</button>
              </div>
            </div>

            {/* Printable Bill Paper */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200 print:shadow-none print:border-none relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F9F0F0] rounded-bl-full -z-10"></div>
              
              <div className="flex justify-between items-end border-b-4 border-[#6B1414] pb-6 mb-8">
                <div>
                  <h2 className="text-4xl font-serif font-black text-[#6B1414] uppercase tracking-widest">INVOICE</h2>
                  <p className="text-gray-500 font-mono mt-1 text-sm"># {orderDetails.orderId}</p>
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-bold text-gray-800">Royal Weddings</h3>
                  <p className="text-gray-500 text-sm">contact@royalweddings.in</p>
                  <p className="text-gray-500 text-sm">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex justify-between mb-10 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase mb-1">Billed To:</p>
                  <h4 className="font-bold text-lg text-gray-800">{orderDetails.customer.name}</h4>
                  <p className="text-sm text-gray-600">{orderDetails.customer.phone}</p>
                  <p className="text-sm text-gray-600 max-w-[200px] mt-1">{orderDetails.customer.address}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600"><strong>Date:</strong> {orderDetails.date}</p>
                  <p className="text-sm text-gray-600 mt-1"><strong>Payment Mode:</strong> {orderDetails.method}</p>
                  <p className={`text-sm font-bold mt-2 px-3 py-1 inline-block rounded-lg ${orderDetails.status === "Pending" ? "bg-orange-100 text-orange-600" : "bg-green-100 text-green-600"}`}>
                    Status: {orderDetails.status}
                  </p>
                </div>
              </div>

              <table className="w-full text-left mb-8">
                <thead>
                  <tr className="border-b-2 border-gray-200 text-gray-500">
                    <th className="py-3 font-bold uppercase text-xs">Description</th>
                    <th className="py-3 font-bold uppercase text-xs text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {orderDetails.items.map((pkg, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-4">
                        <span className="font-bold text-lg text-gray-800">{pkg.name} Package</span>
                        <div className="text-sm text-gray-500 mt-1">
                          {pkg.items.map(sub => sub.name).join(", ")}
                        </div>
                      </td>
                      <td className="py-4 text-right font-bold text-gray-800 text-lg">
                        ₹{getPackageTotal(pkg.items).toLocaleString("en-IN")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex justify-end">
                <div className="w-full md:w-1/2 bg-[#F9F0F0] p-6 rounded-2xl border border-[#E8D4D4]">
                  <div className="flex justify-between mb-2 text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-bold">₹{orderDetails.total.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between mb-4 text-gray-600">
                    <span>Taxes (Included)</span>
                    <span className="font-bold text-green-600">₹0</span>
                  </div>
                  <div className="flex justify-between text-2xl font-black text-[#6B1414] border-t border-[#E8D4D4] pt-4">
                    <span>Grand Total</span>
                    <span>₹{orderDetails.total.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center text-gray-400 text-sm border-t border-gray-200 pt-6">
                This is an electronically generated invoice. Thank you for choosing Royal Weddings!
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}