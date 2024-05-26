import box3Top from "../../../../assets/img/box1-1.png";
import Card from "./Card";

export default function Box3() {
  return (
    <>
      <div className="row my-5 py-5 d-flex justify-content-center">
        <div className="col-md-3">
          <img src={box3Top} className="w-100" alt="" />
        </div>
      </div>
      <div className="row d-flex justify-content-center mb-3">
        <div className="col-md-10">
          <div className="row">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
    </>
  );
}
