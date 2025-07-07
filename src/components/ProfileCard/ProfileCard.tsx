interface Props {
    avatar: string;
    name: string;
    description: string;
    width?: string;
  }
  
  export default function ProfileCard({ avatar, name, description, width }: Props) {
    return (
      <div style={{ width }}>
        <img src={avatar} alt="User avatar" style={{ width: '100%' }} />
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    );
  }