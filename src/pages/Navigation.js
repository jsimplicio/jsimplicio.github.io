import React, { useState } from 'react';

const startButton = {
  alignItems: "center",
  borderRadius: 2,
  boxShadow: "inset 2px 2px 0 0 rgba(255,255,255,1), 2px 2px 0 0 rgba(0,0,0,1)",
  color: "#232129",
  background: "#CFCFCF",
  display: "flex",
  fontFamily: "Arial, sans-serif",
  fontSize: 14,
  margin: 2,
  maxWidth: 250,
  padding: 6,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textDecoration: "none",
  textOverflow: "ellipsis",
  width: "100%",
}
const flexIcon = {
  flexShrink: 0,
  marginRight: 4,
}

const startButtonContent = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}

const nav = {
  display: "flex"
}

const Button = ({ active, name, onClick }) => {
  return (
    <a href={"#" + name} id={name} style={startButton} className={active && 'active'} onClick={onClick}>
      <svg style={flexIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="1" width="1" height="1" fill="black"/>
        <rect x="3" y="1" width="1" height="1" fill="#FEFAFF"/>
        <rect x="5" y="1" width="1" height="1" fill="#FEFAFF"/>
        <rect x="7" y="1" width="1" height="1" fill="#FEFAFF"/>
        <rect x="9" y="1" width="1" height="1" fill="#FEFAFF"/>
        <rect x="11" y="1" width="1" height="1" fill="#FEFAFF"/>
        <rect x="10" y="2" width="1" height="1" fill="#FEFAFF"/>
        <rect x="12" y="2" width="1" height="1" fill="#FEFAFF"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M13 3H12V14H2V15H12H13V14V3Z" fill="#CAC5CA"/>
        <rect x="8" y="2" width="1" height="1" fill="#FEFAFF"/>
        <rect x="6" y="2" width="1" height="1" fill="#FEFAFF"/>
        <rect x="4" y="2" width="1" height="1" fill="#FEFAFF"/>
        <rect x="2" y="2" width="1" height="1" fill="#FEFAFF"/>
        <rect x="2" y="3" width="10" height="11" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M11 0H12V1H11V0ZM3 2H4V3H3V2ZM3 1V2H2V1H3ZM3 1H4V0H3V1ZM5 2H6V3H5V2ZM8 2H7V3H8V2ZM9 2H10V3H9V2ZM12 2H11V3H12V2ZM10 0H9V1H10V0ZM7 0H8V1H7V0ZM6 0H5V1H6V0ZM14 2H13V15H2V16H13V15H14V2ZM7 5H4V6H7V5ZM10 5V6H8V5H10ZM10 8V7H4V8H10ZM10 9V10H4V9H10ZM10 12V11H4V12H10Z" fill="black"/>
      </svg>
      <span style={startButtonContent}>{name} - Notepad</span>
    </a>
  );
};

const Navigation = () => {
  const [clicked, setClick] = useState();
  const notes = ["about","dscout","sprout","friends"];

  return (
    <nav style={nav}>
      {notes.map(note => (
        <Button
          href={note}
          name={note}
          key={note}
          count={note}
          active={note === clicked}
          onClick={() => setClick(note)}
        />
      ))}
    </nav>
  );
};

export default Navigation