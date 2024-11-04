import { useState } from "react";

export default function BillCalculator({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setpaidByUser] = useState("");
  const friendExpense = bill ? bill - paidByUser : "";
  const [selectedPaying, setSelectedPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(selectedPaying === "user" ? friendExpense : -paidByUser);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="bill-calculator">
        <h1>SPLIT A BILL WITH {selectedFriend}</h1>

        <div className="flex-spread">
          <label>💰 Bill value</label>
          <input
            value={bill}
            type="text"
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </div>
        <div className="flex-spread">
          <label>🧍 Your expense</label>
          <input
            type="text"
            disabled={selectedPaying === "friend"}
            value={paidByUser}
            onChange={(e) =>
              setpaidByUser(
                Number(e.target.value) > bill
                  ? paidByUser
                  : Number(e.target.value)
              )
            }
          />
        </div>
        <div className="flex-spread">
          <label>🧑‍🤝‍👩 {selectedFriend}'s expense:</label>
          <input
            type="text"
            disabled={selectedPaying === "user"}
            value={friendExpense}
          />
        </div>
        <div className="flex-spread">
          <label>💰 Who is paying the bill?</label>
          <select
            value={selectedPaying}
            onChange={(e) => setSelectedPaying(e.target.value)}
          >
            <option value={"user"}>You</option>
            <option value={"friend"}>{selectedFriend}</option>
          </select>
        </div>
        <button type="submit">Split bill</button>
      </div>
    </form>
  );
}
