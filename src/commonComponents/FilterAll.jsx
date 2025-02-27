import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";

const FilterAll = ({ getData }) => {
  const currentYear = new Date().getFullYear();

  const yearOptions = [
    { value: "All", label: "All" },
    ...Array.from({ length: currentYear - 1949 }, (_, i) => ({
      value: (currentYear - i).toString(),
      label: (currentYear - i).toString(),
    })),
  ];

  const monthOptions = [
    { value: "All", label: "All" },
    ...["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
      (month) => ({ value: month, label: month })
    ),
  ];

  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedMonths, setSelectedMonths] = useState([]);
  const { isDarkMode } = useSelector((state) => state.auth);

  const handleFilterUpdate = useCallback(() => {
    const years = selectedYears.some(y => y.value === "All") ? ["All"] : selectedYears.map(y => y.value);
    const months = selectedMonths.some(m => m.value === "All") ? ["All"] : selectedMonths.map(m => m.value);
    getData(years, months);
  }, [selectedYears, selectedMonths, getData]);

  useEffect(() => {
    handleFilterUpdate();
  }, [selectedYears, selectedMonths, handleFilterUpdate]);

  const handleYearChange = (selectedOptions) => {
    setSelectedYears(selectedOptions.some(option => option.value === "All") ? [{ value: "All", label: "All" }] : selectedOptions);
  };

  const handleMonthChange = (selectedOptions) => {
    setSelectedMonths(selectedOptions.some(option => option.value === "All") ? [{ value: "All", label: "All" }] : selectedOptions);
  };

  return (
    <div className="row mb-4 d-flex justify-content-end">

      {/* Year Multi-Select */}
      <div className="col-lg-4 col-md-6 col-12 p-2 text-left">
        <Select
          isMulti
          options={yearOptions}
          value={selectedYears}
          onChange={handleYearChange}
          className="basic-multi-select custom-select"
          classNamePrefix="select"
          placeholder="Select Year(s)"
          menuPortalTarget={document.body}
          menuPlacement="auto"
          styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
        />
      </div>

      {/* Month Multi-Select */}
      <div className="col-lg-4 col-md-6 col-12 p-2 text-left">
        <Select
          isMulti
          options={monthOptions}
          value={selectedMonths}
          onChange={handleMonthChange}
          className="basic-multi-select custom-select"
          classNamePrefix="select"
          placeholder="Select Month(s)"
          menuPortalTarget={document.body}
          menuPlacement="auto"
          styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
        />
      </div>
    </div>
  );
};

export default FilterAll;
