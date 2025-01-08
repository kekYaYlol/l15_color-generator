import React, {useState} from "react";

function App() {

  const [color, setColor] = useState('#fff');

  const generateColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16999999).toString(16)}`;
    setColor(randomColor);
  }



  return (
    <div style={styles.container}>
      <div style={{ ...styles.box, backgroundColor: color }}></div>

      <h1 style={styles.title}>Color Generator</h1>
      <p style={styles.text}>Your color now is: {color}</p>
      <button  style={styles.button} onClick={generateColor}>Generate color</button>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 0.5s ease'
  },
  box: {
    width: "300px",
    height: "150px",
    marginBottom: "20px",
    border: "2px solid #000",
    borderRadius: "10px",
    transition: "background-color 0.5s ease"
  },
  title: {
    fontSize: '2rem',
    color: '#333',
  },
  text: {
    fontSize: '1.2rem',
    color: '#555',
    margin: '10px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default App;
