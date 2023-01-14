import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex p-4">
      <Link to={"/"}>Top</Link>

      <div className="ml-auto">
        <ul className="flex gap-4">
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <a href={"/gallery"}>Gallery</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
