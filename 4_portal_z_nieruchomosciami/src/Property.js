import React from "react";

const Property = ({property}) => {
  return (
    <article className="col-4">
      <div class="card" style={{ marginBottom: "30px" }}>
        <img src={property?.thumb} className="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{property.title}</h5>
          <p class="card-text">{property.excerpt}</p>
          <p class="card-text">{property.fields.price} $</p>
          <a href="#" class="btn btn-primary">
            Kup
          </a>
        </div>
      </div>
    </article>
  );
};

export default Property
