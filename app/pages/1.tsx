"use client" ;

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface MenuItem {
  id: string;
  label: string;
}

interface CartItem {
  name: string;
  price: number;
}

const menuItems: MenuItem[] = [
  { id: 'home', label: 'REPCLUB' },
  { id: 'rep', label: 'REP' },
  { id: 'patch', label: "PANTHER&apos;S FREE FOOD PROGRAM PATCH" },
  { id: 'books', label: 'Books' },
  { id: 'cart', label: 'Cart' },
]

export default function RepClub() {
  const [activeSection, setActiveSection] = useState<string>('home')
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (item: CartItem) => {
    setCartItems([...cartItems, item])
    setActiveSection('cart')
  }

  return (
    <div className="min-h-screen bg-gray-200 p-4 font-sans">
      <div className="max-w-md mx-auto">
        <div className="bg-black rounded-3xl overflow-hidden">
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
            <div className="text-black text-xs font-bold">(1)</div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeSection === 'home' && <HomeSection />}
              {activeSection === 'rep' && <RepSection />}
              {activeSection === 'patch' && <PatchSection addToCart={addToCart} />}
              {activeSection === 'books' && <BooksSection />}
              {activeSection === 'cart' && <CartSection items={cartItems} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function HomeSection() {
  return (
    <motion.div
      className="p-4 bg-[#d4ff4f] min-h-[calc(100vh-10rem)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-2xl sm:text-3xl font-black mb-2"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring' }}
      >
        REPCLUB
      </motion.h1>
      <motion.p
        className="text-sm font-bold mb-4"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, type: 'spring' }}
      >
        IS A CONCEPT BOOKSHOP & CREATIVE SPACE CURATED BY BLACKNESS IN LOS ANGELES.
      </motion.p>
      <motion.p
        className="text-sm mb-4"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4, type: 'spring' }}
      >
        Books, Audiobooks, Noname&apos;s Book Club, Home + Apparel & Gift Cards
      </motion.p>
      <motion.p
        className="text-sm font-bold mb-4"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: 'spring' }}
      >
        BLACK-OWNED. WOMAN-OWNED.
      </motion.p>
      <motion.p
        className="text-xs"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.6, type: 'spring' }}
      >
        +1 323-591-0012<br />
        info@reparations.club<br />
        3054 S. Victoria Ave.<br />
        Los Angeles, CA 90016
      </motion.p>
    </motion.div>
  )
}

function RepSection() {
  return (
    <div className="p-4 min-h-[calc(100vh-10rem)] flex flex-col justify-between">
      <motion.h1
        className="text-8xl sm:text-9xl font-black text-white leading-none"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
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
              className={`w-6 h-1 mr-1 ${num === 1 ? 'bg-white' : 'bg-gray-600'}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5 + num * 0.1, duration: 0.3 }}
            ></motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

interface PatchSectionProps {
  addToCart: (item: CartItem) => void;
}

function PatchSection({ addToCart }: PatchSectionProps) {
  return (
    <div className="p-4 min-h-[calc(100vh-10rem)] flex flex-col text-white">
      <motion.h1
        className="text-xl font-black mb-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        PANTHER&apos;S FREE FOOD PROGRAM PATCH
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => addToCart({ name: "Panther&apos;s Free Food Program Patch", price: 10 })}
        >
          ADD TO CART
        </motion.button>
      </motion.div>
    </div>
  )
}

function BooksSection() {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col">
      <div className="bg-white p-4 flex-grow">
        <motion.h2
          className="text-xl font-serif mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          BOOKS
        </motion.h2>
        <motion.ul
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {['Audiobooks', 'Noname&apos;s Book Club', 'Home + Apparel', 'Gift Cards', 'All'].map((item, index) => (
            <li key={index} className="text-lg font-bold text-black">
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  )
}

interface CartSectionProps {
  items: CartItem[];
}

function CartSection({ items }: CartSectionProps) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0)

  return (
    <div className="p-4 min-h-[calc(100vh-10rem)] bg-white text-black flex flex-col">
      <motion.h1
        className="text-xl font-bold mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        CART
      </motion.h1>
      <motion.ul
        className="space-y-2 flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {items.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </li>
        ))}
      </motion.ul>
      <motion.div
        className="mt-4 font-bold text-xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        TOTAL: ${totalPrice.toFixed(2)}
      </motion.div>
    </div>
  )
}
