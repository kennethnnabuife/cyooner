function OurProducts() {
  // Define an array of furniture products
  const furnitureProducts = [
    {
      name: " Urban TV Console",
      imageSrc:
        "https://res.cloudinary.com/dynmdbdfu/image/upload/v1697752838/TV_console_2_fnpcnk.jpg",
    },
    {
      name: "Modern Comfort Sofa",
      imageSrc:
        "https://res.cloudinary.com/dynmdbdfu/image/upload/v1697752867/couch_5_wyhbyy.jpg",
    },
    {
      name: "Vintage Charm Bedframe",
      imageSrc:
        "https://res.cloudinary.com/dynmdbdfu/image/upload/v1697752863/Bedframe_1_kmjnrk.jpg",
    },
    {
      name: "Modern Minimalist Kitchen",
      imageSrc:
        "https://res.cloudinary.com/dynmdbdfu/image/upload/v1697752853/Kitchen_Island_q7luou.jpg",
    },
    {
      name: "Mini Book Shelf",
      imageSrc:
        "https://res.cloudinary.com/dynmdbdfu/image/upload/v1697752840/Mini_Book_shelf_qvgtw3.jpg",
    },
    {
      name: "Single Seater",
      imageSrc:
        "https://res.cloudinary.com/dynmdbdfu/image/upload/v1697752835/Single_seater_tsf2ql.jpg",
    },
    {
      name: "Office Solutions",
      imageSrc:
        "https://res.cloudinary.com/dynmdbdfu/image/upload/v1697757997/Screenshot_2023-10-20_002556_ko5m8a.png",
    },
  ];

  return (
    <div>
      <div className="product-intro">
        Below are sneak peeks of some of the furniture solutions we offer:
      </div>
      <div style={{ marginBottom: "80px" }}>
        {furnitureProducts.map((product, index) => (
          <div key={index} className="product">
            <div className="img-div">
              <img
                src={product.imageSrc}
                alt={product.name}
                className="furn-image"
              />
            </div>
            <div className="product-name">{product.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurProducts;
