import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki",
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildAreaがレンダリングされた");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log(data);
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>child compornents</p>
          <button onClick={onClickClose}>close</button>
        </div>
      ) : null}
    </>
  );
});
