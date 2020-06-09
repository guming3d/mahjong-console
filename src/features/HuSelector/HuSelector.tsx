import React, {ChangeEvent, useEffect, useState} from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import styles from "./HuSelector.module.scss";
import {useHistory} from "react-router";

const HuSelector: React.FC = () => {

  interface HU {
    name: string,
    description: string
  }
  interface HuMetadata {
    version: string,
    owner: string,
    hulist: HU[]
  }

  const huMetadata: HuMetadata = JSON.parse('{\n' +
    '  "version": "2020.06.08",\n' +
    '  "owner": "George",\n' +
    '  "hulist": [\n' +
    '      {"name": "HU 1", "description": "HU 1 is to demo the docker usage for Mahjong project"},\n' +
    '      {"name": "HU 2", "description": "HU 2 is to demo the kubernate usage for Mahjong project"},\n' +
    '      {"name": "HU 3", "description": "HU 3 is to demo the Spark usage for Mahjong project"},\n' +
    '      {"name": "HU 4", "description": "HU 4 is to demo the Map Reduce usage for Mahjong project"}\n' +
    '    ]\n' +
    '}');


  function warnUser(): void {
    alert("This is my warning message");
  }


  // internal state info
  const [name, setName] = useState<string>("");

  const [huDescription, setHuDescription] = useState<string>("Descripe the content of HU selected");

  const [huMetadataState, setHuMetadata] = useState<HuMetadata>();


  useEffect(() =>{
    setHuMetadata(huMetadata);
    console.log(huMetadata.hulist);
  },[])



  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  function updateDescription(input: string): void {
    setHuDescription(input)
  }

  const numbers = ["1", "2", "3", "4", "5"];
  const listItems = numbers.map((number) =>
     <Card
    interactive={true}
    elevation={Elevation.THREE}
    className={styles.formMargin}
    onClick={() => updateDescription(number)}
    >
    <label>Hu {number}</label>
  </Card>
  );

  let huList = [];
  for(const i of huMetadata.hulist){
    huList.push(
      <Card
        interactive={true}
        elevation={Elevation.THREE}
        className={styles.formMargin}
        onClick={() => updateDescription(i.description)}
      >
        <label>{i.name}</label>
      </Card>
    );
  }

  const history = useHistory();

  const handleClick = () => {
    history.push("/huEditor");
  }


  return (
    <div>
      <h1>Please select target HU</h1>
      {/*<div style={{ display: "flex" }}>*/}
      <div className={styles.main}>
        <div
          style={{
            padding: "1px",
            width: "30%"
          }}
        >
          <ul className={styles.left}>{huList}</ul>

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
          text="Edit selected HU"
          onClick={handleClick}
        />
      </Card>
    </div>
  );
};
export default HuSelector;
