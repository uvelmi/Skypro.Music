import React, { useState } from "react";

const Filters = [
  {
    authors: "Michael Jackson",
    years: "2005",
    genre: "Pop",
  },
  {
    authors: "Calvin Harris",
    years: "2008",
    genre: "Disco",
  },
  {
    authors: "Zhu",
    years: "2015",
    genre: "Electronica, Deep House",
  },
  {
    authors: "Arctic Monkeys",
    years: "2013",
    genre: "Indie rock",
  },
  {
    authors: "Eminem",
    years: "2021",
    genre: "Hip hop",
  },
  {
    authors: "Adele",
    years: "2023",
    genre: "Pop, soul",
  },
	{
    authors: "Bon Jovi",
    years: "1994",
    genre: "Rock",
  },
	{
    authors: "Rammstein",
    years: "2001",
    genre: "Metall",
  }
];

const FilterSearch = () => {
  const [activeButton, setActiveButton] = useState("");

  const toggleMenu = (e) => {
    const button = e.target;
    if (button.classList.contains("active")) {
      button.classList.remove("active");
      setActiveButton("");
    } else {
      button.classList.add("active");
      setActiveButton(button.dataset.filter);
    }
  };

  const renderListItems = (items) => {
    return items.map((item) => (
      <li className="filter__item" key={item}>
        <a href="#" className="filter__link">
          {item}
        </a>
      </li>
    ));
  };

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div
        className="filter__button button-author _btn-text"
        onClick={toggleMenu}
        data-filter="authors"
      >
        исполнителю
        <ul className="filter__list scroll">
          {activeButton === "authors" && (
            <div className="filter__list-wrapper">
              <ul>{renderListItems(Filters.map(({ authors }) => authors))}</ul>
            </div>
          )}
        </ul>
      </div>
      <div
        className="filter__button button-year _btn-text"
        onClick={toggleMenu}
        data-filter="years"
      >
        году выпуска
        <ul className="filter__list">
          {activeButton === "years" && (
            <div className="filter__list-wrapper ">
              <ul>{renderListItems(Filters.map(({ years }) => years))}</ul>
            </div>
          )}
        </ul>
      </div>
      <div
        className="filter__button button-genre _btn-text"
        onClick={toggleMenu}
        data-filter="genre"
      >
        жанру
        <ul className="filter__list">
          {activeButton === "genre" && (
            <div className="filter__list-wrapper">
              <ul>{renderListItems(Filters.map(({ genre }) => genre))}</ul>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default FilterSearch;