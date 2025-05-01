// src/components/HomeContent.tsx
import FlipCard from "./FlipCard";

const HomeContent = () => {
  const cardStyles = [
    { width: "30vw", height: "40vh" },
    { width: "30vw", height: "40vh" },
    { width: "30vw", height: "40vh" },
    { width: "30vw", height: "40vh" },
    { width: "30vw", height: "40vh" },
    { width: "30vw", height: "40vh" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "1vw",
        width: "100vw",
        height: "100vh",
        padding: "1vw",
        boxSizing: "border-box",
        overflow: "auto", // in case it overflows slightly
      }}
    >
      {cardStyles.map((style, idx) => (
        <FlipCard
          key={idx}
          front={<div style={{ fontSize: "1.8vw" }}>Card {idx + 1} Front</div>}
          back={<div style={{ fontSize: "1.8vw" }}>Card {idx + 1} Back</div>}
          style={style}
        />
      ))}
    </div>
  );
};

export default HomeContent;
