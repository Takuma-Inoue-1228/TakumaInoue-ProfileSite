import { Route, Link } from "react-router-dom";

const USER_DATE = [
  { id: 1, name: "takuma", age: 30, gender: "男" },
  { id: 2, name: "saki", age: 31, gender: "女" },
  { id: 3, name: "kouta", age: 34, gender: "男" },
  { id: 4, name: "kumiko", age: 60, gender: "女" },
  { id: 5, name: "takayuki", age: 60, gender: "男" },
];

export const Test = () => {
  const updateUserDate = USER_DATE.map((user, index) => {
    //   console.log("index:", index);
    if (user.name === "takuma") {
      return { ...user, workspace: "Tokyo" };
    }
    return { ...user, workspace: "Saitama" };
  });
  // console.log(updateUserDate);
  // console.log(...updateUserDate);

  const filterUserDate = USER_DATE.map((user) => {
    if (user.gender === "女") {
      return user;
    }
  });
  // console.log(filterUserDate);
  // console.log(...filterUserDate);

  const findMyUserDate = USER_DATE.find((user) => {
    if (user.name === "saki") {
      return user;
    }
  });
    // console.log("find関数", findMyUserDate);

  const isOldAge = USER_DATE.some((user) => {
    return user.age > 100;
  });
    // console.log("some関数", isOldAge);
    
  const isAdult = USER_DATE.every((user) => {
    return user.age > 20;
  });
  console.log("every関数", isAdult);

  return (
    <>
      <div className="mx-8 w-4/5">
        <h2 className="text-center">Test</h2>
      </div>
      <ul>
        {[...Array(5)].map((d, i) => {
          return (
            <li key={i}>
              <Link to={`/about/${i + 1}`}>{`about${i + 1}`}</Link>
            </li>
          );
        })}
      </ul>
      <br />
      <ul>
        {USER_DATE.map((user, i) => {
          return <li key={i}>{user.name}</li>;
        })}
      </ul>
    </>
  );
};
