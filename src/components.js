import React, { useState, useEffect } from "react";
import "./card.css";
export function Card({ image, caption, id, onClick }) {
  return (
    <div
      className="card"
      onClick={(e) => {
        e.preventDefault();
        onClick(id);
      }}
    >
      <img src={image} alt="khalisee" className="image" />
      <div className="caption">{caption}</div>
    </div>
  );
}
