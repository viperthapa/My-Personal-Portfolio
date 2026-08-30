import { HomePage } from "@/components/home/home-page";
import { RasuwaFloodAlert } from "@/components/shortUpdates/RasuwaFlood/home";

export default function Page() {
  return (
    <>
      <RasuwaFloodAlert />
      <HomePage />
    </>
  );
}
