import imagebox1 from "../../../../assets/img/box2.png";
import imagebox2 from "../../../../assets/img/box2-2.jpg";
const Box2 = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12 d-flex flex-column gap-0 align-items-center p-0">
          <img src={imagebox1} className="w-25" alt="" />
          <img src={imagebox2} className="w-100" alt="" />
        </div>
      </div>
    </>
  );
};

export default Box2;
