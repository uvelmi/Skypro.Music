import { useState } from 'react';

const FilterSearch = () => {
  const Filters = [
    {
      authors: 'Michael Jackson',
      years: '2005',
      genre: 'Pop'
    },
    {
      authors: 'Calvin Harris',
      years: '2008',
      genre: 'Disco'
    },
    {
      authors: 'Zhu',
      years: '2015',
      genre: 'Electronica, Deep House'
    },
    {
      authors: 'Arctic Monkeys',
      years: '2013',
      genre: 'Indie rock'
    },
    {
      authors: 'Eminem',
      years: '2021',
      genre: 'Hip hop'
    },
    {
      authors: 'Adele',
      years: '2023',
      genre: 'Pop, soul'
    }
  ];
  const [isActive, setActive] = useState('');
  const [popupContent, setPopupContent] = useState(null);

  const handleFilter = (e, type) => {
    if (isActive === e.target.id) {
      document.getElementById(isActive).classList.remove('active');
      setActive('');
      setPopupContent(null);
    } else {
      document.getElementById(isActive).classList.remove('active');
      e.target.classList.add('active');
      setActive(e.target.id);

      if (type === 'authors') {
        setPopupContent(Filters.map(filter => filter.authors).join(', '));
      } else if (type === 'years') {
        setPopupContent(Filters.map(filter => filter.years).join(', '));
      } else if (type === 'genre') {
        setPopupContent(Filters.map(filter => filter.genre).join(', '));
      }
    }
  };

  return (
    `<div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className={filter__button button-author _btn-text ${isActive === 'authors' ? 'active' : ''}} onClick={(e) => handleFilter(e, 'authors')}>
        исполнителю
      </div>
      <div className={filter__button button-year _btn-text ${isActive === 'years' ? 'active' : ''}} onClick={(e) => handleFilter(e, 'years')}>
        году выпуска
      </div>
      <div className={filter__button button-genre _btn-text ${isActive === 'genre' ? 'active' : ''}} onClick={(e) => handleFilter(e, 'genre')}>
        жанру
      </div>

      {popupContent && (
        <div className="popup">
          <div className="popup__content">{popupContent}</div>
        </div>
      )}
    </div>`
  );
};

export default FilterSearch;