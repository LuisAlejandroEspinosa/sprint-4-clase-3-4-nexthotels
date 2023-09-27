"use client"
import { hotelData } from "../../../services/getHotelsServices";
import { Header } from "../../molecules/header/header";
import styles from './cardsFilter.module.css';
import { useEffect } from "react";
import { CardHotel } from "../../molecules/card/card";
import { useState } from "react";
import { hotelRooms, hotelSize } from "@/app/utils/helper";
import { Alert, AlertTitle } from "@mui/material";


export const CardsFilter = () => {
    const [selectedCountry, setSelectedCountry] = useState('all');
    const [dateHotelFrom, setDateHotelFrom] = useState('all');
    const [dateHotelTo, setDateTO] = useState('all');
    const [selectedPrice, setSelectedPrice] = useState('all');
    const [selectedSizes, setSelectedSizes] = useState('all');
    const [hotelsData, setHotelsData] = useState([])

    const fetchHotels = async () => {
        try {
            const data = await hotelData();
            setHotelsData(data);

        } catch (error) {
            console.error('error en los hoteles');
        }

    };
    useEffect(() => {
        fetchHotels()
    }, []);

    const filterHotels = (hotels) => {
        const dateFrom = new Date(dateHotelFrom);
        const dateTo = new Date(dateHotelTo);
        const todayDate = new Date().setHours(0, 0, 0, 0);
        const dateCheckInLocal = new Date(
            dateFrom.getTime() + dateFrom.getTimezoneOffset() * 60000
        );
        const dateCheckOutLocal = new Date(
            dateTo.getTime() + dateTo.getTimezoneOffset() * 60000
        );

        const filteredHotels = hotels.filter((hotel) => {
            const availabilityHotels = todayDate + hotel.availabilityFrom;
            const availabilityDays = availabilityHotels + hotels.availabilityTo;

            const isCountryMatch =
                selectedCountry === 'all' ||
                hotel.country.toLowerCase() === selectedCountry.toLowerCase();

            const isPriceMacth =
                selectedPrice === 'all' ||
                hotel.price.toString() === selectedPrice;

            const isSizeMatch =
                selectedSizes === 'all' ||
                hotelSize(hotel.rooms).toLowerCase() == selectedSizes.toLowerCase();

            const availability =
                (dateFrom === 'all' && dateTo === 'all') ||
                (dateCheckInLocal.getTime() >= availabilityHotels &&
                    dateCheckOutLocal.getTime() <= availabilityDays);



            return isCountryMatch && isPriceMacth && isSizeMatch
        });

        return filteredHotels
    };


    return (
        <>
            <Header
                updateCountry={setSelectedCountry}
                changePrice={setSelectedPrice}
                changeSizes={setSelectedSizes}
                changeDateFrom={setDateHotelFrom}
                changeDateTo={setDateTO}
            />

            {filterHotels(hotelsData).length > 0 ? (
                <div className={styles.cardsContainer}>
                    {filterHotels(hotelsData).map((hotel, index) => (
                        <CardHotel key={index} hotel={hotel} />
                    ))}
                </div>
            ) : (

                <Alert severity="info">
                    <AlertTitle>Info</AlertTitle>
                    No hemos encontrado resultado para su busqueda --{' '}
                    <strong>Por favor utilice otros filtros</strong>
                </Alert>
            )}

        </>
    );
};

