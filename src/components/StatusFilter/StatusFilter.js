import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { statusFilters } from "redux/constants";
import { setStatusFilter } from "redux/filterSlice";
import { selectStatusFilter } from "redux/selectors";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.div`
  color: black;
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const StatusFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const statusFilter = useSelector(selectStatusFilter);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (statusFilter) => {
    dispatch(setStatusFilter(statusFilter));
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>{statusFilter}</DropdownButton>
      <DropdownContent open={isOpen}>
        <DropdownItem onClick={() => handleItemClick(statusFilters.all)}>
          Show All
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick(statusFilters.follow)}>
          Follow
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick(statusFilters.followings)}>
          Followings
        </DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};
