import TargetPlus from "../../../../assets/img/targetplus.jpg";

export default function Card() {
  return (
    <div className="col-md-4 mb-4">
      <div className="card border-0 border round-m card-animation-scale-shadow">
        <img src={TargetPlus} className="card-img-top round-m" alt="..." />
        <div className="card-body d-flex flex-column gap-5">
          <span className="pink-color-hoverAni">تارگت پلاس</span>
          <div className="row d-flex justify-content-end">
            <div className="col-md-5 d-flex justify-content-end">
              <div className="d-flex align-items-center gap-2 text-secondary pink-color-hoverAni">
                <span className="material-symbols-outlined"> groups </span>
                <span className="fs-small-8">پریسا افشاری</span>
              </div>
            </div>
          </div>
          <div className="w-100 border-top border-1 py-3 d-flex justify-content-between">
            <div className="col-md-3">
              <div className="bg-ededed rounded-pill px-3 py-1 d-flex align-items-center justify-content-between gap-1">
                <span className="material-symbols-outlined"> groups </span>
                <span className="fs-small-8">178</span>
              </div>
            </div>
            <div className="col-md-4">
              <span className="bg-ededed rounded-pill px-3 py-1">
                ۲,۹۸۰,۰۰۰
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
