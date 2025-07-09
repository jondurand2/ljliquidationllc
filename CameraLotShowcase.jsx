
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const cameraLots = [
  {
    id: 1,
    title: "Lot 7 - Canon & Nikon Mix (350 Cameras)",
    description: "Tested working mix of Canon Powershot and Nikon Coolpix cameras. Excellent for resale.",
    image: "https://via.placeholder.com/400x250?text=Lot+7",
    condition: "Tested - Working",
    totalCameras: 350,
    estimatedValue: "$4200"
  },
  {
    id: 2,
    title: "Lot 8 - Sony As-Is Lot (500 Cameras)",
    description: "Sold as-is. Untested Sony Cybershot models, ideal for parts or repair.",
    image: "https://via.placeholder.com/400x250?text=Lot+8",
    condition: "Untested",
    totalCameras: 500,
    estimatedValue: "$3000"
  }
];

export default function CameraLotShowcase() {
  const [search, setSearch] = useState("");

  const filteredLots = cameraLots.filter(lot =>
    lot.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Digital Camera Lots for Sale</h1>
      <Input
        placeholder="Search lots by brand or condition..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="max-w-md"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLots.map(lot => (
          <Card key={lot.id} className="rounded-2xl shadow-md">
            <img src={lot.image} alt={lot.title} className="rounded-t-2xl w-full h-52 object-cover" />
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">{lot.title}</h2>
              <p className="text-sm text-gray-600">{lot.description}</p>
              <p className="text-sm">Condition: <strong>{lot.condition}</strong></p>
              <p className="text-sm">Cameras: <strong>{lot.totalCameras}</strong></p>
              <p className="text-sm">Est. Value: <strong>{lot.estimatedValue}</strong></p>
              <Button className="mt-2 w-full">Request Info</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
