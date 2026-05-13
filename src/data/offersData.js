const offersData = {
  // Featured "Offer of the Moment" on the list page
  featured: {
    id: "mothers-day",
    listImage: "/images/offerofthemoment.jpg",
  },

  // Two-column grid cards on the list page
  cards: [
    {
      id: "eid-escape",
      listImage: "/images/eidaladha.jpg",
    },
    {
      id: "direct-booking",
      listImage: "/images/directbookingoffer.jpg",
    },
  ],

  // Detail pages config
  details: {
    "mothers-day": {
      heroImage: "/images/motherofferhero.jpg",
      cardImage: "/images/mothersoffer.jpg",
      hasDiscoverHotel: false,
      i18nKey: "mothersDay",
    },
    "eid-escape": {
      heroImage: "/images/HEROPHOTO.jpg",
      cardImage: "/images/eidaladha.jpg",
      hasDiscoverHotel: false,
      i18nKey: "eid",
    },
    "direct-booking": {
      heroImage: "/images/HEROPHOTO.jpg",
      cardImage: "/images/directbookingoffer.jpg",
      hasDiscoverHotel: true,
      i18nKey: "direct",
    },
  },
};

export default offersData;
