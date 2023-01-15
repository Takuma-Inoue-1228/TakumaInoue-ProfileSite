import { Link, useParams } from "react-router-dom";

export const TestDetailPage = () => {
  const params = useParams();

  return (
    <div className="text-center">
      <h2>Test詳細画面</h2>
      <p className="mt-8">
        選択されたTest番号:<span className="pl-4">{params.id}</span>
      </p>
      <p className="mt-8">
        <Link to={"/Test"}>Test画面へ戻る</Link>
      </p>
    </div>
  );
};
