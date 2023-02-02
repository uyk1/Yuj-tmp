import React from "react";
import LectureItemCard from "../components/lectureItemCard/LectureItemCard";
import LectureListTopBar from "../components/lectureList/LectureListTopBar";

const home = () => {
  return (
    <div className="py-7 w-full">
      <div>
        <LectureListTopBar />
        <br />
        <div className="flex flex-wrap justify-start gap-5">
          <LectureItemCard className="flex-none" />
        </div>
      </div>
    </div>
  );
};

export default home;
