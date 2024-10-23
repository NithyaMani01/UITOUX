const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/home/homeData');
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();

        return data;
    } catch (error) {

        let obj = {
            featuredProducts: [],
            topRatedProducts: [],
            specialOffers: [],
            bestSellers: []
        }
        return obj;
    }
};

export default fetchData;