
const apiKey = "nO7jaeg2hknNdyUO1aB8fQwCy6OmWq3JjqIR_7oma3v6ZIRE9JKm5War64epsXXriAgeixjzOk_NxRBlxH4JXOQX2bTwDCyz9Hw_0EWHk-5E1NQsd7sb-91sI9cKX3Yx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    .then( response => {
      return response.json();
    })
    .then( jsonResponse => {
      if (jsonResponse.businesses) {
              return jsonResponse.businesses.map(business => ({
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count
              }));
            }
          });
        }
      };



export default Yelp;
