import React from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import styles from "./BasicForm.module.scss";

const BasicForm: React.FC = () => {
  // @ts-ignore
  return (
    <div>
      <h1>Please select target HU</h1>
      {/*<div style={{ display: "flex" }}>*/}
      <div className={styles.main}>
        <div
          style={{
            padding: "5px",
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
              <h5>
                <a href="#">Dataset Dashboards</a>
              </h5>
              <p>
                Stats of dataset completeness and reference data join
                percentages.
              </p>
            </div>
          </Card>
        </div>
      </div>
      <Card>
        <Button rightIcon="arrow-right" intent="success" text="Next step" />
      </Card>
    </div>
  );
};
export default BasicForm;
