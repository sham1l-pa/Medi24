function MainComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeTab, setActiveTab] = useState("home");
  const [isAgent, setIsAgent] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [selectedProfileTab, setSelectedProfileTab] = useState("account");
  const items = [
    {
      id: 1,
      name: "Paracetamol",
      price: 149,
      type: "medicine",
      category: "painkillers",
    },
    {
      id: 2,
      name: "Insulin Syringes",
      price: 299,
      type: "supply",
      category: "diabetes",
    },
    {
      id: 3,
      name: "Bandages",
      price: 199,
      type: "supply",
      category: "firstaid",
    },
    {
      id: 4,
      name: "Dolo",
      price: 299,
      type: "medicine",
      category: "painkillers",
    },
    { id: 5, name: "Crocin", price: 99, type: "medicine", category: "fever" },
    {
      id: 6,
      name: "Vicks VapoRub",
      price: 149,
      type: "medicine",
      category: "cold",
    },
    {
      id: 7,
      name: "Zandu Balm",
      price: 79,
      type: "medicine",
      category: "painkillers",
    },
    {
      id: 8,
      name: "Cotton Rolls",
      price: 89,
      type: "supply",
      category: "firstaid",
    },
    {
      id: 9,
      name: "Betadine",
      price: 129,
      type: "supply",
      category: "firstaid",
    },
    {
      id: 10,
      name: "Moov Spray",
      price: 199,
      type: "medicine",
      category: "painkillers",
    },
    {
      id: 11,
      name: "Disprin",
      price: 49,
      type: "medicine",
      category: "painkillers",
    },
    {
      id: 12,
      name: "Surgical Masks",
      price: 149,
      type: "supply",
      category: "protection",
    },
    {
      id: 13,
      name: "Blood Pressure Monitor",
      price: 1999,
      type: "supply",
      category: "devices",
    },
    {
      id: 14,
      name: "Glucose Meter",
      price: 999,
      type: "supply",
      category: "diabetes",
    },
    {
      id: 15,
      name: "Thermometer",
      price: 199,
      type: "supply",
      category: "devices",
    },
    {
      id: 16,
      name: "Vitamin C",
      price: 299,
      type: "medicine",
      category: "vitamins",
    },
    {
      id: 17,
      name: "Calcium Tablets",
      price: 249,
      type: "medicine",
      category: "vitamins",
    },
    {
      id: 18,
      name: "Hand Sanitizer",
      price: 99,
      type: "supply",
      category: "protection",
    },
    {
      id: 19,
      name: "First Aid Kit",
      price: 499,
      type: "supply",
      category: "firstaid",
    },
    {
      id: 20,
      name: "Heating Pad",
      price: 399,
      type: "supply",
      category: "devices",
    },
    {
      id: 21,
      name: "Whisper Ultra Clean",
      price: 149,
      type: "supply",
      category: "menstruation",
    },
    {
      id: 22,
      name: "Stayfree Secure XL",
      price: 179,
      type: "supply",
      category: "menstruation",
    },
    {
      id: 23,
      name: "Tampons Regular",
      price: 299,
      type: "supply",
      category: "menstruation",
    },
    {
      id: 24,
      name: "Menstrual Cup",
      price: 999,
      type: "supply",
      category: "menstruation",
    },
    {
      id: 25,
      name: "Durex Extra Time",
      price: 249,
      type: "supply",
      category: "protection",
    },
    {
      id: 26,
      name: "Durex Air Ultra Thin",
      price: 199,
      type: "supply",
      category: "protection",
    },
    {
      id: 27,
      name: "Moods All Night",
      price: 149,
      type: "supply",
      category: "protection",
    },
    {
      id: 28,
      name: "Panty Liners",
      price: 99,
      type: "supply",
      category: "menstruation",
    },
  ];
  const [checkoutStep, setCheckoutStep] = useState("cart");
  const [deliveryType, setDeliveryType] = useState("quick");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState({ lat: 0, lng: 0 });
  const [savedAddresses] = useState([
    {
      id: 1,
      type: "Home",
      address: "123 Main St, Apartment 4B, City, State 12345",
    },
    {
      id: 2,
      type: "Work",
      address: "456 Office Park, Suite 100, City, State 12345",
    },
  ]);
  const [savedPayments] = useState([
    { id: 1, type: "Credit Card", last4: "4242", expiry: "12/24" },
    { id: 2, type: "UPI", id: "user@upi" },
  ]);
  const renderCustomerView = () => (
    <>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={() =>
            setSelectedCategory(
              selectedCategory === "medicine" ? null : "medicine",
            )
          }
          className={`bg-white p-4 rounded-lg shadow flex items-center ${selectedCategory === "medicine" ? "ring-2 ring-[#2E7D32]" : ""}`}
        >
          <div className="bg-[#E8F5E9] p-3 rounded-full">
            <i className="fas fa-pills text-[#2E7D32] text-xl"></i>
          </div>
          <span className="ml-3">Medicines</span>
        </button>
        <button
          onClick={() =>
            setSelectedCategory(selectedCategory === "supply" ? null : "supply")
          }
          className={`bg-white p-4 rounded-lg shadow flex items-center ${selectedCategory === "supply" ? "ring-2 ring-[#2E7D32]" : ""}`}
        >
          <div className="bg-[#E8F5E9] p-3 rounded-full">
            <i className="fas fa-syringe text-[#2E7D32] text-xl"></i>
          </div>
          <span className="ml-3">Medical Supplies</span>
        </button>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {selectedCategory
            ? selectedCategory === "medicine"
              ? "Medicines"
              : "Medical Supplies"
            : "Popular Items"}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-h-[600px] overflow-y-auto">
          {items
            .filter(
              (item) => !selectedCategory || item.type === selectedCategory,
            )
            .map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow">
                <img
                  src={`/${item.name.toLowerCase().replace(/ /g, "-")}.jpg`}
                  alt={`${item.name} - ${item.type === "medicine" ? "Medical tablet or syrup" : "Medical supply item"}`}
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm">
                  {item.type === "medicine"
                    ? "100mg - 30 tablets"
                    : "Pack of 10"}
                </p>
                <p className="text-[#2E7D32] font-bold mt-2">₹{item.price}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="w-full bg-[#2E7D32] text-white py-2 rounded mt-2"
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-white rounded-lg shadow">
        <div className="text-center p-4">
          <i className="fas fa-truck text-[#2E7D32] text-3xl mb-2"></i>
          <h3 className="font-semibold mb-1">Fast Delivery</h3>
          <p className="text-gray-600 text-sm">Same day delivery available</p>
        </div>
        <div className="text-center p-4">
          <i className="fas fa-box text-[#2E7D32] text-3xl mb-2"></i>
          <h3 className="font-semibold mb-1">Wide Selection</h3>
          <p className="text-gray-600 text-sm">Over 10,000 products</p>
        </div>
        <div className="text-center p-4">
          <i className="fas fa-headset text-[#2E7D32] text-3xl mb-2"></i>
          <h3 className="font-semibold mb-1">24/7 Support</h3>
          <p className="text-gray-600 text-sm">Round the clock assistance</p>
        </div>
      </div>
    </>
  );
  const renderAgentView = () => (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Available Orders</h2>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            Online
          </span>
        </div>
        {[1, 2, 3].map((order) => (
          <div key={order} className="border-b py-4 last:border-0">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">Order #12{order}</h3>
                <p className="text-gray-500 text-sm">2.5 km away</p>
              </div>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                ₹650
              </span>
            </div>
            <button className="w-full bg-[#2563EB] text-white py-2 rounded mt-2">
              Accept Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
  const renderProfileContent = () => (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow">
        <div className="flex border-b">
          <button
            onClick={() => setSelectedProfileTab("account")}
            className={`flex-1 py-4 text-center ${selectedProfileTab === "account" ? "border-b-2 border-[#2E7D32] text-[#2E7D32]" : "text-gray-500"}`}
          >
            Account Info
          </button>
          <button
            onClick={() => setSelectedProfileTab("addresses")}
            className={`flex-1 py-4 text-center ${selectedProfileTab === "addresses" ? "border-b-2 border-[#2E7D32] text-[#2E7D32]" : "text-gray-500"}`}
          >
            Addresses
          </button>
          <button
            onClick={() => setSelectedProfileTab("payments")}
            className={`flex-1 py-4 text-center ${selectedProfileTab === "payments" ? "border-b-2 border-[#2E7D32] text-[#2E7D32]" : "text-gray-500"}`}
          >
            Payments
          </button>
        </div>

        <div className="p-4">
          {selectedProfileTab === "account" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Account Type</h2>
                <button
                  onClick={() => setIsAgent(!isAgent)}
                  className="relative inline-flex items-center h-6 rounded-full w-11 bg-gray-200"
                >
                  <span
                    className={`inline-block w-4 h-4 transform transition-transform duration-200 ease-in-out bg-white rounded-full ${
                      isAgent ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">Name</h3>
                    <p className="text-gray-600">John Doe</p>
                  </div>
                  <button className="text-[#2E7D32]">
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">john@example.com</p>
                  </div>
                  <button className="text-[#2E7D32]">
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+1 234 567 8900</p>
                  </div>
                  <button className="text-[#2E7D32]">
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          )}

          {selectedProfileTab === "addresses" && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Saved Addresses</h2>
                <button className="text-[#2E7D32]">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="space-y-4">
                {savedAddresses.map((addr) => (
                  <div key={addr.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{addr.type}</h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {addr.address}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-[#2E7D32]">
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button className="text-red-500">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedProfileTab === "payments" && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Saved Payments</h2>
                <button className="text-[#2E7D32]">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="space-y-4">
                {savedPayments.map((payment) => (
                  <div key={payment.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <i
                          className={`fas fa-${payment.type === "Credit Card" ? "credit-card" : "mobile-alt"} text-[#2E7D32] text-xl mr-3`}
                        ></i>
                        <div>
                          <h3 className="font-semibold">{payment.type}</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {payment.type === "Credit Card"
                              ? `**** ${payment.last4} | Expires ${payment.expiry}`
                              : payment.id}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-[#2E7D32]">
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button className="text-red-500">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  const updateQuantity = (itemId, change) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === itemId) {
            const newQuantity = item.quantity + change;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        })
        .filter(Boolean),
    );
  };
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-gray-50 font-roboto">
      <header className="bg-[#2E7D32] p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => window.history.back()}
              className="text-white mr-3"
            >
              <i className="fas fa-arrow-left text-xl"></i>
            </button>
            <div className="bg-white p-2 rounded-lg mr-3">
              <i className="fas fa-briefcase-medical text-[#2E7D32] text-2xl"></i>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Medi24</h1>
              <p className="text-sm text-white opacity-90">
                Delivering Health to your doorstep within 24 hours
              </p>
            </div>
          </div>
          {!isAgent && (
            <>
              <div className="hidden md:block relative w-full max-w-md mx-4">
                <input
                  type="search"
                  name="search"
                  className="w-full p-2 rounded-full pl-10"
                  placeholder="Search medicines..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setShowSearch(!showSearch)}
                  className="text-white mr-4"
                >
                  <i className="fas fa-search text-2xl"></i>
                </button>
              </div>
              {showSearch && (
                <div className="absolute top-16 left-0 right-0 bg-white p-4 md:hidden">
                  <div className="relative">
                    <input
                      type="search"
                      name="search"
                      className="w-full p-2 rounded-full pl-10"
                      placeholder="Search medicines..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                  </div>
                </div>
              )}
              <button onClick={() => setShowCart(true)} className="relative">
                <i className="fas fa-shopping-cart text-white text-2xl"></i>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            </>
          )}
        </div>
      </header>

      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-lg">
            {checkoutStep === "cart" && (
              <>
                <div className="p-4 flex justify-between items-center border-b">
                  <h2 className="text-xl font-semibold">Your Cart</h2>
                  <button onClick={() => setShowCart(false)}>
                    <i className="fas fa-times text-gray-500"></i>
                  </button>
                </div>
                <div className="p-4 flex-1 overflow-y-auto">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between mb-4 border-b pb-4"
                    >
                      <div className="flex items-center">
                        <img
                          src={`/${item.name.toLowerCase().replace(/ /g, "-")}.jpg`}
                          alt={`${item.name} - ${item.type === "medicine" ? "Medical tablet or syrup" : "Medical supply item"}`}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="ml-4">
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-gray-500">₹{item.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                        <span className="mx-3">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t p-4">
                  <div className="flex justify-between mb-4">
                    <span className="font-semibold">Total:</span>
                    <span className="font-bold">₹{cartTotal}</span>
                  </div>
                  <button
                    onClick={() => {
                      setCheckoutStep("delivery");
                      setActiveTab("orders");
                      setShowCart(false);
                    }}
                    className="w-full bg-[#2563EB] text-white py-3 rounded-lg"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}

            {checkoutStep === "delivery" && (
              <>
                <div className="p-4 border-b">
                  <div className="flex items-center">
                    <button
                      onClick={() => setCheckoutStep("cart")}
                      className="mr-4"
                    >
                      <i className="fas fa-arrow-left"></i>
                    </button>
                    <h2 className="text-xl font-semibold">Delivery Options</h2>
                  </div>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    <div
                      className={`p-4 border rounded-lg cursor-pointer ${deliveryType === "quick" ? "border-[#2563EB]" : ""}`}
                      onClick={() => setDeliveryType("quick")}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">Quick Delivery</h3>
                          <p className="text-sm text-gray-500">20-25 minutes</p>
                        </div>
                        <p className="font-semibold">₹50</p>
                      </div>
                    </div>
                    <div
                      className={`p-4 border rounded-lg cursor-pointer ${deliveryType === "day" ? "border-[#2563EB]" : ""}`}
                      onClick={() => setDeliveryType("day")}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">Day Delivery</h3>
                          <p className="text-sm text-gray-500">By today</p>
                        </div>
                        <p className="font-semibold">₹25</p>
                      </div>
                    </div>
                    <div
                      className={`p-4 border rounded-lg cursor-pointer ${deliveryType === "scheduled" ? "border-[#2563EB]" : ""}`}
                      onClick={() => setDeliveryType("scheduled")}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">Scheduled Delivery</h3>
                          <p className="text-sm text-gray-500">
                            Choose your time
                          </p>
                        </div>
                        <p className="font-semibold">₹35</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Address
                    </label>
                    <div className="space-y-4 mb-4">
                      {savedAddresses.map((addr) => (
                        <div
                          key={addr.id}
                          className={`p-4 border rounded-lg cursor-pointer ${address === addr.address ? "border-[#2563EB]" : ""}`}
                          onClick={() => setAddress(addr.address)}
                        >
                          <h3 className="font-semibold">{addr.type}</h3>
                          <p className="text-sm text-gray-500">
                            {addr.address}
                          </p>
                        </div>
                      ))}
                    </div>
                    <textarea
                      className="w-full p-2 border rounded-lg"
                      rows="3"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Or enter a new address"
                    />
                  </div>
                  <button
                    onClick={() => setCheckoutStep("payment")}
                    disabled={!address || !deliveryType}
                    className="w-full bg-[#2563EB] text-white py-3 rounded-lg mt-6 disabled:opacity-50"
                  >
                    Continue to Payment
                  </button>
                </div>
              </>
            )}

            {checkoutStep === "payment" && (
              <>
                <div className="p-4 border-b">
                  <div className="flex items-center">
                    <button
                      onClick={() => setCheckoutStep("delivery")}
                      className="mr-4"
                    >
                      <i className="fas fa-arrow-left"></i>
                    </button>
                    <h2 className="text-xl font-semibold">Payment Method</h2>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-6">
                    <h3 className="font-semibold mb-4">Order Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Items Total</span>
                        <span>₹{cartTotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Delivery Fee</span>
                        <span>
                          ₹
                          {deliveryType === "quick"
                            ? 50
                            : deliveryType === "day"
                              ? 25
                              : 35}
                        </span>
                      </div>
                      <div className="flex justify-between font-semibold pt-2 border-t">
                        <span>Total Amount</span>
                        <span>
                          ₹
                          {cartTotal +
                            (deliveryType === "quick"
                              ? 50
                              : deliveryType === "day"
                                ? 25
                                : 35)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div
                      className={`p-4 border rounded-lg cursor-pointer ${paymentMethod === "UPI" ? "border-[#2563EB]" : ""}`}
                      onClick={() => setPaymentMethod("UPI")}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <i className="fas fa-mobile-alt mr-3"></i>
                          <span>UPI</span>
                        </div>
                        {paymentMethod === "UPI" && (
                          <i className="fas fa-check text-[#2563EB]"></i>
                        )}
                      </div>
                      {paymentMethod === "UPI" && (
                        <div className="mt-4">
                          <input
                            type="text"
                            name="upi"
                            placeholder="Enter UPI ID (e.g. name@upi)"
                            className="w-full p-2 border rounded"
                          />
                        </div>
                      )}
                    </div>
                    <div
                      className={`p-4 border rounded-lg cursor-pointer ${paymentMethod === "Card" ? "border-[#2563EB]" : ""}`}
                      onClick={() => setPaymentMethod("Card")}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <i className="fas fa-credit-card mr-3"></i>
                          <span>Card</span>
                        </div>
                        {paymentMethod === "Card" && (
                          <i className="fas fa-check text-[#2563EB]"></i>
                        )}
                      </div>
                      {paymentMethod === "Card" && (
                        <div className="mt-4 space-y-4">
                          <input
                            type="text"
                            name="cardNumber"
                            placeholder="Card Number"
                            className="w-full p-2 border rounded"
                          />
                          <div className="flex gap-4">
                            <input
                              type="text"
                              name="expiry"
                              placeholder="MM/YY"
                              className="w-1/2 p-2 border rounded"
                            />
                            <input
                              type="text"
                              name="cvv"
                              placeholder="CVV"
                              className="w-1/2 p-2 border rounded"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      className={`p-4 border rounded-lg cursor-pointer ${paymentMethod === "Cash" ? "border-[#2563EB]" : ""}`}
                      onClick={() => setPaymentMethod("Cash")}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <i className="fas fa-money-bill mr-3"></i>
                          <span>Cash on Delivery</span>
                        </div>
                        {paymentMethod === "Cash" && (
                          <i className="fas fa-check text-[#2563EB]"></i>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setCheckoutStep("tracking");
                      setShowCart(false);
                      setOrderStatus("preparing");
                    }}
                    disabled={!paymentMethod}
                    className="w-full bg-[#2563EB] text-white py-3 rounded-lg mt-6 disabled:opacity-50"
                  >
                    Place Order
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <main className="pb-20">
        {activeTab === "home" &&
          (isAgent ? renderAgentView() : renderCustomerView())}
        {activeTab === "profile" && renderProfileContent()}
        {activeTab === "orders" && (
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">
              {isAgent ? "Delivery History" : "Order History"}
            </h2>
            {orderStatus && (
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Current Order Status</h3>
                  <span className="text-[#2563EB]">{orderStatus}</span>
                </div>
                <div className="relative pt-4">
                  <div className="flex items-center mb-8">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${orderStatus === "preparing" ? "bg-[#2563EB] text-white" : "bg-gray-200"}`}
                    >
                      <i className="fas fa-box"></i>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">Order Preparing</p>
                      <p className="text-sm text-gray-500">
                        Your order is being prepared
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mb-8">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${orderStatus === "pickup" ? "bg-[#2563EB] text-white" : "bg-gray-200"}`}
                    >
                      <i className="fas fa-motorcycle"></i>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">Pickup</p>
                      <p className="text-sm text-gray-500">
                        Rider is picking up your order
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${orderStatus === "delivered" ? "bg-[#2563EB] text-white" : "bg-gray-200"}`}
                    >
                      <i className="fas fa-check"></i>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">Delivered</p>
                      <p className="text-sm text-gray-500">
                        Order has been delivered
                      </p>
                    </div>
                  </div>
                </div>
                {orderStatus === "pickup" && (
                  <div className="mt-6 h-[200px] bg-gray-100 rounded-lg">
                    <div className="p-4">
                      <p className="text-center text-gray-500">
                        Map showing delivery agent location
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-4">
        <button
          onClick={() => setActiveTab("home")}
          className={`flex flex-col items-center ${
            activeTab === "home" ? "text-[#2E7D32]" : "text-gray-500"
          }`}
        >
          <i className="fas fa-home text-xl"></i>
          <span className="text-xs mt-1">Home</span>
        </button>
        <button
          onClick={() => setActiveTab("orders")}
          className={`flex flex-col items-center ${
            activeTab === "orders" ? "text-[#2E7D32]" : "text-gray-500"
          }`}
        >
          <i className="fas fa-list text-xl"></i>
          <span className="text-xs mt-1">Orders</span>
        </button>
        <button
          onClick={() => setActiveTab("profile")}
          className={`flex flex-col items-center ${
            activeTab === "profile" ? "text-[#2E7D32]" : "text-gray-500"
          }`}
        >
          <i className="fas fa-user text-xl"></i>
          <span className="text-xs mt-1">Profile</span>
        </button>
      </nav>
      <style jsx global>{`
        @keyframes slideIn {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .notification {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>

      {cart.length > 0 && (
        <div
          className="fixed bottom-20 left-0 right-0 mx-auto w-[90%] md:w-[400px] bg-[#2E7D32] text-white p-4 rounded-lg shadow-lg notification"
          onClick={() => setShowCart(true)}
        >
          <div className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center">
              <i className="fas fa-shopping-cart text-xl mr-3"></i>
              <span>
                {cart.length} {cart.length === 1 ? "item" : "items"} in cart
              </span>
            </div>
            <span>₹{cartTotal}</span>
          </div>
        </div>
      )}
    </div>
  );
}


