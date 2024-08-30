export const Practice4 = () => {
  const getTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => {
    getTotalFee(1000);
  };

  return (
    <div>
      <p>練習問題: 設定ファイrを触ってみる</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
