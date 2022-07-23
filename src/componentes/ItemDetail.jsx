const ItemDetail = ({ item }) => {
    const { title, price, stock, pictureUrl, id } = item;
    return (<>
    <div className="card position-absolute top-50 start-50 translate-middle" style={{ width: "20rem" }}>
        <div className="card-body d-flex flex-column justify-content-center">
    <h1>{item.title}</h1>
    <img className="card-img-top" src={pictureUrl} alt="Card image cap" />
    <p>{item.description}</p>
        </div>
    </div>
    </>  );
}
 
export default ItemDetail;