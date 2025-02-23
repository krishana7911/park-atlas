export default function ParkCard({ name, description }: { name: string, description: string }) {
    return (
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <a href="#">Learn more</a>
      </div>
    );
  }
