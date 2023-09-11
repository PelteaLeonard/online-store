import NewBooks from "../../components/home/new-books";
import CarouselMenu from "../../components/home/carousel-menu";
import SpecialOffers from "../../components/home/special-offers";
import BooksCategories from "../../components/home/books-categories";
import ShippingProgress from "../../components/home/shipping-progress";
import TopBooks from "../../components/home/top-books";
import Authors from "../../components/home/authors";
import NewBanner from "../../components/home/new-banner";
import Publishing from "../../components/home/publishing";
import Description from "../../components/home/description";
import { Main } from "./styles";

function Home() {
  return (
    <Main>
      <ShippingProgress />
      <CarouselMenu />
      <SpecialOffers />
      <NewBooks />
      <BooksCategories />
      <TopBooks />
      <NewBanner />
      <Authors />
      <Publishing />
      <Description />
    </Main>
  );
}

export default Home;
