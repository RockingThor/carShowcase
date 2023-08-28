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
