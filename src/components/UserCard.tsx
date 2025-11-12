import { CircleUserRound } from "lucide-react"
import CardWrapper from "./CardWrapper"

interface UserCardProps {
    name: string;
    score: number;
}

const UserCard = ({ name, score }: UserCardProps) => {
  return (
    <CardWrapper className="flex-col gap-4 w-full hover:scale-102 cursor-pointer transition-transform">
        <div className="bg-linear-to-r from-primary to-secondary rounded-full p-3">
        <CircleUserRound size={48} className="text-white" />
        </div>
        <div className="text-center items-center">
            <p className="text-texto-primary dark:text-texto-secondary">{name}</p>
            <p className="text-gray-500 dark:text-gray-400">Score: {score}</p>
        </div>
    </CardWrapper>
  )
}

export default UserCard