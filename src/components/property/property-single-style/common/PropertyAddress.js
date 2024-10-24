import React from "react";

const PropertyAddress = () => {
  const addresses = [
    {
      address: "10425 Tabor St",
      city: "Los Angeles",
      state: "California",
      zipCode: "90034",
      area: "Brookside",
      country: "United States",
    },
  ];

  return (
    <div className="col-md-12">
      <iframe
        className="position-relative bdrs12 mt30 h250"
        loading="lazy"
        src={`https://maps.google.com/maps?q=${addresses[0].address}&t=m&z=14&output=embed&iwloc=near`}
        title={addresses[0].address}
        aria-label={addresses[0].address}
      />
    </div>
  );
};

export default PropertyAddress;
