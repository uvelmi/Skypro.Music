import { styled } from 'styled-components'

export const FilterItem = styled.li`
    padding: 10px;
`
export const FilterTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
`
export const CenterblockFilter = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 51px;
`
export const FilterLink = styled.a`
    padding-bottom: 20px;
    color: #ffffff;

    &:active,
    &:hover {
        border-color: #ad61ff;
        color: #ad61ff;
        cursor: pointer;
        text-decoration: underline;
    }
`
export const FilterListWrapper = styled.div`
    margin-top: 20px;
    height: 18vh;
    width: 8vw;
    position: fixed;
    padding: 16px;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 12px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    background-color: #313131;
    gap: 10px;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: thin;
    scrollbar-color: #ffffff;
`
export const FilterButton = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #ffffff;
    border-radius: 60px;
    padding: 6px 20px;
    cursor: pointer;

    &:not(:last-child) {
        margin-right: 10px;
    }
    &.active {
        border-color: #ad61ff;
        color: #ad61ff;
        cursor: pointer;
    }
    ${({ $active }) =>
        $active &&
        `
				border-color: #ad61ff;
				color: #ad61ff;
				cursor: pointer;
`}
`
export const FilterButtonBtnText = styled(FilterButton)`
    &:hover {
        border-color: #d9b6ff;
        color: #d9b6ff;
        cursor: pointer;
    }
    &.active {
        border-color: #ad61ff;
        color: #ad61ff;
        cursor: pointer;
    }
`
