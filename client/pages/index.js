import React, {Fragment} from 'react';
import Head from 'next/head';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box, Button, CardMedia, Grid, Stack } from "@mui/material";
import HeaderComponent from '@/components/header/Header';
import HeroArea from '@/components/homepage/hero-area/HeroArea';
import Layout from '@/components/layout/Layout';
import Trending from "@/components/homepage/trending/Trending";
import { Discount } from '@/components/homepage/discount/Discount';
import Advantages from '@/components/ui/advantages/Advantages';
import Category from '@/components/homepage/category/Category';
import Collection from '@/components/homepage/collection/Collection';
import NewArrivals from '@/components/homepage/new-arrivals/NewArrivals';
import InstaPhotos from '@/components/ui/insta-photos/InstaPhotos';
import NextHead from '@/components/ui/Head/Head';



const inter = Inter({ subsets: ['latin'] })

export default function Home({makeupProducts}) {

  return (
    <>
     <NextHead title="GoShop" description="GoShop Ecommerce Full Stack App" />
      <Fragment>
          <HeroArea />
          <Trending products={makeupProducts} />
          <Discount />
          <Advantages />
          <Category />
          <Collection />
          <NewArrivals />
          <InstaPhotos />
      </Fragment>
    </>
  );
}


export async function getStaticProps(context) {
  let products
  try {
    
    const response = await fetch("http://localhost:8000/api/v1/products?filterItems=makeup&limit=20");
    const makeupProducts = await response.json();
  
    products = makeupProducts.products.map(product => ({...product, link: `/${product._id}`}))
  } catch (error) {
    return {
      props: {
        error: error.message,
        makeupProducts: []
      }
    }
  }

  return {
    props: {
      makeupProducts: products,
      revalidate: 3000
    },
  };
}