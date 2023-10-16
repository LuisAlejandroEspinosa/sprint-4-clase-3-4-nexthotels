import { CardsFilterTemplate } from "../../components/template/cardsFilter.template/cardsfilterTemplate";
import { hotelData } from "../../services/getHotelsServices";

export default async function Home() {

  const getDataHotels = await hotelData();
  return (
    <>
      <CardsFilterTemplate getDataHotels={getDataHotels} />
    </>
  )
}

