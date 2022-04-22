import React from 'react'

export const Badge = ({ color, name }) => {
    let classNameDefault = '';
    switch (color) {
      case "success":
        classNameDefault = "bg-green-500 text-white";
        break;

      case "danger":
        classNameDefault = "bg-red-500 text-white";
        break;

      default:
        classNameDefault = "bg-gray-500 text-white";
        break;
    }

  return (
    <div className={` ${classNameDefault}`}>
      <p>{name}</p>
    </div>
  );
};
