import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'

const Home: NextPage = () => {
  return (
    <Box>
      <Navbar />
    </Box>
  )
}

export default Home
