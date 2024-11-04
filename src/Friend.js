import { useState } from "react";
export default function Friend({
  name,
  image,
  onSelectedFriend,
  selectedFriend,
  balance,
  onCloseFriends,
  isOpenAddFriends,
}) {
  const [isSelected, setSelected] = useState(false);

  function handleSelected() {
    setSelected(!isSelected);
    if (isSelected || isOpenAddFriends) onCloseFriends();
  }

  return (
    <div
      className={`friend ${
        isSelected && selectedFriend === name ? "white" : ""
      }`}
    >
      <div className="flex-friend">
        <img src={image} alt="man" />
        <div>
          <h3>{name}</h3>
          <p
            style={{
              color: balance < 0 ? "red" : balance > 0 ? "green" : "black",
            }}
          >
            {balance <= 0
              ? balance === 0
                ? `You and ${name} are even`
                : `You owe ${name} ${Math.abs(balance)}€`
              : `${name} owes you ${balance}€`}{" "}
          </p>
        </div>
      </div>
      <button
        className="btn-select-friend"
        onClick={() => {
          onSelectedFriend(isSelected ? "" : name);
          handleSelected();
        }}
      >
        {isSelected && selectedFriend === name ? "Close" : "Select"}
      </button>
    </div>
  );
}
