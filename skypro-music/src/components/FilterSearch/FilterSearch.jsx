import React, { useState } from 'react'
import * as S from './FilterSearch.styles'

import classNames from 'classnames'

const Filters = [
    {
        authors: 'Michael Jackson',
        years: '2005',
        genre: 'Pop',
    },
    {
        authors: 'Calvin Harris',
        years: '2008',
        genre: 'Disco',
    },
    {
        authors: 'Zhu',
        years: '2015',
        genre: 'Electronica, Deep House',
    },
    {
        authors: 'Arctic Monkeys',
        years: '2013',
        genre: 'Indie rock',
    },
    {
        authors: 'Eminem',
        years: '2021',
        genre: 'Hip hop',
    },
    {
        authors: 'Adele',
        years: '2023',
        genre: 'Pop, soul',
    },
    {
        authors: 'Bon Jovi',
        years: '1994',
        genre: 'Rock',
    },
    {
        authors: 'Rammstein',
        years: '2001',
        genre: 'Metall',
    },
]

const FilterSearch = () => {
    const [activeButton, setActiveButton] = useState('')

    const toggleMenu = (e) => {
        const filter = e.target.dataset.filter
        setActiveButton(filter === activeButton ? '' : filter)
    }

    const renderListItems = (items) => {
        return items.map((item) => (
            <S.FilterItem key={item}>
                <S.FilterLink href="#">{item}</S.FilterLink>
            </S.FilterItem>
        ))
    }

    return (
        <S.CenterblockFilter>
            <S.FilterTitle>Искать по:</S.FilterTitle>
            <S.FilterButton
                onClick={toggleMenu}
                data-filter="authors"
                $active={activeButton === 'authors'}
            >
                исполнителю
                {activeButton === 'authors' && (
                    <ul>
                        <S.FilterListWrapper>
                            <ul>
                                {renderListItems(
                                    Filters.map(({ authors }) => authors)
                                )}
                            </ul>
                        </S.FilterListWrapper>
                    </ul>
                )}
            </S.FilterButton>
            <S.FilterButton
                onClick={toggleMenu}
                data-filter="years"
                $active={activeButton === 'years'}
            >
                году выпуска
                {activeButton === 'years' && (
                    <ul>
                        <S.FilterListWrapper>
                            <ul>
                                {renderListItems(
                                    Filters.map(({ years }) => years)
                                )}
                            </ul>
                        </S.FilterListWrapper>
                    </ul>
                )}
            </S.FilterButton>
            <S.FilterButton
                onClick={toggleMenu}
                data-filter="genre"
                $active={activeButton === 'genre'}
            >
                жанру
                {activeButton === 'genre' && (
                    <ul>
                        <S.FilterListWrapper>
                            <ul>
                                {renderListItems(
                                    Filters.map(({ genre }) => genre)
                                )}
                            </ul>
                        </S.FilterListWrapper>
                    </ul>
                )}
            </S.FilterButton>
        </S.CenterblockFilter>
    )
}

export default FilterSearch
