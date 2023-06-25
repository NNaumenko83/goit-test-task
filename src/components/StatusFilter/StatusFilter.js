import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownContainer,
  DropdownButton,
  DropdownContent,
  DropdownItem,
} from "./StausFilter.styled";
import { statusFilters } from "redux/constants";
import { setStatusFilter } from "redux/filterSlice";
import { selectStatusFilter } from "redux/selectors";

export const StatusFilter = ({ changeStatus }) => {
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
    changeStatus();
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
      <DropdownButton onClick={toggleDropdown}>
        {statusFilter.toUpperCase()}
      </DropdownButton>
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
