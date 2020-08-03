const createOffer = (data) => {
  return {
    id: data.id,
    city: {
      name: data.city.name,
      coordinates: [data.city.location.latitude, data.city.location.longitude],
      zoom: data.city.location.zoom,
    },
    title: data.title,
    previewImage: data.preview_image,
    photo: data.images,
    price: data.price,
    type: data.type,
    rating: data.rating,
    premium: data.is_premium,
    favorite: data.is_favorite,
    bedrooms: data.bedrooms,
    description: data.description,
    guests: data.max_adults,
    features: data.goods,
    host: {
      avatar: data.host.avatar_url,
      id: data.host.id,
      pro: data.host.is_pro,
      name: data.host.name
    },
    location: {
      coordinates: [data.location.latitude, data.location.longitude],
      zoom: data.location.zoom,
    },
  };
};

export default createOffer;
