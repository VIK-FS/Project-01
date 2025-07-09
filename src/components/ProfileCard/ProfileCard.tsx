import type { FC } from "react";
import styles from './ProfileCard.module.css';

interface Props {
    avatar: string;
    name: string;
    description: string;
    className?: string;
  }
  
  const ProfileCard: FC<Props> = ({ avatar, name, description, className }: Props) => {

    return (
      <div className={`${styles['user-card']} ${className}`} >
      <h2>{name}</h2>
        <img src={avatar} alt="User avatar" />
        <p>{description}</p>
      </div>
    );
  }

  export default ProfileCard