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
		const filter = e.target.dataset.filter;
		setActiveButton(filter === activeButton ? "" : filter);
  };

  const renderListItems = (items) => {
    return items.map((item) => (
      <li className="filter__item" key={item}>
        <a  href="#" className="filter__link filter__btn active">
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
        {activeButton === "authors" && (
          <ul className="filter__list scroll ">
            <div className="filter__list-wrapper">
              <ul>{renderListItems(Filters.map(({ authors }) => authors))}</ul>
            </div>
          </ul>
        )}
      </div>
      <div
        className="filter__button button-year _btn-text "
        onClick={toggleMenu}
        data-filter="years"
      >
        году выпуска
        {activeButton === "years" && (
          <ul className="filter__list scroll">
            <div className="filter__list-wrapper">
              <ul>{renderListItems(Filters.map(({ years }) => years))}</ul>
            </div>
          </ul>
        )}
      </div>
      <div
        className="filter__button button-genre _btn-text"
        onClick={toggleMenu}
        data-filter="genre"
      >
        жанру
        {activeButton === "genre" && (
          <ul className="filter__list scroll">
            <div className="filter__list-wrapper">
              <ul>{renderListItems(Filters.map(({ genre }) => genre))}</ul>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterSearch;