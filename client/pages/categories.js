import React, {Fragment} from 'react'

import { Grid } from "@mui/material";
import Banner from "@/components/ui/banner/Banner";
import categories from "@/data/category/category";
import CategoryCard from "@/components/ui/category-item/CategoryCard";
import InstaPhotos from "@/components/ui/insta-photos/InstaPhotos"
import NextHead from '@/components/ui/Head/Head';

const CategoriesPage = () => {
  return (
    <Fragment>
      <NextHead title="GoShop - Product Categories" description="GoShop Product Categories Page" />
      <Banner
        pageTitle="Categories"
        breadcrumbs={[{ title: "Home", link: "/" }, { title: "Categories" }]}
      />
      <Grid
        container
        rowSpacing={{xs: 3, lg: 4}}
        columnSpacing={{sm: 2, lg: 4}}
        className="mt-20 lg:mt-32"
      >
        {categories?.map((category) => (
          <Grid
            item
            sm={4}
            key={category.categoryId}
            flexShrink
            className="w-full"
          >
            <CategoryCard title={category.name} imageUrl={category.image} categoryId={category.categoryId} />
          </Grid>
        ))}
      </Grid>
      <InstaPhotos />
    </Fragment>
  );
};

export default CategoriesPage