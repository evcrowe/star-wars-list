import "./styles.scss";
import Publication from "./Publication";
import coverImage from "../public/HeirToTheEmpire.jpg";
import styled from "styled-components";

const TableHeader = styled.tr`
  display: none;
`;

export default function App() {
  const data = [
    {
      title: "Heir to the Empire",
      author: "Timothy Zahn",
      type: "Novel",
      legendsOrCanon: "Legends",
      series: "Star Wars: The Thrawn Trilogy",
      aby: 9,
      cover: coverImage,
      issueOrBookNumber: 1,
      read: true
    },
    {
      title: "Dark Force Rising",
      author: "Timothy Zahn",
      type: "Novel",
      legendsOrCanon: "Legends",
      aby: 9,
      issueOrBookNumber: 2,
      read: true,
      owned: true
    },
    {
      title: "Whatever the Title is it is rather long",
      author: "This is an author, whwhwhw, My mother is a bob",
      type: "Graphic Novel",
      legendsOrCanon: "Canon",
      issueOrBookNumber: 15,
      series: "The Epic Collection",
      aby: -10,
      collects: [
        "Dark Empire I",
        "Dark Empire II",
        "Dark Empire III",
        "Star Wars #56-1238"
      ]
    }
  ];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <table>
        <tbody>
          <TableHeader key={0}>
            <th>Title</th>
            <th>Author</th>
            <th>Type</th>
            <th>?</th>
          </TableHeader>
          {data.map((props, index) => (
            <Publication {...props} key={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
