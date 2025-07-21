import React, { useState } from "react";

const deskTypes = ["developer", "tinkerer", "learner", "traveller"];

const DeskTypeDropdown = ({ deskType, setDeskType }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="hero_tag text-gray_gradient rounded px-2 bg-white cursor-pointer flex items-center"
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        {deskType || "Select type"}
        <span className="ml-2">&#9662;</span>
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-45 bg-black bg-opacity-50">
          {deskTypes.map((type) => (
            <div
              key={type}
              className={`hero_tag text-gray_gradient px-4 py-2 cursor-pointer whitespace-nowrap transition-colors `}
              onClick={() => {
                setDeskType(type);
                setOpen(false);
              }}
            >
              {type}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DeskTypeDropdown;
