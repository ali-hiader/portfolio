import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarInput } from "@/components/ui/sidebar";
import Link from "next/link";

export function SidebarOptInForm() {
  return (
    <Card className="shadow-none">
      <form>
        <CardContent className="grid gap-2.5 p-4">
          <Link
            href="mailto:foronlineworking05@gmail.com"
            className="w-full border border-gray-500 py-2 rounded-lg text-center px-4 shadow-none"
          >
            Connect
          </Link>
        </CardContent>
      </form>
    </Card>
  );
}
