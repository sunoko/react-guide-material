/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";
const Anfn = (arg) => `${arg} Kazuki`
const Nfn = (nfn) => `${nfn} Function`
const Af = () => {
  console.log('Af')
}
const Child = () => {
  return (
    <div className="component">
      <h3>式と文</h3>
      <h3>{true ? 'Chinone' : 'Kazuki'}</h3>
      <h3>{false ? 'Chinone' : 'Kazuki'}</h3>
      {Anfn('Chinone')}
      {Nfn('123')}
      {Af()}
    </div>
  );
};

export default Child;
