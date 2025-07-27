import { Link } from "react-router";
import empty_orders from "../../assets/undraw_order-delivered_puaw.svg";

export default function EmptyOrders() {
  return (
    <>
      <div className="p-5 mt-5">
        <div className=" flex flex-col justify-center items-center space-y-5">
          <img src={empty_orders} alt="" className="w-80" />
          <h3 className="text-2xl text-primary-600 font-bold">
            you don't have any orders
          </h3>
          <p className="text-gray-500">
            To add order in cart, continue shopping and checkout
          </p>
          <Link
            to="/"
            className="py-2 px-3 border mb-5 bg-primary-600  text-lg text-white font-semibold text-center rounded-md"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </>
  );
}
