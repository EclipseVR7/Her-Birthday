import React from "react";
import { Link } from "react-router-dom"; // React Router link

const Poems = () => {
  return (
    <div style={styles.container}>
      <h1>OUR POEMS</h1>
      <div style={styles.poemContainer}>
        <div style={styles.poemBox}>
          <div style={styles.name}>YOUR POEM</div>
          <p>
            {/* Paste your poem here */}
            Roses are red,<br />
            Violets are blue,<br />
            Birthday wishes,<br />
            From me to you.
          </p>
        </div>
        <div style={styles.poemBox}>
          <div style={styles.name}>HER POEM</div>
          <p>
            {/* Paste her poem here */}
            Sunsets glow,<br />
            Stars shine bright,<br />
            Your birthday's here,<br />
            Full of delight.
          </p>
        </div>
      </div>
      <Link to="/final" style={styles.btn}>Next →</Link>
    </div>
  );
};

const styles = {
  container: {
    background: "#000",
    color: "white",
    minHeight: "100vh",
    textAlign: "center",
    padding: "40px 20px",
  },
  poemContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "40px",
    flexWrap: "wrap",
  },
  poemBox: {
    width: "40%",
    minWidth: "300px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "20px",
    borderRadius: "12px",
    backdropFilter: "blur(5px)",
  },
  name: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#ff8af2",
    textTransform: "uppercase",
  },
  btn: {
    display: "inline-block",
    marginTop: "40px",
    padding: "10px 20px",
    background: "#ff8af2",
    color: "black",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Poems;
