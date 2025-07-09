

interface CardProps {
    url: string;
    alt?: string; 
  }
  
  export default function Card({ url, alt }: CardProps) {
    return (
      <div>
        <img src={url} alt={alt || "Card image"}  style={{width: "200px"}}/>
      </div>
    );
  }