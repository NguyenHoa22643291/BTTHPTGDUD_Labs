import "./Danhmuc.css";

export default function Item({ text, image }) {
  return (
    <div className="item">
      <img src={image} height={200} width={200} alt="" />
      <span className="item-name">{text}</span>
      <button>Mua</button>
    </div>
  );
}
