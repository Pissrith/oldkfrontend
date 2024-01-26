'use client'
import * as React from 'react';

function Checkbox() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="flex items-center">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span
          className={`w-4 h-4 border border-gray-500 rounded ${
            checked ? 'bg-blue-500' : 'bg-white'
          } flex justify-center items-center`}
        >
          {checked && (
            <svg
              className="w-3 h-3 text-white fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          )}
        </span>
      </label>
    </div>
  );
}

export default Checkbox;