const PhoneCard = ({ Phone }) => {
  const { name, price, details, image } = Phone;
  return (
    <div>
      <div className="card card-compact  w-96 shadow-xl bg-gradient-to-r from-slate-300 to-slate-400 hover:from-emerald-300 hover:to-teal-500">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title ">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions ">
            <button className="btn  btn-neutral hover:btn-error">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
