import React from "react";
import { Button, Card, EditableText, Elevation } from "@blueprintjs/core";
import styles from "./HuEditor.module.scss";
import {useHistory} from "react-router";

const HuEditor: React.FC = (props) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/huSelector");
  }

  return (
    <div>
      <h1>Please select target HU to edit</h1>
      <div className={styles.main}>
        <div
          style={{
            padding: "2px",
            width: "30%",
          }}
        >
          <Card
            interactive={true}
            elevation={Elevation.ONE}
            className={styles.formMargin}
          >
            <div className={styles.colum}>
              <label>HU Description</label>
            </div>
          </Card>
        </div>
        <div
          style={{
            padding: "2px",
            width: "30%",
          }}
        >
          <Card
            interactive={true}
            elevation={Elevation.ONE}
            className={styles.formMargin}
          >
            <div className={styles.colum}>
              <label>Tile dependency Tree</label>
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
                <label>Hu Metadata</label>
              </div>
              <div>
                <EditableText multiline={true}></EditableText>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Card>
        <Button rightIcon="arrow-right" intent="success" text="Next step" onClick={handleClick}/>
      </Card>
    </div>
  );
};
export default HuEditor;
