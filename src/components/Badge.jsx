import React from 'react'

export const Badge = ({ color, name }) => {
    let classNameDefault = {
      badgeClass: "bg-gray-200",
      labelClass: "text-gray-800",
    };

    switch (color) {
      case "success":
        classNameDefault = {
          badgeClass: "bg-green-200",
          labelClass: "text-green-800",
        };
        break;

      case "danger":
        classNameDefault = {
          badgeClass: "bg-red-200",
          labelClass: "text-red-800",
        };
        break;
    }

  return (
    <div
      className={`flex justify-center items-center rounded-full ${classNameDefault.badgeClass}`}
    >
      <p className={classNameDefault.labelClass}>{name}</p>
    </div>
  );
};
