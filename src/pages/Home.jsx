import Veggie from "../components/Veggie";
import Item from "../components/Item";
import { motion } from "framer-motion"

import React from 'react'

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}>
      <Veggie />
      <Item />
    </motion.div>
  )
}

export default Home
