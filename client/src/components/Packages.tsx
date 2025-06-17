import { Card, CardContent } from "../components/ui/card";

type PackagesProps = {
  title: string;
  description: string;
  price: string;
};

export const Packages = ({ title, description, price }: PackagesProps) => {
  return (
    <Card className="border-primary border-3 drop-shadow-md drop-shadow-primary/50">
      <CardContent className="flex text-quinary flex-col items-center justify-center p-6 space-y-2 text-center">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="whitespace-pre-line">{description}</span>
        <span className="text-lg font-semibold">{price}</span>
      </CardContent>
    </Card>
  );
};