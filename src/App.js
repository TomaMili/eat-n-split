import { useState } from "react";
import BillCalculator from "./BillCalculator";
import Friends from "./Friends";
import "./index.css";

const intialFriends = [
  {
    id: 0,
    name: "Clark",
    image: "https://i.pravatar.cc/48?=asdasd",
    balance: -7,
  },
  {
    id: 1,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?=asasddasd",
    balance: 20,
  },
  {
    id: 2,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?=asdasdasd",
    balance: 0,
  },
];

export default function App() {
  const [selectedFriend, setSelectedFriend] = useState("");
  const [friends, setFriends] = useState(intialFriends);

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.name === selectedFriend
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend("");
  }

  return (
    <div className="wrapper">
      <Friends
        onSelectedFriend={setSelectedFriend}
        selectedFriend={selectedFriend}
        friends={friends}
        setFriends={setFriends}
      />
      {selectedFriend ? (
        <BillCalculator
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      ) : (
        <div className="empty"></div>
      )}
    </div>
  );
}
