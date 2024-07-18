import { useState } from "react";
import "./widget.css";

const menuHeight = getComputedStyle(document.documentElement).getPropertyValue(
  "--menu-height"
);

const buttons = ["Details", "Metrics", "Orders", "Insights"];

export const Widget = () => {
  const [activeBlock, setActiveBlock] = useState(0);

  const toggleMenuBlock = (index) => {
    setActiveBlock(index);
  };

  return (
    <article className="widget-card row">
      <div className="buttons col-lg-6 col-md-4 col-sm-6 col-xs-2 col-2">
        {buttons.map((button, index) => (
          <button
            className={index === activeBlock ? "active" : ""}
            onClick={() => toggleMenuBlock(index)}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="wrapper col-lg-6 col-md-4 col-sm-6 col-xs-8 col-8">
        <div
          className="content"
          style={{ translate: `0 calc(0px - ${menuHeight} * ${activeBlock})` }}
        >
          <div className="block row">
            <div className="col">
              <h2>Details</h2>
              <p>
                Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
                vestibulum. Donec luctus commodo dictum. Aenean in turpis erat.
                Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.
              </p>
            </div>
            <div className="col">
              <h2>Details</h2>
              <p>
                Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
                vestibulum. Donec luctus commodo dictum. Aenean in turpis erat.
                Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.
              </p>
            </div>
          </div>
          <div className="block row">
            <div className="col">
              <h2>Details</h2>
              <p>
                Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
                vestibulum. Donec luctus commodo dictum. Aenean in turpis erat.
                Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.
              </p>
            </div>
            <div className="col">
              <h2>Details</h2>
              <p>
                Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
                vestibulum. Donec luctus commodo dictum. Aenean in turpis erat.
                Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.
              </p>
            </div>
          </div>
          <div className="block row">
            <div className="col">
              <h2>Details</h2>
              <p>
                Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
                vestibulum. Donec luctus commodo dictum. Aenean in turpis erat.
                Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.
              </p>
            </div>
            <div className="col">
              <h2>Details</h2>
              <p>
                Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
                vestibulum. Donec luctus commodo dictum. Aenean in turpis erat.
                Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.
              </p>
            </div>
          </div>
          <div className="block row">
            <div className="col">
              <h2>Details</h2>
              <p>
                Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
                vestibulum. Donec luctus commodo dictum. Aenean in turpis erat.
                Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.
              </p>
            </div>
            <div className="col">
              <h2>Details</h2>
              <p>
                Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
                vestibulum. Donec luctus commodo dictum. Aenean in turpis erat.
                Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
