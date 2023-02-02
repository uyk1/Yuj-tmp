import React from "react";

const LectureListCategorySelectBox = () => {
  return (
    <select className="select w-40 max-w-xs select-sm text-accent" defaultValue='0' >
      <option value='0'>Select Category</option>
      <option>Homer</option>
      <option>Marge</option>
      <option>Bart</option>
      <option>Lisa</option>
      <option>Maggie</option>
    </select>
  );
};

export default LectureListCategorySelectBox;
