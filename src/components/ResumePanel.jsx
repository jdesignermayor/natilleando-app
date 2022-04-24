import React from "react";

export const ResumePanel = () => {
  return (
    <div>
      <li>
        <div className="text-base">
          <p className="font-bold text-2xl">Total natilleando</p>
          <div className="grid gap-3 grid-cols-1 divide-y pt-4">
            <div>
              <p>Total ahorro socios</p>
              <p className="font-bold">$1.800.000</p>
            </div>
            <div>
              <p>Total inscripcion socios</p>
              <p className="font-bold">$200.000</p>
            </div>
            <div>
              <p>Total rifas socios</p>
              <p className="font-bold">$200.000</p>
            </div>
            <div>
              <p>Total multas socios</p>
              <p className="font-bold">$200.000</p>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};
