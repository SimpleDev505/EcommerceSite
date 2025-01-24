import { useEffect, useState } from "react";
import "../Styles/TopOffers.css";
import axios from "axios";

interface newoffers_schema {
  _id: string;
  index: Number;
  imgs: string[];
}

function TopOffers() {
  //New Offers
  const [newoffers, Setnewoffers] = useState<newoffers_schema[]>([]);
  useEffect(() => {
    const tryfetch_newoffers = async () => {
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
    tryfetch_newoffers();
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
              {newoffers.map((offer) =>
                offer.imgs.map((img, imgIndex) => (
                  <div
                    key={`${imgIndex}`}
                    className="offer-img"
                    style={{
                      backgroundImage: `url('${img.trim()}')`,
                    }}
                  ></div>
                ))
              )}
              <span
                style={{ marginLeft: "2.5em", color: "blue", fontSize: ".9em" }}
              >
                Explore All
              </span>
            </div>
          </div>
        </div>
        <div className="offers">
          <div className="offer-bg">
            <p>Starting At 499 | Headphones</p>
            <div className="offer-collection">
              {newoffers.map((offer) =>
                offer.imgs.map((img, imgIndex) => (
                  <div
                    key={`${imgIndex}`}
                    className="offer-img"
                    style={{
                      backgroundImage: `url('${img.trim()}')`,
                    }}
                  ></div>
                ))
              )}
              <span
                style={{ marginLeft: "2.5em", color: "blue", fontSize: ".9em" }}
              >
                Explore All
              </span>
            </div>
          </div>
        </div>
        <div className="offers">
          <div className="offer-bg">
            <p>Appliances For Your Home</p>
            <div className="offer-collection">
              {newoffers.map((offer) =>
                offer.imgs.map((img, imgIndex) => (
                  <div
                    key={`${imgIndex}`}
                    className="offer-img"
                    style={{
                      backgroundImage: `url('${img.trim()}')`,
                    }}
                  ></div>
                ))
              )}
              <span
                style={{ marginLeft: "2.5em", color: "blue", fontSize: ".9em" }}
              >
                Explore All
              </span>
            </div>
          </div>
        </div>
        <div className="offers">
          <div className="offer-bg">
            <p>Appliances For Your Home</p>
            <div className="offer-collection">
              {newoffers.map((offer) =>
                offer.imgs.map((img, imgIndex) => (
                  <div
                    key={`${imgIndex}`}
                    className="offer-img"
                    style={{
                      backgroundImage: `url('${img.trim()}')`,
                    }}
                  ></div>
                ))
              )}
              <span
                style={{ marginLeft: "2.5em", color: "blue", fontSize: ".9em" }}
              >
                Explore All
              </span>
            </div>
          </div>
        </div>
        <div className="offers">
          <div className="offer-bg">
            <p>Appliances For Your Home</p>
            <div className="offer-collection">
              {newoffers.map((offer) =>
                offer.imgs.map((img, imgIndex) => (
                  <div
                    key={`${imgIndex}`}
                    className="offer-img"
                    style={{
                      backgroundImage: `url('${img.trim()}')`,
                    }}
                  ></div>
                ))
              )}
              <span
                style={{ marginLeft: "2.5em", color: "blue", fontSize: ".9em" }}
              >
                Explore All
              </span>
            </div>
          </div>
        </div>
        <div className="offers">
          <div className="offer-bg">
            <p>Appliances For Your Home</p>
            <div className="offer-collection">
              {newoffers.map((offer) =>
                offer.imgs.map((img, imgIndex) => (
                  <div
                    key={`${imgIndex}`}
                    className="offer-img"
                    style={{
                      backgroundImage: `url('${img.trim()}')`,
                    }}
                  ></div>
                ))
              )}
              <span
                style={{ marginLeft: "2.5em", color: "blue", fontSize: ".9em" }}
              >
                Explore All
              </span>
            </div>
          </div>
        </div>
        <div className="offerSlide">
          {newoffers.map((offer) =>
            offer.imgs.map((img, imgIndex) => (
              <div
                key={`${imgIndex}`}
                className="offerslide-img"
                style={{
                  backgroundImage: `url('${img.trim()}')`,
                }}
              ></div>
            ))
          )}
          {newoffers.map((offer) =>
            offer.imgs.map((img, imgIndex) => (
              <div
                key={`${imgIndex}`}
                className="offerslide-img"
                style={{
                  backgroundImage: `url('${img.trim()}')`,
                }}
              ></div>
            ))
          )}
          {newoffers.map((offer) =>
            offer.imgs.map((img, imgIndex) => (
              <div
                key={`${imgIndex}`}
                className="offerslide-img"
                style={{
                  backgroundImage: `url('${img.trim()}')`,
                }}
              ></div>
            ))
          )}
          {newoffers.map((offer) =>
            offer.imgs.map((img, imgIndex) => (
              <div
                key={`${imgIndex}`}
                className="offerslide-img"
                style={{
                  backgroundImage: `url('${img.trim()}')`,
                }}
              ></div>
            ))
          )}
        </div>
      </div>

      {/* offers side */}
    </>
  );
}

export default TopOffers;
