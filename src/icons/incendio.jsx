import { FaFire, FaFireExtinguisher } from 'react-icons/fa';
export default function IconIncendio() {
  return (
    <div className="flex flex-row w-20 items-end p-2">
      <FaFireExtinguisher className="w-10 h-10" />
      <FaFire className="w-5 h-5" />
    </div>
  );
}
