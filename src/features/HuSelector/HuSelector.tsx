import React, { ChangeEvent, useState } from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import styles from "./HuSelector.module.scss";

const HuSelector: React.FC = () => {
  interface HuList {
    myString: string;
    myNumber: number;
  }

  const obj: HuList = JSON.parse('{ "myString": "string", "myNumber": 4 }');
  console.log(obj.myString);
  console.log(obj.myNumber);

  function warnUser(): void {
    alert("This is my warning message");
  }


  // internal state info
  const [name, setName] = useState<string>("");

  const [huDescription, setHuDescription] = useState<string>("Descripe the content of HU selected");

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  function updateDescription(): void {
    setHuDescription("asdfasdf")
  }

  const numbers = ["1", "2", "3", "4", "5"];
  const listItems = numbers.map((number) =>
    <ul><Button onClick={updateDescription}>Hu {number}</Button></ul>
  );

  return (
    <div>
      <h1>Please select target HU</h1>
      {/*<div style={{ display: "flex" }}>*/}
      <div className={styles.main}>
        <div
          style={{
            padding: "2px",
            width: "40%",
            height: "800px"
          }}
        >
          <Card
            interactive={true}
            elevation={Elevation.ONE}
            className={styles.formMargin}
          >
            <div className={styles.colum}>
              <label>HU List</label>
              <label>{name}</label>
              <input
                type="text"
                placeholder="name"
                value={name}
                onChange={onNameChange}
              />
              <ul>{listItems}</ul>
            </div>
          </Card>
        </div>
        <div
          style={{
            padding: "2px",
            width: "40%",
            flex: 1
          }}
        >
          <Card
            interactive={true}
            elevation={Elevation.ONE}
            className={styles.formMargin}
          >
            <div className={styles.colum}>
              <div>
                <label>Hu description</label>
              </div>
              <p>
                Description of {huDescription}
              </p>
            </div>
          </Card>
        </div>
      </div>
      <Card>
        <Button
          rightIcon="arrow-right"
          intent="success"
          text="Next step"
          onClick={warnUser}
        />
      </Card>
    </div>
  );
};
export default HuSelector;
