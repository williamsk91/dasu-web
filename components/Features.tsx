import {
  BeakerIcon,
  CashIcon,
  ChatIcon,
  DeviceMobileIcon,
  DocumentSearchIcon,
  MoonIcon,
} from "@heroicons/react/outline";

import { Feature } from "../components/Feature";

export const Features = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
      <Feature Icon={DeviceMobileIcon} title="Access Anywhere" />
      <Feature Icon={MoonIcon} title="Dark Mode" />
      <Feature Icon={DocumentSearchIcon} title="Search" />
      <Feature Icon={ChatIcon} title="Chat" future={true} />
      <Feature Icon={BeakerIcon} title="Analytics" future={true} />
      <Feature Icon={CashIcon} title="Marketplace" future={true} />
    </div>
  );
};
