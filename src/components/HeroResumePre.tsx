import React from "react";
import ResumePreview from "./ui/ResumePreview";

const HeroResumePre = ({ form }) => {
  return (
    <div>
      <ResumePreview resumeData={form} className="max-w-2xl shadow-md" />
    </div>
  );
};

export default HeroResumePre;
