"use client";
import { Header } from "../../molecules/header/header";
import { CardHotel } from "../../molecules/card/card";
import styles from './cardsFilter.module.css';
import { useContext, useEffect, useState } from "react";
import {  hotelSize } from "@/app/utils/helper";
import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { AppContext } from "@/app/store/currentProvider";




export const CardsFilter = ({ getDataHotels }) => {
    const [selectedCountry, setSelectedCountry] = useState('all');
    const [dateHotelFrom, setDateHotelFrom] = useState('all');
    const [dateHotelTo, setDateTO] = useState('all');
    const [selectedPrice, setSelectedPrice] = useState('all');
    const [selectedSizes, setSelectedSizes] = useState('all');
    const [filterHotels, setFilterHotels] = useState([]);
    const [setshowSnackbar, setShowSnackbar] = useState(false);
    const {setHomePage} = useContext(AppContext)
    
    // const [hotelsData, setHotelsData] = useState([])

    // const fetchHotels = async () => {
    //     try {
    //         const data = await hotelData();
    //         setHotelsData(data);

    //     } catch (error) {
    //         console.error('error en los hoteles');
    //     }

    // };
    // useEffect(() => {
    //     fetchHotels()
    // }, []);

    useEffect(() => {
        const dateFrom = new Date(dateHotelFrom);
        const dateTo = new Date(dateHotelTo);
        const todayDate = new Date().setHours(0, 0, 0, 0);
        const dateCheckInLocal = new Date(
            dateFrom.getTime() + dateFrom.getTimezoneOffset() * 60000
        );
        const dateCheckOutLocal = new Date(
            dateTo.getTime() + dateTo.getTimezoneOffset() * 60000
        );

        const filteredHotels = getDataHotels.filter((hotel) => {
            const availabilityHotels = todayDate + hotel.availabilityFrom;
            const availabilityDays = availabilityHotels + hotel.availabilityTo;

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
                (dateHotelFrom === 'all' && dateHotelTo === 'all') ||
                (dateCheckInLocal.getTime() >= availabilityHotels &&
                    dateCheckOutLocal.getTime() <= availabilityDays);



            return isCountryMatch && isPriceMacth && isSizeMatch && availability;
        });

        setFilterHotels(filteredHotels);
    }, [
        selectedCountry,
        dateHotelFrom,
        dateHotelTo,
        selectedPrice,
        selectedSizes,
    ]);

    // const filterHotels = () => {
    //     const dateFrom = new Date(dateHotelFrom);
    //     const dateTo = new Date(dateHotelTo);
    //     const todayDate = new Date().setHours(0, 0, 0, 0);
    //     const dateCheckInLocal = new Date(
    //         dateFrom.getTime() + dateFrom.getTimezoneOffset() * 60000
    //     );
    //     const dateCheckOutLocal = new Date(
    //         dateTo.getTime() + dateTo.getTimezoneOffset() * 60000
    //     );

    //     const filteredHotels = getDataHotels.filter((hotel) => {
    //         const availabilityHotels = todayDate + hotel.availabilityFrom;
    //         const availabilityDays = availabilityHotels + hotels.availabilityTo;

    //         const isCountryMatch =
    //             selectedCountry === 'all' ||
    //             hotel.country.toLowerCase() === selectedCountry.toLowerCase();

    //         const isPriceMacth =
    //             selectedPrice === 'all' ||
    //             hotel.price.toString() === selectedPrice;

    //         const isSizeMatch =
    //             selectedSizes === 'all' ||
    //             hotelSize(hotel.rooms).toLowerCase() == selectedSizes.toLowerCase();

    //         const availability =
    //             (dateFrom === 'all' && dateTo === 'all') ||
    //             (dateCheckInLocal.getTime() >= availabilityHotels &&
    //                 dateCheckOutLocal.getTime() <= availabilityDays);



    //         return isCountryMatch && isPriceMacth && isSizeMatch && availability;
    //     });


    //     return filteredHotels;
    // };


    return (
        <>
            <Header
                updateCountry={setSelectedCountry}
                changePrice={setSelectedPrice}
                changeSizes={setSelectedSizes}
                changeDateFrom={setDateHotelFrom}
                changeDateTo={setDateTO}
            />

            {filterHotels.length > 0 ? (
                <div className={styles.cardsContainer}>
                    {filterHotels.map((hotel, index) => (
                        <CardHotel key={index} hotel={hotel} Snackbar={setShowSnackbar} />
                    ))}
                </div>
            ) : (

                <Alert severity="info">
                    <AlertTitle>Info</AlertTitle>
                    No hemos encontrado resultado para su busqueda --{' '}
                    <strong>Por favor utilice otros filtros</strong>
                </Alert>
            )}
            <Snackbar
            
                open={setshowSnackbar}
                autoHideDuration={2000}
                onClose={setShowSnackbar}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    Hotel agregado exitosamente!
                </Alert>
            </Snackbar>
        </>
    );

};
