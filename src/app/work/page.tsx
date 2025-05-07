import WorkMindMap from '@/components/WorkMindMap';

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-8">🧠 Current Missions</h1>
      <WorkMindMap />
    </div>
  );
}
