function ExploreCard({data}: any) {
  // console.log(data)
  return (
    <div className="col-3 explore-card">
      <div>
        <img src={data.path} alt="product"></img>
      </div>
      <h5 className="m-0 pt-2">{data.title}</h5>
      <p>Price: {data.price} {data.currency}</p>
    </div>
  );
}

export default ExploreCard;
