export const About = () => {
  return (
    <>
      <div className="mx-8 w-4/5">
        <h2 className="text-center">About</h2>

        <table className="mt-8 w-full">
          <tr className="border-b-2">
            <th>名前</th>
            <td>井上 拓磨</td>
          </tr>
          <tr className="border-b-2">
            <th>生年月日</th>
            <td>1992年12月28日</td>
          </tr>
          <tr className="border-b-2">
            <th>出身</th>
            <td>埼玉県 飯能市</td>
          </tr>
          <tr className="border-b-2">
            <th rowspan="2">趣味</th>
            <td>バスケ</td>
          </tr>
          <tr className="border-b-2">
            <td>カメラ</td>
          </tr>
          <tr className="border-b-2">
            <th rowspan="8">所持資格</th>
            <td>作業療法士免許</td>
          </tr>
          <tr className="border-b-2">
            <td>住環境福祉コーディネーター</td>
          </tr>
          <tr className="border-b-2">
            <td>整理収納アドバイザー</td>
          </tr>
          <tr className="border-b-2">
            <td>大型自動車</td>
          </tr>
          <tr className="border-b-2">
            <td>大型二輪</td>
          </tr>
          <tr className="border-b-2">
            <td>けん引</td>
          </tr>
          <tr className="border-b-2">
            <td>小型船舶</td>
          </tr>
          <tr className="border-b-2">
            <td>特殊小型船舶</td>
          </tr>
        </table>
      </div>
    </>
  );
};
