"use client"
import { hotelData } from "../../../services/getHotelsServices";
import { Header } from "../../molecules/header/header";
import styles from './cardsFilter.module.css';
import { CardHotel } from "../../molecules/card/card";
import { useState } from "react";
import { hotelRooms } from "@/app/utils/helper";
import { Alert, AlertTitle } from "@mui/material";

export const CardsFilter = () => {
    const [selectedCountry, setSelectedCountry] = useState('all');
    const [selectedPrice, setSelectedPrice] = useState('all');
    const [selectedSizes, setSelectedSizes] = useState('all');
    const [dateFrom, setDateFrom] = useState('all');
    const [dateTo, setDateTO] = useState('all');

    const filterHotels = (hotels) => {
        const newDateTo = new Date(dateTo);
        const newDateToMs = newDateTo.getTime();
        const newDateFrom = new Date(dateFrom);
        const newDateFromMs = newDateFrom.getTime();
        const Today = new Date().setHours(0, 0, 0, 0);
        const newDateLocal = new Date(
            newDateFrom.getTime() + newDateFrom.getTimezoneOffset() * 60000
        )
        console.log(dateTo, dateFrom);




        const filteredHotels = hotels.filter((hotel) => {
            const availabilityHotels = Today + hotel.availabilityFrom;
            const availabilityDays = availabilityHotels + hotels.availabilityTo;

            const isCountryMatch =
                selectedCountry === 'all' ||
                selectedCountry.toLocaleLowerCase() ===
                hotel.country.toLocaleLowerCase();

            const isPriceMacth =
                selectedPrice === 'all' ||
                selectedPrice.toString() === hotel.price.toString();

            const isSizeMatch = selectedSizes === 'all' || selectedSizes === hotelRooms(hotel.rooms);

            const availability =
                (dateTo === 'all' && dateFrom === 'all') ||
                newDateToMs >= availabilityHotels && newDateFromMs <= availabilityDays

            return isCountryMatch && isPriceMacth && isSizeMatch
        });

        return filteredHotels
    };


    return (
        <>
            <Header
                updateCity={setSelectedCountry}
                changePrice={setSelectedPrice}
                changeSizes={setSelectedSizes}
                changeDateFrom={setDateFrom}
                changeDateTo={setDateTO}
            />

            {/* {filterHotels.length > 0 ? (
                <div className={styles.cardsConteainer}>
                    {filterHotels(hotelData).map((hotel, index) => (
                        <CardHotel key={index} hotel={hotel}  />
                    ))}
                </div>
            ) : (
            )} */}


            {filterHotels(hotelData).length > 0 ? (
                <div className={styles.cardsContainer}>
                    {filterHotels(hotelData).map((hotel, index) => (
                        <CardHotel key={index} hotel={hotel} />
                    ))}
                </div>
            ) : (

                <Alert severity="info">
                    <AlertTitle>Info</AlertTitle>
                    No hemos encontrado resultado para su busqueda :-) {' '}
                    <strong>Por favor utilice otros filtros</strong>
                </Alert>
            )}

        </>
    );
};

