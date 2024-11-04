import { useState } from "react";
import AddFriend from "./AddFriend";
import Friend from "./Friend";

export default function Friends({
  onSelectedFriend,
  selectedFriend,
  friends,
  setFriends,
}) {
  const [newFriendName, setNewFriendName] = useState("");
  const [newImgUrl, setNewImgUrl] = useState("https://i.pravatar.cc/48");
  const [isOpenAddFriends, setOpenAddFriends] = useState(false);

  function handleAddFriends(_name, _image) {
    if (!_name || !_image) return;
    setFriends((friends) => [
      ...friends,
      { name: _name, image: _image, balance: 0 },
    ]);
    closeFriends();
  }

  function closeFriends() {
    setNewFriendName("");
    setNewImgUrl("");
    setOpenAddFriends(!isOpenAddFriends);
  }

  return (
    <div>
      {friends.map((friend, index) => (
        <Friend
          name={friend.name}
          image={friend.image}
          key={index}
          selectedFriend={selectedFriend}
          onSelectedFriend={onSelectedFriend}
          balance={friend.balance}
          onCloseFriends={closeFriends}
          isOpenAddFriends={isOpenAddFriends}
        />
      ))}
      {isOpenAddFriends ? (
        <>
          <AddFriend
            newName={newFriendName}
            onNewFriendName={setNewFriendName}
            newUrl={newImgUrl}
            onNewImgUrl={setNewImgUrl}
            onAddFriends={handleAddFriends}
          />
        </>
      ) : null}
      <button onClick={() => closeFriends()}>Close</button>
    </div>
  );
}
