import { useState } from "react";

const Item = ({
  text,
  completed,
  id,
  updateCompleted,
  deleteTodo,
  updateText,
}) => {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(text);

  return (
    <div className="item">
      <div className="check-mark" onClick={() => updateCompleted(id)}>
        {completed ? <span>&#x2713;</span> : ""}
      </div>
      <div
        className={completed ? "strike" : ""}
        onDoubleClick={() => {
          if (!completed) {
            setEdit(true);
          }
        }}
      >
        {edit ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={() => {
              setEdit(false);
              updateText(id, editText);
            }}
          />
        ) : (
          text
        )}
      </div>
      <div className="close" onClick={() => deleteTodo(id)}>
        x
      </div>
    </div>
  );
};

export default Item;
