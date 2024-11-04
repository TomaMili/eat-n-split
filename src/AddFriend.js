export default function AddFriend({
  newName,
  onNewFriendName,
  newUrl,
  onNewImgUrl,
  onAddFriends,
}) {
  return (
    <div className="add-friend">
      <div className="flex-spread">
        <label>🧑‍🤝‍👩 Friend name</label>
        <input
          type="text"
          name="_text"
          value={newName || ""}
          onChange={(e) => onNewFriendName(e.target.value)}
        />
      </div>
      <div className="flex-spread">
        <label>🌇 Image URL </label>
        <input
          type="text"
          name="_url"
          value={newUrl || ""}
          onChange={(e) => onNewImgUrl(e.target.value)}
        />
      </div>
      <button onClick={() => onAddFriends(newName, newUrl)}>Add</button>
    </div>
  );
}
