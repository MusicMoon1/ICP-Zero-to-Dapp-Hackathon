import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function SwitchButton({ enabled, setEnabled }) {
  // const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-primary" : "bg-secondary"}
          relative inline-flex h-[34px] w-[70px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${
            enabled ? "translate-x-9 bg-black" : "translate-x-0 bg-primary"
          }
            pointer-events-none inline-block h-[30px] w-[30px] transform rounded-full  shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
