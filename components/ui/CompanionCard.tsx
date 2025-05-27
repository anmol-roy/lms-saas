import { Clock, Bookmark } from "lucide-react";
import Link from "next/link";


interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color?: string;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color = "#e0f2fe",
}: CompanionCardProps) => {
  return (
    <article
      className="p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 bg-white relative overflow-hidden min-h-[200px] w-[400px] flex flex-col justify-between"
      style={{
        background: `linear-gradient(135deg, ${color}33 0%, ${color}10 100%)`,
      }}
    >
      {/* Accent top border */}
      <div
        className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
        style={{ backgroundColor: color }}
      />

      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <span className="bg-gray-900 text-white rounded-full text-xs px-3 py-1 capitalize">
          {subject}
        </span>
        <button
          className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
          aria-label="Bookmark"
        >
          <Bookmark size={16} className="text-gray-600" />
        </button>
      </div>

      {/* Title & Topic */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 leading-snug mb-1">
          {name}
        </h2>
        <p className="text-gray-600 text-sm">{topic}</p>
      </div>

      {/* Footer: Time + Button */}
      <div className="flex items-center justify-between">
        <div className="flex flex-row items-center gap-3 text-gray-500 text-sm">
          <Clock size={16} />
          <span className="capitalize w-[60px]" >{duration} mins</span>
        </div>
        <Link href={`/companions/${id}`} className="w-full">
          <button className="btn-primary ml-5  w-full justify-center">
            Launch Lesson
          </button>
        </Link>
      </div>
    </article>
  );
};

export default CompanionCard;
