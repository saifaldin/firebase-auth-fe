import React from "react";

export const LoginFormSection = ({ title, buttonDescription, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <div>
          <h1>{title}</h1>
          <button>{buttonDescription}</button>
        </div>
      </div>
    </form>
  );
};
