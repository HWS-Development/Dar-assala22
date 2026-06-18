const offersData = {
  // Featured "Offer of the Moment" on the list page
  featured: {
    id: "summer-offer",
    listImage: "/images/offre_summer1.jpg",
  },

  // Two-column grid cards on the list page
  cards: [
    {
      id: "direct-booking",
      listImage: "/images/directbookingoffer.jpg",
    },
  ],

  // Detail pages config
  details: {
    "summer-offer": {
      heroImage: "/images/offre_summer1.jpg",
      cardImage: "/images/offrre_summer2.jpg",
      hasDiscoverHotel: false,
      i18nKey: "summer",
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
