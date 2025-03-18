import "./Danhmuc.css";

export default function Item({ text, image,time }) {
  return (
    <div className="item">
      <img src={image}  className="w-full h-48 object-cover rounded-lg" alt="" />
      <span className="text-lg text-pink-500 font-semibold">{text}</span>
      <span className="text-pink-500">{time}</span>
      <button className="hover:bg-blue-500 bg-blue-300 text-black rounded-lg w-full">Mua</button>
    </div>
  );
}
