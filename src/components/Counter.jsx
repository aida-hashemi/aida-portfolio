import { useState, useEffect } from "react";
import "./Counter.css";
function Counter() {
  const stats = [
    {
      number: "3+",
      title: "Projects",
    },
    {
      number: "4",
      title: "Papers",
    },
    {
      number: "7+",
      title: "Years Research",
    },
    {
      number: "10+",
      title: "Technologies",
    },
  ];
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < 3) {
          return prev + 1;
        }

        clearInterval(timer);
        return prev;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);
  return (
    <section className="counter">
      <div className="counter-container">
        {stats.map((item, index) => (
          <div className="counter-card" key={index}>
            <h2>{item.title === "Projects" ? `${count}+` : item.number}</h2>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Counter;
