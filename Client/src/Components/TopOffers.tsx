import { useEffect, useState } from "react";
import "../Styles/TopOffers.css";
import axios from "axios";

function TopOffers() {
  const [newoffers, Setnewoffers] = useState<any[]>([]);
  useEffect(() => {
    const tryfetch_newoffer = async () => {
      try {
        const fetch_newoffers = await axios.get(
          "http://localhost:8000/api/getnewoffers"
        );
        Setnewoffers(fetch_newoffers.data);
        console.log(fetch_newoffers.data);
      } catch (error) {
        console.log(error);
      }
    };
    tryfetch_newoffer();
  }, []);

  return (
    <>
      <div className="offers-bg">
        <div className="offer-left"></div>
        <div className="offer-right"></div>
      </div>
      <div className="offers-grid">
        <div className="offers">
          <div className="offer-bg">
            <p>Revamp Your Home</p>
            <div className="offer-collection">
              <ul>
                {newoffers.map((offer) => (
                  <li key={offer.index}>{offer.offerimgs}</li>
                ))}
              </ul>
              <div className="offer-img"></div>
              <div className="offer-img"></div>
              <div className="offer-img"></div>
              <div className="offer-img"></div>
            </div>
          </div>
        </div>
        <div className="offers">
          <div className="offer-bg">
            <p>Starting At 499 | Headphones</p>
            <div className="offer-collection">
              <div className="offer-img"></div>
              <div className="offer-img"></div>
              <div className="offer-img"></div>
              <div className="offer-img"></div>
            </div>
          </div>
        </div>
        <div className="offers">
          <div className="offer-bg">
            <p>Appliances For Your Home</p>
            <div className="offer-collection">
              <div className="offer-img"></div>
              <div className="offer-img"></div>
              <div className="offer-img"></div>
              <div className="offer-img"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopOffers;
