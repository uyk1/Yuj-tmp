import React from "react";
import LectureListCategorySelectBox from "./LectureListCategorySelectBox";
import AddIcon from "@mui/icons-material/Add";

const LectureListTopBar = () => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-success">총 1개의 강의</span>
      <div className="flex items-center">
        <LectureListCategorySelectBox />
        <button class="btn btn-sm btn-accent w-30 ml-4 text-white rounded-md">
          <AddIcon className="mr-2 text-white" /> 강의 개설
        </button>
      </div>
    </div>
  );
};

export default LectureListTopBar;
