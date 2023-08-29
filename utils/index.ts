export async function fetchCars() {
    const headers = {
        "X-RapidAPI-Key": process.env.NEXT_X_KEY,
        "X-RapidAPI-Host": process.env.NEXT_X_HOST,
    };
    const response = await fetch(
        "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
        {
            headers,
        }
    );

    const result = await response.json();

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const milageFactor = 0.1;
    const ageFactor = 0.05;
    const milageRate = city_mpg * milageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
    const rentalPerDay = basePricePerDay + milageRate + ageRate;
    return rentalPerDay.toFixed(0);
};
