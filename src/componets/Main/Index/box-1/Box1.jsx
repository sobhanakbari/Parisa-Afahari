import imgBox1 from "../../../../assets/img/box1-1.png";

export default function Box1() {
  return (
    <div className="row bg-img-top-box1 vh-85 d-flex align-items-center">
      <div className="col-md-6">
        <img src={imgBox1} className="w-100" alt="" />
      </div>
    </div>
  );
}
