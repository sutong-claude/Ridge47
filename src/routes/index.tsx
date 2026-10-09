import { createFileRoute } from "@tanstack/react-router";
import { RidgeApp } from "@/components/ridge/RidgeApp";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <RidgeApp />;
}
