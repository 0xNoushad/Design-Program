"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface MenuItem {
  id: string;
  label: string;
}

interface CartItem {
  name: string;
  price: number;
}

const menuItems: MenuItem[] = [
  { id: "home", label: "REPCLUB" },
  { id: "rep", label: "REP" },
  { id: "patch", label: "PANTHER'S FREE FOOD PROGRAM PATCH" },
  { id: "books", label: "Books" },
  { id: "cart", label: "Cart" },
];

export default function RepClub() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
    setActiveSection("cart"); // Switch to the cart section when an item is added
  };

  return (
    <div className="min-h-screen h-full w-full bg-gray-200 font-sans">
      <div className="h-full max-w-md mx-auto">
        <div className="h-full bg-black rounded-none overflow-hidden">
          {/* Menu with Cart Button */}
          <div className="h-6 bg-[#d4ff4f] flex items-center justify-between px-2">
            <div className="flex space-x-1">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-4 h-4 bg-black rounded-full`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            <div className="text-black text-xs font-bold">({cartItems.length})</div>
          </div>
          {/* Content Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {activeSection === "home" && <RepClubHome />}
              {activeSection === "rep" && <RepSection />}
              {activeSection === "patch" && <PatchSection addToCart={addToCart} />}
              {activeSection === "books" && <BooksSection />}
              {activeSection === "cart" && <CartSection items={cartItems} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// RepClubHome Section
function RepClubHome() {
  return (
    <div className="bg-[#d4ff4f] text-black min-h-screen flex flex-col justify-between p-4 sm:p-6 md:p-8 font-sans">
      <div className="space-y-2 sm:space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-none">REPCLUB</h1>
        <p className="text-lg sm:text-xl">@reparations.club</p>
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          IS A CONCEPT BOOKSHOP & CREATIVE SPACE CURATED BY BLACKNESS IN LOS ANGELES.
        </p>
        <p className="text-xl sm:text-2xl">
  Books, Audiobooks, Noname&apos;s Book Club, Home + Apparel & Gift Cards
</p>
        <p className="text-3xl sm:text-4xl md:text-5xl font-black leading-none">
          BLACK-OWNED. WOMAN-OWNED.
        </p>
      </div>
      <div className="mt-4 sm:mt-6 text-sm sm:text-base">
        <p>+1 323-591-0012</p>
        <p>info@Reparations.Club</p>
        <p>3054 S. Victoria Ave.</p>
        <p>Los Angeles, CA 90016</p>
      </div>
    </div>
  );
}

// RepSection with Animation
function RepSection() {
  return (
    <div className="p-4 min-h-screen h-full flex flex-col justify-between">
      <motion.h1
        className="text-8xl sm:text-9xl font-black text-white leading-none"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        REP
      </motion.h1>
      <motion.div
        className="text-white text-sm"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <p>NEW IN: Panther&apos;s Free Food Program Patch</p>
        <div className="flex mt-2">
          {[1, 2, 3, 4].map((num) => (
            <motion.div
              key={num}
              className={`w-6 h-1 mr-1 ${num === 1 ? "bg-white" : "bg-gray-600"}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5 + num * 0.1, duration: 0.3 }}
            ></motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// Patch Section with "Add to Cart" functionality
interface PatchSectionProps {
  addToCart: (item: CartItem) => void;
}

function PatchSection({ addToCart }: PatchSectionProps) {
  return (
    <div className="p-4 min-h-screen h-full flex flex-col text-white">
      <motion.h1
        className="text-xl font-black mb-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
      <p>NEW IN: Panther&apos;s Free Food Program Patch</p>

      </motion.h1>
      <motion.p
        className="text-sm mb-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Philadelphia Printworks
      </motion.p>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Image
          src="/placeholder.svg"
          alt="Historical photo of two women with 'People&apos;s Free Food Program' bags"
          width={200}
          height={200}
          className="mb-2"
        />
      </motion.div>
      <motion.p
        className="text-xs mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        On January, 1969, the Free Breakfast for School Children Program was initiated at St. Augustine&apos;s Church in Oakland by the Black Panther Party. The Panthers would cook and serve...
      </motion.p>
      <motion.div
        className="flex justify-between items-center mt-auto"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <span className="text-2xl font-bold">$10</span>
        <motion.button
          className="bg-white text-black px-4 py-2 font-bold"
          whileHover={{ scale: 1.1 }}
          onClick={() => addToCart({ name: "Panther Patch", price: 10 })}
        >
          Add to Cart
        </motion.button>
      </motion.div>
    </div>
  );
}

// Books Section
function BooksSection() {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col">
      {/* Book Categories */}
      <div className="bg-white p-4 flex-grow">
        <motion.h2
          className="text-4xl font-serif mb-4 text-black"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Books
        </motion.h2>
        {['Audiobooks', "Noname's Book Club", 'Home + Apparel', 'Gift Cards', 'All'].map((item, index) => (
          <motion.p
            key={item}
            className="text-lg font-serif mb-2 border-b border-gray-200 pb-2 text-black" // Ensure text is black
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ x: 5 }}
          >
            {item}
          </motion.p>
        ))}
      </div>

      {/* Newsletter Subscription and Contact Info */}
      <motion.div
        className="bg-black text-white p-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h3 className="text-sm font-bold mb-2">JOIN THE CLUB, SUBSCRIBE TO OUR NEWSLETTER:</h3>
        <input
          type="email"
          placeholder="ENTER YOUR EMAIL"
          className="w-full bg-white text-black p-2 mb-2 text-xs"
        />
        <motion.h1
          className="text-4xl font-black mb-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
        >
          REP.CLUB
        </motion.h1>
        <p className="text-xs mb-2">
          VISIT US:<br />
          3054 S. VICTORIA AVE. LOS ANGELES, CA 90016
        </p>
        <p className="text-xs mb-2">
          CONTACT US:<br />
          +1-323-591-0012<br />
          INFO@REPARATIONS.CLUB
        </p>
        <p className="text-xs">
          FOLLOW US:<br />
          FACEBOOK, INSTAGRAM, TWITTER, PINTEREST
        </p>
      </motion.div>
    </div>
  );
}


// Cart Section
function CartSection({ items }: { items: CartItem[] }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4 min-h-[calc(100vh-10rem)] flex flex-col text-white">
      <motion.h1
        className="text-2xl font-black mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Your Cart
      </motion.h1>
      {items.length === 0 ? (
        <motion.p
          className="text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Your cart is empty.
        </motion.p>
      ) : (
        <>
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="flex justify-between items-center mb-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </motion.div>
          ))}
          <motion.div
            className="mt-4 text-xl font-bold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Total: ${total.toFixed(2)}
          </motion.div>
          <motion.button
            className="mt-4 bg-white text-black px-4 py-2 font-bold w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            CHECKOUT
          </motion.button>
        </>
      )}
    </div>
  );
}
